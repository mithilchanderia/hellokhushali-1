import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Banner from "./components/Banner";
import CollapsibleInfo from "./components/CollapsibleInfo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductionSkills from "./components/ProductionSkills";
import { education } from "./data/education";
import { experience } from "./data/experience";

import "./css/variables.css";

import "./css/global.css";

import "./css/style.css";

import "./css/responsive.css";

const App = () => {
	const scrollToTop = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox and Opera
	};

	return (
		<>
			<Navbar />
			<main className="site-main">
				<Banner />
				<CollapsibleInfo title="Experience" sectionDetails={experience} />
				<CollapsibleInfo title="Education" sectionDetails={education} />
				<ProductionSkills />
			</main>
			<footer className="footer-area">
				<Footer />
			</footer>
			<button
				onClick={() => scrollToTop()}
				id="scroll-btn"
				title="Go to top"
				style={{ display: "block" }}
			>
				<FaArrowUp className="mb-2 fs-5" />
			</button>
		</>
	);
};

export default App;
