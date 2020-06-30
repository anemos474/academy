let dataImage = [
    {
        spekersName: 'Алексей Малышев',
        url: 'https://agent.tui.ru/getmedia/c3ccde1f-ae64-4b3c-acfc-42b20302bc57/malishev_alexey'
    },
    {
        spekersName: 'Татьяна Колмагорова',
        url: 'https://agent.tui.ru/getmedia/b2f1aac1-fd3e-491f-8f8b-6f20c32a6438/Kolmagorova-2'
    }
];

let dataIcons = [
    {
        namesType: `Семинар в офисе TUI`,
        src: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4285 16.0626C21.0626 16.4286 20.5663 16.6341 20.0488 16.6341H11.2683V14.6829H20.0488V3.95122H10.2927C10.2927 3.26829 10.1073 2.59512 9.76585 2H20.0488C20.5663 2 21.0626 2.20557 21.4285 2.5715C21.7944 2.93742 22 3.43372 22 3.95122V14.6829C22 15.2004 21.7944 15.6967 21.4285 16.0626ZM9.31707 8.82927H14.1951C14.7339 8.82927 15.1707 8.39247 15.1707 7.85366C15.1707 7.31484 14.7339 6.87805 14.1951 6.87805H3.95122C3.43372 6.87805 2.93742 7.08362 2.5715 7.44955C2.20557 7.81547 2 8.31177 2 8.82927V13.7073C2 14.2461 2.4368 14.6829 2.97561 14.6829C3.15331 14.6829 3.31992 14.6354 3.46341 14.5524V20.9672L3.46338 20.9756L3.46341 20.9841V21H3.46368C3.47662 21.5275 3.90833 21.9512 4.43899 21.9512C4.96965 21.9512 5.40135 21.5275 5.4143 21H5.41463V15.6585H7.36585V20.9714C7.36585 20.9728 7.36584 20.9742 7.36584 20.9756C7.36584 20.977 7.36585 20.9784 7.36585 20.9799V21H7.36614C7.37909 21.5275 7.81079 21.9512 8.34145 21.9512C8.87212 21.9512 9.30382 21.5275 9.31677 21H9.31707V8.82927ZM7.76996 5.33094C8.13589 4.96502 8.34146 4.46872 8.34146 3.95122C8.34146 3.43372 8.13589 2.93742 7.76996 2.5715C7.40404 2.20557 6.90774 2 6.39024 2C5.87275 2 5.37645 2.20557 5.01052 2.5715C4.6446 2.93742 4.43902 3.43372 4.43902 3.95122C4.43902 4.46872 4.6446 4.96502 5.01052 5.33094C5.37645 5.69686 5.87275 5.90244 6.39024 5.90244C6.90774 5.90244 7.40404 5.69686 7.76996 5.33094Z" fill="#B9B9B9"/>
        </svg>`
    },
    {
        namesType: `Бизнес-завтрак`,
        src: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21.375 11.3833V19.6083C21.375 20.0417 21.025 20.4 20.5833 20.4H3.41667C2.98333 20.4 2.625 20.0417 2.625 19.6083V11.3833" stroke="#B9B9B9" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.8333 12.1333C7.975 12.075 5.11667 11.8083 2.29167 11.325C2.125 11.3 2 11.15 2 10.975C2 9.43333 2 7.9 2 6.35833C2 5.925 2.35 5.56667 2.79167 5.56667H21.2083C21.6417 5.56667 22 5.925 22 6.35833V10.975C22 11.15 21.875 11.2917 21.7083 11.325C18.8833 11.8083 16.025 12.075 13.1667 12.1333" stroke="#B9B9B9" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.4918 10.975H11.5085C11.1418 10.975 10.8335 11.275 10.8335 11.65V12.6334C10.8335 13 11.1335 13.3084 11.5085 13.3084H12.4918C12.8585 13.3084 13.1668 13.0084 13.1668 12.6334V11.65C13.1668 11.2834 12.8585 10.975 12.4918 10.975Z" fill="#B9B9B9" stroke="#B9B9B9" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.3583 5.575V3.925C16.3583 3.41667 15.9416 3 15.4333 3H8.5666C8.05827 3 7.6416 3.41667 7.6416 3.925V5.56667" stroke="#B9B9B9" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    },
    {
        namesType: `Вечерние мероприятия, Деловые игры`,
        src: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4.72736 10.0909C5.73152 10.0909 6.54554 9.2769 6.54554 8.27274C6.54554 7.26859 5.73152 6.45456 4.72736 6.45456C3.72321 6.45456 2.90918 7.26859 2.90918 8.27274C2.90918 9.2769 3.72321 10.0909 4.72736 10.0909Z" fill="#B9B9B9"/>
        <path d="M6.91818 11H3.81818C2.81818 11 2 11.8182 2 12.8182V16.4545C2 16.9545 2.40909 17.3636 2.90909 17.3636V21.9091C2.90909 22.4091 3.31818 22.8182 3.81818 22.8182C4.31818 22.8182 4.72727 22.4091 4.72727 21.9091V17.3636H5.63636V21.9091C5.63636 22.4091 6.04545 22.8182 6.54545 22.8182C7.04545 22.8182 7.45455 22.4091 7.45455 21.9091V17.3636V15.5455V14.1091L8.9 15.5455C9.25455 15.9 9.82727 15.9 10.1818 15.5455C10.5364 15.1909 10.5364 14.6182 10.1818 14.2636L6.91818 11Z" fill="#B9B9B9"/>
        <path d="M19.2728 10.0909C20.2769 10.0909 21.091 9.2769 21.091 8.27274C21.091 7.26859 20.2769 6.45456 19.2728 6.45456C18.2686 6.45456 17.4546 7.26859 17.4546 8.27274C17.4546 9.2769 18.2686 10.0909 19.2728 10.0909Z" fill="#B9B9B9"/>
        <path d="M20.1818 11H18.3636C17.3636 11 16.5454 11.8182 16.5454 12.8182V15.5455C16.5454 16.0455 16.9545 16.4545 17.4545 16.4545V21.7818C17.4545 22.3545 17.9181 22.8182 18.4909 22.8182H20.0545C20.6272 22.8182 21.0909 22.3545 21.0909 21.7818V16.4545C21.5909 16.4545 22 16.0455 22 15.5455V12.8182C22 11.8182 21.1818 11 20.1818 11Z" fill="#B9B9B9"/>
        <path d="M15.5455 8.27273C16.0978 8.27273 16.5455 7.82501 16.5455 7.27273V4.63636V2C16.5455 1.44772 16.0978 1 15.5455 1H12H8.45459C7.9023 1 7.45459 1.44772 7.45459 2V9.74545L10.4 8.27273H15.5455ZM9.27277 6.8V2.81818H14.7273V6.45455H9.96368L9.27277 6.8Z" fill="#B9B9B9"/>
        </svg>`
    },
    {
        namesType: `Рекламный тур`,
        src: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" fill="white"/>
        <path d="M11.5998 2.0084C6.27481 2.21673 1.95814 6.7584 1.99981 12.0834C2.04148 17.2751 6.06648 21.5334 11.1665 21.9584H12.8331V13.6667H11.1665V14.5001H7.69981C7.55814 13.7084 7.48314 12.8667 7.48314 12.0001C7.48314 11.1334 7.55814 10.2917 7.69981 9.50007H11.1665V10.3334H12.8331V3.7084C17.0415 4.12507 20.3331 7.6834 20.3331 12.0001H21.9998C21.9998 6.35007 17.2915 1.7834 11.5998 2.0084ZM11.1665 16.1667V20.1751C9.88314 19.7167 8.77481 18.2084 8.11648 16.1667H11.1665ZM4.04981 14.5001C3.79981 13.7084 3.66648 12.8667 3.66648 12.0001C3.66648 11.1334 3.79981 10.2917 4.04981 9.50007H6.01648C5.89148 10.3001 5.82481 11.1334 5.82481 12.0001C5.82481 12.8667 5.89981 13.7001 6.01648 14.5001H4.04981ZM7.58314 19.0501C6.43314 18.3334 5.47481 17.3417 4.79148 16.1667H6.36648C6.66648 17.2501 7.07481 18.2251 7.58314 19.0501ZM6.36648 7.8334H4.79148C5.47481 6.6584 6.43314 5.66673 7.58314 4.95007C7.07481 5.77507 6.66648 6.75007 6.36648 7.8334ZM11.1665 7.8334H8.11648C8.77481 5.79173 9.88314 4.2834 11.1665 3.82507V7.8334Z" fill="#B9B9B9"/>
        <path d="M16.1667 10.3333C17.0871 10.3333 17.8333 9.58714 17.8333 8.66667C17.8333 7.74619 17.0871 7 16.1667 7C15.2462 7 14.5 7.74619 14.5 8.66667C14.5 9.58714 15.2462 10.3333 16.1667 10.3333Z" fill="#B9B9B9"/>
        <path d="M16.9997 11.1667H11.1663C10.708 11.1667 10.333 11.5417 10.333 12C10.333 12.4584 10.708 12.8334 11.1663 12.8334H13.6663V15.3334V17V21.1667C13.6663 21.625 14.0413 22 14.4997 22C14.958 22 15.333 21.625 15.333 21.1667V17H16.1663V21.1667C16.1663 21.625 16.5413 22 16.9997 22C17.458 22 17.833 21.625 17.833 21.1667V17C18.2913 17 18.6663 16.625 18.6663 16.1667V12.8334C18.6663 11.9084 17.9163 11.1667 16.9997 11.1667Z" fill="#B9B9B9"/>
        </svg>`
    },
    {
        namesType: `Методические пособия`,
        src: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M0.909091 20H5.45455V18.1818H1.81818V6.36364H5.45455C5.95455 6.36364 6.36364 5.95455 6.36364 5.45455V1.81818H12.7273V6.36364H14.5455V0.909091C14.5455 0.409091 14.1364 0 13.6364 0H4.54545C4.30909 0 4.07273 0.1 3.9 0.263636L0.263636 3.9C0.1 4.07273 0 4.30909 0 4.54545V19.0909C0 19.5909 0.409091 20 0.909091 20ZM4.54545 2.19091V4.54545H2.19091L4.54545 2.19091Z" fill="#B9B9B9"/>
        <path d="M7.27295 16.3636V19.0909C7.27295 19.5909 7.68204 20 8.18204 20H10.9093C11.1457 20 11.382 19.9091 11.5457 19.7364L19.7275 11.5545C20.082 11.2 20.082 10.6273 19.7275 10.2727L17.0002 7.53636C16.6457 7.18181 16.073 7.18181 15.7184 7.53636L7.53659 15.7182C7.36386 15.8909 7.27295 16.1182 7.27295 16.3636ZM10.0002 18.1818C9.50022 18.1818 9.09113 17.7727 9.09113 17.2727V16.7364L10.5366 18.1818H10.0002ZM11.182 16.2545L11.0184 16.0909C10.6639 15.7364 10.6639 15.1636 11.0184 14.8091L15.7275 10.1C16.082 9.74545 16.6548 9.74545 17.0093 10.1L17.1729 10.2636C17.5275 10.6182 17.5275 11.1909 17.1729 11.5454L12.4639 16.2545C12.1093 16.6091 11.5275 16.6091 11.182 16.2545Z" fill="#B9B9B9"/>
        </svg>`
    },
    {
        namesType: `Вебинар`,
        src: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" fill="white"/>
        <path d="M13.8333 16.25V17.1667H10.1667V16.25H1V19C1 20.0083 1.825 20.8333 2.83333 20.8333H21.1667C22.175 20.8333 23 20.0083 23 19V16.25H13.8333ZM2.83333 19V18.0833H9.25V19H2.83333ZM21.1667 19H14.75V18.0833H21.1667V19Z" fill="#B9B9B9"/>
        <path d="M3.74984 4.33333H20.2498V15.3333H22.0832V4.33333C22.0832 3.325 21.2582 2.5 20.2498 2.5H3.74984C2.7415 2.5 1.9165 3.325 1.9165 4.33333V15.3333H3.74984V4.33333Z" fill="#B9B9B9"/>
        <path d="M5.5835 13.5V15.3334H12.9168V13.5C12.9168 12.4917 12.0918 11.6667 11.0835 11.6667H7.41683C6.4085 11.6667 5.5835 12.4917 5.5835 13.5Z" fill="#B9B9B9"/>
        <path d="M9.24984 10.75C10.2624 10.75 11.0832 9.92917 11.0832 8.91665C11.0832 7.90412 10.2624 7.08331 9.24984 7.08331C8.23732 7.08331 7.4165 7.90412 7.4165 8.91665C7.4165 9.92917 8.23732 10.75 9.24984 10.75Z" fill="#B9B9B9"/>
        <path d="M14.75 8.93497V11.6666L16.125 10.3008L17.5 8.93497L16.125 7.56914L14.75 6.20331V8.93497Z" fill="#B9B9B9"/>
        </svg>`
    },
    {
        namesType: `Семинары в офисе`,
        src: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
        <path d="M12.8333 14.25V15.1667H9.16667V14.25H0V17C0 18.0083 0.825 18.8333 1.83333 18.8333H20.1667C21.175 18.8333 22 18.0083 22 17V14.25H12.8333ZM1.83333 17V16.0833H8.25V17H1.83333ZM20.1667 17H13.75V16.0833H20.1667V17Z" fill="#B9B9B9"/>
        <path d="M2.74984 2.33333H19.2498V13.3333H21.0832V2.33333C21.0832 1.325 20.2582 0.5 19.2498 0.5H2.74984C1.7415 0.5 0.916504 1.325 0.916504 2.33333V13.3333H2.74984V2.33333Z" fill="#B9B9B9"/>
        <path d="M13.374 5.08337L10.349 8.09921L9.16652 6.91671L7.87402 8.20921L10.349 10.6934L14.6665 6.37587L13.374 5.08337Z" fill="#B9B9B9"/>
        </svg>`
    }
]