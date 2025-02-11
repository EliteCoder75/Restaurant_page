import img from './images/image.jpeg';
//require('./style.css');



export function component() {
    
  const contentElement = document.querySelector("#content");
  const element = document.createElement('div');
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


  