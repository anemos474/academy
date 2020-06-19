const curentLink = 'https://docs.google.com/spreadsheets/d/1p-s0QXk9GNb83VGTCVsKLOgCaWQPL1zCYnSqeBxtlac/htmlview';
let data = [];

fetch(curentLink)
.then(res => (
    res.text()
)).then(database => {
    let elemnts = document.createElement('div');
    elemnts.innerHTML = database;

    let tables      = elemnts.querySelectorAll('tbody');
    let tabs        = elemnts.querySelectorAll('#sheet-menu li a');

    tabs.forEach(a => {
        let tab = {
            country: a.innerText,
            data: []
        }
        data = [...data, tab];
    })

    tables.forEach( (table, index) => {
        let trArray = table.querySelectorAll('tr');
        

        trArray.forEach((tr, number) => {
            let td = tr.querySelectorAll('td');
            if(td.length >= 7 && number > 0) {


                data[index].data = [
                    ...data[index].data,
                    {
                        regions:            td[0].innerHTML,
                        hotel:              td[1].innerText,
                        link:               td[2].innerText,
                        start:              td[3].innerText,
                        return:             td[4].innerText,
                        document:           td[5].innerText,
                        note:               td[6].innerText,
                    }
                ]
            }

        })


    });

    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', hurry);
     } else {
         hurry()
     }
})

function hurry(){
    let titleTabs   = ``,
        tamplate    = ``;
    data.forEach((item, index) => {
        if(index != data.length-1){
            let bloksTable = document.createElement('div');
            bloksTable.classList.add('tabs__content')
            tabsContent.appendChild(bloksTable);
            tamplate = `
            <table id="dinamicTable">
                <thead>
                    <tr>
                        <td>
                            <div align="center"><strong>Регион</strong></div>
                        </td>
                        <td>
                            <div align="center"><strong>Отель</strong></div>
                        </td>
                        <td>
                            <div align="center"><strong>Даты работы</strong></div>
                        </td>
                        <td>
                            <div align="center"><strong>Перенос без доплаты</strong></div>
                        </td>
                        <td>
                            <div align="center"><strong>Необходимые документы</strong></div>
                        </td>
                        <td>
                            <div align="center"><strong>Примечания</strong></div>
                        </td>
                    </tr>
                </thead>
            <tbody>
            <tr>
            `
            titleTabs += `<li>${item.country}</li>`;
            item.data.forEach((elem, index) =>{
                console.log(elem)
                tamplate += `
                <td>
                    <div align="center">${elem.regions}</div>
                </td>
                <td>
                    <div align="center"><a href="${elem.link}" target"_blank">${elem.hotel}</a></div>
                </td>
                <td>
                    <div align="center">${elem.start}</div>
                </td>
                <td>
                    <div align="center">${elem.return}</div>
                </td>
                <td>
                    <div align="center">${elem.document}</div>
                </td>
                <td>
                    <div align="center">${elem.note}</div>
                </td>
                </tr>
                `
            })
            tamplate += '</tbody></table>';
            bloksTable.innerHTML = tamplate;
        }
    });
    titleTabse.innerHTML = titleTabs;
    let liTabs    = document.querySelectorAll('#titleTabse li'),
        tabsText  = document.querySelectorAll('.tabs__content');

    liTabs[0].classList.add('active');
    tabsText[0].classList.add('active');
}

