import React from 'react';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/recovery-password" element={<RecoveryPassword />} />
					<Route exact path="/send-email" element={<SendEmail />} />
					<Route exact path="/new-password" element={<NewPassword />} />
					<Route exact path="/account" element={<MyAccount />} />
					<Route exact path="/signup" element={<CreateAccount />} />
					<Route exact path="/checkout" element={<Checkout />} />
					<Route exact path="/orders" element={<Orders />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};
export default App;

