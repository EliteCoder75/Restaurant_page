
//import img from './images/menu.jpeg';
export function about() {
    
    const contentElement = document.querySelector("#content");
    const paragraph = document.createElement('p');
    paragraph.innerHTML= "À propos de nous Bienvenue chez Crousti, le temple du poulet grillé ! Ici, tout tourne autour de la passion pour des saveurs authentiques, des marinades maison et une cuisson parfaite au feu de grill. Nos recettes sont inspirées des meilleures traditions culinaires, alliant épices savoureuses, ingrédients frais et savoir-faire artisanal. Chaque morceau de poulet est soigneusement préparé, mariné pendant des heures et grillé à la perfection pour offrir une expérience gustative unique. Que vous soyez amateur de saveurs épicées, de sauces gourmandes ou de grillades juteuses, Crousti est l’adresse idéale pour vous régaler. Dans une ambiance conviviale et chaleureuse, nous vous accueillons pour savourer nos spécialités, en famille, entre amis ou même en solo. <br> 🔥 Poulet mariné avec passion, grillé à la perfection <br>  🔥 Venez découvrir notre secret… et laissez-vous tenter ! <br>📍 Adresse : 54 rue gabriel périe <br> 📞 Réservations : 04525623 <br>🌐 Site web : crousti.com";
    paragraph
   contentElement.appendChild(paragraph);
    
   contentElement.style = 'display: flex';
   
   paragraph.style.alignSelf = 'center';
   paragraph.style.width = '80%';
   paragraph.style.height = '400px';
   paragraph.style.margin = 'auto';
    return contentElement;
  }  