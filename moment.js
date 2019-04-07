let today = moment ()
console.log('today is ', today.format('dddd, MMMM Do YYYY'));
console.log('next week is ', moment().add(3,'weeks').format('DD MMMM YYYY'))
