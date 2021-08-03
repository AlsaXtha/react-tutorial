import React, {Component} from 'react';
//import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'radha', age: 20},
      { name: 'alsa', age: 29},
      { name: 'arya', age: 33}
    ], 
    otherState: 'some other value'
  }

  switchNameHander = (newName) => {
    // console.log('was Clicked!');
    // don't do this :::: this.state.persons[0].name = 'Anuradha';
    this.setState({
      persons: [
      { name: newName, age: 20},
      { name: 'alsa', age: 29},
      { name: 'arya', age: 28}]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { name: 'Marie', age: 20},
      { name: event.target.value, age: 29},
      { name: 'arya', age: 28}]
    })
  }

  render(){
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return(
      <div className="App"> 
        <h1>Hi, I'm a React App </h1>
        <p>This is really working</p>
        <button 
          style={style} 
          onClick={() => this.switchNameHander('anura!!!!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHander.bind(this, 'aruradha!!!')}
          changed={this.nameChangedHandler}>My Hobbies: Drawing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

        //1. <Person/>
        //   <Person> </Person>


        //2. <Person name="Anya" age="18"/>
        //   <Person name="Alisha" age="25">My Hobbies: Drawing</Person>
        //   <Person name="Aastha" age="39"/>

        /*3. class App extends Component {
                state = {
                  persons: [
                    { name: 'radha', age: 20},
                    { name: 'alsa', age: 29},
                    { name: 'arya', age: 33}
                  ], 
                  otherState: 'some other value'
                }

                switchNameHander = () => {
                  // console.log('was Clicked!');
                  // don't do this :::: this.state.persons[0].name = 'Anuradha';
                  this.setState({
                    persons: [
                    { name: 'anuradha', age: 20},
                    { name: 'alsa', age: 29},
                    { name: 'arya', age: 28}]
                  })
                }

                render(){
                  return(
                    <div className="App"> 
                      <h1>Hi, I'm a React App </h1>
                      <p>This is really working</p>
                      <button onClick={this.switchNameHander}>Switch Name</button>
                      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Drawing</Person>
                      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                    </div>
                  );
                }
              }

              export default App;*/


        /* 4. const  App = props => {
                const [ personsState, setPersonsState ] = useState({
                  persons: [
                    { name: 'radha', age: 20},
                    { name: 'alsa', age: 29},
                    { name: 'arya', age: 33}
                  ] 
                  //otherState: 'some other value'
                });
                
                const [otherState, setOtherState] = useState('some other value');

                console.log(personsState, otherState);

                const switchNameHander = () => {
                  // console.log('was Clicked!');
                  // don't do this :::: this.state.persons[0].name = 'Anuradha';
                  setPersonsState({
                    persons: [
                    { name: 'anuradha', age: 20},
                    { name: 'alsa', age: 29},
                    { name: 'arya', age: 28}]
                    //otherState : personsState.otherState
                  })
                }

                  return(
                    <div className="App"> 
                      <h1>Hi, I'm a React App </h1>
                      <p>This is really working</p>
                      <button onClick={switchNameHander}>Switch Name</button>
                      <Person 
                      name={personsState.persons[0].name} 
                      age={personsState.persons[0].age}
                      />
                      <Person 
                      name={personsState.persons[1].name} 
                      age={personsState.persons[1].age}>
                        My Hobbies: Drawing
                      </Person>
                      <Person 
                      name={personsState.persons[2].name} 
                      age={personsState.persons[2].age}
                      />
                    </div>
                  );
              }

              export default App; */



          /*5. class App extends Component {
                state = {
                  persons: [
                    { name: 'radha', age: 20},
                    { name: 'alsa', age: 29},
                    { name: 'arya', age: 33}
                  ], 
                  otherState: 'some other value'
                }

                switchNameHander = (newName) => {
                  // console.log('was Clicked!');
                  // don't do this :::: this.state.persons[0].name = 'Anuradha';
                  this.setState({
                    persons: [
                    { name: newName, age: 20},
                    { name: 'alsa', age: 29},
                    { name: 'arya', age: 28}]
                  })
                }

                nameChangedHandler = (event) => {
                  this.setState({
                    persons: [
                    { name: 'Marie', age: 20},
                    { name: event.target.value, age: 29},
                    { name: 'arya', age: 28}]
                  })
                }

                render(){
                  const style ={
                    backgroundColor: 'white',
                    font: 'inherit',
                    border: '1px solid blue',
                    padding: '8px',
                    cursor: 'pointer'
                  };
                  return(
                    <div className="App"> 
                      <h1>Hi, I'm a React App </h1>
                      <p>This is really working</p>
                      <button 
                        style={style} 
                        onClick={() => this.switchNameHander('anura!!!!!')}>Switch Name</button>
                      <Person 
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age}/>
                      <Person 
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age}
                        click={this.switchNameHander.bind(this, 'aruradha!!!')}
                        changed={this.nameChangedHandler}>My Hobbies: Drawing</Person>
                      <Person 
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age}/>
                    </div>
                  );
                }
              }

              export default App;  */ 