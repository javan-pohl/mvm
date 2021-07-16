# MVM Smarty Pants Questions
[https://mwm.partners/smarty-pants-tester/](https://mwm.partners/smarty-pants-tester/)

## Question 1 

> You have a list/array of strings that represent dates and looks like this: [‘Oct 7, 2009’, ‘Nov 10, 2009’, ‘Jan 10, 2009’, ‘Oct 22, 2009’, …]

> The month is always the first three characters of full month name (‘January’ => ‘Jan’, ‘February’ => ‘Feb’, …).

> The day is one or two digits (1, 2, … 31), with no preceding zero. There is always a comma after the day. The year is always four digits. Write a routine (in any language) that will order this list of strings in date descending order. Do not use any built in date-­‐parsing library… write your own specific to this date format. Feel free to use, or not use, regex.

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

## Question 2

> What are some ways to improve the security of a Unix/Linux system? Include general security guidelines and any specifics related to web servers and db servers

To try to avoid being disingenuous, I will admit that computer / network security is not a strength of mine. (I.e. I could have done a great deal of research on this topic but, instead, I'm just going off of what I already know.)

Things I know:
- Password protect and / or encrypt everything.
- Long passwords are best. The longer a password string, the harder it is for password cracking software to beat it.
- Keep your system up to date. Security patches are there for a reason.
- In terms of databases and web servers, you can want to clean any incoming data (e.g. text supplied by a user) to remove any malicious code.
- Implement network firewalls
- I haven't actually looked into the feasibility of this one, but, if you're creating the software responsible for password checking, I feel like it should be standard to start implementing time intervals between password attempts after a few incorrect guesses. 

## Question 3

> Recreate [this poster](https://www.dropbox.com/sh/kfyl4lwlc4xllsi/AAB9g14A_Pme1M3bn-L1Y1bMa?dl=0&preview=poster-test.ai) in HTML. You can add any animations that will make the poster more engaging.

HTML is available [here](https://github.com/javan-pohl/mvm/blob/main/mvmPoster.html)
Available as webpage [here](https://www.javanpohl.com/mwmPoster)

## Question 4

> In your view, what are the pros and cons of TDD (test driven development). When do you think TDD makes more/less sense?

### Pros of TDD

- In addition to testing, TDD also helps us to think about how our code is constructed, in terms of the individual modules and the program as a whole. By focusing on how testable our code is, we can inherently apply good design principles to our code (ETC, modularity, orthogonality, pure functions, DRY, etc).
- In case we are also talking about the actual testing aspect of TDD, the main idea of having an automated test suite is to ensure that new changes don't break existing features or functionality of our code.

### Cons of TDD

- Time is the obvious downside of TDD. Even if we're not actually building the tests but rather just trying to design our code in such a way to be testable, it does take extra time to do so.

### When does it make sense to apply TDD?

- Arguably, it's a good idea to apply it all the time, if for no other reason than to develop good habits in your coding. But, realistically (and more objectively), it's a good idea to apply TDD ideologies any time your code is likely to be maintained, changed, updated, etc in the future. Even for one-and-done types of coding projects, certain aspects of TDD can be a good idea to prevent yourself from duplicating code for the sake of saving yourself some time.

## Question 5

> Do you have nay favorite coding related quotes or cartoons?

[This](https://www.linkedin.com/posts/javascript-developer_activity-6820235869128007680-I8pp) cartoon is a recent favorite of mine. I have a strong love / hate relationship with CSS. 