import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios'

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
        let item = {
            text: this.state.text,
            isDone: false
        }
        this.props.addItem(item);
        axios.post('https://5f29621aa1b6bf0016ead582.mockapi.io/todos', {text:this.state.text, isDone:false})
        .then(function (response) {
            console.log(response)
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
                <input type="text" onChange={this.handleInput} value={this.state.text}/>
                <button onClick={this.handleAddItem}>+</button>
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