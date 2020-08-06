import React from 'react'
import TodoItem from '../TodoItem'
import { connect } from 'react-redux';
import { HashRouter, Link } from 'react-router-dom';


class FinishItemPage extends React.Component{
    
    render(){
        console.log("xxxx")
        return(
            <div>
                <h1 style={{ display: "inline", color: "white"}} >Finish Items List</h1>
                <HashRouter>
                <Link to="/" style={{color:"white"}}>Go Back</Link>
                {
                    this.props.itemsList.filter((item,index)=>item.isDone).map((item,index)=> <TodoItem key={index} index={item.index} text={item.text} isDone={item.isDone}/>)
                }
                </HashRouter>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { itemsList: state.todoReducer.itemsList };
};

export default connect(mapStateToProps)(FinishItemPage);