import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap';
// products will be presented by react-bootstrap-table
const contacts = [{
      component: 1,
      release: "Item name 1",
      email: 100,
      role: 1
  },{
      component: 2,
      release: "Item name 2",
      email: 100,
      role: 2
  }];
// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

const tableOptions = {

}

render(
    <BootstrapTable data={contacts} insertRow={true} deleteRow={true} options={tableOptions}>
      <TableHeaderColumn dataField="component" dataAlign="center" isKey={true} editable={false}>
        Component
      </TableHeaderColumn>
      <TableHeaderColumn dataField="release" dataAlign="center" editable={false}>
        Release
      </TableHeaderColumn>
      <TableHeaderColumn dataField="email" dataAlign="center">
        Email
      </TableHeaderColumn>
      <TableHeaderColumn dataField="role" dataAlign="center">
        Contact Role
      </TableHeaderColumn>
    </BootstrapTable>, document.getElementById("app")
);
