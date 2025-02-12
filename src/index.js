
import "./style.css";

import {component} from './page-load.js';
import {menu} from './menu.js';
import {about} from './about.js';



const home = document.querySelector("button#home");
const menuu = document.querySelector("button#menuu");
const aboutt = document.querySelector("button#aboutt");


function clearPage(e) {
  Array.from(document.querySelector("#content").childNodes).forEach((child) => child.remove());
}

(function default_load()
    {
      document.body.appendChild(component()); 
    })() ;

(function load()
{
  home.addEventListener('click', (event)=>
    {
      clearPage();
      document.body.appendChild(component()); 
    }
  );

  menuu.addEventListener('click', (event)=>
    {
      clearPage();
      document.body.appendChild(menu()); 
    });

  aboutt.addEventListener('click', (event)=>
    {
      clearPage(); 
      document.body.appendChild(about()); 
    }
  );
})();
