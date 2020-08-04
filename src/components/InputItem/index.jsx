import React from 'react'
import { connect } from 'react-redux';

class InputItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    handleAddItem = ()=>{
        let item = {
            text: this.state.text
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


const mapDispatchToProps = dispatch => ({
    addItem:(item)=>dispatch({type:'ADD_ITEM', item})
});

export default connect(null, mapDispatchToProps)(InputItem);