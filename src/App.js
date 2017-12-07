import React, { Component } from 'react';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      images: []
     }
  }
  componentDidMount(){
    fetch('https://remly-api.herokuapp.com/api/v1/urls')
    .then(response => response.json())
    .then(data => {
      let images = data.map((x) => {
        return (
          <div>
            {x.url}
          </div>
        )
      })
        this.setState({images:images})
      })
  }
  render() {
    return (
      <div className="App">
        <WelcomeSection />
        {this.state.images}
        <Gallery images={this.state.images}/>
        <Footer />
      </div>
    );
  }
}

export default App;
