import React from 'react';
import { 
  FaReact, FaNodeJs, FaAngular, FaWordpress, FaPython, 
  FaPhp, FaShoppingCart, FaAndroid, FaApple, FaAws, 
  FaPalette, FaCode, FaGitAlt, FaDatabase, FaBuilding, 
  FaHeartbeat, FaCreditCard, FaGraduationCap, FaChartBar,
  FaIndustry, FaTruck, FaStore, FaHotel, FaRocket, FaLandmark
} from 'react-icons/fa';
import { 
  SiMysql, SiMongodb, SiPostgresql, 
  SiTypescript, SiJavascript, SiDotnet, 
  SiFlutter, SiGooglecloud, SiNextdotjs
} from 'react-icons/si';
import { TbBrandAzure } from 'react-icons/tb';

export default function TechIcon({ slug, size = 16, color }) {
  const iconMap = {
    // Database Dev
    'sql-server': FaDatabase,
    'mysql': SiMysql,
    'mongodb': SiMongodb,
    'postgresql': SiPostgresql,
    'power-bi': FaChartBar,
    
    // Web Dev
    'react-js': FaReact,
    'next-js': SiNextdotjs,
    'node-js': FaNodeJs,
    'typescript': SiTypescript,
    'javascript': SiJavascript,
    'asp-net': SiDotnet,
    'net-core': SiDotnet,
    'angular': FaAngular,
    'wordpress': FaWordpress,
    'python': FaPython,
    'php': FaPhp,
    'ecommerce': FaShoppingCart,
    
    // Mobile Dev
    'android': FaAndroid,
    'ios': FaApple,
    'react-native': FaReact,
    'flutter': SiFlutter,
    
    // UI/UX Design & Frontend
    'ui-ux-design': FaPalette,
    'front-end-dev': FaCode,
    
    // Cloud & DevOps
    'azure': TbBrandAzure,
    'aws': FaAws,
    'google-cloud': SiGooglecloud,
    'git': FaGitAlt,

    // Industry / Markets / Sectors
    'healthcare': FaHeartbeat,
    'education': FaGraduationCap,
    'finance': FaCreditCard,
    'manufacturing': FaIndustry,
    'logistics': FaTruck,
    'retail': FaStore,
    'real-estate': FaBuilding,
    'hospitality': FaHotel,
    'startups': FaRocket,
    'government': FaLandmark
  };

  const IconComponent = iconMap[slug] || FaDatabase;

  return <IconComponent size={size} style={{ color }} />;
}
