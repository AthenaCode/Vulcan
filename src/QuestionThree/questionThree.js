import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './questionThree.css'



const products = [
	{
		'meat': 'chicken breast',
		'protien': '25',
		'calories': '200', 
		'carbs': '37',
		'fat': '8'	
	}, 
	{
		'meat': 'fried chicken',
		'protien': '45',
		'calories': '450', 
		'carbs': '21', 
		'fat': '16'
	}, 
	{
		'meat': 'beef stew',
		'protien': '20', 
		'calories': '250', 
		'carbs': '8', 
		'fat': '14'
	}
]



export default class QuestionThree extends Component {
  render() {
    return (
    	<div>	
      <BootstrapTable data={ products } multiColumnSort={ 2 }>
      	<TableHeaderColumn dataField='meat' filter={ { type: 'TextFilter', delay: 500 } }>Meat</TableHeaderColumn>
        <TableHeaderColumn dataField='protien' isKey={ true } dataSort={true}>Protein(g)</TableHeaderColumn>
        <TableHeaderColumn dataField='calories' dataSort={ true }>Calories(cal)</TableHeaderColumn>
        <TableHeaderColumn dataField='carbs' >Carbs(g)</TableHeaderColumn>
        <TableHeaderColumn dataField='fat'>Fat(g)</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}