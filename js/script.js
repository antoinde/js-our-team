// Antonello's code. Git-Hub: antoinde

console.log("JavaScript is working properly! =) Let's code!");

/* 
CONSEGNA:
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!

DATI:
Wayne Barnett	Founder & CEO	      wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	      angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	      walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager  angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	          scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	  barbara-ramos-graphic-designer.jpg
*/

// -----------------------SVOLGIMENTO------------------------

// MILESTONE 0
const array=[
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    },
    
];
//stampa di controllo
console.log(array);

// MILESTONE 1:

// (metodo 1)
/*
// per ogni cella dell'array
for(let indexArray=0; indexArray<array.length; indexArray++) {
    //stampa il contenuto di ogni oggetto
    for(let key in array[indexArray]){
        console.log('[Chiave]: ', key);
        console.log('[Valore]: ', array[indexArray][key]);
    }
}
*/
// (metodo 2)
for(let indexArray=0; indexArray<array.length; indexArray++) {
    //stampa il contenuto di ogni oggetto
    const team = array[indexArray];
    console.log(`[nome]: ${team.nome} [ruolo]: ${team.ruolo} [foto]: ${team.foto}`);
}

// MILESTONE 2:

const containerMain = document.getElementById('main');
containerMain.innerHTML = '';
let element;

// per ogni cella dell'array
for(let indexArray=0; indexArray<array.length; indexArray++) {
    //stampa il contenuto di ogni oggetto
    for(let key in array[indexArray]){
        element = `<div> <strong>[key]:</strong> ${key} <strong>[value]:</strong> ${array[indexArray][key]} </div>`;
        containerMain.innerHTML += element;
    }
}