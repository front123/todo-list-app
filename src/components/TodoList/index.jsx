import React from 'react'
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';
import PropTypes from 'prop-types';

class TodoList extends React.Component {

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
    return { itemsList: state.itemsList };
};
TodoList.propTypes = {
    itemsList: PropTypes.array
}
export default connect(mapStateToProps)(TodoList);