import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logo from "../images/logo/logo.png";

const Footer = () => {
	return (
		<div className="container">
			<div className="">
				<div className="site-logo text-center py-4">
					{/* <!-- TODO: Change Image below --> */}
					<img
						src={logo}
						width="60px"
						style={{ borderRadius: "50%" }}
						alt="logo"
					/>
				</div>
				<div className="text-center mb-2">
					<h5 className="text-uppercase">Connect me on</h5>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/khushalishah01/"
						className="social social-link"
					>
						<FaLinkedin className="fas fs-4" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://twitter.com/hameshacurious"
						className="social social-link"
					>
						<FaTwitter className="fas fs-4" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://instagram.com/khushaleee"
						className="social social-link"
					>
						<FaInstagram className="fas fs-4" />
					</a>
					<a
						href="mailto:hellokhushali@gmail.com"
						className="social social-link"
					>
						<MdEmail className="fas fs-4" />
					</a>
				</div>
				<div className="copyrights text-center">
					<p className="para">|| made with ❤️️ in 🇮🇳 ||</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
