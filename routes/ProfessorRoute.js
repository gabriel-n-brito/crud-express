var express = require('express');
var router = express.Router();
var professorService = require('../services/ProfessorService');
const { route } = require('./users');

router.get('/list', function(req,res,next){
    return res.json(professorService.list());
});

router.post('/register', function(req,res,next){
    const professor = professorService.register(req.body);
    return res.json(professor);
});

router.put('/update/:id', function(req,res,next){
    
    const professor = professorService.update(req.params.id,req.body);
    return res.json(professor);
})

router.delete('/delete/:id', function(req,res,next){a
    const ok = professorService.delete(req.params.id);
    if(ok) return res.json({"sucess": true});
    else return res.json({"sucess": false});
})

router.get('/retrieve/:id', function(req,res,next){
    const professor = professorService.retrieve(req.params.id);
    return res.json(professor);
});

module.exports = router;