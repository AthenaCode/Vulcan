import React, { Component } from 'react';
import './App.css';
import QuestionOne from './QuestionOne/questionOne';
import QuestionTwo from './QuestionTwo/questionTwo';
import QuestionThree from './QuestionThree/questionThree';
import QuestionFour from './QuestionFour/questionFour';

class App extends Component {
	render() {
		return (
			<div className="App">
				<br/>
				<QuestionOne />
				<br/>
				<QuestionThree />
				<br/>
				<QuestionFour />
			</div>
		);
	}
}

export default App;
