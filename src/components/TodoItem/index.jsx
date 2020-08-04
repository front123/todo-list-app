import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class TodoItem extends React.Component{
    
    handleRemove = ()=>{
        this.props.removeItem(this.props.index);
    }

    handleDone = ()=>{
        this.props.setDone(this.props.index)
    }

    render(){
        return(
            <div>
                <label onClick={this.handleDone}
                    style={{ textDecorationLine: this.props.isDone ? 'line-through' : 'none' }}
                >
                    {this.props.text}
                </label>
                <button onClick={this.handleRemove}>×</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=> ({
    removeItem: (index)=>dispatch({type:"REMOVE_ITEM", index}),
    setDone: (index)=>dispatch({type:"SET_DONE", index})
})
TodoItem.propTypes = {
    index: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
    addItem: PropTypes.func
}
export default connect(null, mapDispatchToProps)(TodoItem);