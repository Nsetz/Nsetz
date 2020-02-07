import React from "react";
import List from './list';
import Create from './create';

const todos = [
  {
    task: 'Arrange a meet up,
    isCompleted: false
  },
  {
    task: 'Goout',
    isCompleted: true
  }
];

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todos
    };
  }
  render() {
    return (
      <div className="container">
        <div className="page-header"><h1 style={{fontFamily:'Times New'}}>React Notepads
        <small style={{fontSize:'20px',fontFamily:'Times New',fontStyle:'sans-serif'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></h1></div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="panel panel-default col-lg-10 col-md-10 col-sm-10 col-xs-12" style={{height:'200px' }}>
          <div className="panel-body">
          <Create todos={this.state.todos} createTask={this.createTask.bind(this)}/>
          </div>
          </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <List
          todos={this.state.todos}
          toggle={this.toggle.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
          />
          </div>
        </div>
      </div>
    )
  }

  toggle(task){
    const foundTodos = _.find(this.state.todos, todo => todo.task === task);
    foundTodos.isCompleted = !foundTodos.isCompleted;
    this.setState({todos: this.state.todos});
  }

  createTask(task) {
    this.state.todos.push({
      task,
      idCompleted: false
    });
    this.setState({todos: this.state.todos});
  }
  saveTask(oldT, newT){
    const found = _.find(this.state.todos, todo => todo.task === oldT);
    found.task=newT;
    this.setState({todos: this.state.todos});
  }
  deleteTask(D){
    _.remove(this.state.todos, todo => todo.task === D);
    this.setState({todos: this.state.todos});
  }
}
