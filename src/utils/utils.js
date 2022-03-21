function rule72(n1) {
    parseFloat(n1);
    const result = 72/n1;
    return (result.toFixed(2) + " Years.");
};
function compoundInterest(interest, years, initialInvestment){
    parseFloat(interest);
    parseFloat(years);
    parseFloat(initialInvestment);
    const r = initialInvestment * Math.pow( 1+interest / 100, years);
    return (r.toFixed(2) + " €");
};
function breakEven(fc, vc, p){
    parseFloat(fc);
    parseFloat(vc);
    parseFloat(p);
    const r = fc/(p-vc);
    return (r.toFixed(2) + " Units.");
};
function loan(i, y, a){
    parseFloat(i);
    parseFloat(y);
    parseFloat(a);
    const r = a * Math.pow( 1+i / 100, y);
    return (r.toFixed(2) + " €");
};
function pricePerUnit(fc, vc, u, tp){
    parseFloat(fc);
    parseFloat(vc);
    parseFloat(u);
    parseFloat(tp);
    const r = (fc + tp) / u - vc;
    return (r.toFixed(2) + "€ per unit.");
};
function profit(fc, vc, u, p){
    parseFloat(fc);
    parseFloat(vc);
    parseFloat(u);
    parseFloat(p);
    const r = (u * (p - vc)) - fc;
    return (r.toFixed(2) + "€");
};

export {rule72, compoundInterest, breakEven, loan, pricePerUnit, profit};
