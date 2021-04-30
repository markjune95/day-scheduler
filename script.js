//current day
var currentDayEl = $('#currentDay')
var currentDay = moment().format('dddd, MMMM Do');
currentDayEl.text(currentDay);
// console.log(currentDay)

//create time block 9am to 5pm 
var timeBlockEl = $('.container')
//create row-div class="row"
var row = $('<div>')
row.attr('class', 'row')

//create time-div class="col-1 hour p-0"
var time = $('<div>')
time.attr('class', 'col-1 hour p-0')

//create textArea-div class="col-10"
var textAreaDiv = $('<div>')
textAreaDiv.attr('class', 'col-10')
var textArea = $('<textarea>')
textArea.attr('class', 'col-11 description')

//create saveBtn-div
var submitDiv = $('<div>')
submitDiv.attr('class', 'col-1 saveBtn')
var submitBtn = $('<button>')
submitBtn.attr('class', 'btn')

var currentTime = moment().format('h A')
console.log(currentTime)



