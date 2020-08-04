import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class InputItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    handleAddItem = ()=>{
        if(this.state.text.trim().length===0){
            return ;
        }
        let item = {
            text: this.state.text,
            isDone: false
        }
        this.props.addItem(item);
    }

    handleInput = (event)=>{
        this.setState({
            text: event.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.handleInput}/>
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