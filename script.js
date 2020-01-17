let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
	moneyData : money,
	timeData : time,
	expenses : {},
	optionalExpenses : {},
	income : [],
	savings : false
};

let expenMandOne = prompt('Введите обязательную статью расходов в этом месяце', '');
let expenPriceOne = prompt('Во сколько обойдется?', '');

appData.expenses.expenMandOne = expenPriceOne;

let expenMandTwo = prompt('Введите обязательную статью расходов в этом месяце', '');
let expenPriceTwo = prompt('Во сколько обойдется?', '');

appData.expenses.expenMandTwo = expenPriceTwo;

let budgetForOneDay = (appData.moneyData /30);

alert(budgetForOneDay);

console.log(budgetForOneDay);
