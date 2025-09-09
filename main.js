/* PER INIZIARE, ALCUNI APPUNTI:

📌 Cos’è Node.js
Node.js non è un linguaggio, ma un ambiente di runtime che permette di eseguire codice JavaScript fuori dal browser.
Prima di Node.js, JavaScript poteva girare solo nei browser (es. Chrome, Firefox).
Grazie a Node.js è possibile usare JavaScript per creare:
applicazioni web lato server,
API,
script di automazione,
programmi da riga di comando.

👉 In pratica: Node.js ti permette di scrivere codice JS che gira sul computer/server, non solo nel browser.

📌 Cos’è Express.js
Express è un framework (una libreria avanzata) per Node.js che semplifica la creazione di server web e API.
Senza Express, in Node.js bisognerebbe scrivere tanto codice per gestire richieste HTTP, routing (le varie “pagine”/endpoint), middleware, ecc.
Con Express, tutto diventa più semplice e leggibile.
👉 In pratica: Express è un “aiutante” che permette di costruire server e API in modo rapido.*/


/*
ESERCIZIO:
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo. 

1. Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”,
2. Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe),
3. Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.,
4. Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.,
5. Testare su postman
*/


// Importa il modulo Express
const express = require('express');
// Crea un'app Express
const app = express();

// const port = 3000; // Definisce la porta su cui il server ascolterà (alternativa: usare direttamente 3000 in app.listen)

// 1. Definizione di una route per la homepage
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// 2. Array di post del blog
const posts = [
  { titolo: 'Primo Post', contenuto: 'Questo è il contenuto del primo post: ciambellone', immagine: '/ciambellone.jpeg', tags: ['intro', 'benvenuto'] },
  { titolo: 'Secondo Post', contenuto: 'Questo è il contenuto del secondo post: cracker alla barbabietola', immagine: '/cracker_barbabietola.jpeg', tags: ['aggiornamento', 'news'] },
  { titolo: 'Terzo Post', contenuto: 'Questo è il contenuto del terzo post: pane fritto dolce', immagine: '/pane_fritto_dolce.jpeg', tags: ['tutorial', 'javascript'] },
  { titolo: 'Quarto Post', contenuto: 'Questo è il contenuto del quarto post: pasta alla barbabietola', immagine: '/pasta_barbabietola.jpeg', tags: ['nodejs', 'express'] },
  { titolo: 'Quinto Post', contenuto: 'Questo è il contenuto del quinto post: torta paesana', immagine: '/torta_paesana.jpeg', tags: ['conclusione', 'fine'] },
];


// 3. Definizione di una route per la bacheca dei post
app.get('/bacheca', (req, res) => {
  res.json(posts);
});

// 4. Configurazione della cartella 'images' per servire file statici (in questo caso le nostre immagini)
app.use(express.static('images')); 

// 5. Avvio del server
app.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});

// in alternativa, si può usare anche questa sintassi:
// app.listen(port, () => {
//   console.log(`Server in ascolto sulla porta ${port}`);
// });


// Ora si può accedere a http://localhost:3000/ per vedere la homepage
// E a http://localhost:3000/bacheca per vedere la lista dei post in formato JSON
// Le immagini dovrebbero essere accessibili tramite URL come http://localhost:3000/ciambellone.jpeg etc.



// Per testare il server, bisogna aprire Postman e fare una richiesta GET a http://localhost:3000/ per la homepage
// e a http://localhost:3000/bacheca per vedere la lista dei post in formato JSON.