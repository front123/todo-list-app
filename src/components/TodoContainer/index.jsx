import React from 'react'
import InputItem from '../InputItem';
import TodoList from '../TodoList';

class TodoContainer extends React.Component {
    render() {
        return (
            <div>
                <InputItem />
                <TodoList />
            </div>
        )
    }
}

export default TodoContainer;