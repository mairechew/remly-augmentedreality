import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SocialIcon} from 'react-social-icons';
import Flexbox from 'flexbox-react';

var footerStyle = {
  color: 'white'
}

var iconStyle = {
  color: 'white'
}

export default class Footer extends Component {
  render() {
    return (
      <Flexbox justifyContent="space-around" flexDirection="row" element="footer" height="60px">
        <h3 style={footerStyle}>Made by Maire Chew &copy; 2017</h3>
        <Flexbox justifyContent="space-around">
          <SocialIcon target="_blank" url="https://github.com/mairechew/remly-augmentedreality"/>
          <SocialIcon target="_blank" url="https://www.linkedin.com/in/mairechew/"/>
        </Flexbox>
      </Flexbox>

    )
  }
}
