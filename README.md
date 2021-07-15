# MVM Smarty Pants Questions
[https://mwm.partners/smarty-pants-tester/](https://mwm.partners/smarty-pants-tester/)

## Question 1 

> You have a list/array of strings that represent dates and looks like this: [‘Oct 7, 2009’, ‘Nov 10, 2009’, ‘Jan 10, 2009’, ‘Oct 22, 2009’, …]

> The month is always the first three characters of full month name (‘January’ => ‘Jan’, ‘February’ => ‘Feb’, …).

> The day is one or two digits (1, 2, … 31), with no preceding zero. There is always a comma after the day. The year is always four digits. Write a routine (in any language) that will order this list of strings in date descending order. Do not use any built in date-­‐parsing library… write your own specific to this date format. Feel free to use, or not use, regex.

	const months = {
		Jan: '01',
		Feb: '02',
		Mar: '03',
		Apr: '04',
		May: '05',
		Jun: '06',
		Jul: '07',
		Aug: '08',
		Sep: '09',
		Oct: '10',
		Nov: '11',
		Dec: '12',
		jan: '01',
		feb: '02',
		mar: '03',
		apr: '04',
		may: '05',
		jun: '06',
		jul: '07',
		aug: '08',
		sep: '09',
		oct: '10',
		nov: '11',
		dec: '12',
	}
	function orderDatesDesc(datesArr) {
		// convert months to numeric string (yyyymmdd) and then sort on that date value
		datesArr.sort((a,b) => {
			return dateToVal(b) - dateToVal(a)
		})
		return datesArr
	}

	function dateToVal(dateStr) {
		let dateArr = dateStr.split('')

		const monthVal = months[dateArr.splice(0,3).join('')]

		let dayVal = dateArr.splice(0,dateArr.indexOf(',')).join('').trim()
		dayVal = dayVal.length === 1 ? '0' + dayVal : dayVal

		const yearVal = dateArr.splice(dateArr.indexOf(',') + 1).join('').trim()

		let total = '' + yearVal + monthVal + dayVal
		return total 
	} 

## Question 2

What are some ways to improve the security of a Unix/Linux system? Include general security guidelines and any specifics related to web servers and db servers