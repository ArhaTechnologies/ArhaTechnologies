import { technologyCategories } from "../data/technologyData";
import { Link } from "react-router-dom";
export default function TechnologyMarquee() {
	return (
		<section className="technology-section">

			<div className="container">

				<div className="technology-heading">

					<span className="technology-subtitle">
						ENGINEERING EXCELLENCE
					</span>

					<h2 className="gradient-text">
						Technologies We Build With
					</h2>

					<p>
						We leverage industry-leading technologies to engineer
						scalable, secure and high-performance digital products
						that help businesses grow faster.
					</p>

				</div>

				<div className="technology-marquee">

					<div className="technology-track">

						{[...technologyCategories,
						...technologyCategories].map((category, index) => (

							<div
								className="technology-card"
								key={index}
							>

								<h3
									style={{
										color: category.color
									}}
								>
									{category.title}
								</h3>

								<div className="technology-list">

									{category.technologies.map((tech, i) => {

										const Icon = tech.icon;

										return (

											<Link
												to={`/technology/${tech.slug}`}
												className="technology-item"
												key={i}
											>

												<div
													className="technology-icon"
													style={{
														background: `${category.color}18`,
														border: `1px solid ${category.color}40`
													}}
												>

													<Icon
														size={18}
														color={category.color}
													/>

												</div>

												<span>
													{tech.name}
												</span>

											</Link>

										);

									})}

								</div>

							</div>

						))}

					</div>

				</div>

			</div>

		</section>
	);
}