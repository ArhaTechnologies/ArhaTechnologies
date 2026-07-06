import {
	SiReact,
	SiNextdotjs,
	SiFlutter,
	SiAndroid,
	SiNodedotjs,
	SiAngular,
	SiWordpress,
	SiPython,
	SiPhp,
	SiMongodb,
	SiMysql,
	SiPostgresql,
	SiFigma,
} from "react-icons/si";

import {
	FaApple,
	FaAws,
	FaDatabase,
	FaCloud,
} from "react-icons/fa";

export const technologyCategories = [
	{
		title: "DATABASE DEV",
		color: "#3b82f6",
		technologies: [
			{ name: "SQL Server", slug: "sql-server", icon: FaDatabase },
			{ name: "MySQL", slug: "mysql", icon: SiMysql },
			{ name: "MongoDB", slug: "mongodb", icon: SiMongodb },
			{ name: "PostgreSQL", slug: "postgresql", icon: SiPostgresql },
		],
	},

	{
		title: "WEB DEVELOPMENT",
		color: "#06b6d4",
		technologies: [
			{ name: "React", slug:"react-js", icon: SiReact },
			{ name: "Next.js", slug:"next-js", icon: SiNextdotjs },
			{ name: "Angular", slug:"angular", icon: SiAngular },
			{ name: "Node.js", slug:"node-js", icon: SiNodedotjs },
			{ name: "WordPress", slug:"wordpress", icon: SiWordpress },
			{ name: "Python",  slug:"python", icon: SiPython },
			{ name: "PHP", slug:"php", icon: SiPhp },
		],
	},

	{
		title: "MOBILE APP DEV",
		color: "#8b5cf6",
		technologies: [
			{ name: "Android", slug:"android", icon: SiAndroid },
			{ name: "Flutter", slug:"flutter", icon: SiFlutter },
			{ name: "React Native", slug:"react-native", icon: SiReact },
			{ name: "iOS", slug:"ios", icon: FaApple },
		],
	},

	{
		title: "UI / UX DESIGN",
		color: "#ec4899",
		technologies: [
			{ name: "UI/UX Design", slug:"ui-ux-design", icon: SiFigma },
			{ name: "Front-End Dev", slug:"android", icon: SiReact },
		],
	},

	{
		title: "CLOUD & DEVOPS",
		color: "#f59e0b",
		technologies: [
			{ name: "AWS", slug:"aws", icon: FaAws },
			{ name: "Azure", slug:"azure", icon: FaCloud },
			{ name: "Google Cloud", slug:"google-cloud", icon: FaCloud },
		],
	},
];