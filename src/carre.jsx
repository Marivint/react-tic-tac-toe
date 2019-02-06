import React, {Component } from 'react';

export default class Carre extends Component {
  render() {
	  return (
	    <button id={this.props.id} className="cell" onClick={this.props.onClick}>
	      {this.props.value}
	    </button>
	  );
  }
}