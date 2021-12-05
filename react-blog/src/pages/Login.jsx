import React, { useRef } from 'react';
import '../styles/Login.scss';
import logo from '../assets/logos/logo_yard_sale.svg'

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="jorge@example.com" className="input input-email" required />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" required />
					<a href="/">
						<button type="submit"
							className="primary-button login-button">
							Log in
						</button>
					</a>
					
					<a href="/send-email">Forgot my password</a>
				</form>

				<a href="/signup">
						<button type="button"
							className="secondary-button signup-button">
							Sign up
						</button>
				</a>
				
			</div>
		</div >
	);
}

export default Login;