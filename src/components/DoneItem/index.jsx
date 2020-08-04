import React from 'react'
import TodoItem from '../TodoItem'
import { connect } from 'react-redux';

class DoneItem extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Done List</h1>
                <a href="#/" style={{color:"white"}}>Go Back</a>
                {
                    this.props.itemsList.filter((item,index)=>item.isDone).map((item,index)=> <TodoItem key={index} index={index} text={item.text} isDone={item.isDone}/>)
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { itemsList: state.itemsList };
};

export default connect(mapStateToProps)(DoneItem);