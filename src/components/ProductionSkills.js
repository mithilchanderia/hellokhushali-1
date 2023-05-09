import React from "react";
import { productionLevelSkills } from "../data/productionLevelSkills";

const ProductionSkills = () => {
	return (
		<section id="skills">
			<div className="container">
				<div className="col-lg-12 text-center services-title">
					<h3 className="text-uppercase title-text" style={{ fontSize: 35 }}>
						Tool Stack
					</h3>
				</div>
				<div className="integration-list row justify-content-center py-5">
					{productionLevelSkills.map(skill => (
						<div
							key={skill?.text}
							className="item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"
						>
							<div className="d-flex justify-content-center align-items-center flex-column rounded-circle">
								<img
									className="shadow rounded-circle"
									src={skill?.img}
									alt={skill?.text}
									style={{ objectFit: "scale-down" }}
								/>
								<p className="mt-2" style={{ fontWeight: 500 }}>
									{skill?.text}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductionSkills;
