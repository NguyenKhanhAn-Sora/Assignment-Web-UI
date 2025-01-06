// // ----------------- Video Opening -----------------

const videoBackgroundContainer = document.getElementById('video_background');
const myvideoBacground = document.getElementById('myvideoBackground');
document.body.style.overflowY = 'hidden';

setTimeout(function() {
    videoBackgroundContainer.style.display="block";
}, 2000);

// ---------------- Main Opening ---------------

const main = document.getElementById('main');

setTimeout(function() {
    videoBackgroundContainer.style.opacity="0";
    videoBackgroundContainer.style.visibility='hidden';
},10000);

setTimeout(function() {
    main.style.opacity = '1';
    main.style.visibility = 'visible';
    document.body.style.overflowY = 'auto';
},9000)


// ------------------ Active Language --------------------

const languageActive = document.getElementById('language_active');
const language = document.getElementsByClassName('language')[0];
const languageItemsLink = document.getElementsByClassName('language_items-link');
const languageList = document.getElementsByClassName('language_list')[0];

for(let i=0;i<languageItemsLink.length;i++) {
    languageItemsLink[i].addEventListener('click', function(event) {
        event.preventDefault();
        let contentLanguage = languageItemsLink[i].innerHTML;
        languageActive.innerHTML = contentLanguage;
        for(let k=0;k<languageItemsLink.length;k++) {
            languageItemsLink[k].style.color ="#dde8f1";
        }
        languageItemsLink[i].style.color = '#d07491';
    })
}

