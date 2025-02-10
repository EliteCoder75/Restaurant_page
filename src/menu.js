import img from './images/menu.jpeg';
export function menu() {  
    const contentElement = document.querySelector("#content");
    const element = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.textContent= "crousti begin road";
    // Lodash, now imported by this script
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //element.classList.add('hello');
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = img;
   contentElement.appendChild(myIcon);
   contentElement.appendChild(paragraph);
   return element;
  }

