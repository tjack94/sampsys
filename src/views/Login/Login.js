import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import * as Actions from '../../Redux/actions'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}
	handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	login() {
		const user = {
			username: this.state.username,
			password: this.state.password
		};

		axios.post('/api/login', user).then((results) => {
            console.log(results);
            this.props.getUser(results.data[0])
			this.props.history.push('./dashboard');
		});
	}
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="Username"
					value={this.state.username}
					onChange={(e) => this.handleChange(e, 'username')}
				/>
				<input
					type="password"
					placeholder="Password"
					value={this.state.password}
					onChange={(e) => this.handleChange(e, 'password')}
				/>
				<div>
					<button onClick={() => this.login()}>Login</button>
					<Link to="/register">
						<button>Sign up</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default connect(state => state, Actions)(Login);
