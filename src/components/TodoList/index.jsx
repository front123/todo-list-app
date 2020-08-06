import React from 'react'
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';
import PropTypes from 'prop-types';
import todoApi from '../../todo-api'


class TodoList extends React.Component {

    componentDidMount(){
        todoApi.get().then((response) => {
            this.props.loadRemoteItems(response.data);
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.itemsList.map((item, index) => <TodoItem key={index} index={item.id} text={item.text} isDone={item.isDone} />)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { itemsList: state.todoReducer.itemsList , remoteItemsList:state.todoReducer.remoteItemsList};
};

const mapDispatchToProps = dispatch => ({
    loadRemoteItems:(remoteItemsList)=>dispatch({type:'STORE_REMOTE_ITEMS', remoteItemsList})
});

TodoList.propTypes = {
    itemsList: PropTypes.array
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);