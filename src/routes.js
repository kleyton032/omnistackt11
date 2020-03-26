const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');


const router = express.Router();

router.post('/ongs', OngController.store);
router.get('/ongs', OngController.index);

router.post('/incidents', IncidentController.store);
router.get('/incidents', IncidentController.index);
router.delete('/incidents/:id', IncidentController.delete);
module.exports = router;