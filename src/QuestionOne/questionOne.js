import React, { Component } from 'react';
import data from './mockdata'; 
import './questionOne.css';

export default class QuestionOne extends Component {
	render(){
		return(
			<div>
				{data.map((item) =>(
					<div>
						<h3>{item.title}</h3>
						<cite>{item.websiteUrl}</cite>
						<span>{item.description}</span>
						<br/>
					</div>
				))}
			</div>
		);
	}
}