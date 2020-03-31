const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const router = express.Router();

router.post('/ongs', OngController.store);
router.get('/ongs', OngController.index);

router.post('/incidents', IncidentController.store);
router.get('/incidents', IncidentController.index);
router.delete('/incidents/:id', IncidentController.delete);

router.get('/profile', ProfileController.index);

router.post('/sessions', SessionController.create);

module.exports = router;