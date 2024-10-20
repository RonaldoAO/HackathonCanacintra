import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/onboarding";
import Home from "./pages/home/Home";
import Signup from "./pages/Signup";
import { InterestsProvider } from "./contexts/Interests";
import Map from "./pages/home/Map";
import Search from "./pages/home/Search";
import Layout from "./pages/home/Layout";

export default function App() {
	return (
		<InterestsProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Signup />} />
					<Route path="/onboarding" element={<Onboarding />} />
					<Route path="/home" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="map" element={<Map />} />
						<Route path="search" element={<Search />} />
					</Route>
				</Routes>
			</Router>
		</InterestsProvider>
	);
}
