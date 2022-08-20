import { openDb } from '../configDB.js';

export async function createTableDistribuicao() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS distribuicoes ( id INTEGER PRIMARY KEY, data TEXT, local TEXT, planta TEXT)');
    });
}

export async function createDistribuicao(req, res) {
    let distribuicao = req.body;
    openDb().then(db => {
        db.run('INSERT INTO distribuicoes ( data, local, planta ) VALUES (?, ?, ?)', [distribuicao.data, distribuicao.local, distribuicao.planta])
            .then(() => res.send({ "status": 200 }));
    });
}


export async function selectDistribuicoes(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM distribuicoes').then(distribuicoes => res.json(distribuicoes));
    });
}

export async function deleteDistribuicao(req, res) {
    let distribuicao = req.body;
    openDb().then(db => {
        db.all('DELETE FROM distribuicoes WHERE id = ?', [distribuicao.id]).then(distribuicoes => res.send({ "status": 200 }));
    });
}

export async function updateDistribuicao(req, res) {
    let distribuicao = req.body;
    openDb().then(db => {
        db.run('UPDATE distribuicoes SET data=?, local=?, planta=? WHERE id=?', [distribuicao.data, distribuicao.local, distribuicao.planta, distribuicao.id]).then(() => res.send({ "status": 200 }));
    });
}