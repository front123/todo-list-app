import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import todoApi from '../../todo-api'
import { Card} from 'antd';
import { CloseCircleTwoTone, ScheduleTwoTone} from '@ant-design/icons';

class TodoItem extends React.Component{
    
    handleRemove = ()=>{
        todoApi.delete(`/${this.props.index}`)
        .then((response) => {
            if (response.status >= 200 && response.status <= 300){
                this.props.removeItem(this.props.index);
            }
            
        })
    }

    handleDone = ()=>{
        //update remote item isDone 
        let isDone = this.props.isDone;
        todoApi.put(`/${this.props.index}`, {
            isDone : !isDone
        }).then((res) =>{
            if (res.status === 200 && res.status <= 300){
                this.props.setDone(this.props.index)
            }
        })
        
    }

    render(){
        return(
            <div>
                    {/* <label onClick={this.handleDone}
                    style={{ textDecorationLine: this.props.isDone ? 'line-through' : 'none' }}
                > 
                {this.props.text}
                    
                </label>
                <button onClick={this.handleRemove}>×</button> */}

        <Card size="small" title={<ScheduleTwoTone size={20}/>} extra={<CloseCircleTwoTone onClick={this.handleRemove}/>} style={{ width: 300 }}>
            <p>{this.props.text}</p>
            </Card>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=> ({
    removeItem: (index)=>dispatch({type:"REMOVE_ITEM", index}),
    setDone: (index)=>dispatch({type:"REVERSE_MARK", index})
})
TodoItem.propTypes = {
    index: PropTypes.string.isRequired,
    text: PropTypes.string,
    isDone: PropTypes.bool,
    addItem: PropTypes.func
}
export default connect(null, mapDispatchToProps)(TodoItem);