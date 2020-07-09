import React , {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import Scroll from './Scroll';
import './App.css';


class App extends Component{
	constructor(){
		super()
		this.state={
			robots: robots ,
			searchfield :''
		}
		console.log('constructor');
}


componentDidMount(){
	this.setState({robots:robots});
	console.log('componentDidMount');
}

onSearchChange=(event)=>{
	this.setState({searchfield: event.target.value})
}
	
	render(){
		const{robots,searchfield}=this.state;
		const filtertedrobots= robots.filter(robots=>{
			return(
				robots.name.toLowerCase().includes(searchfield.toLowerCase())
				);
			
			
	});
		console.log('render');
		return(
				<div className='tc'>
					<h1 className='f1'> RoboFriends</h1>
					<SearchBox SearchChange= {this.onSearchChange}/>
					<Scroll>
						<CardList robots ={filtertedrobots}/>
					</Scroll>
				</div>
			);

		}	

}

		
export default App;