import express from 'express';
import { join } from 'path';

// Crea un'istanza di Express
const app = express();

// Imposta il percorso per i file statici
const distFolder = join(process.cwd(), 'dist', 'browser');
app.use(express.static(distFolder));

// Gestisci tutte le richieste inviate al server
app.get('*', (req, res) => {
  res.sendFile(join(distFolder, 'index.html'));
});

// Ascolta sul port 3000 (o su una porta specificata)
const port = process.env['PORT'] || 3000;
app.listen(port, () => {
  console.log(`Applicazione Angular in esecuzione su http://localhost:${port}`);
});
