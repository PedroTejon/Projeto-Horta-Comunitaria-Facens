import { openDb } from '../configDB.js';

export async function createTableIrrigacao() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS irrigacoes ( id INTEGER PRIMARY KEY, planta TEXT, inicio TEXT, fim TEXT, encarregado TEXT)');
    });
}

export async function createIrrigacao(req, res) {
    let irrigacao = req.body;
    openDb().then(db => {
        db.run('INSERT INTO irrigacoes ( planta, inicio, fim, encarregado ) VALUES (?, ?, ?, ?)', [irrigacao.planta, irrigacao.inicio, irrigacao.fim, irrigacao.encarregado])
            .then(() => res.send({ "status": 200 }));
    });
}


export async function selectIrrigacoes(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM irrigacoes').then(irrigacoes => res.json(irrigacoes));
    });
}

export async function deleteIrrigacao(req, res) {
    let irrigacao = req.body;
    openDb().then(db => {
        db.all('DELETE FROM irrigacoes WHERE id = ?', [irrigacao.id]).then(irrigacoes => res.send({ "status": 200 }));
    });
}

export async function updateIrrigacao(req, res) {
    let irrigacao = req.body;
    openDb().then(db => {
        db.run('UPDATE irrigacoes SET planta=?, inicio=?, fim=?, encarregado=? WHERE id=?', [irrigacao.planta, irrigacao.inicio, irrigacao.fim, irrigacao.encarregado, irrigacao.id]).then(() => res.send({ "status": 200 }));
    });
}