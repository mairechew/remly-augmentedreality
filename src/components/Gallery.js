import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-photo-gallery';

export default class Sample extends React.Component {
    render() {
	return (
	    <Gallery columns={2} photos={PHOTO_SET} />
	);
    }
}
const PHOTO_SET = [
  {
    src: 'http://www.kjprofit.com/wp-content/uploads/2017/01/awesome-designs-of-geometric-shapes-best-design.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'https://i.pinimg.com/736x/7b/e1/b1/7be1b1279dfd0aab872274e9bb5f5a05--geometric-designs-geometric-patterns.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'https://s-media-cache-ak0.pinimg.com/originals/49/13/9c/49139c2074d3fc239df813c0452a0907.png',
    width: 1,
    height: 1
  },
  {
    src: 'http://www.kjprofit.com/wp-content/uploads/2017/01/awesome-designs-of-geometric-shapes-best-design.jpg',
    width: 1,
    height: 1
  }

];
