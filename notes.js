import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {
  render() {
    return (
    {/*has history good for delevopment. for productino use browser history(returns server)*/}
    <Router history={hashHistory}>
  		{/*We are wrapping our HomePage, Address and NotFound routes inside the new Container route. 
  		We are also setting HomePage to be our IndexRoute. That means that when we hit "/", our Home 
  		component will render, as it is specified as the index:*/}
        <Route path='/' component={Container} > {/*DO NOT CLOSE*/}
        	<IndexRoute component={Home} />
	        <Route path='/address' component={Address} />
	        <Route path='*' component={NotFound} />
	    </Route>{/*CLOSE HERE*/}
	</Router>
    )
  }
}
{/*props.children will allow any routes wrapped within this route to be rendered in this component*/}
const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Home = () => <h1>Hello from Home!</h1>

const Address = () => <h1>We are located at 555 Jackson St.</h1>

{/*response for a user navigating to any route not specified*/}
const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

const Nav = () => (
  <div>
  	{/*<Link> is similar to using an html anchor tag.*/}
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/address'>Address</Link>
  </div>
)

export default App