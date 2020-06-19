for(let i = 0; i<allRegions.length; i++){
    allRegions[i].onclick = function(e){
        regions.click();
        regions.innerHTML = e.target.innerHTML;
        regions.setAttribute('region', e.target.dataset.region);
    }
}

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

function showMenu(e){
    let menu = document.querySelector('.region__list');
    menu.classList.toggle('visible');
    e.classList.toggle('visible__rot');
};

iconsChange[0].onclick = function(){
    if(this.classList.contains('actives')){
        
    }else{
        iconsChange[1].classList.remove('actives');
        this.classList.add('actives');
        start();
    }
};

iconsChange[1].onclick = function(){
    if(this.classList.contains('actives')){
        
    }else{
        iconsChange[0].classList.remove('actives');
        this.classList.add('actives');
        calendar.innerHTML = "In Progress";
    }
};

