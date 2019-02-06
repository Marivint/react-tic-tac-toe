import React, {Component } from 'react';

export default class Blink extends Component {

	state = {
		show : true
	}

	componentDidMount(){
		this.intervalID = setInterval(
			() => {
				const previous = this.state.show;
		    this.setState({
		    	show: !previous
		    });

				}, 1500)
	}

	componentWillUmount(){
		clearInterval(this.intervalID);
	}

  render() {
	  return <div>{this.state.show && this.props.message}</div>
  }
}