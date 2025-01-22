import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePortfolio from "./components/HomePortfolio";
import AboutComponent from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactCom from "./components/ContactCom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePortfolio />} />
				<Route path="/about" element={<AboutComponent/>} />
				<Route path="/contact" element={ <ContactCom/>} />
				<Route path="/portfolio" element={<Portfolio/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
