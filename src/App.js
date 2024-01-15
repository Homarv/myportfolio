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
					<Route path="/" element={<Home />} />
					<Route path="/first-project" element={<FirstProject />} />
					<Route path="/second-project" element={<SecondProject />} />
					<Route path="/third-project" element={<ThirdProject />} />
					<Route path="/fourth-project" element={<FourthProject />} />
					<Route path="/fifth-project" element={<FifthProject />} />
					{/* path="*" fonctionne si jamais l'url ne correspond à rien de dééclaré au dessus  */}
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
