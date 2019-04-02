import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
state = {

 ninjas : [
{name:"Ryu", age:"25", belt:"blue", id: 1},
{name:"Ryu", age:"25", belt:"blue", id: 2},
{name:"Ryu", age:"25", belt:"blue", id: 3}

  ]
}
addNinja = (ninja) => {
  ninja.id = Math.random();
  let  ninjas = [...this.state.ninjas, ninja];
  this.setState({
    ninjas: ninjas
  })
}
componentDidMount(){
  console.log('component mounted')
}
componentDidUpdate(prevProps, prevState){
  console.log('component updates');
  console.log(prevProps, prevState)
}

//  deleteNinja =(id) => {
//    let ninjas = this.state.ninjas.filter(ninja => {
//      return ninja.id!== id
//    });
//    this.setState({

//    })

 
  render() {
    return (
      <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome</p>
      <Ninjas deleteNinja={this.deleteNinja} ninjas ={this.state.ninjas} />
      <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
