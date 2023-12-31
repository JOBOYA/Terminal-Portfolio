var data = {
  "english":
  {
    "welcome" : "Welcome to my portfolio ! To display the available commands type <code>help</code>. To validate each command press <em>Enter</em>, you can use the <em>Tabulation</em> key to help you complete a command.",

    "information" : "This site was entirely created using <code>HTML</code>, <code>CSS</code> and <code>Javascript</code> without using any library or framework. This site contains a large number of features (hidden animations, secret themes, etc.) but also a well-hidden <code>easter egg</code> that only developers can find. Good discovery!",

    "btnpopup" : "Continue",

    "help" : `<li><code>about-me</code>: Display information about me</li>
    <li><code>clear</code>: Clean the terminal</li>
    <li><code>experiences</code>: Displays the list of my experiences</li>
    <li><code>get cv</code>: Download my CV</li>
    <li><code>get linkedin</code>: Link to my Linkedin</li>
    <li><code>get github</code>: Link to my Github</li>
    <li><code>help</code>: Displays the list of commands</li>
    <li><code>passions</code>: Displays the list of my hobbies</li>
    <li><code>my-projects</code>: Displays the list of my personal projects</li>
    <li><code>themes</code>: Change the terminal theme</li>
    <li><em>You can use the TAB key to complete a command line</em></li>
    <li><em>You can find the old commands with the up and down arrows</em></li>`,

    "aboutme" : `{<br>
      &nbsp;&nbsp;&nbsp;"name" : "Joseph Boyadjian",<br>
      &nbsp;&nbsp;&nbsp;"formation": "Digital Campus 2022-2023",<br>
      &nbsp;&nbsp;&nbsp;"language" : "JS, HTML, CSS, Git",<br>
      &nbsp;&nbsp;&nbsp;"framework" : "React, Nextjs",<br>
      &nbsp;&nbsp;&nbsp;"tools": "GitHub, Heroku, Figma",<br>
      &nbsp;&nbsp;&nbsp;"softSkills": "Agile Method, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;"favoriteIDE": "VS Code",<br>
      &nbsp;&nbsp;&nbsp;"city" : "Châteauneuf-sur-isère, France"<br>
    }`,

    "experience" : `<tr>
    <th>Date</th>
    <th>Entreprise</th>
    <th>Poste</th>
    <th class="description">Description</th>
  </tr>
  <tr>
    <td class="center">Avril 2023 - Juillet 2023</td>
    <td>FBSimulateur</td>
    <td>Développeur web front-end</td>
    <td>Travail en équipe, concevoir et développer un simulateur de choix de statut juridique
    React, TypeScript et Tailwind CSS et de conception d'API REST.</td>
  </tr> 
  <tr>
    <td class="center">Avril 2023</td>
    <td> The Lab coworking</td>
    <td>Développeur web front-end</td>
    <td>Gestion de projets
    Développement de la partie Front</td>
  </tr> 
  <tr>
    <td class="center">Janv 2023 - Mars 2023</td>
    <td>KOLIVING</td>
    <td>Stage Développeur full stack</td>
    <td>Correction des erreurs sur les lignes de code.
    Contrôle du bon fonctionnement du site web et de la qualité de navigation.</td>
  </tr>`,

  "cv" : `The resume upload will begin.`,

  "redirectLinkedin" : `You will be redirected to Linkedin.`,

  "redirectGithub" : `You will be redirected to Github.`,

  "hobby" : `{<br>
    &nbsp;&nbsp;&nbsp;"Sport": "Fitness, Boxe",<br>
    &nbsp;&nbsp;&nbsp;"Programming": "JS, Typescript, Mining & Blockchain",<br>
    &nbsp;&nbsp;&nbsp;"Other" : "Cuisiner, Musique"<br>
  }`,

  "project" : `<table class="result">
  <tr>
  <th>index</th>
  <th>Nom</th>
  <th>Tech</th>
  <th class="description">Description</th>
  <th>En equipe?</th>
  <th>Github</th>
</tr>
<tr>
  <td class="center">1</td>
  <td class="center">Restaurant "La Bohême"</td>
  <td class="center">HTML CSS JS BOOTSTRAP GIT API_NOTION MYSQL NODEJS HEROKU</td>
  <td>Présentation du restaurant, réservation de table ainsi que le menu</td>
  <td class="center">Non</td>
  <td class="center"><a href="https://laboheme-valence.fr/" target="blank">Lien</a></td>
</tr> 
<tr>
  <td class="center">2</td>
  <td class="center">KOLIFLUX</td>
  <td class="center">REACT TYPESCRIPT CSS NODEJS JWT RENDER API REST</td>
  <td>Importation de l'api "se loger" et recherche d'annonces immobilières</td>
  <td class="center">Oui</td>
  <td class="center"><a href=https://taupe-hummingbird-5f0d47.netlify.app/" target="blank">Lien</a></td>
</tr> 
<tr>
  <td class="center">3</td>
  <td class="center">Charles Cantin</td>
  <td class="center">NEXT TAILWIND Git </td>
  <td>Ce projet offre une expérience de photographie professionnelle pour diverses occasions - des mariages et des événements d'entreprise aux séances photos en famille et portraits personnels.</td>
  <td class="center">Non</td>
  <td class="center"><a href="https://celadon-eclair-1703ea.netlify.app/" target="blank">Lien</a></td>
</tr> 
<tr>
  <td class="center">4</td>
  <td class="center">KanBan AI</td>
  <td class="center">VITE TYPESCRIPT TAILWIND</td>
  <td>Une application web de gestion de tâches et de projets, enrichie par l'implémentation de GPT pour la synthèse automatique et le résumé des tâches. L'objectif est de simplifier la planification et le suivi des projets tout en offrant des insights basés sur l'IA pour améliorer la productivité.</td>
  <td class="center">Non</td>
  <td class="center"><a href="https://tangerine-brioche-38768e.netlify.app/" target="blank">Lien</a></td>
</tr> 
<tr>
  <td class="center">5</td>
  <td class="center">FBSimulateur</td>
  <td class="center">REACT TYPESCRIPT CSS TAILWIND NODEJS APIREST</td>
  <td>Grace à ce simulateur, vous saurez quelle forme juridique est la plus adaptée à votre activité, à votre situation personnelle et à vos besoins !</td>
  <td class="center">Oui</td>
  <td class="center"><a href="https://maformejuridique.fr/" target="blank">Lien</a></td>
</tr> 
</tr>
</table><br>

  <p class="result"><em>You can see the site attached to the project using the command</em> <code>my-projects[index].website</code><em>, index being the number associated with the project.</em></p>`,

  "glassmorphismOff" : `<p class="notfound result glassmorphismOffresult">You have just deactivated the glassmorphism design to activate it use the <code>glassmophism</code> command.`,

  "glassmorphismOn" : `<p class="notfound result glassmorphismOnresult">You have just activated the glassmorphism design to deactivate it use the <code>glassmophism</code> command.`,

  "notfound" : `<span class="notfoundlanguage"><br><br>Type the command <code>help</code> to display the list of available commands.</p></span>`,

  "notfoundmenu" : `<span class="notfoundmenu"><br><br>Type the command <code>themes</code> to display the list of available themes.</p><br>
  <p class="result">/!\\ to return to the main menu please use the command <code>exit</code></p></span>`,

  "website" : `<p class="result websiteresult">You will be redirected to the project website.</p>`,

  "ls1" : `
    <div><code>.</code></div>
    <div><code>..</code></div>
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div>my-projects[4].website</div>
    <div>my-projects[5].website</div>
    <div><code>themes</code></div>
  `,

  "ls2" : `
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div>my-projects[4].website</div>
    <div>my-projects[5].website</div>
    <div><code>themes</code></div>
  `,

  "listsecretresult" : `
      <li><code>move</code>: Activate background animation</li>
      <li><code>remove</code>: Disables background animation</li>
      <li><code>glassmorphism</code>: Enable/disable the glassmorphism animation on the theme</li>
      <li><code>secrets</code>: Enable secret themes</li>
      <li>/!\\ These commands are not part of the easter egg to find. Good luck, you're almost there!</li>`,

  "congratulation" : `Congratulations you have found the <code>.secret</code> folder.`,

  "bodymail" : `mailto:joseph.boyadjian26300gmail.com?subject=Your portfolio is amazing, are you open to opportunities?&body=Joseph Boyadjian > Hello to you who found my easter egg, I am open to opportunities professionals so do not hesitate to contact me by sending me this email with your proposal. I will contact you to arrange a phone interview. Thank you for your time !`

  },








  "french":
  {
    "welcome" : "Bienvenue sur mon Portfolio ! Pour afficher les commandes disponibles tapez <code>help</code>. Pour valider chaque commande appuyez sur <em>Entrer</em>, vous pouvez utiliser la touche <em>Tabulation</em> afin de vous aider à compléter une commande.",
    
    "information" : "Ce site a entièrement été réalisé sous <code>HTML</code>, <code>CSS</code> et <code>Javascript</code> sans faire appel à la moindre librairie ou framework. Ce site renferme un grand nombre de fonctionnalités (animations cachées, thèmes secrets, etc.) mais également un <code>easter egg</code> bien caché que seul les développeurs pourront trouver. Bonne découverte!",

    "btnpopup" : "Continuer",

    "help" : `<li><code>a-propos</code> : Affiche les informations me concernant</li>
    <li><code>clear</code> : Nettoie le terminal</li>
    <li><code>experiences</code> : Affiche la liste de mes expériences</li>
    <li><code>get cv</code> : Télécharge mon CV</li>
    <li><code>get linkedin</code> : Lien vers mon Linkedin</li>
    <li><code>get github</code> : Lien vers mon Github</li>
    <li><code>help</code> : Affiche la liste des commandes</li>
    <li><code>passions</code> : Affiche la liste de mes passes temps</li>
    <li><code>mes-projets</code> : Affiche la liste de mes projets personnels</li>
    <li><code>themes</code> : Change le theme du terminal</li>
    <li><em>Vous pouvez utiliser la touche TAB afin de compléter une ligne de commande</em></li>
    <li><em>Vous pouvez retrouver les anciennes commandes avec les flèches haut et bas</em></li>`,

    "aboutme" : `{<br>
      &nbsp;&nbsp;&nbsp;"name" : "Joseph BOYADJIAN",<br>
      &nbsp;&nbsp;&nbsp;"formation" : "Developpeur web Fullstack - Digital Campus",<br>
      &nbsp;&nbsp;&nbsp;"Diplôme" : "Titre professionnel Développeur web et mobile",<br>
      &nbsp;&nbsp;&nbsp;"language" : "JS, SCSS, HTML, CSS, Git",<br>
      &nbsp;&nbsp;&nbsp;"framework" : "React, Nextjs",<br>
      &nbsp;&nbsp;&nbsp;"tools" : "GitHub, Heroku, Figma",<br>
      &nbsp;&nbsp;&nbsp;"softSkills" : "Methode Agile, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;"favoriteIDE" : "VS Code",<br>
      &nbsp;&nbsp;&nbsp;"city" : "Châteauneuf-sur-isère, France"<br>
    }`,

    "experience" : `<tr>
    <th>Date</th>
    <th>Entreprise</th>
    <th>Poste</th>
    <th class="description">Description</th>
  </tr>
  <tr>
    <td class="center">Avril 2023 - Juillet 2023</td>
    <td>FBSimulateur</td>
    <td>Développeur web front-end</td>
    <td>Travail en équipe, concevoir et développer un simulateur de choix de statut juridique
    React, TypeScript et Tailwind CSS et de conception d'API REST.</td>
  </tr> 
  <tr>
    <td class="center">Avril 2023</td>
    <td> The Lab coworking</td>
    <td>Développeur web front-end</td>
    <td>Gestion de projets
    Développement de la partie Front</td>
  </tr> 
  <tr>
    <td class="center">Janv 2023 - Mars 2023</td>
    <td>KOLIVING</td>
    <td>Stage Développeur full stack</td>
    <td>Correction des erreurs sur les lignes de code.
    Contrôle du bon fonctionnement du site web et de la qualité de navigation.</td>
  </tr>
  
    `,

  "cv" : `Le téléchargement du CV va commencer.`,

  "redirectLinkedin" : `Vous allez être redirigé vers Linkedin.`,

  "redirectGithub" : `Vous allez être redirigé vers Github.`,

  "hobby" : `{<br>
    &nbsp;&nbsp;&nbsp;"Sport" : "Fitness, Boxe",<br>
    &nbsp;&nbsp;&nbsp;"Programmation" : "JS, Typescript, Mining & Blockchain",<br>
    &nbsp;&nbsp;&nbsp;"Other" : "Cuisiner, Musique"<br>
  }`,

  "project" : `<table class="result">
  <tr>
    <th>index</th>
    <th>Nom</th>
    <th>Tech</th>
    <th class="description">Description</th>
    <th>En equipe?</th>
    <th>Github</th>
  </tr>
  <tr>
    <td class="center">1</td>
    <td class="center">Restaurant "Le Quai Antique"</td>
    <td class="center">PHP Git HTML CSS JS  Heroku</td>
    <td>Présentation du restaurant, réservation de table et le menu</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://lequaiantique.000webhostapp.com/" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">2</td>
    <td class="center">KOLIFLUX</td>
    <td class="center">REACT TYPESCRIPT CSS NODEJS JWT RENDER API REST</td>
    <td>Importation de l'api "se loger" et recherche d'annonces immobilières</td>
    <td class="center">Oui</td>
    <td class="center"><a href=https://taupe-hummingbird-5f0d47.netlify.app/" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">3</td>
    <td class="center">Charles Cantin</td>
    <td class="center">NEXT TAILWIND Git </td>
    <td>Ce projet offre une expérience de photographie professionnelle pour diverses occasions - des mariages et des événements d'entreprise aux séances photos en famille et portraits personnels.</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://celadon-eclair-1703ea.netlify.app/" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">4</td>
    <td class="center">KanBan AI</td>
    <td class="center">VITE TYPESCRIPT TAILWIND</td>
    <td>Une application web de gestion de tâches et de projets, enrichie par l'implémentation de GPT pour la synthèse automatique et le résumé des tâches. L'objectif est de simplifier la planification et le suivi des projets tout en offrant des insights basés sur l'IA pour améliorer la productivité.</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://tangerine-brioche-38768e.netlify.app/" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">5</td>
    <td class="center">FBSimulateur</td>
    <td class="center">REACT TYPESCRIPT CSS TAILWIND NODEJS APIREST</td>
    <td>Grace à ce simulateur, vous saurez quelle forme juridique est la plus adaptée à votre activité, à votre situation personnelle et à vos besoins !</td>
    <td class="center">Oui</td>
    <td class="center"><a href="https://maformejuridique.fr/" target="blank">Lien</a></td>
  </tr> 
</tr>
  </table><br>
  <p class="result"><em>Vous pouvez voir le site rattaché au projet en utilisant la commande</em> <code>mes-projets[index].website</code><em>, index étant le numéro associé au projet.</em></p>`,

  "glassmorphismOff" : `<p class="notfound result glassmorphismOffresult">Vous venez de desactiver le design glassmorphisme pour activer ce dernier utilisez la commande <code>glassmophism</code>.`,

  "glassmorphismOn" : `<p class="notfound result glassmorphismOnresult">Vous venez d'activer le design glassmorphisme pour désactiver ce dernier utilisez la commande <code>glassmophism</code>.`,

  "notfound" : `<span class="notfoundlanguage"><br><br>Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.</p></span>`,

  "notfoundmenu" : `<span class="notfoundmenu"><br><br>Tapez la commande <code>themes</code> pour afficher la liste des themes disponibles.</p><br>
  <p class="result">/!\\ pour revenir sur le menu principal veuillez utiliser la commande <code>exit</code></p></span>`,

  "website" : `<p class="result websiteresult">Vous allez être redirigé vers le site web du projet.</p>`,

  "ls1" : `
    <div><code>.</code></div>
    <div><code>..</code></div>
    <div>a-propos</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get cv</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>mes-projets</div>
    <div>mes-projets[1].website</div>
    <div>mes-projets[2].website</div>
    <div>mes-projets[3].website</div>
    <div>mes-projets[4].website</div>
    <div>mes-projets[5].website</div>
    <div>mes-projets[6].website</div>
    <div>mes-projets[7].website</div>
    <div><code>themes</code></div>`,

  "ls2" : `
    <div>a-propos</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get cv</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>mes-projets</div>
    <div>mes-projets[1].website</div>
    <div>mes-projets[2].website</div>
    <div>mes-projets[3].website</div>
    <div>mes-projets[4].website</div>
    <div>mes-projets[5].website</div>
    <div>mes-projets[6].website</div>
    <div>mes-projets[7].website</div>
    <div><code>themes</code></div>
  `,

  "listsecretresult" : `
      <li><code>move</code> : Active l animation du background</li>
      <li><code>remove</code> : Desactive l animation du background</li>
      <li><code>glassmorphism</code> : Active/desactive l animation glassmorphisme sur le theme</li>
      <li><code>secrets</code> : Active les themes secrets</li>
      <li>/!\\ Ces commandes ne font pas parties de l easter egg a trouver. Bon courage vous y êtes presque!</li>`,

  "congratulation" : `Bravo vous avez trouvé le dossier <code>.secret</code>.`,

  "bodymail" : `mailto:joseph.boyadjian26300@gmail.com?subject=Votre portfolio est incroyable, êtes-vous à l'écoute d'opportunité ?&body=Joseph BOYADJIAN > Bonjour à vous qui avez trouvé mon easter egg, Je suis à l'écoute d'opportunités professionnelles donc n'hésitez pas à me contacter en m'envoyant ce courriel avec votre proposition. Je vous recontacterai pour que nous organisions un entretien téléphonique. Merci pour votre temps !`

  }
}

let welcome = document.getElementById("welcome");
let popupcontent = document.getElementsByClassName("popupinfo")[0];
let french = document.getElementById("french");
let english = document.getElementById("english");
let language;

window.addEventListener("load", setLanguage());

function setLanguage(){
  if(localStorage.getItem("language") === null){
    localStorage.setItem('language', "english");
  } 
  language = localStorage.getItem("language");
  welcome.innerHTML = data[language].welcome;
  popupcontent.innerHTML = data[language].information;
  btnPopup.innerHTML = data[language].btnpopup;
  document.querySelectorAll(".helpresult").forEach(element => {
    element.innerHTML = data[language].help
  });
  document.querySelectorAll(".aboutmeresult").forEach(element => {
    element.innerHTML = data[language].aboutme
  });
  document.querySelectorAll(".experienceresult").forEach(element =>{
    element.innerHTML = data[language].experience
  });
  document.querySelectorAll(".cvresult").forEach(element =>{
    element.innerHTML = data[language].cv
  });
  document.querySelectorAll(".redirectresultLinkedin").forEach(element =>{
    element.innerHTML = data[language].redirectLinkedin
  });
  document.querySelectorAll(".redirectresultGithub").forEach(element =>{
    element.innerHTML = data[language].redirectGithub
  });
  document.querySelectorAll(".hobbyresult").forEach(element =>{
    element.innerHTML = data[language].hobby
  });
  document.querySelectorAll(".resultproject").forEach(element =>{
    element.innerHTML = data[language].project
  });
  document.querySelectorAll(".glassmorphismOffresult").forEach(element =>{
    element.innerHTML = data[language].glassmorphismOff
  });
  document.querySelectorAll(".glassmorphismOnresult").forEach(element =>{
    element.innerHTML = data[language].glassmorphismOn
  });
  document.querySelectorAll(".notfoundlanguage").forEach(element =>{
    element.innerHTML = data[language].notfound
  });
  document.querySelectorAll(".notfoundmenu").forEach(element =>{
    element.innerHTML = data[language].notfoundmenu
  });
  document.querySelectorAll(".websiteresult").forEach(element =>{
    element.innerHTML = data[language].website
  });
  document.querySelectorAll(".lsresult1").forEach(element =>{
    element.innerHTML = data[language].ls1
  });
  document.querySelectorAll(".lsresult2").forEach(element =>{
    element.innerHTML = data[language].ls2
  });
  document.querySelectorAll(".listsecretresult").forEach(element =>{
    element.innerHTML = data[language].listsecretresult
  });
  document.querySelectorAll(".congratulation").forEach(element =>{
    element.innerHTML = data[language].congratulation
  });

  
}


french.addEventListener("click", function(){
  language = "french";
  localStorage.setItem('language', language);
  setLanguage();
});

english.addEventListener("click", function(){
  language = "english";
  localStorage.setItem('language', language);
  setLanguage();
});
