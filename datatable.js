// Вводные и хелперы
const curentLink = 'https://docs.google.com/spreadsheets/d/1AlL5LoCio7ba7UHhFQPhz27wSzim3TsRGgp3M0OMbUQ/htmlview';
const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let dataBox = [];

let dateNow     = new Date(),
    startMonth  = dateNow.getMonth(),
    clickLeft   = document.querySelector('.arrow__left'),
    clickRight  = document.querySelector('.arrow__right'),
    allRegions  = document.querySelectorAll('.region__list li'),
    iconsChange = document.querySelectorAll('.change__icons'),
    howMuch     = 11 - dateNow.getMonth(),
    attrM       = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const starter       = dateNow.getMonth();
const curentYear    = dateNow.getFullYear();

//старт текущего месяца
currentMounth.innerHTML = monthNames[dateNow.getMonth()] + ' ' + curentYear;

// Генерация календаря
function createCalendar(elem, year, month, dd, h, m, s) {
    let mon = month;
    let d = new Date(year, mon, dd, h, m, s);
    let table = '<div class="calendar__grid">';
    let daysTitle = '<div class="weeks__day"><div>пн</div><div>вт</div><div>ср</div><div>чт</div><div>пт</div><div>сб</div><div>вс</div></div>';

    for (let i = 0; i < getDay(d); i++) {
      table += '<div class="boxes"></div>';
    }

    while (d.getMonth() == mon) {
      table += '<div class="boxes" calendardata="'+ d.getDate() +'.'+ d.toJSON().split('-')[1] +'.'+ year +'"><div class="number__day"><div class="colorred__day">' + d.getDate() + '</div></div><div class="events__box"></div></div>';
      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<div class="boxes"></div>';
      }
    }

    table += '</div>';
    elem.innerHTML = daysTitle + table;
};
//добавление пустых ячеек в календарь в начало и конец месяца
function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
};
// Листание календаря
function moveRight(e){
    function check(){
        if(startMonth == 11){
            e.classList.add('hides')
        }else{}
    };
    if(iconsChange[0].classList.contains('actives')){
        startMonth = startMonth + 1;
        howMuch = howMuch + 1;
        currentMounth.innerHTML = monthNames[startMonth] + ' ' + curentYear;
        createCalendar(calendar, 2020, startMonth, 1, 19, 59, 59);
        clickLeft.classList.remove('hides')
        addIvents();
        check();
    }else{
        startMonth = startMonth + 1;
        currentMounth.innerHTML = monthNames[startMonth] + ' ' + curentYear;
        clickLeft.classList.remove('hides')
        howMuch = howMuch + 1;
        createTavle();
        check();
    }    
};
function moveLeft(e){
    function check(){
        if(startMonth == starter){
            e.classList.add('hides')
        }else{}
    };
    if(iconsChange[0].classList.contains('actives')){
        startMonth = startMonth - 1;
        howMuch = howMuch - 1;
        currentMounth.innerHTML = monthNames[startMonth] + ' ' + curentYear;
        createCalendar(calendar, 2020, startMonth, 1, 19, 59, 59);
        clickRight.classList.remove('hides')
        addIvents();
        check();
    }else{
        startMonth = startMonth - 1;
        currentMounth.innerHTML = monthNames[startMonth] + ' ' + curentYear;
        clickRight.classList.remove('hides')
        howMuch = howMuch - 1;
        createTavle();
        check();
    }
};
// Деплой календаря
function start(){
    createCalendar(calendar, curentYear, startMonth, 1, 19, 59, 59);
    curDday();
};

start();
// выбор региона
for(let i = 0; i<allRegions.length; i++){
    allRegions[i].onclick = function(e){
        if(iconsChange[0].classList.contains('actives')){
            regions.click();
            regions.innerHTML = e.target.innerHTML;
            regions.setAttribute('region', e.target.dataset.region);
            start();
            addIvents();
        }else{
            regions.click();
            regions.innerHTML = e.target.innerHTML;
            regions.setAttribute('region', e.target.dataset.region);
            createTavle();
        }
    }
};
// Проверка и установка региона
(function () {
    if(currentRegions !== '{%GetCurrentCityCode()%}'){
        for(let i = 0; i<allRegions.length; i++){
            if(currentRegions == allRegions[i].dataset.region){
                regions.innerHTML = allRegions[i].innerHTML;
                regions.setAttribute('region', allRegions[i].dataset.region);
            }
        }
    }else{
        regions.innerHTML = 'Москва';
        regions.setAttribute('region', 'mow')
    }
 }());
 // Меню региона
function showMenu(e){
    let menu            = document.querySelector('.region__list'),
        news            = document.querySelectorAll('.blocks__news'),
        table           = document.querySelectorAll('.table__wrap'),
        calendarsDay    = document.querySelectorAll('.boxes');
    menu.classList.toggle('visible');
    e.classList.toggle('visible__rot');

    news.forEach((elemts)=>{
        elemts.classList.toggle('back__side')
    });
    calendarsDay.forEach((elemts)=>{
        elemts.classList.toggle('back__side')
    });
    table.forEach((elemts)=>{
        elemts.classList.toggle('back__side')
    });
};
// Переключалка календаря и плитки
iconsChange[0].onclick = function(){
    if(this.classList.contains('actives')){
        
    }else{
        iconsChange[1].classList.remove('actives');
        this.classList.add('actives');
        start();
        addIvents();
    }
};

iconsChange[1].onclick = function(){
    if(this.classList.contains('actives')){
        
    }else{
        iconsChange[0].classList.remove('actives');
        this.classList.add('actives');
        createTavle();
    }
};
// Получения данных с таблицы и вызов мероприятий в календарь
fetch(curentLink)
.then(res => (
    res.text()
)).then(database => {
    let elemnts = document.createElement('div');
    elemnts.innerHTML = database;

    let tables      = elemnts.querySelectorAll('tbody');
    tables.forEach( (table, index) => {
        let trArray = table.querySelectorAll('tr');

        trArray.forEach((tr, number) => {
            let td = tr.querySelectorAll('td');
            if(td.length >= 7 && number > 0) {
            let obj = {
                        city:               td[0].innerHTML,
                        type:               td[1].innerText,
                        dateIvents:         td[2].innerText,
                        timeStart:          td[3].innerText.split(',')[0],
                        timeEnd:            td[3].innerText.split(',')[1],
                        subject:            td[4].innerText,
                        speacers:           td[5].innerText,
                        position:           td[6].innerText,
                        description:        td[7].innerText,
                        address:            td[8].innerText,
                        link:               td[9].innerText,
                        tegs:               td[10].innerText,
                    }
                    dataBox.push(obj)
            }
        })
    });
    addIvents();
});
// Функцыя вызова календаря
let addIvents = () =>{
    let fatherDays      = document.querySelectorAll('.events__box'),
        calendarsDay    = document.querySelectorAll('.boxes');
        shoblon         = (d) => {
            return `<div class="event__line"><div class="hide__overflovs"><span class="event__data">${dataBox[d].timeStart}</span> <span class="event__name">${dataBox[d].subject}</span></div><div class="heart__svg" onclick="favorite(this);">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.11899 0.666779C2.31764 0.666779 1.52058 0.981668 0.913125 1.61376C-0.301811 2.87793 -0.3053 4.90692 0.90823 6.17205L5.76905 11.2406C5.88672 11.3643 6.11032 11.3643 6.22799 11.2406C7.84948 9.55337 9.46731 7.86422 11.0888 6.17694C12.3037 4.91277 12.3037 2.88286 11.0888 1.61867C9.87389 0.354488 7.88705 0.354459 6.67213 1.61867L6.00099 2.31051L5.32985 1.61376C4.67487 0.929612 3.86336 0.663466 3.11903 0.666779H3.11899Z" fill="#3C3C3C"/>
            </svg></div></div>
        `};
    for(let i = 0; i<calendarsDay.length; i++){
        for(let j = 0; j<dataBox.length; j++){
            let divBloc = document.createElement('div');
            divBloc.classList.add('event__wrap');
            if(calendarsDay[i].getAttribute('calendardata') == dataBox[j].dateIvents || calendarsDay[i].getAttribute('calendardata') ==  dataBox[j].dateIvents.split(',')[0]){
                if(checkPage == "Академия TUI"){
                    if(dataBox[j].city == "Все"){
                        divBloc.innerHTML = shoblon(j);
                        fatherDays[i].appendChild(divBloc);
                    }
                    else if(regions.innerText == dataBox[j].city){
                        divBloc.innerHTML = shoblon(j);
                        fatherDays[i].appendChild(divBloc);
                    }
                }
                else if(checkPage == dataBox[j].type){
                    if(dataBox[j].city== "Все"){
                        divBloc.innerHTML = shoblon(j);
                        fatherDays[i].appendChild(divBloc);
                    }
                    else if(regions.innerText == dataBox[j].city){
                        divBloc.innerHTML = shoblon(j);
                        fatherDays[i].appendChild(divBloc);
                    }
                }
            }
            checkRit();
        }
        curDday();
    }
};
//проверка на Рекламный тур
function checkRit() {
    let timesStart = document.querySelectorAll('.event__data');
    for(let i = 0; i<timesStart.length; i++){
        if(timesStart[i].innerText < 1){
            timesStart[i].innerText = "РИТ"
        }
    }
};
//сегодняшняя дата
function curDday() {
    let calendarsDay    = document.querySelectorAll('.boxes'),
        dayBox          = document.querySelectorAll('.colorred__day'),
        dday            = dateNow.getDate() +'.'+ dateNow.toJSON().split('-')[1] +'.'+ dateNow.getFullYear();
        for(let i = 0; i<calendarsDay.length; i++){
            if(calendarsDay[i].getAttribute('calendardata') == dday){
                dayBox[i].classList.add('current__day')
            }
        }
};
// Создание месяца для плитки
function createTavle(){
    calendar.innerHTML = '';
    let monthBox    = document.createElement('div');
        monthBox.id = 'plitkaChocolat';
        monthBox.setAttribute('month', attrM[howMuch-1]);
        calendar.appendChild(monthBox);
        chocolats();
}
// Создание плитки
let chocolats = () =>{
    let shoblon         = (d) => {
        let tegsNumber = dataBox[d].tegs.split(',');
        let tegLine = "";
        for(let i = 0; i<tegsNumber.length; i++){
            tegLine += `<div class="tegs__title">${dataBox[d].tegs.split(',')[i]}</div>`
        }
        return `
        <div class="choco__wrap">
            <div class="choco__box">
                <div class="f-1">
                    <img class="img__speaker" src="https://agent.tui.ru/getmedia/72ff05cd-4d8a-4c2b-9559-993c93dd6f0f/icon_ecpert" data-name="${dataBox[d].speacers}">
                    <div class="specers__title">${dataBox[d].speacers}</div>
                    <div class="specers__subTitle">${dataBox[d].position}</div>
                </div>
            </div>
            <div class="choco__box">
                <div class="f-2">
                    <div class="choco-wrap__line">
                        <div class="choco-wrap__title">${dataBox[d].type}</div>
                        <div class="heart__svg-choco" onclick="favorite(this);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 4.59499C10.9104 3.59309 9.48419 3.03703 8.00398 3.03699C7.22052 3.0378 6.44495 3.19355 5.72192 3.49526C4.99888 3.79696 4.34265 4.23868 3.79098 4.79499C1.43798 7.15799 1.43898 10.854 3.79298 13.207L11.125 20.539C11.5 21 12 21 12 21C12 21 12.5 21 12.792 20.622L20.207 13.207C22.561 10.853 22.561 7.15799 20.205 4.79099C19.6536 4.2357 18.9979 3.79488 18.2756 3.49387C17.5532 3.19286 16.7785 3.03759 15.996 3.03699C14.5158 3.03723 13.0897 3.59326 12 4.59499ZM18.791 6.20499C20.354 7.77599 20.355 10.23 18.793 11.793L12 18.586L5.20698 11.793C3.64498 10.23 3.64598 7.77599 5.20498 6.20899C5.96498 5.45299 6.95898 5.03699 8.00398 5.03699C9.04898 5.03699 10.039 5.45299 10.793 6.20699C11.26 6.674 12 7.99998 12 7.99998C12 7.99998 12.7401 6.67386 13.207 6.20699C14.719 4.69799 17.281 4.70199 18.791 6.20499Z" fill="#B9B9B9"/>
                            </svg>
                        </div>
                    </div>
                    <div class="choco__body">
                        <div class="body__title">${dataBox[d].subject}</div>
                        <div class="body__subtitle">${dataBox[d].description}</div>
                    </div>
                    <div class="choco__tegs">
                        <div class="tegs__wrap">${tegLine}</div>
                    </div>
                    <div class="choco__bottom-line">
                        <div class="choco__btn">
                            <a class="choco__link" href="${dataBox[d].link}" target="_blank">Регистрация </a>
                        </div>
                        <div class="choco__time">${dataBox[d].type != "Рекламный тур" ? `<span class="choco__bottom-text">Время:</span> <span class="time">${dataBox[d].timeStart}</span>` : ''}</div>
                        <div class="choco__data">${dataBox[d].type != "Рекламный тур" ? `<span class="choco__bottom-text">Дата:</span> <span class="data__start">${dataBox[d].dateIvents}</span>` : `<span class="choco__bottom-text">Дата:</span> <span class="data__start">${dataBox[d].dateIvents.split(',')[0]}</span>`}</div>
                    </div>
                </div>
            </div>
        </div>
        `};
        for(let j = 0; j<dataBox.length; j++){
            let divBloc = document.createElement('div');
            divBloc.classList.add('table__wrap');
            if(plitkaChocolat.getAttribute('month') == dataBox[j].dateIvents.split('.')[1] || plitkaChocolat.getAttribute('month') ==  dataBox[j].dateIvents.split(',')[0].split('.')[1]){
                if(checkPage == "Академия TUI"){
                    if(dataBox[j].city == "Все"){
                        divBloc.innerHTML = shoblon(j);
                        plitkaChocolat.appendChild(divBloc);
                    }
                    else if(regions.innerText == dataBox[j].city){
                        divBloc.innerHTML = shoblon(j);
                        plitkaChocolat.appendChild(divBloc);
                    }
                }
                else if(checkPage == dataBox[j].type){
                    if(dataBox[j].city== "Все"){
                        divBloc.innerHTML = shoblon(j);
                        plitkaChocolat.appendChild(divBloc);
                    }
                    else if(regions.innerText == dataBox[j].city){
                        divBloc.innerHTML = shoblon(j);
                        plitkaChocolat.appendChild(divBloc);
                    }
                }
            }
            checkRit();
            changeIcons();
        }
        addBtn();
        showBlocks();
        addIcons();
};

//Подстановка фото спикеров
function changeIcons(){
    let images = document.querySelectorAll('.img__speaker');
    for(let i = 0; i<dataImage.length; i++){
        for(let j = 0; j<images.length; j++){
            if(images[j].dataset.name == dataImage[i].spekersName){
                images[j].src = dataImage[i].url
            }else{
            }
        }
    }
};
//добавить кнопку
function addBtn(){
    let box = plitkaChocolat.querySelectorAll('.table__wrap');
    let btnShown = document.createElement('div');
        btnShown.classList.add('show_me__more');
        btnShown.innerHTML = "<div onclick='showMe(this)'>Показать больше</div>";
        if(box.length > 5){
            calendar.appendChild(btnShown);
        }
};
//показать первые 6 плиток
function showBlocks(){
    let box = plitkaChocolat.querySelectorAll('.table__wrap');
        for(let i = 0; i<6; i++){
            box[i].classList.add('shown');
        };
};
//показать еще 3 блока
function showMe(e){
    let boxes = plitkaChocolat.querySelectorAll('.table__wrap');
    let breakPoints	= plitkaChocolat.querySelectorAll('.table__wrap.shown').length + 2;
    for(let i = 0; i<boxes.length; i++){
        if (i == breakPoints) {break;}
        else if (boxes[i].classList.contains('shown')){	}
        else {boxes[i].classList.add('shown')}
        if(i == boxes.length-1){e.style.display = "none"}
    }
};
//Иконки в плитку по типу мероприятия
function addIcons(){
    let boxTitle = plitkaChocolat.querySelectorAll('.choco-wrap__title'),
        fatherBox = plitkaChocolat.querySelectorAll('.choco-wrap__line');
    for(let i = 0; i<boxTitle.length; i++){
        for(let j = 0; j<dataIcons.length; j++){
            if(boxTitle[i].innerHTML == dataIcons[j].namesType){
                let divBloc = document.createElement('div');
                    divBloc.classList.add('choco_svg')
                    divBloc.innerHTML = dataIcons[j].src;
                    fatherBox[i].insertBefore(divBloc, fatherBox[i].children[0]);
            }else{}
        }
    }
}
