function readyToWork(){
    headCol.innerHTML = `
        <div class="header__wrap">
            <div class="head__box">
                <a href="https://agent.tui.ru" target="_blank"><img class="head__logo-img" src="https://agent.tui.ru/getmedia/15f194f3-deba-487a-8fe1-c311f39e23ff/logo_TUI_100-1" alt="TUI"></a>
            </div>
            <div class="head__box"></div>
            <div class="head__box">
                <a href="tel:8 800 775 775 8" class="head__phone-link"><p class="head__phone">8 800 775 775 8</p></a>
            </div>
            <div class="head__box">
                <a href="" target="_blank" class="header__buttons">Подобрать тур</a>
            </div>
            <div class="head__box"></div>
            <div class="head__box"></div>
            <div class="head__box">
                <a href="" target="_blank" class="header__oficce">
                    Офисы продаж
                </a>
            </div>
            <div class="head__box">
                <a href="" target="_blank" class="header__room">Мой TUI</a>
            </div>
            <div class="head__box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="heart__icon">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.67849 4.00005C6.47646 4.00005 5.28087 4.47238 4.36969 5.42052C2.54728 7.31677 2.54205 10.3603 4.36234 12.2579L11.6536 19.8608C11.8301 20.0463 12.1655 20.0463 12.342 19.8608C14.7742 17.3299 17.201 14.7962 19.6332 12.2653C21.4556 10.369 21.4556 7.32416 19.6332 5.42788C17.8108 3.53161 14.8306 3.53157 13.0082 5.42788L12.0015 6.46564L10.9948 5.42052C10.0123 4.3943 8.79504 3.99508 7.67854 4.00005H7.67849Z" fill="#E2F3FE"/>
                </svg>
            </div>
        </div>
    `;

    newFooterDesign.innerHTML = `
        <div class="footer__line">
            <div class="footer__wraps">
                <div class="grid_1">
                    <div class="line__box">
                        <div class="line__title" onclick="window.open('https://agent.tui.ru/About/About-company')">О компании</div>
                        <ul class="line__lists">
                            <li class="line__lists"><a href="https://agent.tui.ru/Partnership/Obshie-voprosy-nachala-rabot" target="_blank" class="line__lists-link">Вопросы по началу работы</a></li>
                            <li class="line__lists"><a href="https://agent.tui.ru/Partnership/Booking-rules" target="_blank" class="line__lists-link">Правила бронирования тура</a></li>
                            <li class="line__lists"><a href="https://agent.tui.ru/About/Benefits-of-TUI" target="_blank" class="line__lists-link">Преимущества TUI</a></li>
                            <li class="line__lists"><a href="https://agent.tui.ru/About/Contacts" target="_blank" class="line__lists-link">Контактная информация</a></li>
                        </ul>
                    </div>
                    <div class="line__box">
                        <div class="line__title" style="cursor: auto;">Каталоги TUI</div>
                        <ul class="line__lists">
                        <li class="line__lists"><a href="https://agent.tui.ru/About/All-Catalogs-TUI#%D0%9B%D0%B5%D1%82%D0%BE-2020" target="_blank" class="line__lists-link">Лето 2020</a></li>
                            <li class="line__lists"><a href="https://agent.tui.ru/About/All-Catalogs-TUI#Зима-2019-2020" target="_blank" class="line__lists-link">Зима 2019-2020</a></li>
                            <li class="line__lists"><a href="https://agent.tui.ru/About/All-Catalogs-TUI#Лето-2019" target="_blank" class="line__lists-link">Лето-2019</a></li>
                            <li class="line__lists"><a href="https://agent.tui.ru/About/All-Catalogs-TUI" target="_blank" class="line__lists-link">Смотреть все каталоги &#8594;</a></li>
                        </ul>
                    </div>
                    <div class="line__box">
                        <div class="line__title" style="cursor: auto;">Мы в соцсетях</div>
                        <ul class="social__lists">
                            <li class="social__list">
                                <a href="https://vk.com/tuiprofigroup" target="_blank" class="social__link vk">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <path fill="#3C3C3C" d="M12.5 0C5.597 0 0 5.597 0 12.5S5.597 25 12.5 25 25 19.403 25 12.5 19.403 0 12.5 0zm6.608 16.836h-1.944c-1.1 0-1.284-.626-2.19-1.53-.818-.817-1.27-.19-1.252.974.006.31-.147.556-.516.556-1.15 0-2.806.163-4.483-1.645-1.716-1.854-3.515-5.571-3.515-5.937 0-.216.18-.313.478-.313h1.978c.524 0 .567.259.714.591.608 1.387 2.064 4.169 2.452 2.616.223-.892.314-2.957-.64-3.136-.542-.1.412-.679 1.793-.679.344 0 .717.037 1.098.125.701.163.704.477.694.936-.035 1.735-.245 2.902.213 3.197.436.282 1.584-1.565 2.191-2.991.166-.394.2-.658.67-.658h2.419c1.266 0-.166 1.82-1.26 3.241-.883 1.145-.836 1.167.19 2.12.73.677 1.594 1.603 1.594 2.127 0 .248-.194.406-.684.406z"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="social__list">
                                <a href="https://www.facebook.com/groups/1551737831796166/" target="_blank" class="social__link fb">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <path fill="#3C3C3C" d="M12.5 0C5.597 0 0 5.597 0 12.5S5.597 25 12.5 25 25 19.403 25 12.5 19.403 0 12.5 0zm3.125 8.333h-1.406c-.56 0-.677.23-.677.81v1.274h2.083l-.218 2.083h-1.865v7.292h-3.125V12.5H8.333v-2.083h2.084V8.012c0-1.842.97-2.804 3.155-2.804h2.053v3.125z"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="social__list">
                                <a href="https://zen.yandex.ru/id/5d0aa1ee9d85e700b5318b40" target="_blank" class="social__link zn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <path fill="#3C3C3C" fill-rule="evenodd" d="M12.488.03c6.897 0 12.488 5.592 12.487 12.489C24.975 19.412 19.387 25 12.493 25h-.012C5.588 25 0 19.411 0 12.518l.004-.308C.167 5.455 5.694.03 12.488.03zM6 12.6v5.055l.006.13c.065.681.64 1.215 1.339 1.215h5.072l-.02-.33c-.072-1.325-.006-2.69-.527-3.935-.435-1.052-1.498-1.727-2.597-1.895-1.08-.176-2.179-.231-3.273-.24zm13 .002c-1.17.014-2.347.055-3.495.285-1.103.214-2.09 1.003-2.456 2.077-.44 1.297-.383 2.685-.446 4.036h5.052l.13-.006c.682-.065 1.215-.64 1.215-1.339zM12.414 6H7.345l-.13.006C6.534 6.071 6 6.646 6 7.345v5.054l.463-.005c1.083-.016 2.17-.07 3.225-.321 1.041-.246 1.918-1.03 2.27-2.04.446-1.296.38-2.683.456-4.033zm5.241 0h-5.05l.018.397c.043 1.19.033 2.399.394 3.545.332 1.047 1.232 1.871 2.298 2.126 1.202.294 2.45.322 3.685.332V7.345l-.006-.13C18.929 6.533 18.354 6 17.655 6z"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="social__list">
                                <a href="https://t.me/tuiprofi" target="_blank" class="social__link tl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <path fill="#3C3C3C" fill-rule="evenodd" d="M12.488.03c6.897 0 12.488 5.592 12.487 12.489C24.975 19.412 19.387 25 12.493 25h-.012C5.588 25 0 19.411 0 12.518l.004-.308C.167 5.455 5.694.03 12.488.03zm6.615 6.682c-.134-.113-.32-.145-.484-.085L5.017 11.701c-.203.076-.336.27-.33.486.008.215.153.402.36.464l.534.16 2.793.87 1.342 4.018c.058.17.191.304.366.35.176.046.363-.002.494-.126l1.88-1.775 3.402 2.468c.196.138.448.173.673.088.224-.085.39-.278.44-.511l.16-.759 2.13-10.26c.036-.17-.025-.348-.158-.462zm-2.707 2.016c.074-.048.174-.031.228.039.054.07.046.17-.02.229l-6.188 5.581-.227 2.131-1.021-3.365z"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="social__list">
                                <a href="https://www.instagram.com/tui.profi.rus/?igshid=1vj6xmusbfxhy" target="_blank" class="social__link in">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <path fill="#3C3C3C" d="M15.447 6.565c-.769-.036-1-.042-2.947-.042s-2.177.007-2.946.042c-1.978.09-2.899 1.027-2.99 2.99-.034.768-.042.998-.042 2.945 0 1.947.008 2.177.043 2.947.09 1.957 1.007 2.899 2.99 2.99.767.034.998.042 2.945.042 1.948 0 2.178-.007 2.947-.043 1.978-.09 2.898-1.029 2.99-2.99.034-.768.041-1 .041-2.946 0-1.947-.007-2.177-.042-2.946-.091-1.961-1.013-2.899-2.99-2.99zm-2.947 9.68c-2.068 0-3.745-1.676-3.745-3.745 0-2.068 1.677-3.744 3.745-3.744s3.745 1.676 3.745 3.744c0 2.068-1.677 3.745-3.745 3.745zm3.893-6.762c-.484 0-.875-.391-.875-.875 0-.483.391-.875.875-.875.483 0 .875.392.875.875s-.392.875-.875.875zM14.93 12.5c0 1.343-1.088 2.43-2.43 2.43s-2.43-1.087-2.43-2.43c0-1.343 1.088-2.43 2.43-2.43s2.43 1.087 2.43 2.43zM12.5 0C5.597 0 0 5.597 0 12.5S5.597 25 12.5 25 25 19.403 25 12.5 19.403 0 12.5 0zm7.248 15.506c-.12 2.651-1.596 4.12-4.24 4.242-.779.035-1.028.044-3.008.044s-2.228-.009-3.006-.044c-2.65-.122-4.12-1.593-4.242-4.242-.035-.777-.044-1.026-.044-3.006 0-1.98.009-2.228.044-3.006.122-2.65 1.593-4.12 4.242-4.24.778-.037 1.026-.046 3.006-.046 1.98 0 2.23.009 3.007.045 2.651.122 4.122 1.596 4.24 4.24.036.779.045 1.027.045 3.007 0 1.98-.009 2.23-.044 3.006z"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="social__list">
                                <a href="https://www.youtube.com/user/tuitravelrussia" target="_blank" class="social__link yt">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <path fill="#3C3C3C" d="M12.5 0C5.597 0 0 5.597 0 12.5S5.597 25 12.5 25 25 19.403 25 12.5 19.403 0 12.5 0zm4.626 17.596c-2.19.15-7.067.15-9.253 0-2.37-.163-2.647-1.323-2.665-5.096.018-3.78.297-4.933 2.665-5.096 2.186-.15 7.064-.15 9.253 0 2.372.163 2.647 1.323 2.666 5.096-.02 3.78-.297 4.933-2.666 5.096zm-6.71-7.536l5.123 2.436-5.122 2.444v-4.88z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div class="button__review">
                            <a href="https://www.tui.ru/add-review/" target="_blank" class="review__link">Оставьте отзыв</a>
                        </div>
                    </div>
                    <div class="line__box">
                        <div class="line__title" style="cursor: auto;">Способы оплаты</div>
                        <div class="pay__lines">
                            <a href="https://agent.tui.ru/Partnership/Tours-Payment/oplata-cherez-sberbank/" target="_blank" class="pay__link sber">
                                <img src="https://agent.tui.ru/getmedia/90988982-107b-4074-b734-8481735394b6/sber">
                            </a>
                            <a href="https://agent.tui.ru/Partnership/Tours-Payment/oplata-cherez-terminal-PAY-TRAVEL.aspx" target="_blank" class="pay__link">
                                <img src="https://agent.tui.ru/getmedia/d621d414-562d-4acf-b059-2309b2182c1c/pay-travel">					
                            </a>
                        </div>
                        <div class="pay__lines">
                            <a href="https://agent.tui.ru/Partnership/Tours-Payment/alfabank" target="_blank" class="pay__link">
                                <img src="https://agent.tui.ru/getmedia/48e881d1-102d-4870-978d-f4ed1b755fab/alpha">				
                            </a>
                            <a href="https://agent.tui.ru/Partnership/Tours-Payment/oplata-cherez-mkb" target="_blank" class="pay__link">
                                <img src="https://agent.tui.ru/getmedia/88aae00d-b440-4b16-b663-9211f517b960/moscred">				
                            </a>
                        </div>		
                    </div>
                    <div class="line__box">
                        <div class="line__title" style="cursor: auto;">Страхование туров</div>
                        <div class="pay__lines">
                            <a target="_blank" class="pay__link" style="pointer-events: none; cursor: inherit;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="112" height="12" viewBox="0 0 112 12">
                                    <path fill="#979797" fill-rule="evenodd" d="M62.413 9.649c-2.046 0-3.481-1.404-3.481-3.633 0-2.26 1.435-3.634 3.48-3.634 1.07 0 1.955.305 2.718.946l1.588-1.587C65.65.702 64.214.03 62.443.03h-.06c-3.543.03-6.108 2.473-6.108 5.985 0 3.541 2.565 5.954 6.107 5.984h.061c1.74-.03 3.176-.702 4.275-1.71L65.13 8.703c-.763.64-1.648.946-2.717.946zm-10.657 0c-2.046 0-3.48-1.404-3.48-3.633 0-2.26 1.434-3.634 3.48-3.634 1.069 0 1.954.305 2.718.946l1.588-1.587C54.992.702 53.558.03 51.787.03h-.061c-3.542.03-6.107 2.473-6.107 5.985 0 3.541 2.565 5.954 6.107 5.984h.06c1.741-.03 3.176-.702 4.276-1.71l-1.588-1.587c-.764.64-1.649.946-2.718.946zM92.43 6.87l1.557-3.633 1.557 3.633H92.43zm5.099 4.947h2.595L95.146.122h-2.351l-4.977 11.695h2.595l1.1-2.687h4.916l1.099 2.687zm14.107 0l-4.122-5.954 3.939-5.68h-2.932l-2.473 3.573-2.473-3.573h-3.023l3.97 5.74-4.123 5.894h2.932L105.986 8l2.626 3.817h3.023zM84.123 6.046c1.282 0 2.015-.763 2.015-1.802 0-1.13-.794-1.77-2.076-1.77h-2.443v3.542h2.504v.03zM79.085.214h5.221c2.78 0 4.458 1.649 4.458 4.03 0 2.688-2.076 4.092-4.702 4.092H81.65v3.481h-2.565V.214zm-7.848 2.351h-3.755V.214h10.046v2.351h-3.726v9.252h-2.565V2.565zM38.382 9.65c-2.046 0-3.48-1.404-3.48-3.633 0-2.26 1.434-3.634 3.48-3.634 2.046 0 3.481 1.404 3.481 3.634 0 2.229-1.435 3.633-3.481 3.633zm6.137-3.633C44.52 2.473 41.955.06 38.413 0h-.062c-3.542.03-6.106 2.473-6.106 5.985 0 3.542 2.564 5.954 6.106 5.985h.062c3.542 0 6.106-2.443 6.106-5.954zM26.87 11.817h-2.534V.183h7.878v2.32H26.87v9.314zM12.244.214h2.565v4.58h5.13V.214h2.565v11.603h-2.565V7.145h-5.13v4.672h-2.565V.214zm-1.832 11.603H7.908V4.183l-5.496 7.634H0V.183h2.534v7.634L8.061.183h2.351v11.634z"/>
                                </svg>						
                            </a>
                        </div>
                        <div class="pay__lines">
                            Погода предоставлена службой <a href="https://www.gismeteo.ru/" target="_blank" style="font-weight: bold; text-decoration: none; color: inherit; font-size: 13px;">Gismeteo</a>
                        </div>
                    </div>
                    <div class="line__box">
                        <div class="line__title" style="cursor: auto;">Для мобильных устройств</div>
                        <div class="mobile__store-btn">
                            <a href="https://apps.apple.com/us/app/tui-plus/id1405657518" target="_blank" class="m-store__link">
                                <img src="https://agent.tui.ru/getmedia/7aa6ab37-e8df-4b48-81f2-040bbbb7e4f5/logo-apple">					
                                APP STORE
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.alef.tui" target="_blank" class="m-store__link">
                                <img src="https://agent.tui.ru/getmedia/556c6028-cea1-49df-a5a3-aaf45ade3fce/logo-google-play">						
                                GOOGLE PLAY
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bootom__line">
            <div class="grid_2">
                <div class="bottom-line__box">
                    <p style="font-size: 13px">Реестровый номер туроператора PTO 008029. TUI — ведущий европейский туроператор<br>в России и СНГ. © 2020, TUI</p>
                </div>
                <div class="bottom-line__box"></div>
            </div>
        </div>
    `
};

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', readyToWork)
 } else {
    readyToWork()
}
