import React from "react";
import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<div className="container">
			<div className="">
				<div className="site-logo text-center py-4">
					{/* <!-- TODO: Change Image below --> */}
					<img src="./img/logo/logo.png" width="60px" alt="logo" />
				</div>
				<div className="text-center mb-2">
					<h5 className="text-uppercase">Connect me on</h5>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/alok722"
						className="social social-link"
					>
						<FaGithub className="fab fs-4" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/alok722/"
						className="social social-link"
					>
						<FaLinkedin className="fab fs-4" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://twitter.com/alok722"
						className="social social-link"
					>
						<FaTwitter className="fab fs-4" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.facebook.com/alok722"
						className="social social-link"
					>
						<FaFacebook className="fab fs-4" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.instagram.com/alok722_/"
						className="social social-link"
					>
						<FaInstagram className="fab fs-4" />
					</a>
					<a href="mailto:alokr417@gmail.com" className="social social-link">
						<MdEmail className="fab fs-4" />
					</a>
				</div>
				<div className="copyrights text-center">
					<p className="para">|| made with ❤️️ in 🇮🇳 ||</p>
					<p>
						{/* <!-- Place this tag where you want the button to render. --> */}
						<a
							className="github-button"
							href="https://github.com/alok722/alokraj.tech/fork"
							data-color-scheme="no-preference: dark; light: dark; dark: light;"
							data-icon="octicon-repo-forked"
							data-size="large"
							data-show-count="true"
							aria-label="Fork alok722/alokraj.tech on GitHub"
						>
							Fork
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
