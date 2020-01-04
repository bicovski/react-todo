import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addTask} from '../../actions';
import './addtask.css';


class AddTask extends React.Component{
  render(){
    return (
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">Yapılacak Görev Ekle</h5>
          <input className="form-control" type="text" ref="task" placeholder="Görev Ekle"></input>
          <hr></hr>
          <button className="btn btn-primary" onClick={() => this.props.addTask(this.refs.task.value)}>Görev Ekle</button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addTask},dispatch);
}

export default connect(()=>{},mapDispatchToProps)(AddTask);



