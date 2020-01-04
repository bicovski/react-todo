import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {deleteTask} from '../../actions';


class Task extends React.Component{

    render(){
        return (
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                {this.props.task}
                <span>
                <button className="btn btn-danger" onClick={()=>{this.props.deleteTask(this.props.id)}}>Sil</button>
                </span>
                </li>
                
            </ul>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask}, dispatch)
}

export default connect(()=> {return {}}, mapDispatchToProps)(Task);