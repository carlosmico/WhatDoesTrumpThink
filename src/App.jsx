//REACT
import React from 'react';
import './css/App.css';
import TrumpPic from './img/trump.jpeg'

//LIBRARIES
import Axios from 'axios';

// COMPONENTS
import Header from './components/Header'
import TrumpThink from './components/TrumpThink';
import Footer from './components/Footer'

//CONST VARIABLES
const TrumpThinkUrl = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      thought: 'Loading...'
    }
  }

  //Como es una arrow function no tenemos que bindear el this
  loadThought = () => {
    Axios.get(TrumpThinkUrl)
      .then(resp => {
        console.log(resp);
        
        this.setState({
          thought: resp.data.message
        });
      })
      .catch(err => {
        console.log(err)

        this.setState({
          thought: '(◉ω◉)   Error accessing to brain of Trump   (◉ω◉)'
        });
      });
  }

  componentWillMount(){
    this.loadThought();
  }

  render(){
    return (
      <div className="App">
        <Header title='What does trump think?'></Header>

        <TrumpThink  thought={this.state.thought} trumpPic={TrumpPic}/>

        <Footer copyright='© All rights reserved. Carlos Micó 2019'/>
      </div>
    );
  }
}

export default App;
