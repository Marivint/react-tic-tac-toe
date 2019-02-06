import React, {Component } from 'react';

export default class Clignotement extends Component {
  render() {
	  return (
	   setInterval(function(){ alert("Hello"); }, 1500);
	  );
  }
}