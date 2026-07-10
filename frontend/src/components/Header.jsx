import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	Menu, X, ArrowUpRight, ChevronDown,
	Database, Globe, Smartphone, Palette, Cloud,
	Sun, Moon
} from 'lucide-react';
import Logo from './Logo';
import TechIcon from './TechIcon';

// ─── Services mega-dropdown categories ───────────────────────────────────────
const serviceCategories = [
	{
		label: 'Database Dev',
		icon: <Database size={15} />,
		color: '#3b82f6',
		items: [
			{ slug: 'sql-server', name: 'SQL Server', emoji: '🗄️' },
			{ slug: 'mysql', name: 'MySQL', emoji: '🐬' },
			{ slug: 'mongodb', name: 'MongoDB', emoji: '🍃' },
			{ slug: 'postgresql', name: 'PostgreSQL', emoji: '🐘' },
			{ slug: 'power-bi', name: 'Power BI', emoji: '📊' },
		]
	},
	{
		label: 'Web Development',
		icon: <Globe size={15} />,
		color: '#06b6d4',
		items: [
			{ slug: 'asp-net', name: 'ASP.NET', emoji: '🔷' },
			{ slug: 'net-core', name: '.NET Core', emoji: '⚙️' },
			{ slug: 'angular', name: 'Angular', emoji: '🅰️' },
			{ slug: 'node-js', name: 'Node.js', emoji: '🟢' },
			{ slug: 'wordpress', name: 'WordPress', emoji: '🌐' },
			{ slug: 'ecommerce', name: 'eCommerce', emoji: '🛒' },
			{ slug: 'python', name: 'Python', emoji: '🐍' },
			{ slug: 'php', name: 'PHP', emoji: '🐘' },
		]
	},
	{
		label: 'Mobile App Dev',
		icon: <Smartphone size={15} />,
		color: '#8b5cf6',
		items: [
			{ slug: 'android', name: 'Android', emoji: '🤖' },
			{ slug: 'ios', name: 'iOS', emoji: '🍎' },
			{ slug: 'react-native', name: 'React Native', emoji: '⚛️' },
			{ slug: 'flutter', name: 'Flutter', emoji: '💙' },
		]
	},
	{
		label: 'UI/UX Design',
		icon: <Palette size={15} />,
		color: '#ec4899',
		items: [
			{ slug: 'ui-ux-design', name: 'UI/UX Design', emoji: '🎨' },
			{ slug: 'front-end-dev', name: 'Front-End Dev', emoji: '💻' },
		]
	},
	{
		label: 'Cloud & DevOps',
		icon: <Cloud size={15} />,
		color: '#f59e0b',
		items: [
			{ slug: 'azure', name: 'Azure', emoji: '☁️' },
			{ slug: 'aws', name: 'AWS', emoji: '🔶' },
			{ slug: 'google-cloud', name: 'Google Cloud', emoji: '🌩️' },
		]
	},
];

// ─── Industry mega-dropdown categories ───────────────────────────────────────
const industryCategories = [
	{
		label: 'Industries We Serve',
		color: '#3b82f6',
		items: [
			{ slug: 'healthcare', name: 'Healthcare Industry', emoji: '🏥', desc: 'Secure compliant portal systems' },
			{ slug: 'education', name: 'Education Industry', emoji: '🎓', desc: 'Sleek LMS & e-learning portals' },
			{ slug: 'finance', name: 'Finance & Banking', emoji: '🏦', desc: 'High-frequency fintech gateways' },
			{ slug: 'manufacturing', name: 'Manufacturing Sector', emoji: '⚙️', desc: 'ERP yield trackers & logistics' },
			{ slug: 'logistics', name: 'Logistics & Fleet', emoji: '🚚', desc: 'Fleet GPS trackers & warehouses' },
		]
	},
	{
		label: 'Specialized Sectors',
		color: '#06b6d4',
		items: [
			{ slug: 'retail', name: 'Retail & eCommerce', emoji: '🛒', desc: 'High-converting virtual shops' },
			{ slug: 'real-estate', name: 'Real Estate Industry', emoji: '🏢', desc: 'Broker directory search engines' },
			{ slug: 'hospitality', name: 'Hospitality Sector', emoji: '🛎️', desc: 'Guest booking calendars' },
			{ slug: 'startups', name: 'Startups & SaaS', emoji: '🚀', desc: 'Modular components MVPs launch' },
			{ slug: 'government', name: 'Government Portals', emoji: '🏛️', desc: 'Accessible civic permitting portals' },
		]
	}

];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
	const [industriesOpen, setIndustriesOpen] = useState(false);
	const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

	const dropdownRef = useRef(null);
	const industriesDropdownRef = useRef(null);
	const location = useLocation();

	const [theme, setTheme] = useState(
		typeof document !== 'undefined' ? document.documentElement.getAttribute('data-theme') || 'dark' : 'dark'
	);

	const toggleTheme = () => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
	};

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		setIsOpen(false);
		setServicesOpen(false);
		setIndustriesOpen(false);
	}, [location]);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setServicesOpen(false);
			}
			if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(e.target)) {
				setIndustriesOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About Us', path: '/about' },
		{ name: 'Services', path: '/services', hasDropdown: true },
		{ name: 'Industry', path: '/industry', hasIndustryDropdown: true },
		{ name: 'Careers', path: '/careers' },
		{ name: 'Contact Us', path: '/contact' },
	];

	return (
		<header
			style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999, transition: "all 0.3s ease", padding: "12px 0" }}
			className={isScrolled ? "glass-nav" : ""}
		>
			<div className="container header-grid">

				{/* ── Logo ── */}
				<Link to="/" style={{ display: 'block' }}>
					<Logo height={60} />
				</Link>

				{/* ── Desktop nav (center column) ── */}
				<nav className="desktop-nav" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<ul style={{ display: 'flex', listStyle: 'none', gap: '32px', alignItems: 'center', margin: 0, padding: 0 }}>
						{navLinks.map((link) => {
							const isActive = location.pathname === link.path;

							/* ── Services with mega-dropdown ── */
							if (link.hasDropdown) {
								return (
									<li key={link.name} style={{ position: 'relative' }} ref={dropdownRef}>
										<button
											onMouseEnter={() => setServicesOpen(true)}
											onMouseLeave={() => setServicesOpen(false)}
											onClick={() => setServicesOpen(p => !p)}
											style={{
												background: 'none', border: 'none', cursor: 'pointer',
												fontSize: '16.5px', fontWeight: '500',
												color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
												display: 'flex', alignItems: 'center', gap: '5px',
												padding: '8px 0', position: 'relative',
												transition: 'var(--transition-smooth)'
											}}
											className={isActive ? 'glow-blue' : 'nav-link-item'}
										>
											Services
											<ChevronDown size={13} style={{ transition: 'transform 0.25s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
											{isActive && (
												<span style={{
													position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px',
													background: 'linear-gradient(90deg,var(--color-primary),var(--color-secondary))',
													borderRadius: '2px', boxShadow: '0 0 8px var(--color-primary)'
												}} />
											)}
										</button>

										{/* ── Mega Dropdown ── */}
										<div
											className="mega-menu-panel"
											onMouseEnter={() => setServicesOpen(true)}
											onMouseLeave={() => setServicesOpen(false)}
											style={{
												position: 'absolute',
												top: 'calc(100% + 2px)',
												left: '50%',
												transform: servicesOpen
													? 'translateX(-50%) translateY(0)'
													: 'translateX(-50%) translateY(-10px)',
												width: '680px',
												background: 'var(--color-bg-dropdown)',
												backdropFilter: 'blur(24px)',
												WebkitBackdropFilter: 'blur(24px)',
												border: '1px solid var(--color-border-dropdown)',
												borderRadius: '18px',
												padding: '20px',
												boxShadow: '0 24px 70px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)',
												zIndex: 200,
												opacity: servicesOpen ? 1 : 0,
												visibility: servicesOpen ? 'visible' : 'hidden',
												transition: 'opacity 0.22s ease, transform 0.22s ease, visibility 0.22s',
												pointerEvents: servicesOpen ? 'all' : 'none',
											}}
										>
											{/* Caret arrow */}
											<div className="mega-menu-caret" style={{
												position: 'absolute', top: '-7px', left: '50%',
												width: '14px', height: '14px',
												background: 'var(--color-bg-dropdown)',
												border: '1px solid var(--color-border-dropdown)',
												borderRight: 'none', borderBottom: 'none',
												transform: 'translateX(-50%) rotate(45deg)',
											}} />

											{/* Category columns */}
											<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
												{serviceCategories.map((cat, ci) => (
													<div key={ci}>
														{/* Category header */}
														<div style={{
															display: 'flex', alignItems: 'center', gap: '6px',
															padding: '6px 8px 8px',
															color: cat.color,
															fontSize: '11px', fontWeight: '700',
															textTransform: 'uppercase', letterSpacing: '0.06em',
															borderBottom: `1px solid ${cat.color}22`,
															marginBottom: '6px',
														}}>
															{cat.icon} {cat.label}
														</div>

														{/* Items */}
														{cat.items.map((item, ii) => (
															<Link
																key={ii}
																to={`/technology/${item.slug}`}
																onClick={() => setServicesOpen(false)}
																style={{
																	display: 'flex', alignItems: 'center', gap: '8px',
																	padding: '7px 8px',
																	borderRadius: '8px',
																	fontSize: '13px', fontWeight: '700',
																	color: 'var(--color-text-primary)',
																	textDecoration: 'none',
																	transition: 'background 0.18s, color 0.18s',
																	marginBottom: '2px',
																}}
																className="mega-item"
															>
																<TechIcon slug={item.slug} size={15} color={cat.color} />
																<span style={{ color: 'var(--color-text-primary)' }}>{item.name}</span>
															</Link>
														))}
													</div>
												))}
											</div>

											{/* Footer */}
											<div style={{ borderTop: '1px solid var(--color-border)', marginTop: '14px', paddingTop: '12px' }}>
												<Link
													to="/services"
													onClick={() => setServicesOpen(false)}
													style={{
														display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
														padding: '10px',
														borderRadius: '10px',
														fontSize: '12.5px', fontWeight: '700',
														color: 'var(--color-primary)',
														background: 'rgba(59,130,246,0.07)',
														textDecoration: 'none',
														transition: 'background 0.2s',
													}}
													className="mega-footer-link"
												>
													View All Services &amp; Technologies <ArrowUpRight size={13} />
												</Link>
											</div>
										</div>
									</li>
								);
							}

							/* ── Industry with mega-dropdown ── */
							if (link.hasIndustryDropdown) {
								return (
									<li key={link.name} style={{ position: 'relative' }} ref={industriesDropdownRef}>
										<button
											onMouseEnter={() => setIndustriesOpen(true)}
											onMouseLeave={() => setIndustriesOpen(false)}
											onClick={() => setIndustriesOpen(p => !p)}
											style={{
												background: 'none', border: 'none', cursor: 'pointer',
												fontSize: '16.5px', fontWeight: '500',
												color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
												display: 'flex', alignItems: 'center', gap: '5px',
												padding: '8px 0', position: 'relative',
												transition: 'var(--transition-smooth)'
											}}
											className={isActive ? 'glow-blue' : 'nav-link-item'}
										>
											Industry
											<ChevronDown size={13} style={{ transition: 'transform 0.25s', transform: industriesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
											{isActive && (
												<span style={{
													position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px',
													background: 'linear-gradient(90deg,var(--color-primary),var(--color-secondary))',
													borderRadius: '2px', boxShadow: '0 0 8px var(--color-primary)'
												}} />
											)}
										</button>

										{/* Mega Dropdown */}
										<div
											className="mega-menu-panel"
											onMouseEnter={() => setIndustriesOpen(true)}
											onMouseLeave={() => setIndustriesOpen(false)}
											style={{
												position: 'absolute',
												top: 'calc(100% + 2px)',
												left: '50%',
												transform: industriesOpen
													? 'translateX(-50%) translateY(0)'
													: 'translateX(-50%) translateY(-10px)',
												width: '580px',
												background: 'var(--color-bg-dropdown)',
												backdropFilter: 'blur(24px)',
												WebkitBackdropFilter: 'blur(24px)',
												border: '1px solid var(--color-border-dropdown)',
												borderRadius: '18px',
												padding: '22px 24px',
												boxShadow: '0 24px 70px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)',
												zIndex: 200,
												opacity: industriesOpen ? 1 : 0,
												visibility: industriesOpen ? 'visible' : 'hidden',
												transition: 'opacity 0.22s ease, transform 0.22s ease, visibility 0.22s',
												pointerEvents: industriesOpen ? 'all' : 'none',
											}}
										>
											{/* Caret arrow */}
											<div className="mega-menu-caret" style={{
												position: 'absolute', top: '-7px', left: '50%',
												width: '14px', height: '14px',
												background: 'var(--color-bg-dropdown)',
												border: '1px solid var(--color-border-dropdown)',
												borderRight: 'none', borderBottom: 'none',
												transform: 'translateX(-50%) rotate(45deg)',
											}} />

											{/* 2-Column Grid */}
											<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
												{industryCategories.map((cat, ci) => (
													<div key={ci}>
														<div style={{
															display: 'flex', alignItems: 'center', gap: '6px',
															padding: '0 4px 10px',
															color: cat.color,
															fontSize: '11px', fontWeight: '800',
															textTransform: 'uppercase', letterSpacing: '0.06em',
															borderBottom: `1px solid ${cat.color}22`,
															marginBottom: '8px',
														}}>
															{cat.label}
														</div>

														{/* Items */}
														{cat.items.map((item, ii) => (
															<Link
																key={ii}
																to={`/industry/${item.slug}`}
																onClick={() => setIndustriesOpen(false)}
																style={{
																	display: 'flex', flexDirection: 'column', gap: '2px',
																	padding: '8px 10px',
																	borderRadius: '10px',
																	textDecoration: 'none',
																	transition: 'background 0.18s',
																	marginBottom: '3px',
																}}
																className="mega-item"
															>
																<div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: '700', color: 'var(--color-text-primary)' }}>
																	<TechIcon slug={item.slug} size={15} color={cat.color} />
																	{item.name}
																</div>
																<div style={{ fontSize: '11.5px', color: 'var(--color-text-secondary)', paddingLeft: '23px' }}>
																	{item.desc}
																</div>
															</Link>
														))}
													</div>
												))}
											</div>
											{/* Footer */}
											<div
												style={{
													borderTop: "1px solid var(--color-border)",
													marginTop: "16px",
													paddingTop: "12px",
												}}
											>
												<Link
													to="/industries"
													onClick={() => setIndustriesOpen(false)}
													style={{
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														gap: "6px",
														padding: "10px",
														borderRadius: "10px",
														fontSize: "12.5px",
														fontWeight: "700",
														color: "var(--color-primary)",
														background: "rgba(59,130,246,0.07)",
														textDecoration: "none",
														transition: "background 0.2s",
													}}
													className="mega-footer-link"
												>
													View All Industries <ArrowUpRight size={13} />
												</Link>
											</div>
										</div>
									</li>
								);
							}

							/* ── Regular link ── */
							return (
								<li key={link.name}>
									<Link
										to={link.path}
										style={{
											fontSize: '16.5px', fontWeight: '500',
											color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
											position: 'relative', padding: '8px 0',
											transition: 'var(--transition-smooth)',
										}}
										className={isActive ? 'glow-blue' : 'nav-link-item'}
									>
										{link.name}
										{isActive && (
											<span style={{
												position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px',
												background: 'linear-gradient(90deg,var(--color-primary),var(--color-secondary))',
												borderRadius: '2px', boxShadow: '0 0 8px var(--color-primary)'
											}} />
										)}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				{/* ── Right column: CTA + mobile toggle ── */}
				<div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'flex-end' }}>
					{/* Theme Toggle Button */}
					<button
						onClick={toggleTheme}
						aria-label="Toggle Light/Dark Theme"
						style={{
							background: 'none',
							border: 'none',
							cursor: 'pointer',
							color: 'var(--color-text-primary)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: '8px',
							borderRadius: '50%',
							background: 'rgba(255, 255, 255, 0.04)',
							border: '1px solid var(--color-border)',
							transition: 'all 0.25s ease',
							outline: 'none'
						}}
						className="theme-toggle-btn"
					>
						{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
					</button>

					<button
						className="mobile-toggle"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle Navigation Menu"
						style={{
							background: 'none', border: 'none',
							color: 'var(--color-text-primary)',
							cursor: 'pointer', display: 'none',
							alignItems: 'center', justifyContent: 'center', padding: '4px',
						}}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* ════════════════════════════════════════
          Mobile Full-Screen Drawer
          ════════════════════════════════════════ */}
			{isOpen && (
				<div
					className="mobile-drawer"
					style={{
						position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
						backgroundColor: 'rgba(6,9,19,0.98)',
						backdropFilter: 'blur(12px)',
						zIndex: 49,
						display: 'flex', flexDirection: 'column',
						justifyContent: 'flex-start', alignItems: 'stretch',
						padding: '0',
						animation: 'fadeInUp 0.25s ease-out',
						overflowY: 'auto',
					}}>
					{/* Drawer header */}
					<div style={{
						display: 'flex', justifyContent: 'space-between', alignItems: 'center',
						padding: '20px 24px',
						borderBottom: '1px solid var(--color-border)',
					}}>
						<Link to="/" onClick={() => setIsOpen(false)}>
							<Logo height={52} />
						</Link>
						<button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--color-text-primary)', cursor: 'pointer' }}>
							<X size={26} />
						</button>
					</div>

					{/* Nav links */}
					<div style={{ padding: '16px 24px', flexGrow: 1 }}>
						{navLinks.map((link) => {
							const isActive = location.pathname === link.path;
							if (link.hasDropdown) {
								return (
									<div key={link.name} style={{ marginBottom: '4px' }}>
										<button
											onClick={() => setMobileServicesOpen(p => !p)}
											style={{
												width: '100%', background: 'none', border: 'none', cursor: 'pointer',
												display: 'flex', alignItems: 'center', justifyContent: 'space-between',
												padding: '14px 16px',
												borderRadius: '10px',
												fontSize: '17px', fontWeight: '600',
												color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
												background: mobileServicesOpen ? 'rgba(59,130,246,0.06)' : 'transparent',
												transition: 'background 0.2s',
											}}
										>
											Services
											<ChevronDown size={18} style={{ transition: 'transform 0.25s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
										</button>

										{mobileServicesOpen && (
											<div style={{
												background: 'rgba(255,255,255,0.02)',
												border: '1px solid var(--color-border)',
												borderRadius: '12px',
												padding: '12px',
												margin: '4px 0 8px',
												animation: 'fadeInUp 0.2s ease',
											}}>
												{serviceCategories.map((cat, ci) => (
													<div key={ci} style={{ marginBottom: '12px' }}>
														<div style={{
															display: 'flex', alignItems: 'center', gap: '6px',
															padding: '4px 8px 8px',
															color: cat.color, fontSize: '10px', fontWeight: '700',
															textTransform: 'uppercase', letterSpacing: '0.07em',
															borderBottom: `1px solid ${cat.color}22`,
															marginBottom: '6px',
														}}>
															{cat.icon} {cat.label}
														</div>
														<div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
															{cat.items.map((item, ii) => (
																<Link
																	key={ii}
																	to={`/technology/${item.slug}`}
																	onClick={() => setIsOpen(false)}
																	style={{
																		display: 'inline-flex', alignItems: 'center', gap: '6px',
																		padding: '5px 10px',
																		borderRadius: '20px',
																		fontSize: '12px', fontWeight: '700',
																		color: 'var(--color-text-primary)',
																		background: `${cat.color}12`,
																		border: `1px solid ${cat.color}30`,
																		textDecoration: 'none',
																	}}
																>
																	<TechIcon slug={item.slug} size={13} color={cat.color} />
																	{item.name}
																</Link>
															))}
														</div>
													</div>
												))}
											</div>
										)}
									</div>
								);
							}

							if (link.hasIndustryDropdown) {
								return (
									<div key={link.name} style={{ marginBottom: '4px' }}>
										<button
											onClick={() => setMobileIndustriesOpen(p => !p)}
											style={{
												width: '100%', background: 'none', border: 'none', cursor: 'pointer',
												display: 'flex', alignItems: 'center', justifyContent: 'space-between',
												padding: '14px 16px',
												borderRadius: '10px',
												fontSize: '17px', fontWeight: '600',
												color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
												background: mobileIndustriesOpen ? 'rgba(59,130,246,0.06)' : 'transparent',
												transition: 'background 0.2s',
											}}
										>
											Industry
											<ChevronDown size={18} style={{ transition: 'transform 0.25s', transform: mobileIndustriesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
										</button>

										{mobileIndustriesOpen && (
											<div style={{
												background: 'rgba(255,255,255,0.02)',
												border: '1px solid var(--color-border)',
												borderRadius: '12px',
												padding: '12px',
												margin: '4px 0 8px',
												animation: 'fadeInUp 0.2s ease',
											}}>
												{industryCategories.map((cat, ci) => (
													<div key={ci} style={{ marginBottom: '12px' }}>
														<div style={{
															display: 'flex', alignItems: 'center', gap: '6px',
															padding: '4px 8px 8px',
															color: cat.color, fontSize: '10px', fontWeight: '700',
															textTransform: 'uppercase', letterSpacing: '0.07em',
															borderBottom: `1px solid ${cat.color}22`,
															marginBottom: '6px',
														}}>
															{cat.label}
														</div>
														<div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
															{cat.items.map((item, ii) => (
																<Link
																	key={ii}
																	to={`/industry/${item.slug}`}
																	onClick={() => setIsOpen(false)}
																	style={{
																		display: 'inline-flex', alignItems: 'center', gap: '5px',
																		padding: '5px 10px',
																		borderRadius: '20px',
																		fontSize: '12px', fontWeight: '500',
																		color: 'var(--color-text-secondary)',
																		background: 'rgba(255,255,255,0.04)',
																		border: '1px solid var(--color-border)',
																		textDecoration: 'none',
																	}}
																>
																	<TechIcon slug={item.slug} size={13} color={cat.color} />
																	{item.name}
																</Link>
															))}
														</div>
													</div>
												))}
											</div>
										)}
									</div>
								);
							}
							return (
								<Link
									key={link.name}
									to={link.path}
									onClick={() => setIsOpen(false)}
									style={{
										display: 'block', padding: '14px 16px',
										borderRadius: '10px',
										fontSize: '17px', fontWeight: '600',
										color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
										textDecoration: 'none',
										marginBottom: '4px',
										background: isActive ? 'rgba(59,130,246,0.06)' : 'transparent',
										transition: 'background 0.2s',
									}}
								>
									{link.name}
								</Link>
							);
						})}
					</div>

				</div>
			)}

			{/* ── Inline Styles ── */}
			<style>{`
        .nav-link-item:hover { color: var(--color-primary) !important; }
        .mega-item:hover { background: rgba(59,130,246,0.08) !important; color: white !important; }
        [data-theme="light"] .mega-item:hover { background: rgba(37, 99, 235, 0.08) !important; color: var(--color-primary) !important; }
        .mega-footer-link:hover { background: rgba(59,130,246,0.15) !important; }
        .theme-toggle-btn:hover { background: rgba(255, 255, 255, 0.08) !important; border-color: var(--color-primary) !important; color: var(--color-primary) !important; }
        [data-theme="light"] .theme-toggle-btn:hover { background: rgba(0, 0, 0, 0.04) !important; border-color: var(--color-primary) !important; color: var(--color-primary) !important; }

        /* Desktop 3-col grid */
        @media (min-width: 992px) {
          .header-grid {
            display: grid !important;
            grid-template-columns: auto 1fr auto !important;
            align-items: center !important;
            gap: 36px !important;
          }
          .desktop-nav  { display: flex !important; }
          .desktop-cta  { display: inline-flex !important; }
          .mobile-toggle{ display: none !important; }
        }

        /* Mobile 2-col grid */
        @media (max-width: 991px) {
          .header-grid {
            display: grid !important;
            grid-template-columns: 1fr auto !important;
            align-items: center !important;
          }
          .desktop-nav  { display: none !important; }
          .desktop-cta  { display: none !important; }
          .mobile-toggle{ display: flex !important; }
        }

        /* Mega-dropdown on smaller desktop keeps scrollable */
        @media (min-width: 992px) and (max-width: 1200px) {
          .mega-dropdown-inner { grid-template-columns: repeat(3,1fr) !important; }
        }
      `}</style>
		</header>
	);
}
