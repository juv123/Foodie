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
      <div className="bg-white dark:bg-gray-800 mt-20 ml-10 mr-8 mb-40">
        <h1 className="text-4xl dark:text-white underline font-bold p-7">About us</h1>
        <UserContext.Consumer>
          {({user})=><h1 className='text-xl text-blue-500 hover:bg-yellow-300'><i>This is an Food Ordering app which uses swiggy public api.You can find your favorite restaurants and select your Food.</i>{/*user*/}</h1>}
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
