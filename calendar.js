const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let dateNow     = new Date(),
    startMonth  = dateNow.getMonth(),
    clickLeft   = document.querySelector('.arrow__left'),
    clickRight  = document.querySelector('.arrow__right'),
    allRegions = document.querySelectorAll('.region__list li'),
    iconsChange = document.querySelectorAll('.change__icons');

const starter       = dateNow.getMonth();
const curentYear    = dateNow.getFullYear();

function createCalendar(elem, year, month, dd, h, m, s) {
    let mon = month;
    let d = new Date(year, mon, dd, h, m, s);
    let table = '<div class="calendar__grid">';
    let daysTitle = '<div class="weeks__day"><div>пн</div><div>вт</div><div>ср</div><div>чт</div><div>пт</div><div>сб</div><div>вс</div></div>';

    for (let i = 0; i < getDay(d); i++) {
      table += '<div class="boxes"></div>';
    }

    while (d.getMonth() == mon) {
      table += '<div class="boxes" calendardata="'+ d.getDate() +'.'+ d.toJSON().split('-')[1] +'.'+ year +'"><div class="number__day">' + d.getDate() + '</div></div>';
      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<div class="boxes"></div>';
      }
    }

    table += '</div>';
    elem.innerHTML = daysTitle + table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
}

function moveRight(e){
    if(iconsChange[0].classList.contains('actives')){
        startMonth = startMonth + 1;
        currentMounth.innerHTML = monthNames[startMonth] + ' ' + curentYear;
        createCalendar(calendar, 2020, startMonth, 1, 19, 59, 59);
        clickLeft.classList.remove('hides')
        check();
    }else{
        startMonth = startMonth + 1;
        currentMounth.innerHTML = monthNames[startMonth] + ' ' + curentYear;
        clickLeft.classList.remove('hides')
        check();
    }    
    function check(){
        if(startMonth == 11){
            e.classList.add('hides')
        }else{}
    }
};

function moveLeft(e){
    if(iconsChange[0].classList.contains('actives')){
        startMonth = startMonth - 1;
        currentMounth.innerHTML = monthNames[startMonth] + ' ' + curentYear;
        createCalendar(calendar, 2020, startMonth, 1, 19, 59, 59);
        clickRight.classList.remove('hides')
        check();
    }else{
        startMonth = startMonth - 1;
        currentMounth.innerHTML = monthNames[startMonth] + ' ' + curentYear;
        clickRight.classList.remove('hides')
        check();
    }
    function check(){
        if(startMonth == starter){
            e.classList.add('hides')
        }else{}
    }

};

function start(){
    createCalendar(calendar, curentYear, startMonth, 1, 19, 59, 59);
    currentMounth.innerHTML = monthNames[dateNow.getMonth()] + ' ' + curentYear;
}

start();

