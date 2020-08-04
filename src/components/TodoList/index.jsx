import React from 'react'
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';
import PropTypes from 'prop-types';
import axios from 'axios'

class TodoList extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let _this = this;
        axios.get('https://5f29621aa1b6bf0016ead582.mockapi.io/todos')
        .then(function (response) {
          _this.props.loadRemoteItems(response.data);
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.itemsList.map((item, index) => <TodoItem key={index} index={index} text={item.text} isDone={item.isDone} />)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { itemsList: state.itemsList , remoteItemsList:state.remoteItemsList};
};

const mapDispatchToProps = dispatch => ({
    loadRemoteItems:(remoteItemsList)=>dispatch({type:'LOAD_REMOTE_ITEM', remoteItemsList})
});

TodoList.propTypes = {
    itemsList: PropTypes.array
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);