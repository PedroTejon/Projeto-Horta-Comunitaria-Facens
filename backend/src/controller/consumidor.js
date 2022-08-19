import { openDb } from '../configDB.js';

export async function createTableConsumidor() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS consumidores ( id INTEGER PRIMARY KEY, nome TEXT, bairro TEXT, interesses TEXT)');
    });
}

export async function createConsumidor(req, res) {
    let consumidor = req.body;
    openDb().then(db => {
        db.run('INSERT INTO consumidores ( nome, bairro, interesses ) VALUES (?, ?, ?)', [consumidor.nome, consumidor.bairro, consumidor.interesses])
            .then(() => res.send({ "status": 200 }));
    });
}


export async function selectConsumidores(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM consumidores').then(consumidores => res.json(consumidores));
    });
}

export async function deleteConsumidor(req, res) {
    let consumidor = req.body;
    openDb().then(db => {
        db.all('DELETE FROM consumidores WHERE id = ?', [consumidor.id]).then(consumidores => res.send({ "status": 200 }));
    });
}

export async function updateConsumidor(req, res) {
    let consumidor = req.body;
    openDb().then(db => {
        db.run('UPDATE consumidores SET nome=?, bairro=?, interesses=? WHERE id=?', [consumidor.nome, consumidor.bairro, consumidor.interesses, consumidor.id]).then(() => res.send({ "status": 200 }));
    });
}