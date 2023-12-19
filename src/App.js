import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FirstProject from "./pages/FirstProject";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/*route parente Layout qui comprends la navigation et le Footer*/}
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/first-project" element={<FirstProject />} />
					{/* path="*" fonctionne si jamais l'url ne correspond à rien de dééclaré au dessus  */}
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
