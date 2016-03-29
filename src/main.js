import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap';
// products will be presented by react-bootstrap-table
var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  }];
// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

React.render(
    <BootstrapTable data={products} striped={true} hover={true} insertRow={true} deleteRow={true} >
        <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true} editable={false}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
    </BootstrapTable>, document.getElementById("app")
);
