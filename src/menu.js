
import img from './images/menu.jpeg';
export function menu() {
    const contentElement = document.querySelector("#content");
    const paragraph = document.createElement('p');
    contentElement.style = 'display: flex';
    const myIcon = new Image();
    myIcon.src = img;
    myIcon.style.alignSelf = 'center';
    myIcon.style.width = '80%';
    myIcon.style.height = '40%';
    myIcon.style.margin = 'auto';
    contentElement.appendChild(myIcon);
    return contentElement;
}

  
    