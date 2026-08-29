// Kalkylstöd för bostadsrätt.
// Avsett att kopplas till räknesnurrans befintliga bostadsväljare.
export function calculateBostadsratt({ price=0, down=0, rate=0, monthlyFee=0, otherCosts=0 }) {
  const minDown = price * 0.10;
  const loan = Math.max(0, price - down);
  const ltv = price > 0 ? loan / price : 0;
  const interest = loan * rate / 100 / 12;
  const amortRate = ltv > 0.70 ? 0.02 : ltv > 0.50 ? 0.01 : 0;
  const amort = loan * amortRate / 12;
  return { minDown, loan, ltv, interest, amort, monthlyFee, otherCosts, totalMonthly: interest + amort + monthlyFee + otherCosts };
}
