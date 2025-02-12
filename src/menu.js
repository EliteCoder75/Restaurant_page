
import img from './images/menu.jpeg';
import { header, main } from "./index.js";


export function menu() {
    const contentElement = document.querySelector("#content");
    const paragraph = document.createElement('p');
    contentElement.classList.add("menu");
    const myIcon = new Image();
    myIcon.src = img;
    myIcon.classList.add("icon");
    contentElement.appendChild(myIcon);
    return contentElement;
}

  
    