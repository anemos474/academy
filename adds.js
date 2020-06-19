let addCalendar = () =>{
    let calendarsDay = document.querySelectorAll('.boxes');
    for(let i = 0; i<calendarsDay.length; i++){
        let divBloc = document.createElement('div');
        if(calendarsDay[i].getAttribute('calendardata') == dataBox[i].dateIvents){
            divBloc.innerHTML = dataBox[i].type;
            calendarsDay[i].appendChild(divBloc);
        }
    }
}

