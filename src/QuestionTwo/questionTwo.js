import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Searches extends Component {
	constructor(props){
		super(props);
		this.searchInputEnter = this.searchInputEnter.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = { value: ''};
	}

	searchInputEnter(e){
		console.log('This is e from search searchInputEnter:', e);
	}

	handleChange(e){
		this.setState=({value: e}); 
		console.log('This is e:', e);		
	}

	render(){
		return(
			<MuiThemeProvider>
				<SearchBar
					onChange={this.handleChange}
					onRequestSearch={this.searchInputEnter}
					style={{
						margin: '0 auto',
						maxWidth: 800
					}}
				/> 
			</MuiThemeProvider>
		);
	}
}


class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			website: 'Hello'
		};
		
	}
	componentDidMount() {
		fetch('http://www.google.com')
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						website: result.website
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
		}

	render() {
		const { error, isLoaded, website } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<h3>The website title is: {website}</h3>
			);
		}
	}
}



export default class QuestionTwo extends Component {
	render(){
		return(
			<div>
				<Searches />
				<SearchResults />
			</div>
		);
	}
}