import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import TypeWriter from "typewriter-effect";

const Banner = () => {
	return (
		<section className="site-banner">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 site-title">
						<h3 className="title-text text-uppercase">Hey, I am Khushali👋</h3>
						<h4 className="text-uppercase">
							<span>
								I am a{" "}
								<TypeWriter
									options={{
										autoStart: true,
										strings: [
											"PRODUCT MARKETING MANAGER",
											"MARKETING ENTHUSIAST",
											"SAAS MARKETER",
											"B2B MARKETING PROFESSIONAL",
										],
										loop: true,
									}}
								/>
							</span>
						</h4>
						<hr />
						<p>
							🧑‍💼 Currently working as <mark>Product Marketing Manager</mark>{" "}
							with Loop
						</p>
						<p>
							🏫 Pursuing <b>MBA (Marketing)</b> from{" "}
							<b>NMIMS Global University</b>
						</p>
						<p>
							😎 Passionate{" "}
							<mark>B2B marketer with ∼6 years of experience</mark>
						</p>
						<p>
							🤓 <b>Proficient</b> in taking products off-shelf and{" "}
							<b>building GTMs</b>
						</p>
						<p>
							🎓 A <b>Psychology & Sociology</b> graduate from Mumbai University
						</p>
						<p>
							💯 Keen to <mark>learn, unlearn and relearn</mark> and aid
							business growth
						</p>
						<hr />
						<div className="social">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/in/khushalishah01/"
								className="social-link"
							>
								<FaLinkedin className="fas fs-4" />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://twitter.com/hameshacurious"
								className="social-link"
							>
								<FaTwitter className="fas fs-4" />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://instagram.com/khushaleee"
								className="social-link"
							>
								<FaInstagram className="fas fs-4" />
							</a>
							<a href="mailto:hellokhushali@gmail.com" className="social-link">
								<MdEmail className="fas fs-4" />
							</a>
						</div>
						<div className="site-buttons">
							<div className="d-flex flex-row flex-wrap">
								<button
									type="button"
									className="btn button primary-button me-4 text-uppercase first-btn"
									style={{ padding: ".375rem .75rem" }}
								>
									<a href="/assets/Resume - Khushali Shah.pdf" target="_blank">
										RESUME &nbsp;
										<FiExternalLink className="fs-5 mb-1" />
									</a>
								</button>
								<button
									type="button"
									className="btn button secondary-button text-uppercase second-btn"
									style={{ padding: ".45rem .75rem" }}
								>
									<a href="tel:+91-8240159173">Hire Me</a>
								</button>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 banner-image">
						<lottie-player
							src="./img/banner/Blogging.json"
							background="transparent"
							speed="1"
							loop
							autoplay
						></lottie-player>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
