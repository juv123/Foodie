import React, { Component } from 'react'
import UserClass from './UserClass'
import UserContext from '../config/userContexts';

export default class About extends Component {
    constructor(props){
        super(props);
        console.log('parent constructor');
    }
    async componentDidMount(){
        console.log('parent component Did Mount');
    }
  render() {
    console.log('parent render');
    return (
      <div className="bg-white dark:bg-gray-800">
        <h1 className="dark:text-white underline font-bold">About us</h1>
        <UserContext.Consumer>
          {({user})=><h1><i>Food App Using Swiggy API</i>{/*user*/}</h1>}
                </UserContext.Consumer>
       
          
      </div>
      
    )
  }
  componentDidUpdate(){
    console.log('component uppdated');
  }
  componentWillUnmount(){
    console.log('component is unmounting');
  }
}
