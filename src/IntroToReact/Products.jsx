import React from "react";

const list = [
    {id: 1, nom :"Voiture"  },
    {id: 2, nom :"Pc"  },
    {id: 3, nom :"Clavier"  },
    {id: 4, nom :"Avion"  },
    {id: 5, nom :"Téléphone"  },
]; 
function Product (props){
    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-body">
                    <p>Id: {props.data.id} </p>
                    <p>Nom : {props.data.nom} </p>
                    <div className="btn-group">
                       <button type="button" className="btn btn-sm btn-outline-secondary " >Acheter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Products (){
    return (
        
               <div class="container">
                <div class="row">
                    <h1 >hello React js sur mon parcours</h1>
                    {
                        
                    list.map((Produit,index)=>{
                            return (
                                <>
                                <Product key={index} data={Produit}/>
                                </>
                            )
                        })
                    }
                </div>
               </div>
    )
}
export default Products;