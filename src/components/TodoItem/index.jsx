import React from 'react'
import { connect } from 'react-redux';

class TodoItem extends React.Component{
    

    handleRemove = ()=>{
        this.props.removeItem(this.props.index);
    }

    render(){
        return(
            <div>
                <label>{this.props.text}</label>
                <button onClick={this.handleRemove}>×</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=> ({
    removeItem: (index)=>dispatch({type:"REMOVE_ITEM", index})
})

export default connect(null, mapDispatchToProps)(TodoItem);