import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FirstProject from "./pages/FirstProject";
import SecondProject from "./pages/SecondProject";
import ThirdProject from "./pages/ThirdProject";
import FourthProject from "./pages/FourthProject";
import FifthProject from "./pages/FifthProject";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/*route parente Layout qui comprends la navigation et le Footer*/}
				<Route element={<Layout />}>
					<Route path="/myportfolio" element={<Home />} />
					<Route path="/fisheye" element={<FirstProject />} />
					<Route path="/sportsee" element={<SecondProject />} />
					<Route path="/algojs" element={<ThirdProject />} />
					<Route path="/bankapi" element={<FourthProject />} />
					<Route path="/perso-project" element={<FifthProject />} />
					{/* path="*" fonctionne si jamais l'url ne correspond à rien de dééclaré au dessus  */}
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
