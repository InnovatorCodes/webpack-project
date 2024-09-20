import "./styles.css";
import createHomePage from "./homePage.js";
import createMenuPage from "./menuPage.js";
import createAboutPage from "./aboutPage.js";
import createContactPage from "./contactPage.js";

let currentPage='home';
let maindiv;

const content=document.querySelector('#content');

maindiv=createHomePage();
window.addEventListener('load',()=>{
    setTimeout(()=>{
        content.appendChild(maindiv);
        document.body.style.display="block";
        maindiv.classList.remove('hidden');
    },500);
})

document.addEventListener('click',(event)=>{
    let target=event.target;
    if(target.id=='homebtn' && currentPage!='home'){
        document.body.classList.add('no-scroll');
        currentPage='home';
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('#homebtn').classList.add('selected');
        maindiv.style.animation='slideOutDiv 0.5s forwards';
        setTimeout(() => {
            content.removeChild(maindiv);
            maindiv=createHomePage();
            content.appendChild(maindiv);
            maindiv.classList.remove('hidden');
            maindiv.style.animation="slideInDiv 0.5s forwards";
            setTimeout(()=>{
                document.body.classList.remove('no-scroll');
            },500);
        }, 500);
    };

    if(target.id=='menubtn' && currentPage!='menu'){
        currentPage='menu';
        document.body.classList.add('no-scroll');
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('#menubtn').classList.add('selected');
        maindiv.style.animation='slideOutDiv 0.5s forwards';
        setTimeout(() => {
            content.removeChild(maindiv);
            maindiv=createMenuPage();
            content.appendChild(maindiv);
            maindiv.classList.remove('hidden');
            maindiv.style.animation="slideInDiv 0.5s forwards";
            setTimeout(()=>{
                document.body.classList.remove('no-scroll');
            },600);     
        }, 500);
    }

    if(target.id=='aboutbtn' && currentPage!='about'){
        currentPage='about';
        document.body.classList.add('no-scroll');
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('#aboutbtn').classList.add('selected');
        maindiv.style.animation='slideOutDiv 0.5s forwards';
        setTimeout(() => {
            content.removeChild(maindiv);
            maindiv=createAboutPage();
            content.appendChild(maindiv);
            maindiv.classList.remove('hidden');
            maindiv.style.animation="slideInDiv 0.5s forwards";
            setTimeout(()=>{
                document.body.classList.remove('no-scroll');
            },500);
        }, 500);
    }

    if(target.id=='contactbtn' && currentPage!='contact'){
        currentPage='contact';
        document.body.classList.add('no-scroll');
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('#contactbtn').classList.add('selected');
        maindiv.style.animation='slideOutDiv 0.5s forwards';
        setTimeout(() => {
            content.removeChild(maindiv);
            maindiv=createContactPage();
            content.appendChild(maindiv);
            maindiv.classList.remove('hidden');
            maindiv.style.animation="slideInDiv 0.5s forwards";
            document.body.classList.remove('no-scroll');
        }, 500);
    }
})

