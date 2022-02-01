import React from "react";
import { Component } from "react/cjs/react.production.min";
import './Additems.css';
class AddItems extends Component{
    state = {
        name : '',
        age : ''
    }


    handelChange = (e)=>{
        this.setState({[e.target.id]: e.target.value})
    }
    handelSubmit = (e)=>{
        e.preventDefault();
        if(e.target.name.value === ''){
            return false
        }else{
            this.props.addItem(this.state)
            this.setState({name:'', age:''})
        }
    }
    render(){
        return (
            <div>
                <form onSubmit= {this.handelSubmit} >
                    <input type="text" placeholder="Enter name..." value={this.state.name} id= "name" onChange={this.handelChange}/>
                    <input type="number" placeholder="Enter Age..." value={this.state.age} id= "age" onChange={this.handelChange} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}
export default AddItems;