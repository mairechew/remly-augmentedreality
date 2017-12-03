import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default class Footer extends Component {
  render() {
    return (
      <div>
      <h3>Made by Maire Chew &copy; 2017</h3>
      <SocialIcon url="https://github.com/mairechew" />
      <SocialIcon url="https://www.linkedin.com/in/mairechew/" />
    </div>
    )
  }
}
