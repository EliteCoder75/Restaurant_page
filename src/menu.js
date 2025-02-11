
import img from './images/menu.jpeg';
export function menu() {
    const contentElement = document.querySelector("#content");
    const element = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.textContent= "crousti begin road";
    const myIcon = new Image();
    myIcon.src = img;
    contentElement.appendChild(myIcon);
    contentElement.appendChild(paragraph);
    return element;
}

  
    