import { openDb } from '../configDB.js';

export async function createTablePlantas() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS plantas ( id INTEGER PRIMARY KEY, nome TEXT, categoria TEXT)');
    });
}

export async function createPlanta(req, res) {
    let consumidor = req.body;
    openDb().then(db => {
        db.run('INSERT INTO plantas ( nome, categoria ) VALUES (?, ?)', [consumidor.nome, consumidor.categoria])
            .then(() => res.send({ "status": 200 }));
    });
}


export async function selectPlantas(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM plantas').then(plantas => res.json(plantas));
    });
}

export async function deletePlanta(req, res) {
    let consumidor = req.body;
    openDb().then(db => {
        db.all('DELETE FROM plantas WHERE id = ?', [consumidor.id]).then(plantas => res.send({ "status": 200 }));
    });
}

export async function updatePlanta(req, res) {
    let consumidor = req.body;
    openDb().then(db => {
        db.run('UPDATE plantas SET nome=?, categoria=? WHERE id=?', [consumidor.nome, consumidor.categoria, consumidor.id]).then(() => res.send({ "status": 200 }));
    });
}