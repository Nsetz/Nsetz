import React from "react";

export default class Header extends React.Component{
  render() {
    return (
        <thead>
          <tr>
          <th><h3 style={{fontFamily:'Times New'}}>Notes</h3></th>
          <th><h3 style={{fontFamily:'Times New'}}>&nbsp;Action</h3></th>
          </tr>
        </thead>
    )
  }
}
