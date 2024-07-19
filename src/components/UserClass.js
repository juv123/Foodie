import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props){
        super(props);
        //console.log('child constructor');
        this.state={
        count1:0,
        count2:1
        }
      
    }
    componentDidMount(){
      console.log('child component Did mount');
    }
   
  render() {
    //console.log('child render');
    //const {name,location}=this.props;
    const {count1,count2}=this.state;
    return (
      
      <div>
        
        <h1>Users</h1>
        <p>Name:{name}</p>
        <p>Location:{location}</p>
        <p>Count1: {count1}</p>
        <p>Count2: {count2}</p>
       <button onClick={()=>{
        this.setState({count1:this.state.count1+1});
        }}>Increment</button>
      
      </div>
    );
  }
}
