//current day
function setCurrenttDay(){
    var currentDayEl = $('#currentDay')
    var currentDay = moment().format('dddd, MMMM Do');
    currentDayEl.text(currentDay);

}

//html container to append time blocks
var timeBlockEl = $('.container')

//varialbes to create html element
var row;
var time;
var textAreaDiv;
var submitDiv;
var saveSymbol;
var textArea

//function that creates html element
function createTimeBlock(){
    //create row
    row = $('<div>')
    row.attr('class', 'row')

    //create time-div class="col-1 hour p-0"
    time = $('<div>')
    time.attr('class', 'col-1 hour p-0')
    
    //create textArea-div class="col-10"
    textAreaDiv = $('<div>')
    textAreaDiv.attr('class', 'col-10')
    textArea = $('<textarea>')
    textArea.addClass('col-12 description')
    textAreaDiv.append(textArea)

    //create saveBtn-div
    submitDiv = $('<div>')
    submitDiv.attr('class', 'col-1 saveBtn')
    var submitBtn = $('<button>')
    submitBtn.attr('class', 'btn')
    saveSymbol = $('<i>')
    saveSymbol.attr('class', 'fas fa-save')
    
    // saveSymbol.html('&#xf0c7;')

    submitBtn.append(saveSymbol)
    submitDiv.append(submitBtn)
    

}

//set start/current/end time-block
var timeSlot = []
var timeBlock;
var startTimeBlock = parseInt(moment('0', 'h').format('H'))
var endTimeBlock = parseInt(moment('23', 'h').format('H'))
var currentTime = parseInt(moment().format('H'))

//function that appends time-blocks to html
function appendTimeBlock(){
    
    for(var i = startTimeBlock; i < endTimeBlock + 1; i++){
        createTimeBlock()
        saveSymbol.attr('save',i)
        textArea.addClass(`block-${i}`)
        
        time.text(`${timeBlock = moment(i, 'h').format('h A')}`)

        if(currentTime > i){
            textAreaDiv.addClass('past')
        }
        else if(currentTime < i){
            textAreaDiv.addClass('future')
        }
        else{
            textAreaDiv.addClass('present')
        }
        row.append(time, textAreaDiv, submitDiv)
        timeBlockEl.append(row)
    }
  
}

function setItem(){
    localStorage.setItem('timeblock', JSON.stringify(timeSlot))
    
}

function getItem(){
    var stored = JSON.parse(localStorage.getItem('timeblock'))
    timeSlot = stored
    console.log(stored)
    if(stored !== null){
        for(var i = 0; i < timeSlot.length; i++){
            $(`.block-${i}`).val(timeSlot[i])
        }
    }
    else{
        return;
    }
    
}


//revoke functions
setCurrenttDay()
appendTimeBlock()


var saveSlot;
var textAreaEl;//html element generated in javascript

timeBlockEl.on('click','.btn',function(event){
    event.preventDefault()
    saveSlot = $(event.target).attr('save')
    textAreaEl =  $(`.block-${saveSlot}`).val()
    if(timeSlot == null){
        timeSlot = ['','','','','','','','','','','','','','','','','','','','','','','','']
        console.log(timeSlot.length)
    }
    timeSlot.splice(saveSlot, 1, textAreaEl)//save the value in exact index you want  
    setItem()
   
    
})
getItem()



    











