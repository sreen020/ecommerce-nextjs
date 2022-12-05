import React from 'react';
import Head from 'next/head';

import Nav from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Head>
				<title>ECommerce STORE</title>
			</Head>
			<header>
				<Nav />
			</header>
			<main className="main-container">{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
