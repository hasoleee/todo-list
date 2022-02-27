import React,{Component} from 'react';
import '../App.css';

class TodoInput extends Component{

    state={
        message:''
      }
  
      handleChange=(e)=>{
        this.setState({
          message:e.target.value
        });
      }

    handleClick=()=>{
        alert(this.state.message);
        this.setState({
            message:''
        });
    }

    handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            this.handleClick();
        }
    }

    render(){
        return(
            <div classname='todolist'>
                <input
                 type="text"
                 name="list"
                 placeholder=''
                 value={this.state.message}
                 onChange={this.handleChange}
                 onKeyPress={this.handleKeyPress}
                 />
                <button onClick={this.handleClick}>추가</button>
            </div>
        );
    }
}

export default TodoInput;