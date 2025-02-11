
import {component} from './page-load.js';
import {menu} from './menu.js';
import {about} from './about.js';

console.log("salem");

const home = document.querySelector("button#home");
const menuu = document.querySelector("button#menuu");
const aboutt = document.querySelector("button#aboutt");


//console.log(mn).id;
//const bts = document.querySelectorAll('button');


(function default_load()
    {
      document.body.appendChild(component()); 
    })() ;

(function load()
{
  home.addEventListener('click', (event)=>
    {
      event.preventDefault();
      document.querySelector("#content").innerHTML = ""; 
      document.body.appendChild(component()); 
    }
  );

  //const mn = document.querySelector("#menu");
  menuu.addEventListener('click', (event)=>
    {
      event.preventDefault();
      document.querySelector("#content").innerHTML = ""; 
      document.body.appendChild(menu()); 
    });
  
  aboutt.addEventListener('click', (event)=>
    {
      //event.preventDefault();
      document.querySelector("#content").innerHTML = ""; 
      document.body.appendChild(about()); 
    }
  );

})();
