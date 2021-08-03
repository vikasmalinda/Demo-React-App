import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router-dom";

class Addition_of_two_numbers extends React.Component {
    state = { 
        num1:0,
        num2:0,
        num3:0,
        flag:false
    }
    setData=(event)=>{
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
    }
    add=(event)=>{
        event.preventDefault()
        let x = parseInt(this.state.num1) + parseInt(this.state.num2)
        this.setState({num3:x})
    }
    redirect=()=> {
        this.setState({flag:true})
    }
    render() { 
        if(this.state.flag) {
            return(
                <Redirect to="/crud"/>
            )
        }
        else{
            return ( 
            <div className="container">
                <form>
                    <div className="container form-group">
                    <input type="text" name="num1" value={this.state.num1} placeholder="First Number" onChange={this.setData}/><br></br><br></br>
                    <input type="text" name="num2" value={this.state.num2} placeholder="Second Number" onChange={this.setData}/><br></br><br></br>
                    <input type="submit" name="Addition" className="btn btn-primary" value="Add" onClick={this.add}/><br></br><br></br>
                    <input type="text" value={this.state.num3}/><br></br><br></br>

                    <input type="submit" name="redirect" className="btn btn-primary" value="redirect" onClick={this.redirect}/><br></br><br></br>

                    </div>
                </form>
            </div> );
        }
    }
}

export default Addition_of_two_numbers;