import { openDb } from '../configDB.js';

export async function createTableColaborador() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS colaboradores ( id INTEGER PRIMARY KEY, nome TEXT, bairro TEXT, ocupacao TEXT)');
    });
}

export async function createColaborador(req, res) {
    let colaborador = req.body;
    openDb().then(db => {
        db.run('INSERT INTO colaboradores ( nome, bairro, ocupacao ) VALUES (?, ?, ?)', [colaborador.nome, colaborador.bairro, colaborador.ocupacao])
            .then(() => res.send({ "status": 200 }));
    });
}


export async function selectColaboradores(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM colaboradores').then(colaboradores => res.json(colaboradores));
    });
}

export async function deleteColaborador(req, res) {
    let colaborador = req.body;
    openDb().then(db => {
        db.all('DELETE FROM colaboradores WHERE id = ?', [colaborador.id]).then(colaboradores => res.send({ "status": 200 }));
    });
}

export async function updateColaborador(req, res) {
    let colaborador = req.body;
    openDb().then(db => {
        db.run('UPDATE colaboradores SET nome=?, bairro=?, ocupacao=? WHERE id=?', [colaborador.nome, colaborador.bairro, colaborador.ocupacao, colaborador.id]).then(() => res.send({ "status": 200 }));
    });
}