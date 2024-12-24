// ------------------ Header Scroll -----------------

let lastScrollY = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentSCrollY = window.scrollY;

    if(currentSCrollY > lastScrollY) {
        header.classList.remove('scrollup');
        header.classList.add('scrolldow');
    }
    else if(currentSCrollY < lastScrollY) {
        header.classList.add('scrollup');
        header.classList.remove('scrolldow');
    }

    lastScrollY = currentSCrollY;
})

// ------------------ Popup Menu Generation ------------------

const headerNavItems = document.getElementsByClassName('header_nav-items');

const identityMenu = document.getElementsByClassName('identity_menu')[0];
let identityMenuFlag = false;

const narakaMenu = document.getElementsByClassName('naraka_menu')[0];
let narakaMenuFlag = false;

const eggyMenu = document.getElementsByClassName('eggy_menu')[0];
let eggyMenuFlag = false;

const youdaoMenu = document.getElementsByClassName('youdao_menu')[0];
let youdaoMenuFlag = false;

for(let i=0;i<headerNavItems.length;i++) {
    if(i==0 || i==1 || i==2 || i==3) {
        headerNavItems[i].addEventListener('click', function(event) {
            if(i==0) {
                if(identityMenuFlag==false) {
                    narakaMenu.style.display = 'none';
                    eggyMenu.style.display='none';
                    youdaoMenu.style.display='none';
                    eggyMenuFlag = false;
                    narakaMenuFlag = false;
                    youdaoMenuFlag = false;
                    identityMenu.style.display = "block";
                    identityMenuFlag = true;

                    // -------------- archero up ----------------

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
                    identityMenu.style.display="none";
                    identityMenuFlag = false;
                    headerNavItems[i].classList.toggle('active');
                    
                }
            }
            else if(i==1) {
                if(narakaMenuFlag==false) {
                    eggyMenu.style.display='none';
                    youdaoMenu.style.display='none';
                    identityMenu.style.display = "none";
                    eggyMenuFlag = false;
                    identityMenuFlag = false;
                    youdaoMenuFlag = false;
                    narakaMenu.style.display = 'block';
                    narakaMenuFlag = true;

                    // -------------- archero up ----------------

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
                    narakaMenu.style.display="none";
                    narakaMenuFlag = false;
                    headerNavItems[i].classList.toggle('active');

                }
            }
            else if(i==2) {
                if(eggyMenuFlag==false) {
                    narakaMenu.style.display='none';
                    youdaoMenu.style.display='none';
                    identityMenu.style.display = "none";
                    identityMenuFlag = false;
                    youdaoMenuFlag = false;
                    narakaMenuFlag = false;
                    eggyMenu.style.display = 'block';
                    eggyMenuFlag = true;

                    // -------------- archero up ----------------

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
                    eggyMenu.style.display="none";
                    eggyMenuFlag = false;
                    headerNavItems[i].classList.toggle('active');
                }
            }
            else if(i==3) {
                if(youdaoMenuFlag==false) {
                    narakaMenu.style.display='none';
                    eggyMenu.style.display='none';
                    identityMenu.style.display = "none";
                    identityMenuFlag = false;
                    narakaMenuFlag = false;
                    eggyMenuFlag = false;
                    youdaoMenu.style.display = 'block';
                    youdaoMenuFlag= true;

                    // -------------- archero up ----------------

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
                    youdaoMenu.style.display="none";
                    youdaoMenuFlag = false;
                    headerNavItems[i].classList.toggle('active');
                }
            }
        })
    }
}



// -------------------- Popup Menu Identity---------------

const identityMenuItems = document.getElementsByClassName('identity_menu-items');
const catergoriesPopup = document.getElementsByClassName('categories_popup')[0];
let catergoriesPopupFlag = false;
const seriesPopup = document.getElementsByClassName('series_popup')[0];
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


// ---------------------- Header Search ----------------------
// ---------------- Header Search Check ---------------------

const headerSearchInput = document.getElementById('header_search-input');
const headerSearchLabel = document.getElementById('header_search-label');


const searchInputCheck = document.getElementsByClassName('search_input-check')[0];
const searchInfo = document.getElementsByClassName('search-info')[0];

const closeCircleIcon = document.getElementsByClassName('close-circle--icon')[0];
const searchInputLine = document.getElementsByClassName('search_input-line')[0];

headerSearchInput.addEventListener('focus', function() {
    let headerSearchInputValue = headerSearchInput.value;
    headerSearchLabel.classList.add('active');
    if(headerSearchInputValue.trim()!="") {
        searchInputCheck.style.display='flex';
    }
    
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
const whiteModal = document.getElementsByClassName('white_modal')[0];

const headerUserItems = document.getElementsByClassName('header_user-items');

headerUserItems[0].addEventListener('click', function(event) {
    event.preventDefault();
    headerSearch.style.display='block';
    headerBottom.style.opacity = '0';
    whiteModal.style.display='block'
})

btnCloseHeaderSearch.addEventListener('click', function() {
    headerBottom.style.opacity='1';
    headerSearch.style.display='none';
    whiteModal.style.display='none';
})

whiteModal.addEventListener('click', function() {
    headerBottom.style.opacity='1';
    headerSearch.style.display='none';
    whiteModal.style.display='none';
})


// ---------------- Slider Banner -----------------------
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
        if(slideShowCount>3) {
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


function showCurrentPage(currpage, checkpage) {
    currpage.textContent = (checkpage+1);
}

function showTotalPage(totalpage, checktotalpage) {
    totalpage.textContent = `/${checktotalpage}`;
}

showSlider();

// -------------------- Cost ----------------

const originalCost = document.getElementsByClassName('original-cost');
const showCost = document.getElementsByClassName('show-cost');


function cost() {
    for(let i=0;i<originalCost.length;i++) {
        const originalCostValue = originalCost[i].innerHTML.trim();
        if(originalCostValue!="") {
            originalCost[i].style.width = '23%'; 
        }
    }  
}

cost();

// --------------------- Product Slide Eggy ---------------

const eggyCart = document.getElementsByClassName('eggy-cart');
const productContainer = document.getElementsByClassName('product-container')[0];

const btnLeftControlProductEggy = document.querySelector('.eggy-product .btn-left-control');
const btnRightControlProductEggy = document.querySelector('.eggy-product .btn-right-control')

const eggyCurrentPage = document.querySelector('.eggy-product .current-page');

const eggyTotalPage = document.querySelector('.eggy-product .total-page');

function checkPageEggyProduct() {
    let productEggyCheckPage = 0;
    btnRightControlProductEggy.addEventListener('click', function() {
        ++productEggyCheckPage;
        if(productEggyCheckPage>(Math.ceil(eggyCart.length/5))-1) {
            productEggyCheckPage=0;
        }
        if(productEggyCheckPage==(Math.ceil(eggyCart.length/5))-1) {
            if(eggyCart.length%5==1) {
                productContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*4}px)`
            }
            else if(eggyCart.length%5==2) {
                productContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*3}px)`
                
            }
            else if(eggyCart.length%5==3) {
                productContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*2}px)`
                
            }
            else if(eggyCart.length%5==4) {
                productContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375}px)`
            }
        }
        else {
            console.log(productEggyCheckPage);
            productContainer.style.transform = `translateX(-${productEggyCheckPage*375*5}px)`
        }
        showCurrentPage(eggyCurrentPage, productEggyCheckPage)
    })

    btnLeftControlProductEggy.addEventListener('click', function() {
        --productEggyCheckPage;
        if(productEggyCheckPage<0) {
            productEggyCheckPage=Math.ceil(eggyCart.length/5)-1;
            if(eggyCart.length%5==1) {
                productContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*4}px)`
            }
            else if(eggyCart.length%5==2) {
                productContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*3}px)`
                
            }
            else if(eggyCart.length%5==3) {
                productContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*2}px)`
                
            }
            else if(eggyCart.length%5==4) {
                productContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375}px)`
            }
        }
        else {
            console.log(productEggyCheckPage);
            productContainer.style.transform = `translateX(-${productEggyCheckPage*375*5}px)`
        }
        showCurrentPage(eggyCurrentPage, productEggyCheckPage)

    })
}
showTotalPage(eggyTotalPage, Math.ceil(eggyCart.length/5))
// console.log(eggyTotalPage);

checkPageEggyProduct();

// -------------------- Eggy Merch On Sale ----------------

const  btnLeftControlEggyMerchOnSale = document.querySelector('.eggy-merch-on-sale .btn-left-control');
const  btnRightControlEggyMerchOnSale = document.querySelector('.eggy-merch-on-sale .btn-right-control');

const eggyMerchOnSaleCart = document.querySelectorAll('.eggy-merch-on-sale .cart');
const eggyMerchOnSaleContainer = document.querySelector('.eggy-merch-on-sale .eggy-merch-on-sale-container');

const eggyMerchOnSaleCurrentPage = document.querySelector('.eggy-merch-on-sale .current-page');
const eggyMerchOnSaleTotalPage = document.querySelector('.eggy-merch-on-sale .total-page');



function checkPageEggyMerchOnSale() {
    let productEggyCheckPage = 0;
    btnRightControlEggyMerchOnSale.addEventListener('click', function() {
        ++productEggyCheckPage;
        if(productEggyCheckPage>(Math.ceil(eggyMerchOnSaleCart.length/5))-1) {
            productEggyCheckPage=0;
        }
        if(productEggyCheckPage==(Math.ceil(eggyMerchOnSaleCart.length/5))-1) {
            if(eggyMerchOnSaleCart.length%5==1) {
                eggyMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*4}px)`
            }
            else if(eggyMerchOnSaleCart.length%5==2) {
                eggyMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*3}px)`
                
            }
            else if(eggyMerchOnSaleCart.length%5==3) {
                eggyMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*2}px)`
                
            }
            else if(eggyMerchOnSaleCart.length%5==4) {
                eggyMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375}px)`
            }
        }
        else {
            eggyMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5}px)`
        }
        showCurrentPage(eggyMerchOnSaleCurrentPage, productEggyCheckPage);
    })

    btnLeftControlEggyMerchOnSale.addEventListener('click', function() {
        --productEggyCheckPage;
        if(productEggyCheckPage<0) {
            productEggyCheckPage=Math.ceil(eggyMerchOnSaleCart.length/5)-1;
            if(eggyMerchOnSaleCart.length%5==1) {
                eggyMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*4}px)`
            }
            else if(eggyMerchOnSaleCart.length%5==2) {
                eggyMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*3}px)`
                
            }
            else if(eggyMerchOnSaleCart.length%5==3) {
                eggyMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*2}px)`
                
            }
            else if(eggyMerchOnSaleCart.length%5==4) {
                eggyMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375}px)`
            }
        }
        else {
            console.log(productEggyCheckPage);
            eggyMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5}px)`
        }
        showCurrentPage(eggyMerchOnSaleCurrentPage, productEggyCheckPage);

    })
}

showTotalPage(eggyMerchOnSaleTotalPage, Math.ceil(eggyMerchOnSaleCart.length/5));
checkPageEggyMerchOnSale();

// ----------------------- More Eggy merch --------------

const btnLeftControlMoreEggyMerch = document.querySelector('.more-eggy-merch .btn-left-control');
const btnRightControlMoreEggyMerch = document.querySelector('.more-eggy-merch .btn-right-control');

const moreEggyMerchContainer = document.querySelector('.more-eggy-merch .more-eggy-merch-container');
const moreEggyMerchCart = document.querySelectorAll('.more-eggy-merch .more-eggy-merch-cart');

const moreEggyMerchCurrentPage = document.querySelector('.more-eggy-merch .current-page');
const moreEggyMerchTotalPage = document.querySelector('.more-eggy-merch .total-page');

function checkPageMoreEggyMerch() {
    let productEggyCheckPage = 0;
    btnRightControlMoreEggyMerch.addEventListener('click', function() {
        ++productEggyCheckPage;
        if(productEggyCheckPage>(Math.ceil(moreEggyMerchCart.length/5))-1) {
            productEggyCheckPage=0;
        }
        if(productEggyCheckPage==(Math.ceil(moreEggyMerchCart.length/5))-1) {
            if(moreEggyMerchCart.length%5==1) {
                moreEggyMerchContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*4}px)`
            }
            else if(moreEggyMerchCart.length%5==2) {
                moreEggyMerchContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*3}px)`
                
            }
            else if(moreEggyMerchCart.length%5==3) {
                moreEggyMerchContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*2}px)`
                
            }
            else if(moreEggyMerchCart.length%5==4) {
                moreEggyMerchContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375}px)`
            }
        }
        else {
            moreEggyMerchContainer.style.transform = `translateX(-${productEggyCheckPage*375*5}px)`
        }
        showCurrentPage(moreEggyMerchCurrentPage, productEggyCheckPage);
    })

    btnLeftControlMoreEggyMerch.addEventListener('click', function() {
        --productEggyCheckPage;
        if(productEggyCheckPage<0) {
            productEggyCheckPage=Math.ceil(moreEggyMerchCart.length/5)-1;
            if(moreEggyMerchCart.length%5==1) {
                moreEggyMerchContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*4}px)`
            }
            else if(moreEggyMerchCart.length%5==2) {
                moreEggyMerchContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*3}px)`
                
            }
            else if(moreEggyMerchCart.length%5==3) {
                moreEggyMerchContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*2}px)`
                
            }
            else if(moreEggyMerchCart.length%5==4) {
                moreEggyMerchContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375}px)`
            }
        }
        else {
            console.log(productEggyCheckPage);
            moreEggyMerchContainer.style.transform = `translateX(-${productEggyCheckPage*375*5}px)`
        }
        showCurrentPage(moreEggyMerchCurrentPage, productEggyCheckPage);

    })
}

showTotalPage(moreEggyMerchTotalPage, Math.ceil(moreEggyMerchCart.length/5));
checkPageMoreEggyMerch();

// ------------------- naraka Merch On Sale ---------------

const btnLeftControlNarakaMerchOnSale = document.querySelector('.naraka-merch-on-sale .btn-left-control');
const btnRightControlNarakaMerchOnSale = document.querySelector('.naraka-merch-on-sale .btn-right-control');

const narakaMerchOnSaleCart =document.querySelectorAll('.naraka-merch-on-sale .naraka-merch-on-sale-cart');
const narakaMerchOnSaleContainer = document.querySelector('.naraka-merch-on-sale-container');

const narakaMerchOnSaleCurrentPage = document.querySelector('.naraka-merch-on-sale .current-page');
const narakaMerchOnSaleTotalPage = document.querySelector('.naraka-merch-on-sale .total-page');

function checkPageNarakaMerchOnSale() {
    let productEggyCheckPage = 0;
    btnRightControlNarakaMerchOnSale.addEventListener('click', function() {
        ++productEggyCheckPage;
        if(productEggyCheckPage>(Math.ceil(narakaMerchOnSaleCart.length/5))-1) {
            productEggyCheckPage=0;
        }
        if(productEggyCheckPage==(Math.ceil(narakaMerchOnSaleCart.length/5))-1) {
            if(narakaMerchOnSaleCart.length%5==1) {
                narakaMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*4}px)`
            }
            else if(narakaMerchOnSaleCart.length%5==2) {
                narakaMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*3}px)`
                
            }
            else if(narakaMerchOnSaleCart.length%5==3) {
                narakaMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*2}px)`
                
            }
            else if(narakaMerchOnSaleCart.length%5==4) {
                narakaMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375}px)`
            }
        }
        else {
            narakaMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5}px)`
        }
        showCurrentPage(narakaMerchOnSaleCurrentPage, productEggyCheckPage);
    })

    btnLeftControlNarakaMerchOnSale.addEventListener('click', function() {
        --productEggyCheckPage;
        if(productEggyCheckPage<0) {
            productEggyCheckPage=Math.ceil(narakaMerchOnSaleCart.length/5)-1;
            if(narakaMerchOnSaleCart.length%5==1) {
                narakaMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*4}px)`
            }
            else if(narakaMerchOnSaleCart.length%5==2) {
                narakaMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*3}px)`
                
            }
            else if(narakaMerchOnSaleCart.length%5==3) {
                narakaMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375*2}px)`
                
            }
            else if(narakaMerchOnSaleCart.length%5==4) {
                narakaMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5-375}px)`
            }
        }
        else {
            console.log(productEggyCheckPage);
            narakaMerchOnSaleContainer.style.transform = `translateX(-${productEggyCheckPage*375*5}px)`
        }
        showCurrentPage(narakaMerchOnSaleCurrentPage, productEggyCheckPage);

    })
}

showTotalPage(narakaMerchOnSaleTotalPage, Math.ceil(narakaMerchOnSaleCart.length/5));
checkPageNarakaMerchOnSale();