/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../App.css';

class Jeu extends React.Component{
    constructor(props){
        super();
        this.state={face:null, compteur: 0, end:false };
    }

    Jouer = () =>{
        let FaceVal = Math.floor(Math.random()*6+1);
        this.setState({face:FaceVal, compteur: this.state.compteur+1 });
        if(FaceVal === this.props.cache ){
            this.setState({end:true})
        }     
    }

    Rejouer = () =>{
        this.setState({face:null, compteur: 0, end:false })
    }

    render(){
        return (
            <div className="container">
                <div className="center">
                    <img src={
                        this.state.face == null
                        ?'images/init.PNG'
                        :`images/face${this.state.face}.PNG`
                    }/>
                    <h1>Je de Dé</h1>
                    <p>Face:{this.state.face} </p>
                    <p>Nombre d'essais:{this.state.compteur} </p>
                    {
                        this.state.end 
                        ?<div><span>Bravo vous avez trouvé la face caché !!</span><br/><button onClick={this.Rejouer} className="btn-group">Rejouer</button></div>
                        :<button onClick={this.Jouer} className="btn-group">Jouer</button>
                    }
                    
                </div>
            </div>
        )
    }
}
export default Jeu;


