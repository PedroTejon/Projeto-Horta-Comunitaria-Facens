import { openDb } from '../configDB.js';

export async function consultaTarefas(req, res) {
    let params = req.body;
    openDb().then(db => {
        db.all(`SELECT id, planta, data, encarregado, 'Colheita' AS 'Tipo' FROM colheitas WHERE encarregado = '${params.encarregado}' AND data = '${params.data}'
                UNION
                SELECT id, planta, data, local, 'Distribuição' FROM distribuicoes WHERE data = '${params.data}'
                UNION
                SELECT id, planta, data, encarregado, 'Plantação' FROM plantios WHERE encarregado = '${params.encarregado}' AND data = '${params.data}'
                UNION
                SELECT id, planta, inicio, encarregado, 'Irrigação' FROM irrigacoes WHERE encarregado = '${params.encarregado}'`)
        .then((colheitas) => {
            res.json(colheitas)
        });
    });
}