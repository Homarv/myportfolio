import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="Layout">
			<Navbar />
			<div className="content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
