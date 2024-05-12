// Importa i moduli necessari
import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import express from 'express';

// Abilita la modalità di produzione se necessario
if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}

// Crea un'istanza di Express
const app = express();

// Imposta il percorso per i file statici generati dall'app Angular
const distFolder = __dirname + '/browser';
app.use(express.static(distFolder));

// Configura il rendering universale utilizzando ngExpressEngine
app.engine('html', ngExpressEngine({
    bootstrap: undefined
}));

app.set('view engine', 'html');
app.set('views', distFolder);

// Gestisce tutte le richieste per l'applicazione Angular SSR
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Definisce la porta su cui ascoltare
const port = process.env['PORT'] || 4000;
app.listen(port, () => {
  console.log(`Applicazione Angular SSR in esecuzione su http://localhost:${port}`);
});
function ngExpressEngine(arg0: { bootstrap: any; }): (path: string, options: object, callback: (e: any, rendered?: string) => void) => void {
    throw new Error('Function not implemented.');
}

