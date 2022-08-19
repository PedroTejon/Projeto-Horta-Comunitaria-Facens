import { openDb } from '../configDB.js';

export async function createTablePlantio() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS plantios ( id INTEGER PRIMARY KEY, data TEXT, plantas TEXT, encarregado TEXT)');
    });
}

export async function createPlantio(req, res) {
    let planta = req.body;
    openDb().then(db => {
        db.run('INSERT INTO plantios ( data, plantas, encarregado ) VALUES (?, ?, ?)', [planta.data, planta.plantas, planta.encarregado])
            .then(() => res.send({ "status": 200 }));
    });
}


export async function selectPlantios(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM plantios').then(plantios => res.json(plantios));
    });
}

export async function deletePlantio(req, res) {
    let planta = req.body;
    openDb().then(db => {
        db.all('DELETE FROM plantios WHERE id = ?', [planta.id]).then(plantios => res.send({ "status": 200 }));
    });
}

export async function updatePlantio(req, res) {
    let planta = req.body;
    openDb().then(db => {
        db.run('UPDATE plantios SET data=?, plantas=?, encarregado=? WHERE id=?', [planta.data, planta.plantas, planta.encarregado, planta.id]).then(() => res.send({ "status": 200 }));
    });
}