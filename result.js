const aboutMe = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result aboutmeresult">
          ${data[language].aboutme}
        </p>`);
};


const clear = () =>{
  terminalBody.innerHTML = "";
  terminalBody.insertAdjacentHTML("afterbegin", `<div id="terminal"></div>`);
};

const experiences = () =>{
  terminal.insertAdjacentHTML("beforeend", `
  <table class="result experienceresult">
      ${data[language].experience}
  </table>`);
};

const getCv = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result cvresult">${data[language].cv}</p>`);
  const a = document.createElement("a");
  a.href = "ressources/CV -  Joseph Boyadjian.pdf";
  a.setAttribute("download", "CV -  Joseph Boyadjian.pdf");
  a.setAttribute("target", "blank");
  a.click();
}

const getLinkedin = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result redirectresultLinkedin">${data[language].redirectLinkedin}</p>`);
  const a = document.createElement("a");
  a.href = "https://www.linkedin.com/in/joseph-boyadjian-638b83255";
  a.setAttribute("target", "blank");
  a.click();
}

const getGithub = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result redirectresultGithub">${data[language].redirectGithub}</p>`);
  const a = document.createElement("a");
  a.href = "https://github.com/JOBOYA";
  a.setAttribute("target", "blank");
  a.click();
}

const help = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          <ul class="helpresult">
            ${data[language].help}
          </ul>
        </p>`);
};

const hobby = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result hobbyresult">
          ${data[language].hobby}
        </p>`);
};


const project = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<div class="resultproject">
        ${data[language].project}
    </div>`);
};


const website = (result) =>{
  terminal.insertAdjacentHTML("beforeend", 
          `${data[language].website}`);
  const a = document.createElement("a");

  if(result === "mes-projets[1].website" || result === "my-projects[1].website"){
    a.href = "https://lequaiantique.000webhostapp.com/";
  } else if (result === "mes-projets[2].website" || result === "my-projects[2].website"){
    a.href = "https://taupe-hummingbird-5f0d47.netlify.app/";
  } else if (result === "mes-projets[3].website" || result === "my-projects[3].website"){
    a.href = "https://celadon-eclair-1703ea.netlify.app/";
  } else if (result === "mes-projets[4].website" || result === "my-projects[4].website"){
    a.href = "https://tangerine-brioche-38768e.netlify.app/";
  } else if (result === "mes-projets[5].website" || result === "my-projects[5].website"){
    a.href = "https://maformejuridique.fr/";
  }
  a.setAttribute("target", "blank");
  a.click();
}


const ls = (y, result, secret) =>{
  if(y === 0 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls lsresult1">${data[language].ls1}</div>`);
  } else if (y === 0 && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls lsresult2">${data[language].ls2}</div>`);
  } else if (y === 1 && result === "ls -a" && secret === 1){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div><code>.</code></div>
            <div><code>..</code></div>
            <div>dracula</div>
            <div>dark</div>
            <div>ubuntu</div>
            <div>medallion</div>
            <div>matrix</div>
            <div>hello kitty</div>
        </div>`);
  } else if (y === 1 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div><code>.</code></div>
            <div><code>..</code></div>
            <div>dracula</div>
            <div>dark</div>
            <div>ubuntu</div>
            <div>medallion</div>
        </div>`);
  } else if (y === 1  && result === "ls" && secret === 1){
    terminal.insertAdjacentHTML("beforeend", 
    `<div class="result ls">
      <div>dracula</div>
      <div>dark</div>
      <div>ubuntu</div>
      <div>medallion</div>
      <div>matrix</div>
      <div>hello kitty</div>
    </div>`);
  } else if (y === 1  && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
    `<div class="result ls">
      <div>dracula</div>
      <div>dark</div>
      <div>ubuntu</div>
      <div>medallion</div>
    </div>`);
  } else if (y === -1 && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div>list-secret</div>
            <div><code>Joseph Boyadjian</code></div>
          </div>`);
  } else if (y === -1 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend",  
    `<div class="result ls">
      <div><code>.</code></div>
      <div><code>.secret</code></div>
      <div>list-secret</div>
      <div><code>Joseph Boyadjian</code></div>
    </div>`);
  }
}

const listSecret = () =>{
  terminal.insertAdjacentHTML("beforeend",
        `<p class="result">
          <ul class="listsecretresult">
            ${data[language].listsecretresult}
          </ul>
        </p>`);
}


const mailer = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result bravo">${data[language].congratulation}</p>`);
  const a = document.createElement("a");
  a.href = `${data[language].bodymail}`;
  a.click();
}
