import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
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
						<p>🎓 A Psychology & Sociology graduate from Mumbai University</p>
						<p>🧑‍💼 Currently working as Product Marketing Manager with Loop</p>
						<p>
							🏫 Pursuing MBA (Marketing) from{" "}
							<mark>NMIMS Global University</mark>
						</p>
						<p>😎 Passionate B2B marketer with ∼6 years of experience</p>
						<p>🤓 Proficient in taking products off-shelf and building GTMs</p>
						<p>💯 Keen to learn, unlearn and relearn and aid business growth</p>
						<p>
							<a
								className="github-button"
								href="https://github.com/alok722"
								data-color-scheme="no-preference: light; light: dark; dark: light;"
								data-size="large"
								data-show-count="true"
								aria-label="Follow @alok722 on GitHub"
							>
								Follow @alok722
							</a>
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
						<hr />
						<div className="social">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://github.com/alok722"
								className="social-link"
							>
								<FaGithub className="fas fs-4" />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://linkedin.com/in/alok722"
								className="social-link"
							>
								<FaLinkedin className="fas fs-4" />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://twitter.com/alok722"
								className="social-link"
							>
								<FaTwitter className="fas fs-4" />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://instagram.com/alok722_"
								className="social-link"
							>
								<FaInstagram className="fas fs-4" />
							</a>
							<a href="mailto:alokr417@gmail.com" className="social-link">
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
									<a href="./assets/Alok_Raj.pdf" target="_blank">
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
