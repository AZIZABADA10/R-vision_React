import React from "react";
const listePersonnes = [
        {   id : 1,   nom : "AZIZ", age : 21,    },
        {   id : 2,   nom : "HAMID", age : 33  },
        {   id : 3,   nom : "JAWAD", age : 34  },
        {   id : 4,   nom : "HAMZA", age : 22  },
        {   id : 5,   nom : "MEHDI", age : 20  },
];

class Personne extends React.Component{
    constructor(props){
        super();
    }
   
    render() {
        return (
            <>
             <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <p>Id: {this.props.data.id} </p>
                        <p>Nom : {this.props.data.nom} </p>
                        <p>Age : {this.props.data.age}</p>
                        
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary " > Détaille </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
} 
class Personnes extends React.Component{
    render() {
        return (
        <>
         <h1>Liste des Personne :</h1>
          <div className="container">
            <div className="row">
                {
                      listePersonnes.map((personne,index)=>{ 
                    return (
                    <Personne key={index} data={personne} />
                    ) 
                })
                }
                
            </div>
          </div>
        </>
    )}
}
export default Personnes;