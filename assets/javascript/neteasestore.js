


// ------------------ Popup Menu Generation ------------------

const headerNavItems = document.querySelectorAll('.header_nav .header_nav-items');

const identityMenu = document.querySelector('.header_nav .identity_menu');
let identityMenuFlag = false;

const narakaMenu = document.querySelector('.header_nav .naraka_menu');
let narakaMenuFlag = false;

const eggyMenu = document.querySelector('.header_nav .eggy_menu');
let eggyMenuFlag = false;

const youdaoMenu = document.querySelector('.header_nav .youdao_menu');
let youdaoMenuFlag = false;

for(let i=0;i<headerNavItems.length;i++) {
    if(i==0 || i==1 || i==2 || i==3) {
        headerNavItems[i].addEventListener('click', function(event) {
            event.stopPropagation();
            if(i==0) {
                if(identityMenuFlag==false) {
                
                
                
                    eggyMenuFlag = false;
                    narakaMenuFlag = false;
                    youdaoMenuFlag = false;
                
                    identityMenuFlag = true;

                

                    for(let k=0;k<headerNavItems.length;k++) {
                        if(k==0 || k==1 || k==2 || k==3) {
                            if(headerNavItems[k].classList.contains('active')) {
                                headerNavItems[k].classList.remove('active');
                            }
                        }
                    }
                    headerNavItems[i].classList.toggle('active');
                }
                else{
                
                    identityMenuFlag = false;
                    headerNavItems[i].classList.toggle('active');
                    
                }
            }
            else if(i==1) {
                if(narakaMenuFlag==false) {
                
                
                
                    eggyMenuFlag = false;
                    identityMenuFlag = false;
                    youdaoMenuFlag = false;
                
                    narakaMenuFlag = true;

                

                    for(let k=0;k<headerNavItems.length;k++) {
                        if(k==0 || k==1 || k==2 || k==3) {
                            if(headerNavItems[k].classList.contains('active')) {
                                headerNavItems[k].classList.remove('active');
                            }
                        }
                    }
                    headerNavItems[i].classList.toggle('active');
                    
                }
                else{
                
                    narakaMenuFlag = false;
                    headerNavItems[i].classList.toggle('active');

                }
            }
            else if(i==2) {
                if(eggyMenuFlag==false) {
                
                
                
                    identityMenuFlag = false;
                    youdaoMenuFlag = false;
                    narakaMenuFlag = false;
                
                    eggyMenuFlag = true;

                

                    for(let k=0;k<headerNavItems.length;k++) {
                        if(k==0 || k==1 || k==2 || k==3) {
                            if(headerNavItems[k].classList.contains('active')) {
                                headerNavItems[k].classList.remove('active');
                            }
                        }
                    }
                    headerNavItems[i].classList.toggle('active');
                    
                }
                else{
                
                    eggyMenuFlag = false;
                    headerNavItems[i].classList.toggle('active');
                }
            }
            else if(i==3) {
                if(youdaoMenuFlag==false) {
                
                
                
                    identityMenuFlag = false;
                    narakaMenuFlag = false;
                    eggyMenuFlag = false;
                
                    youdaoMenuFlag= true;

                

                    for(let k=0;k<headerNavItems.length;k++) {
                        headerNavItems[k].classList.remove('active');
                    }
                    headerNavItems[i].classList.add('active');
                    
                }
                else{
                
                    youdaoMenuFlag = false;
                    headerNavItems[i].classList.toggle('active');
                }
            }
        })
    }
}

window.addEventListener('click', function() {
    for(let i=0;i<headerNavItems.length;i++) {
        headerNavItems[i].classList.remove('active');
        youdaoMenuFlag=false;
        identityMenuFlag=false;
        narakaMenuFlag=false;
        eggyMenuFlag=false;
    }
    whiteModal.style.display='none';
    language.classList.remove('active');
    languageMenuFlag=false;
    headerNavBarsLanguage.classList.remove('active');
    headerNavBars.classList.remove('active');
    btnShowBarsImg.src='./assets/img/bars-icon--white.png';
    showBarsFlag = false;
})


// ---------------- Identity Menu Items Popup ---------------

const identityMenuItems = document.querySelectorAll('.header_nav .identity_menu-items');

const catergoriesPopup = document.querySelector('.header_nav .categories_popup');
let catergoriesPopupFlag = false;
const seriesPopup = document.querySelector('.header_nav .series_popup');
let seriesPopupFlag = false;

catergoriesPopup.style.textdecoration


for(let i=0; i< identityMenuItems.length;i++) {
    if(i==4) {
        identityMenuItems[i].addEventListener("click", function(event) {
            event.stopPropagation();
            if(catergoriesPopupFlag==false) {
                catergoriesPopup.classList.add("open");
                catergoriesPopupFlag =true;
                identityMenuItems[i].classList.toggle('active_popup')
            }

            else{
                catergoriesPopup.classList.remove("open");
                catergoriesPopupFlag=false;
                identityMenuItems[i].classList.toggle('active_popup')
            }
            
        })
    }

    if(i==5) {
        identityMenuItems[i].addEventListener("click", function(event) {
            event.stopPropagation();
            if(seriesPopupFlag==false) {
                seriesPopup.classList.add("open");
                seriesPopupFlag =true;
                identityMenuItems[i].classList.toggle('active_popup')
            }

            else{
                seriesPopup.classList.remove("open");
                seriesPopupFlag=false;
                identityMenuItems[i].classList.toggle('active_popup')
            }
            
        })
    }
}



const identityMenuBarsItems = document.querySelectorAll('.header_nav-bars .identity_menu-items')
const catergoriesBarsPopup = document.querySelector('.header_nav-bars .categories_popup');
const seriesBarsPopup = document.querySelector('.header_nav-bars .series_popup');

for(let i=0;i<identityMenuBarsItems.length;i++) {
    if(i==5) {
        identityMenuBarsItems[i].addEventListener('click', function(e) {
            e.preventDefault()
            catergoriesPopupFlag=true;
            catergoriesBarsPopup.classList.add('show-menu');
        })
    }
    if(i==6) {
        identityMenuBarsItems[i].addEventListener('click', function(e) {
            e.preventDefault();
            seriesBarsPopup.classList.add('show-menu');
            seriesPopupFlag=true;
        })
    }
}


// ----------------- header show bars (responsive) ------------------

const btnShowBars = document.querySelector('.header_nav>button');
const btnShowBarsImg = document.querySelector('.header_nav>button img');
let showBarsFlag = false;

const headerNavBars = document.querySelector('.header_nav-bars');
headerNavBars.addEventListener('click', function(e) {
    e.stopPropagation();
})

btnShowBars.addEventListener('click', function(e) {
    e.stopPropagation();
    if(showBarsFlag==false) {
        btnShowBarsImg.src = "./assets/img/close-white.png";
        btnShowBarsImg.style.width = "20px"
        showBarsFlag =true;
        headerNavBars.classList.add('active')
        whiteModal.style.display='block';
        document.body.style.overflowY='hidden';
    }
    else {
        btnShowBarsImg.src = "./assets/img/bars-icon--white.png";
        showBarsFlag=false;
        btnShowBarsImg.style.width = "22px"
        headerNavBars.classList.remove('active')
        HiddenMenuPopupItems();
        whiteModal.style.display='none';
        document.body.style.overflowY='auto';
    }
})



// ---------------------- Header Search ----------------------
// ---------------- Header Search Check ---------------------

const headerSearchInput = document.getElementById('header_search-input');
const headerSearchLabel = document.getElementById('header_search-label');


const searchInputCheck = document.getElementsByClassName('search_input-check')[0];
const searchInfo = document.getElementsByClassName('search-info')[0];

const closeCircleIcon = document.getElementsByClassName('close-circle--icon')[0];
const searchInputLine = document.getElementsByClassName('search_input-line')[0];

headerSearchInput.addEventListener('focus', function(e) {
    e.stopPropagation();
    let headerSearchInputValue = headerSearchInput.value;
    headerSearchLabel.classList.add('active');
    if(headerSearchInputValue.trim()!="") {
        searchInputCheck.style.display='flex';
    }
})

headerSearchInput.addEventListener('click', function(e) {
    e.stopPropagation();
})

const headerSearchContainer = document.querySelector('.header_search-container');
headerSearchContainer.addEventListener('click', function(e) {
    e.stopPropagation();
})

headerSearchInput.addEventListener('input', function() { // KHi thay đổi giá trị ô input
    let headerSearchInputValue = headerSearchInput.value;
    if(headerSearchInputValue.trim()!="") {
        searchInputCheck.style.display='flex';
        searchInfo.innerHTML = ` "${headerSearchInputValue}"`;
        closeCircleIcon.style.display='block';
        searchInputLine.style.display='inline';
    }
    else if(headerSearchInputValue.trim()===""){
        // searchInputCheck.style.display='none';
        closeCircleIcon.style.display='none';
        searchInputLine.style.display='none';
    }
})

headerSearchInput.addEventListener('blur', function() {
    let headerSearchInputValue = headerSearchInput.value;
    if(headerSearchInputValue.trim()==="") {
        headerSearchLabel.classList.remove('active');
        closeCircleIcon.style.display='none';
        searchInputLine.style.display='none';
        
    }
    searchInputCheck.style.display = 'none';
})


closeCircleIcon.addEventListener('click', function(event) {  //Xoá nội dung input khi click
    event.stopPropagation();
    closeCircleIcon.style.display='none';
    searchInputLine.style.display='none';
    headerSearchInput.value = "";
})

// ----------------- Show Header Search ------------------

const headerBottom = document.getElementsByClassName('header_bottom')[0];
const headerSearch = document.getElementsByClassName('header_search')[0];
const btnCloseHeaderSearch = document.getElementsByClassName('btn-close-header-search')[0];
const whiteModal = document.querySelector('.white_modal');
let headerSearchFlag = false;

const headerUserItems = document.querySelectorAll('.header_user .header_user-items');

headerUserItems[0].addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    headerSearch.style.display='block';
    headerBottom.style.opacity = '0';
    whiteModal.style.display='block';
    document.body.style.overflowY = 'hidden';
    headerSearchFlag=true;
    
})


btnCloseHeaderSearch.addEventListener('click', function() {
    headerBottom.style.opacity='1';
    headerSearch.style.display='none';
    whiteModal.style.display='none';
    document.body.style.overflowY = 'auto';
    headerSearchFlag=false;
})

whiteModal.addEventListener('click', function() {
    headerBottom.style.opacity='1';
    headerSearch.style.display='none';
    whiteModal.style.display='none';
    document.body.style.overflowY = 'auto';
    headerSearchFlag=false;

})


// ---------------- Slider Banner -----------------------

function showCurrentPage(currpage, checkpage) {
    currpage.textContent = (checkpage+1);
}

function showTotalPage(totalpage, checktotalpage) {
    totalpage.textContent = `/${checktotalpage}`;
}

let intervalSLider;
let checkPlayOnl = false;

const slideShow = document.getElementsByClassName('slide_show');
let slideShowCount = 0;

const sliderContainer = document.getElementsByClassName('slider-container')[0];

const btnLeftControl = document.getElementsByClassName('btn-left-control')[0];
const btnRightControl = document.getElementsByClassName('btn-right-control')[0];

const bannerCurrentPage = document.querySelector('.banner .current-page');

const btnAction = document.getElementsByClassName('btn-action')[0];
const actionImg = document.getElementsByClassName('action-img')[0];

const bannerTotalPage = document.querySelector('.banner .total-page');

function startIntervalSLider() {
    intervalSLider = setInterval(function() {
        ++slideShowCount;
        if(slideShowCount>=slideShow.length) {
            slideShowCount=0;
        }
        sliderContainer.style.transform = `translateX(-${100*(slideShowCount)}%)`
        showCurrentPage(bannerCurrentPage, slideShowCount);
    }, 4000)
}

function showSlider() {
    startIntervalSLider()
    btnRightControl.addEventListener('click', function() {
        clearInterval(intervalSLider);
        ++slideShowCount;
        if(slideShowCount>slideShow.length-1) {
            slideShowCount=0;
        }
        sliderContainer.style.transform = `translateX(-${100*(slideShowCount)}%)`
        startIntervalSLider();
        showCurrentPage(bannerCurrentPage, slideShowCount);

    })
    
    btnLeftControl.addEventListener('click', function() {
        clearInterval(intervalSLider);
        --slideShowCount;
        if(slideShowCount<0) {
            slideShowCount=(slideShow.length)-1;
        }
        sliderContainer.style.transform = `translateX(-${100*(slideShowCount)}%)`;
        showCurrentPage(bannerCurrentPage, slideShowCount);

    })
    btnAction.addEventListener('click', function() {
        if(checkPlayOnl==false) {
            actionImg.src = './assets/img/play-button.png';
            checkPlayOnl=true;
            clearInterval(intervalSLider);
        }
        else {
            actionImg.src = './assets/img/pause.png';
            checkPlayOnl=false;
            startIntervalSLider();
        }
    })
    showTotalPage(bannerTotalPage, slideShow.length)
}


showSlider();

// -------------------- Cost ----------------

const originalCost = document.getElementsByClassName('original-cost');
const showCost = document.getElementsByClassName('show-cost');


function cost() {
    for(let i=0;i<originalCost.length;i++) {
        const originalCostValue = originalCost[i].innerHTML;
        if(originalCostValue.trim()!="") {
            originalCost[i].style.paddingRight = '15px'; 
        }
    }  
}

cost();

// ---------------- Function Slider All ---------------------

function sliderProductAll(leftControl, rightControl, cart, container, currentPage, totalPage) {
    const windowWidth = window.innerWidth;
    if (windowWidth>1160) {
        let productCheckPage = 0;
        rightControl.addEventListener('click', function() {
        ++productCheckPage;
        if(productCheckPage>(Math.ceil(cart.length/5))-1) {
            productCheckPage=0;
            container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*5)}px)`
        }
        else if(productCheckPage==(Math.ceil(cart.length/5))-1) {
            if(cart.length%5==1) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*5-(cart[0].offsetWidth+14)*4}px)`
            }
            else if(cart.length%5==2) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*5-(cart[0].offsetWidth+14)*3}px)`
                
            }
            else if(cart.length%5==3) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*5-(cart[0].offsetWidth+14)*2}px)`
                
            }
            else if(cart.length%5==4) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*5-(cart[0].offsetWidth+14)}px)`
            }
            else if(cart.leftControl%5==0) {
                container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*5)}px)`

            }
        }
        else {
            console.log(productCheckPage);
            container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*5)}px)`
        }
        showCurrentPage(currentPage, productCheckPage)

    })

    leftControl.addEventListener('click', function() {
        --productCheckPage;
        if(productCheckPage<0) {
            productCheckPage=Math.ceil(cart.length/5)-1;
            if(cart.length%5==1) {
                container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*5)-((cart[0].offsetWidth+14)*4)}px)`
            }
            else if(cart.length%5==2) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*5-(cart[0].offsetWidth+14)*3}px)`
                
            }
            else if(cart.length%5==3) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*5-(cart[0].offsetWidth+14)*2}px)`
                
            }
            else if(cart.length%5==4) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*5-(cart[0].offsetWidth+14)}px)`
            }
            else if(cart.leftControl%5 ==0 ) {
                container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*5)}px)`
            }
        }
        else {
            console.log(productCheckPage);
            container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*5)}px)`
        }
        showCurrentPage(currentPage, productCheckPage)
    })
    }
    else if  (windowWidth >= 990 && windowWidth <1160) {
        let productCheckPage = 0;
        rightControl.addEventListener('click', function() {
        ++productCheckPage;
        if(productCheckPage>(Math.ceil(cart.length/4))-1) {
            productCheckPage=0;
            container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*4)}px)`
        }

        if(productCheckPage==(Math.ceil(cart.length/4))-1) {
            if(cart.length%4==1) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*4-(cart[0].offsetWidth+14)*3}px)`
            }
            else if(cart.length%4==2) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*4-(cart[0].offsetWidth+14)*2}px)`
                
            }
            else if(cart.length%4==3) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*4-(cart[0].offsetWidth+14)*1}px)` 
            }
            else if(cart.length%4 == 0) {
                container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*4)}px)`
            }
        }
        else {
            container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*4)}px)`
        }

        showCurrentPage(currentPage, productCheckPage)
    })

    leftControl.addEventListener('click', function() {
        --productCheckPage;
        if(productCheckPage<0) {
            productCheckPage=Math.ceil(cart.length/4)-1;
            if(cart.length%4==1) {
                container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*4)-((cart[0].offsetWidth+14)*3)}px)`
            }
            else if(cart.length%4==2) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*4-(cart[0].offsetWidth+14)*2}px)`
                
            }
            else if(cart.length%4==3) {
                container.style.transform = `translateX(-${productCheckPage*(cart[0].offsetWidth+14)*4-(cart[0].offsetWidth+14)*1}px)`
            }
            else if(cart.length%4==0) {
            container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*4)}px)`
            }
        }
        else {
            console.log(productCheckPage);
            container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*4)}px)`
        }
        showCurrentPage(currentPage, productCheckPage)
    })
    }
    else if(windowWidth < 990) {
        let productCheckPage = 0;
        rightControl.addEventListener('click', function() {
        ++productCheckPage;
        if(productCheckPage>(Math.ceil(cart.length/2))-1) {
            productCheckPage=0;
            container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*2)}px)`
        }
        else if(productCheckPage==(Math.ceil(cart.length/2))-1) {

            if(cart.length%2==1) {
            console.log('abc')
                container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*2) - (cart[0].offsetWidth+14)}px)`

            }
            else if(cart.length%2==0) {

                container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*2)}px)`
            }
        }
        else {
            console.log(productCheckPage);
            container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*2)}px)`
        }
        showCurrentPage(currentPage, productCheckPage)

    })

    leftControl.addEventListener('click', function() {
        --productCheckPage;
        if(productCheckPage<0) {
            productCheckPage=(Math.ceil(cart.length/2)-1);
            if(cart.length%2==1) {
                container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*2)-((cart[0].offsetWidth+14)*1)}px)`
            }
            else if(cart.length%2==0) {
                container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*2)}px)`
            }
        }
        else {
            container.style.transform = `translateX(-${productCheckPage*((cart[0].offsetWidth+14)*2)}px)`
        }
        showCurrentPage(currentPage, productCheckPage)
    })
    }
}

// --------------------- Product Slide Eggy ---------------


const eggyCart = document.querySelectorAll('.eggy-product .eggy-cart');
const productContainer = document.querySelector('.eggy-product .product-container');

const btnLeftControlProductEggy = document.querySelector('.eggy-product .btn-left-control');
const btnRightControlProductEggy = document.querySelector('.eggy-product .btn-right-control')

const eggyCurrentPage = document.querySelector('.eggy-product .current-page');

const eggyTotalPage = document.querySelector('.eggy-product .total-page');





// -------------------- Eggy Merch On Sale ----------------

const  btnLeftControlEggyMerchOnSale = document.querySelector('.eggy-merch-on-sale .btn-left-control');
const  btnRightControlEggyMerchOnSale = document.querySelector('.eggy-merch-on-sale .btn-right-control');

const eggyMerchOnSaleCart = document.querySelectorAll('.eggy-merch-on-sale .cart');
const eggyMerchOnSaleContainer = document.querySelector('.eggy-merch-on-sale .eggy-merch-on-sale-container');

const eggyMerchOnSaleCurrentPage = document.querySelector('.eggy-merch-on-sale .current-page');
const eggyMerchOnSaleTotalPage = document.querySelector('.eggy-merch-on-sale .total-page');



// ----------------------- More Eggy merch --------------

const btnLeftControlMoreEggyMerch = document.querySelector('.more-eggy-merch .btn-left-control');
const btnRightControlMoreEggyMerch = document.querySelector('.more-eggy-merch .btn-right-control');

const moreEggyMerchContainer = document.querySelector('.more-eggy-merch .more-eggy-merch-container');
const moreEggyMerchCart = document.querySelectorAll('.more-eggy-merch .more-eggy-merch-cart');

const moreEggyMerchCurrentPage = document.querySelector('.more-eggy-merch .current-page');
const moreEggyMerchTotalPage = document.querySelector('.more-eggy-merch .total-page');


// ------------------- naraka Merch On Sale ---------------

const btnLeftControlNarakaMerchOnSale = document.querySelector('.naraka-merch-on-sale .btn-left-control');
const btnRightControlNarakaMerchOnSale = document.querySelector('.naraka-merch-on-sale .btn-right-control');

const narakaMerchOnSaleCart =document.querySelectorAll('.naraka-merch-on-sale .naraka-merch-on-sale-cart');
const narakaMerchOnSaleContainer = document.querySelector('.naraka-merch-on-sale-container');

const narakaMerchOnSaleCurrentPage = document.querySelector('.naraka-merch-on-sale .current-page');
const narakaMerchOnSaleTotalPage = document.querySelector('.naraka-merch-on-sale .total-page');




// ----------------- More Naraka Merch ---------------

const btnLeftControlMoreNarakaMerch = document.querySelector('.more-naraka-merch .btn-left-control');
const btnRightControlMoreNarakaMerch = document.querySelector('.more-naraka-merch .btn-right-control');

const moreNarakaMerchContainer = document.querySelector('.more-naraka-merch-container');
const moreNarakaMerchCart = document.querySelectorAll('.more-naraka-merch-cart');

const moreNarakaMerchCurrentPage = document.querySelector('.more-naraka-merch .current-page');
const moreNarakaMerchTotalPage = document.querySelector('.more-naraka-merch .total-page');


// ------------------------ Initial Merch -----------------------

const containerFlex = document.querySelectorAll('.container-flex');
const productControlFlex = document.querySelectorAll('.product-control-flex');

const limitEditionCart = document.querySelectorAll('.limit-edition-cart');
const idvMerchOnSaleCart = document.querySelectorAll('.idv-merch-on-sale-cart');
const workshopSeriesCart = document.querySelectorAll('.workshop-series-cart');
const frozenKingdomCart = document.querySelectorAll('.frozen-kingdom-cart');
const moreOnmyojiMerchCart = document.querySelectorAll('.more-onmyoji-merch-cart');
const youdaoSmartDeviceCart = document.querySelectorAll('.youdao-smart-device-cart');


const btnLeftControlFlex = document.querySelectorAll('.btn-left-control-flex');
const btnRightControlFlex = document.querySelectorAll('.btn-right-control-flex');
const currentPageFlex = document.querySelectorAll('.current-page-flex');
const totalPageFlex = document.querySelectorAll('.total-page-flex');

// ------------------------- Show Total Page Responsive And SLiderPRoductAll

sliderProductAll(btnLeftControlMoreNarakaMerch, btnRightControlMoreNarakaMerch, moreNarakaMerchCart, moreNarakaMerchContainer, moreNarakaMerchCurrentPage, moreNarakaMerchTotalPage);
sliderProductAll(btnLeftControlNarakaMerchOnSale, btnRightControlNarakaMerchOnSale, narakaMerchOnSaleCart, narakaMerchOnSaleContainer, narakaMerchOnSaleCurrentPage, narakaMerchOnSaleTotalPage);
sliderProductAll(btnLeftControlMoreEggyMerch, btnRightControlMoreEggyMerch, moreEggyMerchCart, moreEggyMerchContainer, moreEggyMerchCurrentPage, moreEggyMerchTotalPage);
sliderProductAll(btnLeftControlEggyMerchOnSale, btnRightControlEggyMerchOnSale, eggyMerchOnSaleCart, eggyMerchOnSaleContainer, eggyMerchOnSaleCurrentPage, eggyMerchOnSaleTotalPage);
sliderProductAll(btnLeftControlProductEggy, btnRightControlProductEggy, eggyCart, productContainer, eggyCurrentPage, eggyTotalPage);

window.addEventListener('resize', function() {
    sliderProductAll(btnLeftControlMoreNarakaMerch, btnRightControlMoreNarakaMerch, moreNarakaMerchCart, moreNarakaMerchContainer, moreNarakaMerchCurrentPage, moreNarakaMerchTotalPage);
    sliderProductAll(btnLeftControlNarakaMerchOnSale, btnRightControlNarakaMerchOnSale, narakaMerchOnSaleCart, narakaMerchOnSaleContainer, narakaMerchOnSaleCurrentPage, narakaMerchOnSaleTotalPage);
    sliderProductAll(btnLeftControlMoreEggyMerch, btnRightControlMoreEggyMerch, moreEggyMerchCart, moreEggyMerchContainer, moreEggyMerchCurrentPage, moreEggyMerchTotalPage);
    sliderProductAll(btnLeftControlEggyMerchOnSale, btnRightControlEggyMerchOnSale, eggyMerchOnSaleCart, eggyMerchOnSaleContainer, eggyMerchOnSaleCurrentPage, eggyMerchOnSaleTotalPage);
    sliderProductAll(btnLeftControlProductEggy, btnRightControlProductEggy, eggyCart, productContainer, eggyCurrentPage, eggyTotalPage);
    sliderProductAll(btnLeftControlFlex[0],btnRightControlFlex[0],limitEditionCart, containerFlex[0], currentPageFlex[0], totalPageFlex[0]);
    sliderProductAll(btnLeftControlFlex[1],btnRightControlFlex[1],idvMerchOnSaleCart, containerFlex[1], currentPageFlex[1], totalPageFlex[1]);
    sliderProductAll(btnLeftControlFlex[2],btnRightControlFlex[2],workshopSeriesCart, containerFlex[2], currentPageFlex[2], totalPageFlex[2]);
    sliderProductAll(btnLeftControlFlex[3],btnRightControlFlex[3],frozenKingdomCart, containerFlex[3], currentPageFlex[3], totalPageFlex[3]);
    sliderProductAll(btnLeftControlFlex[4],btnRightControlFlex[4],moreOnmyojiMerchCart, containerFlex[4], currentPageFlex[4], totalPageFlex[4]);
    sliderProductAll(btnLeftControlFlex[5],btnRightControlFlex[5],youdaoSmartDeviceCart, containerFlex[5], currentPageFlex[5], totalPageFlex[5]);
    showTotalPageResponsive();
    checkVisibilityContainer();
    showProductControlFlex();
})

function showTotalPageResponsive() {
    const windowWidth = window.innerWidth;
    if(windowWidth >1160) {
        showTotalPage(moreNarakaMerchTotalPage, Math.ceil(moreNarakaMerchCart.length/5));
        showTotalPage(narakaMerchOnSaleTotalPage, Math.ceil(narakaMerchOnSaleCart.length/5));
        showTotalPage(moreEggyMerchTotalPage, Math.ceil(moreEggyMerchCart.length/5));
        showTotalPage(eggyMerchOnSaleTotalPage, Math.ceil(eggyMerchOnSaleCart.length/5));
        showTotalPage(eggyTotalPage, Math.ceil(eggyCart.length/5))
        showTotalPage(totalPageFlex[0], Math.ceil(limitEditionCart.length/5))
        showTotalPage(totalPageFlex[1], Math.ceil(idvMerchOnSaleCart.length/5))
        showTotalPage(totalPageFlex[2], Math.ceil(workshopSeriesCart.length/5))
        showTotalPage(totalPageFlex[3], Math.ceil(frozenKingdomCart.length/5))
        showTotalPage(totalPageFlex[4], Math.ceil(moreOnmyojiMerchCart.length/5))
        showTotalPage(totalPageFlex[5], Math.ceil(youdaoSmartDeviceCart.length/5))

    }
    else if(windowWidth>=990 && windowWidth<1160) {
        showTotalPage(moreNarakaMerchTotalPage, Math.ceil(moreNarakaMerchCart.length/4));
        showTotalPage(narakaMerchOnSaleTotalPage, Math.ceil(narakaMerchOnSaleCart.length/4));
        showTotalPage(moreEggyMerchTotalPage, Math.ceil(moreEggyMerchCart.length/4));
        showTotalPage(eggyMerchOnSaleTotalPage, Math.ceil(eggyMerchOnSaleCart.length/4));
        showTotalPage(eggyTotalPage, Math.ceil(eggyCart.length/4))
        showTotalPage(totalPageFlex[0], Math.ceil(limitEditionCart.length/4))
        showTotalPage(totalPageFlex[1], Math.ceil(idvMerchOnSaleCart.length/4))
        showTotalPage(totalPageFlex[2], Math.ceil(workshopSeriesCart.length/4))
        showTotalPage(totalPageFlex[3], Math.ceil(frozenKingdomCart.length/4))
        showTotalPage(totalPageFlex[4], Math.ceil(moreOnmyojiMerchCart.length/4))
        showTotalPage(totalPageFlex[4], Math.ceil(youdaoSmartDeviceCart.length/4))
    }
    else if(windowWidth <990) {
        showTotalPage(moreNarakaMerchTotalPage, Math.ceil(moreNarakaMerchCart.length/2));
        showTotalPage(narakaMerchOnSaleTotalPage, Math.ceil(narakaMerchOnSaleCart.length/2));
        showTotalPage(moreEggyMerchTotalPage, Math.ceil(moreEggyMerchCart.length/2));
        showTotalPage(eggyMerchOnSaleTotalPage, Math.ceil(eggyMerchOnSaleCart.length/2));
        showTotalPage(eggyTotalPage, Math.ceil(eggyCart.length/2))
        showTotalPage(totalPageFlex[0], Math.ceil(limitEditionCart.length/2))
        showTotalPage(totalPageFlex[1], Math.ceil(idvMerchOnSaleCart.length/2))
        showTotalPage(totalPageFlex[2], Math.ceil(workshopSeriesCart.length/2))
        showTotalPage(totalPageFlex[3], Math.ceil(frozenKingdomCart.length/2))
        showTotalPage(totalPageFlex[4], Math.ceil(moreOnmyojiMerchCart.length/2))
        showTotalPage(totalPageFlex[5], Math.ceil(youdaoSmartDeviceCart.length/2))
    }
}

showTotalPageResponsive();


// ------------------ Gear Up Booster ------------

const gearUpTemplateTopItems = document.querySelectorAll('.template-top .template-items');
const gearUpTemplateBottomItems = document.querySelectorAll('.template-bottom .template-items');

for(let i=0;i<gearUpTemplateBottomItems.length;i++) {
    gearUpTemplateBottomItems[i].addEventListener('click', function() {
        for(let k=0;k<gearUpTemplateBottomItems.length;k++) {
            gearUpTemplateBottomItems[k].classList.remove('active');
        }
        gearUpTemplateBottomItems[i].classList.add('active');
    })
}

for(let i=0;i<gearUpTemplateTopItems.length;i++) {
    gearUpTemplateTopItems[i].addEventListener('click', function() {
        for(let k=0;k<gearUpTemplateTopItems.length;k++) {
            gearUpTemplateTopItems[k].classList.remove('active');
        }
        gearUpTemplateTopItems[i].classList.add('active');
    })
}

// ------------------ Quantity Detail --------------

const subtract = document.querySelector('.subtract');
const plus = document.querySelector('.plus');
const gearQuantity = document.querySelector('.quantity-control .quantity');

subtract.addEventListener('click', function() {
    subtractgear();
})

plus.addEventListener('click', function() {
    plusgear();
})

function subtractgear() {
    let quantityValue = parseInt(gearQuantity.innerHTML);
    if(quantityValue==1) {
        return;
    }
    else if(quantityValue==2) {
        quantityValue--;
        subtract.classList.add('limited');
        gearQuantity.innerHTML=quantityValue;
        subtract.style.opacity='0.6'
    }
    else {
        quantityValue--;
        gearQuantity.innerHTML=quantityValue;
    }
}

function plusgear() {
    let quantityValue = parseInt(gearQuantity.innerHTML);
    quantityValue++;
    subtract.classList.remove('limited');
    subtract.style.opacity='1'
    gearQuantity.innerHTML=quantityValue;
}

// ----------------- Language Show Menu ------------

const language = document.querySelector('.language');
const languageList = document.querySelector('.language-list');
const languageDefault = document.querySelector('.language-default')
console.log(languageDefault)

let languageMenuFlag = false
language.addEventListener('click', function(e) {
    e.stopPropagation();
    if(languageMenuFlag==false) {
        language.classList.add('active');
        languageMenuFlag=true;
    }
    else {
        // language.style.display='none';
        language.classList.remove('active');
        languageMenuFlag=false;
    }
})


const headerNavBarsLanguage = document.querySelector('.header_nav-bars .language');
headerNavBarsLanguage.addEventListener('click', function() {
    if(languageMenuFlag==false) {
        headerNavBarsLanguage.classList.toggle('active');
        languageMenuFlag=true;
    }
    else {
        headerNavBarsLanguage.classList.toggle('active');
        languageMenuFlag=false
    }
})

const languageItems = document.querySelectorAll('.language-items');

for(let i=0;i<languageItems.length;i++) {
    languageItems[i].addEventListener('click', function(e) {
        const chatContainerSpan=document.querySelector('.chat_container span');
        e.stopPropagation();
        let languageItemsValue = languageItems[i].innerHTML;
        languageDefault.innerHTML=languageItemsValue;
        for(let k =0;k<languageItems.length;k++) {
            languageItems[k].classList.remove('active');
        }
        languageItems[i].classList.add('active');
        if(i==2) {
            chatContainerSpan.style.fontSize = '14px';
        }
        else {
            chatContainerSpan.style.fontSize = '24px';
        }
    })
}

// -------------------- Animation Show Container -----------------------

const animateHiddenContainer = document.querySelectorAll('.animate-hidden-container');

function checkVisibilityContainer() {
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight*0.8;
    
    animateHiddenContainer.forEach((container) => {
        const rect = container.getBoundingClientRect();
        if(rect.top < triggerPoint) {
            container.classList.remove('animate-hidden-container');
            container.classList.add('animate-fadeIn-container');
            
        }
    })
}



// ------------------ Header Scroll -----------------

let lastScrollY = 0;
const header = document.getElementById('header');


window.addEventListener('scroll', () => {
    const currentSCrollY = window.scrollY;

    if(currentSCrollY > lastScrollY) {
        header.classList.remove('scrollup');
        header.classList.add('scrolldow');
        header.classList.remove('top-on');
    }
    else if(currentSCrollY < lastScrollY) {
        header.classList.add('scrollup');
        header.classList.remove('scrolldow');
    }

    if(currentSCrollY===0) {
        header.classList.add('top-on');
    }
    lastScrollY = currentSCrollY;
    checkVisibilityContainer();
})


// ---------------------------------------------

const subscribeInput = document.querySelector('.subscribe-container input');
const subscribeLabel = document.querySelector('.subscribe-container label');

subscribeInput.addEventListener('focus', function() {
    subscribeLabel.classList.add('active');
})

subscribeInput.addEventListener('blur', function() {
    let subsInputValue = subscribeInput.value;
    console.log(subsInputValue);
    if(subsInputValue!="") {
        return;
    }
    else if(subsInputValue==""){
        subscribeLabel.classList.remove('active');
    }
})


// ------------------- Show/Hidden Show Img Product ----------------

const showImgProductModal = document.querySelector('.show-img-product-modal');
const productDetail = document.querySelector('.product-detail-left');

productDetail.addEventListener('click', function() {
    showImgProductModal.style.display='block';
    whiteModal.style.display='block';
    document.body.style.overflowY='hidden';
})

showImgProductModal.addEventListener('click', function() {
    showImgProductModal.style.display='none';
    document.body.style.overflowY='auto';

})



// --------------------- header nav bars show popup ----------------

const headerNavBarsItems = document.querySelectorAll('.header_nav-bars .header_nav-items');

const identityBarsMenu = document.querySelector('.header_nav-bars .identity_menu');

const narakaBarsMenu = document.querySelector('.header_nav-bars .naraka_menu');

const eggyBarsMenu = document.querySelector('.header_nav-bars .eggy_menu');

const youdaoBarsMenu = document.querySelector('.header_nav-bars .youdao_menu');

for(let i=0;i<headerNavBarsItems.length;i++) {
    if(i==0 || i==1 || i==2 || i==3) {
        headerNavBarsItems[i].addEventListener('click', function(event) {
            event.stopPropagation();
            if(i==0) {
                if(identityMenuFlag==false) {
                    identityMenuFlag = true;
                    identityBarsMenu.classList.add('show-menu');
                }
            }
            else if(i==1) {
                if(narakaMenuFlag==false) {
                    narakaMenuFlag = true;
                    narakaBarsMenu.classList.add('show-menu');
                }
            }
            else if(i==2) {
                if(eggyMenuFlag==false) {
                    eggyMenuFlag = true;

                    eggyBarsMenu.classList.add('show-menu');
                }
            }
            else if(i==3) {
                if(youdaoMenuFlag==false) {
                   youdaoMenuFlag=false;
                   youdaoBarsMenu.classList.add('show-menu'); 
                }
            }
        })
    }
}

// ----------------- Header bars hidden menu popup ----------------

const menuPopupItemsHidden = document.querySelectorAll('.header_nav-bars-container>ul>li:first-child');

for(let i=0;i<menuPopupItemsHidden.length;i++) {
    menuPopupItemsHidden[i].addEventListener('click', function(e) {
        e.preventDefault();
        if(i==0) {
            identityMenuFlag=false;
            identityBarsMenu.classList.remove('show-menu');
        }
        if(i==1) {
            narakaMenuFlag=false;
            narakaBarsMenu.classList.remove('show-menu');
        }
        if(i==2) {
            eggyMenuFlag=false;
            eggyBarsMenu.classList.remove('show-menu');
        }
        if(i==3) {
            youdaoMenuFlag=false;
            youdaoBarsMenu.classList.remove('show-menu');
        }
        if(i==4) {
            catergoriesBarsPopup.classList.remove('show-menu');
            catergoriesPopupFlag=false;
        }
        if(i==5) {
            seriesBarsPopup.classList.remove('show-menu');
            seriesPopupFlag=false;
        }
    })
}

function HiddenMenuPopupItems() {
    identityMenuFlag=false;
    identityBarsMenu.classList.remove('show-menu');
    narakaMenuFlag=false;
    narakaBarsMenu.classList.remove('show-menu');
    eggyMenuFlag=false;
    eggyBarsMenu.classList.remove('show-menu');
    youdaoMenuFlag=false;
    youdaoBarsMenu.classList.remove('show-menu');
}

// --------------- Show Button Container Merch --------------


function showProductControlFlex() {
    for(let i=0;i<containerFlex.length;i++) {
        if(i==0) {
            if(containerFlex[i].offsetWidth < calcContainerWidth(limitEditionCart)){
                productControlFlex[i].style.display='block';
            }
            else {
                productControlFlex[i].style.display='none';
            }
        }
        else if(i==1) {
            if(containerFlex[i].offsetWidth < calcContainerWidth(idvMerchOnSaleCart)){
                productControlFlex[i].style.display='block';
            }
            else {
                productControlFlex[i].style.display='none';
            }
        }
        else if(i==2) {
            if(containerFlex[i].offsetWidth < calcContainerWidth(workshopSeriesCart)){
                productControlFlex[i].style.display='block';
            }
            else {
                productControlFlex[i].style.display='none';
            }
        }
        else if(i==3) {
            if(containerFlex[i].offsetWidth < calcContainerWidth(frozenKingdomCart)){
                productControlFlex[i].style.display='block';
            }
            else {
                productControlFlex[i].style.display='none';
            }
        }
        else if(i==4) {
            if(containerFlex[i].offsetWidth < calcContainerWidth(moreOnmyojiMerchCart)){
                productControlFlex[i].style.display='block';
            }
            else {
                productControlFlex[i].style.display='none';
            }
        }
        else if(i==5) {
            if(containerFlex[i].offsetWidth < calcContainerWidth(youdaoSmartDeviceCart)){
                productControlFlex[i].style.display='block';
            }
            else {
                productControlFlex[i].style.display='none';
            }
        }
    }
}

showProductControlFlex();

function calcContainerWidth(cart) {
    return cart[0].offsetWidth*cart.length;
}


sliderProductAll(btnLeftControlFlex[0],btnRightControlFlex[0],limitEditionCart, containerFlex[0], currentPageFlex[0], totalPageFlex[0]);
sliderProductAll(btnLeftControlFlex[1],btnRightControlFlex[1],idvMerchOnSaleCart, containerFlex[1], currentPageFlex[1], totalPageFlex[1]);
sliderProductAll(btnLeftControlFlex[2],btnRightControlFlex[2],workshopSeriesCart, containerFlex[2], currentPageFlex[2], totalPageFlex[2]);
sliderProductAll(btnLeftControlFlex[3],btnRightControlFlex[3],frozenKingdomCart, containerFlex[3], currentPageFlex[3], totalPageFlex[3]);
sliderProductAll(btnLeftControlFlex[4],btnRightControlFlex[4],moreOnmyojiMerchCart, containerFlex[4], currentPageFlex[4], totalPageFlex[4]);
sliderProductAll(btnLeftControlFlex[5],btnRightControlFlex[5],youdaoSmartDeviceCart, containerFlex[5], currentPageFlex[5], totalPageFlex[5]);


// ----------------- PreventDefault Img ------------

function PreventDefaultImg() {
    const cartImg = document.querySelectorAll('.cart-img') 
    for(let i=0;i<cartImg.length;i++) {
    cartImg[i].addEventListener('click', function(e) {
        e.preventDefault();
    })
}
}

window.addEventListener('resize', function() {
    checkVisibilityContainer();
    const windowWidth = window.innerWidth;
    if(windowWidth < 750) {
        PreventDefaultImg();
    }
})

window.addEventListener('load', function() {
    checkVisibilityContainer();
    const windowWidth = window.innerWidth;
    if(windowWidth < 750) {
        PreventDefaultImg();
    }
})

// ---------------- Show Notificantion ------------------

const notification = document.querySelector('.notification');

setTimeout(function() {
    notification.classList.add('show')
}, 3000);

const btnCloseNotification = document.querySelector('.notice-container > button');

btnCloseNotification.addEventListener('click', function() {
    notification.classList.remove('show');
});

// -------------------- Get Info Product When Click To Card -------------


