// You have a list/array of strings that represent dates and looks like this: ['Oct 7, 2009’, 'Nov 10, 2009’, 'Jan 10, 2009’, 'Oct 22, 2009’, …]

// The month is always the first three characters of full month name ('January’ => 'Jan’, 'February’ => 'Feb’, …).

// The day is one or two digits (1, 2, … 31), with no preceding zero. There is always a comma after the day. The year is always four digits. Write a routine (in any language) that will order this list of strings in date descending order. Do not use any built in date-­‐parsing library… write your own specific to this date format. Feel free to use, or not use, regex.

function orderDatesDesc(datesArr) {
	function dateToVal(dateStr) {
		const months = {
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
	
		let dateArr = dateStr.split('')
	
		const month = months[dateArr.splice(0,3).join('').toLowerCase()]
	
		let day = dateArr.splice(0,dateArr.indexOf(',')).join('').trim()
		day = day.length === 1 ? '0' + day : day
	
		const year = dateArr.splice(dateArr.indexOf(',') + 1).join('').trim()
	
		const total = '' + year + month + day
		return total 
	}
	// convert months to numeric string (yyyymmdd) and then sort on that date value
	datesArr.sort((a,b) => {
		return dateToVal(b) - dateToVal(a)
	})
	return datesArr
}


// const testData = ['Dec 31, 1999', 'Jan 1, 2011','Oct 7, 2009','Oct 11, 3333', 'Nov 10, 2009', 'Jan 10, 2009', 'Oct 22, 2009', 'Jan 1, 2012', 'Jan 1, 1', 'Jul 1, 9999']
// console.log('data: ', testData)
// console.log('sorted: ', orderDatesDesc(testData))

export default orderDatesDesc