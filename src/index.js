import "./styles.css";
import createHomePage from "./homePage.js";
import createMenuPage from "./menuPage.js";
import createAboutPage from "./aboutPage.js";
import createContactPage from "./contactPage.js";

let currentPage='home';
let maindiv;

const content=document.querySelector('#content');

window.addEventListener('load',()=>{
    maindiv=createHomePage();
    content.appendChild(maindiv);
})

document.addEventListener('click',(event)=>{
    let target=event.target;
    if(target.id=='homebtn' && currentPage!='home'){
        currentPage='home';
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('#homebtn').classList.add('selected');
        content.removeChild(maindiv);
        maindiv=createHomePage();
        content.appendChild(maindiv);
        
    };

    if(target.id=='menubtn' && currentPage!='menu'){
        content.removeChild(maindiv);
        currentPage='menu';
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('#menubtn').classList.add('selected');
        maindiv=createMenuPage();
        content.appendChild(maindiv);
    }

    if(target.id=='aboutbtn' && currentPage!='about'){
        content.removeChild(maindiv);
        currentPage='about';
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('#aboutbtn').classList.add('selected');
        maindiv=createAboutPage();
        content.appendChild(maindiv);
    }

    if(target.id=='contactbtn' && currentPage!='contact'){
        content.removeChild(maindiv);
        currentPage='contact';
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('#contactbtn').classList.add('selected');
        maindiv=createContactPage();
        content.appendChild(maindiv);
    }
})

