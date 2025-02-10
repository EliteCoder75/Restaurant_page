
//import img from './images/menu.jpeg';
export function about() {
    
    const contentElement = document.querySelector("#content");
    const element = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.textContent= "À propos de nous Bienvenue chez [Nom du restaurant], le temple du poulet grillé ! Ici, tout tourne autour de la passion pour des saveurs authentiques, des marinades maison et une cuisson parfaite au feu de grill. Nos recettes sont inspirées des meilleures traditions culinaires, alliant épices savoureuses, ingrédients frais et savoir-faire artisanal. Chaque morceau de poulet est soigneusement préparé, mariné pendant des heures et grillé à la perfection pour offrir une expérience gustative unique. Que vous soyez amateur de saveurs épicées, de sauces gourmandes ou de grillades juteuses, [Nom du restaurant] est l’adresse idéale pour vous régaler. Dans une ambiance conviviale et chaleureuse, nous vous accueillons pour savourer nos spécialités, en famille, entre amis ou même en solo. 🔥 Poulet mariné avec passion, grillé à la perfection 🔥 Venez découvrir notre secret… et laissez-vous tenter ! 📍 Adresse : 54 rue gabriel périe 📞 Réservations : 04525623 🌐 Site web : crousti.com";
    // Lodash, now imported by this script
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //element.classList.add('hello');
 
   // Add the image to our existing div.
   /*const myIcon = new Image();
   myIcon.src = img;
 
   contentElement.appendChild(myIcon);*/
   contentElement.appendChild(paragraph);
    
    return element;
  }  