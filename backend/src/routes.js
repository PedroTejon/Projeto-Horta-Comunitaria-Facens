import { Router } from 'express';
import { createTableConsumidor, createConsumidor, selectConsumidores, updateConsumidor, deleteConsumidor } from './controller/consumidor.js'
import { createTableColaborador, createColaborador, selectColaboradores, updateColaborador, deleteColaborador } from './controller/colaborador.js'
import { createTablePlantio, createPlantio, selectPlantios, updatePlantio, deletePlantio } from './controller/plantio.js'
import { createTablePlantas, createPlanta, selectPlantas, updatePlanta, deletePlanta } from './controller/plantas.js'
import { createTableIrrigacao, createIrrigacao, selectIrrigacoes, updateIrrigacao, deleteIrrigacao } from './controller/irrigacao.js'
import { createTableColheita, createColheita, selectColheitas, updateColheita, deleteColheita } from './controller/colheita.js'
import { createTableDistribuicao, createDistribuicao, selectDistribuicoes, updateDistribuicao, deleteDistribuicao } from './controller/distribuicoes.js'

const router = Router();

createTableConsumidor();
createTableColaborador();
createTablePlantio();
createTablePlantas();
createTableIrrigacao();
createTableColheita();
createTableDistribuicao();

router.get('/', (req, res) => { res.json({ "status": 200, "msg": "API RODANDO" }); })

router.post('/consumidores', createConsumidor);
router.get('/consumidores', selectConsumidores);
router.put('/consumidores', updateConsumidor);
router.delete('/consumidores', deleteConsumidor);

router.post('/colaboradores', createColaborador);
router.get('/colaboradores', selectColaboradores);
router.put('/colaboradores', updateColaborador);
router.delete('/colaboradores', deleteColaborador);

router.post('/plantios', createPlantio);
router.get('/plantios', selectPlantios);
router.put('/plantios', updatePlantio);
router.delete('/plantios', deletePlantio);

router.post('/plantas', createPlanta);
router.get('/plantas', selectPlantas);
router.put('/plantas', updatePlanta);
router.delete('/plantas', deletePlanta);

router.post('/irrigacoes', createIrrigacao);
router.get('/irrigacoes', selectIrrigacoes);
router.put('/irrigacoes', updateIrrigacao);
router.delete('/irrigacoes', deleteIrrigacao);

router.post('/colheitas', createColheita);
router.get('/colheitas', selectColheitas);
router.put('/colheitas', updateColheita);
router.delete('/colheitas', deleteColheita);

router.post('/distribuicoes', createDistribuicao);
router.get('/distribuicoes', selectDistribuicoes);
router.put('/distribuicoes', updateDistribuicao);
router.delete('/distribuicoes', deleteDistribuicao);

export default router;
