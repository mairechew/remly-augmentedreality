import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Background from '../images/background.png';




  var imgStyle = {
    width: '50%',
    margin: '50px'
  }

  var bgImg = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }



class WelcomeSection extends React.Component {

    render() {
	return (
    <div style={bgImg}><img style={imgStyle} src={ require('../images/remly-logo.png')}/></div>
	);
    }
}
export default WelcomeSection;
