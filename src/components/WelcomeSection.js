import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Background from '../images/background.png'


  var imgStyle = {
    width: '400px',
    margin: '100px'
  }

  var bgImg = {
    backgroundImage: `url(${Background})`
  }



class WelcomeSection extends React.Component {

    render() {
	return (
    <div style={bgImg}><img style={imgStyle} src={ require('../images/remly-logo.png')}/></div>
	);
    }
}
export default WelcomeSection;
