import { openDb } from '../configDB.js';

export async function createTableColheita() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS colheitas ( id INTEGER PRIMARY KEY, data TEXT, planta TEXT, encarregado TEXT)');
    });
}

export async function createColheita(req, res) {
    let colheita = req.body;
    openDb().then(db => {
        db.run('INSERT INTO colheitas ( data, planta, encarregado ) VALUES (?, ?, ?)', [colheita.data, colheita.planta, colheita.encarregado])
            .then(() => res.send({ "status": 200 }));
    });
}


export async function selectColheitas(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM colheitas').then(colheitas => res.json(colheitas));
    });
}

export async function deleteColheita(req, res) {
    let colheita = req.body;
    openDb().then(db => {
        db.all('DELETE FROM colheitas WHERE id = ?', [colheita.id]).then(colheitas => res.send({ "status": 200 }));
    });
}

export async function updateColheita(req, res) {
    let colheita = req.body;
    openDb().then(db => {
        db.run('UPDATE colheitas SET data=?, planta=?, encarregado=? WHERE id=?', [colheita.data, colheita.planta, colheita.encarregado, colheita.id]).then(() => res.send({ "status": 200 }));
    });
}