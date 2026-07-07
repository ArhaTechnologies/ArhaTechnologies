import React from "react";
import { Link } from "react-router-dom";
import {
	ArrowRight,
	CheckCircle,
	HeartPulse,
	GraduationCap,
	Landmark,
	ShoppingBag,
	Factory,
	Truck
} from "lucide-react";

import industryData from "../data/industryData";
import IndustryVisual from "../components/IndustryVisual";

/* ----------------------------------------------------------
Featured Industries (Only 6 on Landing Page)
---------------------------------------------------------- */

const featuredIndustries = [
	{
		slug: "healthcare",
		title: "Healthcare",
		icon: HeartPulse,
		color: "#3B82F6",
		short:
			"Secure hospital systems, telemedicine, patient portals and healthcare management platforms."
	},

	{
		slug: "education",
		title: "Education",
		icon: GraduationCap,
		color: "#06B6D4",
		short:
			"Modern LMS platforms, student portals, online examination and e-learning solutions."
	},

	{
		slug: "finance",
		title: "Finance & Banking",
		icon: Landmark,
		color: "#8B5CF6",
		short:
			"Digital banking, payment gateways, fintech platforms and secure financial software."
	},

	{
		slug: "retail",
		title: "Retail & eCommerce",
		icon: ShoppingBag,
		color: "#EC4899",
		short:
			"Online stores, POS systems, CRM solutions and inventory management software."
	},

	{
		slug: "manufacturing",
		title: "Manufacturing",
		icon: Factory,
		color: "#F59E0B",
		short:
			"ERP systems, production monitoring and warehouse automation platforms."
	},

	{
		slug: "logistics",
		title: "Logistics & Fleet",
		icon: Truck,
		color: "#10B981",
		short:
			"Fleet tracking, warehouse management and intelligent logistics solutions."
	}
];

/* ----------------------------------------------------------
Reusable Industry Card
---------------------------------------------------------- */

function IndustryCard({ industry }) {
	const Icon = industry.icon;

	return (
		<div
			className="glass-card"
			style={{
				padding: "14px",
				display: "flex",
				flexDirection: "column",
				gap: "24px",
				position: "relative",
				overflow: "hidden",
				transition: ".35s"
			}}
		>
			{/* Top Gradient */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "4px",
					background: `linear-gradient(90deg, ${industry.color}, transparent)`
				}}
			/>

			{/* Icon */}

			<div
				style={{
					width: "60px",
					height: "60px",
					borderRadius: "16px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: industry.color,
					background: `${industry.color}12`,
					border: `1px solid ${industry.color}30`
				}}
			>
				<Icon size={28} />
			</div>

			{/* Title */}

			<div>

				<h3
					style={{
						fontSize: "22px",
						marginBottom: "10px"
					}}
				>
					{industry.title}
				</h3>

				<p
					style={{
						color: "var(--color-text-secondary)",
						lineHeight: "1.8",
						fontSize: "15px"
					}}
				>
					{industry.short}
				</p>

			</div>

			{/* Explore */}

			<Link
				to={`/industry/${industry.slug}`}
				style={{
					display: "inline-flex",
					alignItems: "center",
					gap: "8px",
					color: industry.color,
					fontWeight: "600",
					textDecoration: "none",
					marginTop: "auto"
				}}
			>
				Explore Industry

				<ArrowRight size={18} />

			</Link>
		</div>
	);
}

export default function Industries() {

	return (

		<div className="page-wrapper">

			{/* ==========================================================
								HERO SECTION
		========================================================== */}

			<section
				style={{
					textAlign: "cente",
					paddingBottom: "0px"
				}}
			>

				<div
					className="container"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "22px"
					}}
				>

					<div
						style={{
							display: "inline-flex",
							padding: "7px 16px",
							borderRadius: "25px",
							background: "rgba(59,130,246,.08)",
							border: "1px solid rgba(59,130,246,.18)",
							color: "var(--color-primary)",
							fontWeight: "600",
							fontSize: "13px"
						}}
					>
						Industries We Serve
					</div>

					<h1
						style={{
							fontSize: "calc(2rem + 2vw)",
							fontWeight: "800",
							lineHeight: "1.2"
						}}
					>
						Digital Solutions Built For
						<br />

						<span className="gradient-text">
							Every Business Industry
						</span>

					</h1>

					<p
						style={{
							maxWidth: "720px",
							color: "var(--color-text-secondary)",
							fontSize: "18px",
							lineHeight: "1.8"
						}}
					>
						We help organizations across diverse industries
						accelerate growth with scalable, secure and
						innovative digital solutions tailored to their
						business needs.
					</p>

					{/* Hero Isometric Illustration */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '200px',
            background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(30px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0
          }} />
          <img
            src="/industries_hero.jpeg"
            alt="Digital services ecosystem illustration"
            style={{
              maxWidth: '380px',
              width: '90%',
              borderRadius: '16px',
              position: 'relative',
              zIndex: 1,
              animation: 'float 7s ease-in-out infinite',
              filter: 'drop-shadow(0 20px 40px rgba(59, 130, 246, 0.2))'
            }}
          />
        </div>

				</div>

			</section>

			{/* ==========================================================
							FEATURED INDUSTRIES
		========================================================== */}

			<section
				style={{
					paddingBottom: "30px"
				}}
			>

				<div className="container">

					<div
						style={{
							textAlign: "center",
							marginBottom: "15px"
						}}
					>

						<div
							style={{
								display: "inline-flex",
								padding: "0px 16px",
								borderRadius: "20px",
								background: "rgba(6,182,212,.08)",
								border: "1px solid rgba(6,182,212,.2)",
								color: "var(--color-secondary)",
								fontWeight: "700",
								fontSize: "12px",
								textTransform: "uppercase",
								letterSpacing: ".08em",
								marginBottom: "18px"
							}}
						>
							Industries
						</div>

						<h2
							style={{
								fontSize: "calc(1.5rem + 1vw)",
								fontWeight: "800",
								marginBottom: "15px"
							}}
						>
							Industries Where We
							<span className="gradient-text">
								{" "}Deliver Excellence
							</span>
						</h2>

						<p
							style={{
								maxWidth: "650px",
								margin: "auto",
								color: "var(--color-text-secondary)",
								lineHeight: "1.8"
							}}
						>
							Our engineering expertise spans multiple industries,
							enabling us to build software that solves real-world
							business challenges.
						</p>

					</div>

					{/* Grid Starts Here */}

					{/* Cards */}

					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
							gap: "28px"
						}}
					>

						{featuredIndustries.map((industry) => {

							const detail = industryData[industry.slug];

							return (

								<div
									key={industry.slug}
									className="glass-card"
									style={{
										padding: "32px",
										display: "flex",
										flexDirection: "column",
										gap: "22px",
										position: "relative",
										overflow: "hidden"
									}}
								>

									{/* Top Accent */}

									<div
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "4px",
											background: `linear-gradient(90deg, ${industry.color}, transparent)`
										}}
									/>

									{/* Title */}

									<div>

										<h3
											style={{
												color: industry.color,
												marginBottom: "8px",
												fontSize: "22px"
											}}
										>
											{industry.title}
										</h3>

										<p
											style={{
												color: "var(--color-text-secondary)",
												lineHeight: "1.7"
											}}
										>
											{industry.short}
										</p>

									</div>

									{/* Solutions */}

									<div
										style={{
											display: "flex",
											flexDirection: "column",
											gap: "12px"
										}}
									>

										{(detail?.solutions || []).slice(0, 5).map((solution, i) => (

											<div
												key={i}
												style={{
													display: "flex",
													alignItems: "center",
													gap: "10px"
												}}
											>

												<CheckCircle
													size={16}
													color={industry.color}
												/>

												<span
													style={{
														color: "var(--color-text-secondary)",
														fontSize: "14px"
													}}
												>
													{solution}
												</span>

											</div>

										))}

									</div>

									{/* Explore */}

									<Link
										to={`/industry/${industry.slug}`}
										style={{
											marginTop: "auto",
											display: "inline-flex",
											alignItems: "center",
											gap: "8px",
											color: industry.color,
											fontWeight: "600",
											textDecoration: "none"
										}}
									>

										Explore Solutions

										<ArrowRight size={18} />

									</Link>

								</div>

							);

						})}

					</div>

				</div>

			</section>

			{/* ==========================================================
					WHY BUSINESSES CHOOSE ARHA
	========================================================== */}

			<section
				style={{
					paddingBottom: "90px"
				}}
			>

				<div className="container">

					<div
						className="glass-card"
						style={{
							padding: "55px",
							position: "relative",
							overflow: "hidden"
						}}
					>

						{/* Top Border */}

						<div
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "4px",
								background:
									"linear-gradient(90deg,var(--color-primary),transparent)"
							}}
						/>

						<div
							style={{
								textAlign: "center",
								marginBottom: "45px"
							}}
						>

							<div
								style={{
									display: "inline-flex",
									padding: "6px 16px",
									borderRadius: "20px",
									background: "rgba(59,130,246,.08)",
									border: "1px solid rgba(59,130,246,.2)",
									color: "var(--color-primary)",
									fontSize: "12px",
									fontWeight: "700",
									letterSpacing: ".08em",
									textTransform: "uppercase",
									marginBottom: "18px"
								}}
							>
								Why ARHA
							</div>

							<h2
								style={{
									fontSize: "calc(1.4rem + 1vw)",
									fontWeight: "800",
									marginBottom: "14px"
								}}
							>
								Why Businesses
								<span className="gradient-text">
									{" "}Choose ARHA
								</span>
							</h2>

							<p
								style={{
									maxWidth: "650px",
									margin: "auto",
									color: "var(--color-text-secondary)",
									lineHeight: "1.8"
								}}
							>
								We combine domain expertise with modern engineering
								practices to deliver scalable software that creates
								measurable business value.
							</p>

						</div>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
								gap: "22px"
							}}
						>

							{[
								"Industry-Specific Expertise",
								"Secure & Scalable Architecture",
								"Cloud-Native Development",
								"Agile Delivery Process",
								"Long-Term Maintenance & Support",
								"Modern UI/UX Experience"
							].map((item, index) => (

								<div
									key={index}
									style={{
										display: "flex",
										alignItems: "center",
										gap: "14px",
										padding: "18px 22px",
										borderRadius: "14px",
										background: "rgba(255,255,255,.02)",
										border: "1px solid var(--color-border)"
									}}
								>

									<CheckCircle
										size={20}
										color="var(--color-primary)"
									/>

									<span
										style={{
											fontWeight: "600"
										}}
									>
										{item}
									</span>

								</div>

							))}

						</div>

					</div>

				</div>

			</section>
			
			{/* ==========================================================
						CALL TO ACTION
	========================================================== */}

			<section
				style={{
					paddingBottom: "100px"
				}}
			>
				<div className="container">

					<div
						className="glass-card"
						style={{
							padding: "60px",
							textAlign: "center",
							position: "relative",
							overflow: "hidden",
							border: "1px solid var(--color-border-glow)"
						}}
					>

						{/* Background Glow */}

						<div
							style={{
								position: "absolute",
								inset: 0,
								background:
									"radial-gradient(circle at center, rgba(59,130,246,.08), transparent 70%)",
								pointerEvents: "none"
							}}
						/>

						<div
							style={{
								position: "relative",
								zIndex: 2,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "22px"
							}}
						>

							<div
								style={{
									display: "inline-flex",
									padding: "7px 18px",
									borderRadius: "999px",
									background: "rgba(59,130,246,.08)",
									border: "1px solid rgba(59,130,246,.18)",
									color: "var(--color-primary)",
									fontSize: "13px",
									fontWeight: "700",
									textTransform: "uppercase",
									letterSpacing: ".08em"
								}}
							>
								Let's Build Together
							</div>

							<h2
								style={{
									fontSize: "clamp(2rem,3vw,3rem)",
									fontWeight: "800",
									lineHeight: "1.2",
									maxWidth: "760px"
								}}
							>
								Ready To Transform
								<span className="gradient-text">
									{" "}Your Industry?
								</span>
							</h2>

							<p
								style={{
									maxWidth: "680px",
									color: "var(--color-text-secondary)",
									lineHeight: "1.8",
									fontSize: "16px"
								}}
							>
								Whether you're building a healthcare platform,
								fintech application, retail solution or enterprise
								management system, ARHA Technologies delivers
								scalable software engineered for long-term success.
							</p>

							<div
								style={{
									display: "flex",
									gap: "18px",
									flexWrap: "wrap",
									justifyContent: "center",
									marginTop: "10px"
								}}
							>

								<Link
									to="/contact"
									className="glow-btn"
									style={{
										padding: "14px 30px"
									}}
								>
									Start Your Project
									<ArrowRight size={18} />
								</Link>

								<Link
									to="/services"
									style={{
										padding: "14px 30px",
										borderRadius: "12px",
										border: "1px solid var(--color-border)",
										color: "var(--color-text-primary)",
										textDecoration: "none",
										fontWeight: "600",
										transition: ".3s"
									}}
								>
									Explore Services
								</Link>

							</div>

						</div>

					</div>

				</div>

			</section>

		</div>

	);
}