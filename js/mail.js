// SPECIFICHE PROMPT VISUALIZZATO DALL'UTENTE

const specEx = confirm("Inserisca la sua mail per verificare se essa è presente nel nostro database: \n (es: mario.rossi@gmail.com)");
const userMail = prompt("Inserisca la mail che vuole verificare");

// SPECIFICHE MAIL PRESENTI NEL DATABASE

const listaMail = ["mario.rossi@gmail.com", "giuseppe.verdi@gmail.com", "pinco.pallino@gmail.com", "html.css@gmail.com"];
console.log("LISTA MAIL NEL DATABASE : ", listaMail);


// SPECIFICHE MAIL INSERITA DALL'UTENTE

console.log("MAIL INSERITA :", userMail);


//LET PER VERIFICA MAIL INSERITA ==> MAIL DATABASE

let trovato = false;


// CICLO FOR PER VERIFICA


for (let i = 0; i < listaMail.length; i++) {
    console.log(i);
    const elementoMail = listaMail[i];
    console.log(elementoMail);


    // if ( elementoMail ===userMail )=> si ripete all'infinito
    if (elementoMail === userMail) {
        trovato = true;
        console.log(elementoMail + "  Mail trovata! ");
    }

}
if ( trovato === true ) {
   
    const titleEl = document.querySelector( ".title" );

  
    titleEl.innerHTML = `La tua lista della spesa contiene l'elemento cercato! : ${userMail} `;
  
  } else {
    
    alert( "L'elemento cercato non è stato trovato" );
  }
