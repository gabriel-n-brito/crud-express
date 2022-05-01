const EstudanteModel = require('../models/EstudanteModel')

let estudantes = [
    {_id:0,name:'Gabriel',course:'CC',ira:7.0},
    {_id:1,name:'biel',course:'CC',ira:8.0},
    {_id:2,name:'iel',course:'CC',ira:9.0}
]
let _id = 3

class EstudanteService{
    static register(data){
        let estudante = new EstudanteModel(
            _id++,
            data.name,
            data.course,
            data.ira);
        estudantes.push(estudante);
        return estudante;
    }

    static list(){
        return estudantes;
    }

    static update(_id,data){
        for(let e of estudantes){
            if(e._id == _id){
                e.name = data.name;
                e.course = data.course;
                e.ira = data.ira;
                return e;
            }
        }
        return null;
    }

    static delete(_id){
        for(let i =0;i<estudantes.length;i++){
            if(estudantes[i]._id == _id){
                estudantes.splice(i,1);
                return true;
            }
        }
        return false;
    }

    static retrieve(_id){
        for(let i = 0; i<estudantes.length;i++){
            if(estudantes[i]._id == _id){
                return estudantes[i];
            }
        }
        return {};
    }
}

module.exports = EstudanteService
