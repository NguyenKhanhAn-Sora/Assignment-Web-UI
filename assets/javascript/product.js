const galleryList = document.querySelector('.gallery-list');
const galleryItems = document.querySelectorAll('.gallery-items');
const galleryItemsImg = document.querySelectorAll('.gallery-items img');

for(let i=0;i<galleryItems.length;i++) {
    galleryItems[i].addEventListener('click', function() {
        const currentShowImg = document.querySelector('.product-detail-show-img>img');
        currentShowImg.src = galleryItemsImg[i].src;
        for(let k=0;k<galleryItems.length;k++) {
            galleryItems[k].classList.remove('active');
        }
        galleryItems[i].classList.add('active');
    })
}

const galleryLeftControl = document.querySelector('.gallery-left-control');
const galleryRightControl = document.querySelector('.gallery-right-control');

function sliderGallery() {
    let galleryCheckPage = 0;
    if(galleryCheckPage==0) {
        galleryLeftControl.classList.add('min-limit');
    }
    if(galleryCheckPage==galleryItems.length-4) {
        galleryRightControl.classList.add('max-limit');
    }
    galleryLeftControl.addEventListener('click', function(e) {
            galleryCheckPage--;
            if(galleryCheckPage==0) {
                galleryLeftControl.classList.add('min-limit');
            }
            galleryList.style.transform = `translateX(-${(galleryItems[0].offsetWidth + 10)*galleryCheckPage}px)`
            galleryRightControl.classList.remove('max-limit');
    })

    galleryRightControl.addEventListener('click', function(e) {
        
            galleryCheckPage++;
            if(galleryCheckPage==galleryItems.length-4) {
                galleryRightControl.classList.add('max-limit');
            }
            galleryList.style.transform = `translateX(-${(galleryItems[0].offsetWidth + 10)*galleryCheckPage}px`;
            galleryLeftControl.classList.remove('min-limit');
    })
}

sliderGallery();

// ----------------------------------------------

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
    languageList.classList.remove('active');
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
const whiteModal = document.querySelector('.white_modal');
const headerSearchFlag = false;

const headerUserItems = document.querySelectorAll('.header_user .header_user-items');
console.log(headerUserItems )
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
const productDetailShowImg = document.querySelector('.product-detail-show-img');

productDetailShowImg.addEventListener('click', function() {
    showImgProductModal.style.display='block';
    document.body.style.overflowY='hidden'
})

showImgProductModal.addEventListener('click', function() {
    showImgProductModal.style.display='none';
    document.body.style.overflowY='auto'

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
    const windowWidth = window.innerWidth;
    if(windowWidth < 750) {
        PreventDefaultImg();
    }
})

window.addEventListener('load', function() {
    const windowWidth = window.innerWidth;
    if(windowWidth < 750) {
        PreventDefaultImg();
    }
})