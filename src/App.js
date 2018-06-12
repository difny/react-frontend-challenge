import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Device Insight</h1>
				</header>
				<div className="App-intro">
					<p>
						Your challenge - should you choose to accept it - is to
						build a "state-of-the art" encryption tool! ;)
					</p>
					<p>
						In the Form component, you will find an input and an
						output element. A person (let's call him a secret agent)
						can enter a message. The message should then be reversed
						and the reversed message shown in the output box.
					</p>
					<h4>Example</h4>
					<h5>Input</h5>
					<pre>This is a test - is this thing on?</pre>
					<h5>Output</h5>
					<pre>sihT si a tset - si siht gniht ?no</pre>
					<Form />
				</div>
			</div>
		);
	}
}

export default App;
