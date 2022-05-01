var express = require('express');
var router = express.Router();
var EstudanteService = require('../services/EstudanteService');
const { route } = require('./users');

router.get('/list', function(req,res,next){
    return res.json(EstudanteService.list());
});

router.post('/register', function(req,res,next){
    const estudante = EstudanteService.register(req.body);
    return res.json(estudante);
});

router.put('/update/:id', function(req,res,next){
    const estudante = EstudanteService.update(req.params.id, req.body);
    return res.json(estudante);
})

router.delete('/delete/:id', function(req,res,next){
    const ok = EstudanteService.delete(req.params.id);
    if(ok) return res.json({"sucess": true});
    else return res.json({"sucess": false});
})

router.get('/retrieve/:id', function(req,res,next){
    const estudante = EstudanteService.retrieve(req.params.id);
    return res.json(estudante);
});

module.exports = router;