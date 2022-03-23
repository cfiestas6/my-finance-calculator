import * as Utils from "./utils";
const data = [{
    key: 1,
    id: 1,
    title: "72 Rule",
    description: "Calculate how long would it take you to double your initial investment.",
    calculationFunction: Utils.rule72,
    inputs: [{
        key: 1,
        name: "i1",
        title: "Interest / Profit (%) :"
    }]
}, {
    key: 2,
    id: 2,
    title: "Compound Interest",
    description: "Compound Interest calculator.",
    calculationFunction: Utils.compoundInterest,
    inputs: [{
        key: 1,
        name: "i1",
        title: "Interest (%) :"
        }, {
        key: 2,
        name:"i2",
        title: "Years :"
        }, {
        key: 3,
        name: "i3",
        title: "Initial investment (€) :"
        }],
}, {
    key: 3,
    id: 3,
    title: "Break Even",
    description: "The break-even point is the point at which total cost and total revenue are equal.",
    calculationFunction: Utils.breakEven,
    inputs: [{
        key: 1,
        name: "i1",
        title: "Fixed cost :"
        }, {
        key: 2,
        name: "i2",
        title: "Variable cost :"
        }, {
        key: 3,
        name: "i3",
        title: "Price per unit :"
        }],
}, {
    key: 4,
    id: 4,
    title: "Loan",
    description: "Calculate simple loans.",
    calculationFunction: Utils.loan,
    inputs: [{
            key: 1,
            name: "i1",
            title: "Interest rate (%) :"
            }, {
            key: 2,
            name: "i2",
            title: "Years :"
            }, {
            key: 3,
            name: "i3",
            title: "Amount (€) :"
            }]
},
{
    key: 5,
    id: 5,
    title: "Price per unit",
    description: "Calculate the selling price per unit you should sell a product.",
    calculationFunction: Utils.pricePerUnit,
    inputs: [{
            key: 1,
            name: "i1",
            title: "Fixed cost (€) :"
            }, {
            key: 2,
            name: "i2",
            title: "Variable cost per unit(€) :"
            }, {
            key: 3,
            name: "i3",
            title: "Units sold (€) :"
            }, {
            key: 4,
            name: "i4",
            title: "Total profit (€) :"
            }]
}, 
{
    key: 6,
    id: 6,
    title: "Profit",
    description: "Calculate the profit from the costs and units sold.",
    calculationFunction: Utils.pricePerUnit,
    inputs: [{
            key: 1,
            name: "i1",
            title: "Fixed cost (€) :"
            }, {
            key: 2,
            name: "i2",
            title: "Variable cost (€) :"
            }, {
            key: 3,
            name: "i3",
            title: "Units sold (€) :"
            },{
            key: 4,
            name: "i4",
            title: "Price per unit (€) :"
            }]
} ];
export default data;
