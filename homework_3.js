//Task#1
function convertCurrency(usdSum, currencyCode) {
	const currencies = {
  	EUR: 0.92,
    UAH: 38.84,
    GBP: 0.79,
  }
  
  let result = ''
  
  if (currencyCode in currencies) {
  	 result = `${usdSum * currencies[currencyCode]} ${currencyCode}`
  } else {
		result = 'Данний код валюти не підтримується конвектором! Оберіть одну з запропонованних EUR, UAH чи GBP.'
	}
  
  console.log(result)
}
convertCurrency(100, 'EUR')


//Task#2
function getDayOfWeek(dayNum) {
	const dayOfWeek = [
  	 'Понеділок',
	 'Вівторок',
	 'Середа',
	 'Четвер',
	 'П\'ятниця',
	 'Субота',
     'Неділя'
  ]

	if (dayNum > 7 || dayNum < 1) {
		return console.log('Error')
  }

	console.log(dayOfWeek[dayNum - 1])
}
getDayOfWeek(1)

//Task#3
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(4));