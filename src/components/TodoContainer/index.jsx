import React from 'react'
// import { connect } from 'react-redux';
import InputItem from '../InputItem';
import TodoList from '../TodoList';

class TodoContainer extends React.Component{
    
    render(){
        return(
            <div>
                <h1 style={{display:"inline"}}>My Todo List</h1> 
                <a href="#/done" style={{color:"white"}}>Finished</a> 
                <InputItem />
                <TodoList />
            </div>
        )
    }
}

export default TodoContainer;