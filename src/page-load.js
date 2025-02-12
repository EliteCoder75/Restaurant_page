import img from './images/image.jpeg';



export function component() {
    
  const contentElement = document.querySelector("#content");
  contentElement.classList.add("menu");
  const myIcon = new Image();
  myIcon.src = img;
  myIcon.classList.add("icon");
  contentElement.appendChild(myIcon);
  return contentElement;

  } 

  


  