import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import todoApi from '../../todo-api'
import {Input} from 'antd'
import {PlusSquareTwoTone} from '@ant-design/icons'

class InputItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    handleAddItem = ()=>{
        if(this.state.text.trim().length===0){
            this.setState({
                text: ''
            })
            return ;
        }
        
        todoApi.post('',{text:this.state.text, isDone:false})
        .then((response)=> {
            this.props.addItem(response.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    handleInput = (event)=>{
        this.setState({
            text: event.target.value
        })
    }

    render(){
        return(
            <div>
                 <Input size="large" 
                 onChange={this.handleInput} 
                 addonAfter={<PlusSquareTwoTone onClick={this.handleAddItem}/>}  
                 placeholder={"Please input your todo list"}/>
                {/* <input type="text" onChange={this.handleInpuont} value={this.state.text}/> */}
                {/* <button onClick={this.handleAddItem}>+</button> */}
               
            </div>
        )
    }
}

InputItem.propTypes = {
    addItem: PropTypes.func
}


const mapDispatchToProps = dispatch => ({
    addItem:(item)=>dispatch({type:'ADD_ITEM', item})
});

export default connect(null, mapDispatchToProps)(InputItem);