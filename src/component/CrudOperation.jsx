import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class CrudOperation extends React.Component {
    state = { 
        userid : '',
        name : '',
        phoneno : '',
        location : '',
        education : '',
        workexperience : '',
        skills : ''
     }

    setData=(event)=>{
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
    }

    clickHandle = (event) => {
        let obj = {
            userid : this.state.userid,
            name : this.state.name,
            phoneno : this.state.phoneno,
            location : this.state.location,
            education : this.state.education,
            workexperience : this.state.workexperience,
            skills : this.state.skills
        }

        let base_url = 'http://localhost:9002/profile/'
        axios.post(base_url + 'add' + obj).
        then((response) => {
            alert('Data Added!')
        }).
        catch((error) => console.log(error))
    }

    render() { 
        return ( 
            <div className="container">
            <form>
                <div className="container form-group">
                    <input type="text" name="userid" value={this.state.userid} placeholder="Enter Userid" onChange={this.setData}/>
                    <input type="text" name="name" value={this.state.name} placeholder="Enter Name" onChange={this.setData}/>
                    <input type="text" name="phoneno" value={this.state.phoneno} placeholder="Enter PhoneNo" onChange={this.setData}/>
                    <input type="text" name="location" value={this.state.location} placeholder="Enter Location" onChange={this.setData}/>
                    <input type="text" name="education" value={this.state.education} placeholder="Enter Education" onChange={this.setData}/>
                    <input type="text" name="workexperience" value={this.state.workexperience} placeholder="Enter WorkExperience" onChange={this.setData}/>
                    <input type="text" name="skills" value={this.state.skills} placeholder="Enter Skills" onChange={this.setData}/>
                    <button type="submit" className="btn btn-primary" onClick={this.clickHandle}>Submit</button>
                </div>
            </form>
        </div>
         );
    }
}
 
export default CrudOperation;