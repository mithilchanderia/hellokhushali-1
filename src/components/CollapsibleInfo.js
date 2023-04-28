import React from "react";
import { FaBuilding, FaSchool } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";

const CollapsibleInfo = ({ title, sectionDetails }) => {
	return (
		<>
			<section className="faq-section py-5" id="collapsibleinfo">
				<div className="container single-col-max">
					<div className="row text-center">
						<div className="col-12">
							<div className="about-title">
								<h3
									className="text-uppercase title-text"
									style={{ fontSize: 35 }}
								>
									{title}
								</h3>
							</div>
						</div>
					</div>
					<div id="exp-accordion" className="faq-accordion mx-auto">
						{sectionDetails?.map((data, id) => (
							<div key={data?.key} className="card border-0 mb-4 shadow-sm">
								<div className="card-header border-0 p-4 theme-bg-light">
									<h4 className="card-title mb-0">
										<div className="d-flex justify-content-between">
											<a
												className="card-toggle collapsed"
												data-parent="#exp-accordion"
												data-bs-toggle="collapse"
												href={`#${data?.key}`}
												aria-expanded="false"
											>
												{title === "Experience" ? (
													<FaBuilding className="fs-6 mb-1 me-2" />
												) : (
													<FaSchool className="fs-5 mb-1 me-2" />
												)}
												{data?.title}
											</a>
											<a
												className="card-toggle collapsed exp-dates"
												data-parent="#exp-accordion"
												data-bs-toggle="collapse"
												href={`#${data?.key}`}
												aria-expanded="false"
											>
												<span>
													{data?.duration}
													<FiChevronUp className="fa-chevron-up ms-5 fs-5" />
												</span>
											</a>
										</div>
									</h4>
								</div>

								<div
									className={`card-collapse collapse ${id === 0 && "show"}`}
									id={data?.key}
								>
									<div className="card-body p-4 bg-white">
										<b>{data?.infoTitle}</b>

										{data?.infoPoints?.length > 1 && (
											<ul>
												{data?.infoPoints?.map(info => (
													<li key={info.key}>{info?.point}</li>
												))}
											</ul>
										)}

										{data?.infoPoints?.length === 1 && (
											<p>{data?.infoPoints?.[0]?.point}</p>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default CollapsibleInfo;
