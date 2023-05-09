import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import logo from "../images/logo/logo.png";

const Navbar = () => {
	const [isThemeLight, setIsThemeLight] = useState(
		JSON.parse(localStorage.getItem("portfolio-theme")) === false ? false : true
	);

	const handleThemeChange = () => {
		localStorage.setItem("portfolio-theme", JSON.stringify(!isThemeLight));
		setIsThemeLight(!isThemeLight);
	};

	useEffect(() => {
		if (!isThemeLight) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [isThemeLight]);

	return (
		<header className="header_area">
			<div className="main-menu">
				<nav
					className="navbar navbar-expand-lg navbar-light fixed-top"
					id="top-nav-fixed"
				>
					<a className="navbar-brand" href="/" style={{ marginLeft: "5%" }}>
						<img
							src={logo}
							width="60px"
							alt="logo"
							style={{ borderRadius: "50%" }}
						/>
					</a>
					<input
						className="toggle mobile-show"
						type="checkbox"
						checked={isThemeLight}
						onChange={handleThemeChange}
					/>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span>
							<MdMenu />
						</span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNav"
					>
						<div className="me-auto"></div>
						<ul className="navbar-nav">
							{/* <li className="nav-item active">
								<a className="nav-link" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									rel="noreferrer"
									href="https://github.com/"
									target="_blank"
								>
									<mark>Projects</mark>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									<mark>Certificates</mark>
								</a>
							</li> */}
							<li className="nav-item align-self-center mb-2">
								<input
									className="toggle desktop-show"
									type="checkbox"
									checked={isThemeLight}
									onChange={handleThemeChange}
								/>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
