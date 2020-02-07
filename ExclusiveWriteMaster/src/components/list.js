import React from "react";
import _ from 'lodash';
import Header from './header';
import Item from './item';

export default class List extends React.Component{
  iter(){
    const props = _.omit(this.props, 'todos');
    return _.map(this.props.todos, (todo, index) => <Item key={index} {...todo} {...props} />);
  }
  render() {
    return (
      <div className="panel panel-default col-lg-20 col-md-15 col-sm-20 col-xs-32">
      <div className="panel-body">
      <table>
          <Header />
          <tbody>
          {this.iter()}
          </tbody>
      </table>
      </div>
      </div>
    )
  }
}
