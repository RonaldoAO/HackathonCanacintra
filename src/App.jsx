import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/onboarding";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Signup />} />
				<Route path="/onboarding" element={<Onboarding />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</Router>
	);
}
