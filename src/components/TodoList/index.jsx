import React from 'react'
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';

class TodoList extends React.Component{
    
    render(){
        return(
            <div>
                {
                    this.props.itemsList.map((item, index) => <TodoItem key={index} index={index} text={item.text}/>)
                }
            </div>
        )
    }

    
}

const mapStateToProps = state => {
    return {itemsList:state.itemsList};
};

export default connect(mapStateToProps)(TodoList);