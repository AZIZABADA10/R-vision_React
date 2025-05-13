import React from "react";
import '../App.css';
class Compteur extends React.Component{
    constructor(props){
        super();
        this.state ={ num:0  };
    }

    incrementer = () => { 
        this.setState({num : this.state.num+1});
        console.log(this.state.num);
    }

     decrementer = () => { 
          this.setState({num : this.state.num-1});
        console.log(this.state.num);
    }
render(){

    return (
        <>
            <div className="app">
                <p>{this.state.num}</p>
                <button onClick={this.incrementer} >Incrementer</button>
                <button onClick={this.decrementer} >Incrementer</button>
            </div>
        </>
    )
}
}
export default Compteur;