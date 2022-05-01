const ProfessorModel = require('../models/ProfessorModel')

let professores = [
    {_id:0,name:'Gabriel',university:'UFC-Quixada',degree:'doutorado'},
    {_id:1,name:'biel',university:'UFC-Quixada',degree:'mestrado'},
    {_id:2,name:'iel',university:'UFC-Quixada',degree:'doutorado'}
]
let _id = 3

class ProfessorService{
    static register(data){
        let professor = new ProfessorModel(
            _id++,
            data.name,
            data.university,
            data.degree);
            professores.push(professor);
        return professor;
    }

    static list(){
        return professores;
    }

    static update(_id,data){
        for(let e of professores){
            if(e._id == _id){
                e.name = data.name;
                e.university = data.university;
                e.degree = data.degree;
                return e;
            }
        }
        return null;
    }

    static delete(_id){
        for(let i =0;i<professores.length;i++){
            if(professores[i]._id == _id){
                professores.splice(i,1);
                return true;
            }
        }
        return false;
    }

    static retrieve(_id){
        for(let i = 0; i<professores.length;i++){
            if(professores[i]._id == _id){
                return professores[i];
            }
        }
        return {};
    }
}

module.exports = ProfessorService
