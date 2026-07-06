import React from 'react';

export default function TechVisual({ slug, color }) {
  // Common container style with floating animation
  const containerStyle = {
    width: '100%',
    maxWidth: '460px',
    aspectRatio: '1/1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: 'var(--color-visual-bg)',
    borderRadius: '24px',
    border: `1px solid ${color}20`,
    boxShadow: `0 24px 60px var(--color-visual-shadow), inset 0 0 20px ${color}10`,
    overflow: 'hidden',
    animation: 'float 6s ease-in-out infinite',
  };

  // Helper grid style
  const gridStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      radial-gradient(circle at 50% 50%, transparent 60%, var(--color-visual-vignette) 100%),
      linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
    `,
    backgroundSize: '100% 100%, 20px 20px, 20px 20px',
    pointerEvents: 'none',
    zIndex: 1,
  };

  // Switch rendering based on slug
  const renderGraphic = () => {
    switch (slug) {
      /* ── DATABASE ── */
      case 'sql-server':
      case 'mysql':
      case 'mongodb':
      case 'postgresql':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            {/* Connection lines */}
            <path d="M40 100 H160 M100 40 V160" stroke={`${color}20`} strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="60" stroke={`${color}30`} strokeWidth="1" strokeDasharray="5 5" />
            
            {/* Database cylinders */}
            {/* Cylinder 1 (Top) */}
            <g transform="translate(0, -35)">
              <ellipse cx="100" cy="65" rx="35" ry="12" fill={`${color}15`} stroke={color} strokeWidth="2" />
              <path d="M65 65 V85 C65 92, 135 92, 135 85 V65" fill={`${color}08`} stroke={color} strokeWidth="2" />
              <ellipse cx="100" cy="72" rx="31" ry="8" stroke={`${color}40`} strokeWidth="1" fill="none" />
            </g>

            {/* Cylinder 2 (Middle) */}
            <g transform="translate(0, 0)">
              <ellipse cx="100" cy="90" rx="35" ry="12" fill={`${color}20`} stroke={color} strokeWidth="2" />
              <path d="M65 90 V110 C65 117, 135 117, 135 110 V90" fill={`${color}10`} stroke={color} strokeWidth="2" />
              {/* Glowing ledger lines */}
              <line x1="80" y1="102" x2="120" y2="102" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
              </line>
            </g>

            {/* Cylinder 3 (Bottom) */}
            <g transform="translate(0, 35)">
              <ellipse cx="100" cy="115" rx="35" ry="12" fill={`${color}15`} stroke={color} strokeWidth="2" />
              <path d="M65 115 V135 C65 142, 135 142, 135 135 V115" fill={`${color}08`} stroke={color} strokeWidth="2" />
              <ellipse cx="100" cy="122" rx="31" ry="8" stroke={`${color}40`} strokeWidth="1" fill="none" />
            </g>

            {/* Data flow sparks */}
            <circle cx="100" cy="50" r="3" fill="#ffffff" filter="blur(1px)">
              <animate attributeName="cy" values="50;150;50" dur="4s" repeatCount="indefinite" />
            </circle>
          </svg>
        );

      case 'power-bi':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={`${color}15`} strokeWidth="2" />
            {/* Chart Bars */}
            {/* Bar 1 */}
            <rect x="65" y="110" width="16" height="40" rx="4" fill={`${color}20`} stroke={color} strokeWidth="2">
              <animate attributeName="height" values="10;40;10" dur="3s" repeatCount="indefinite" />
              <animate attributeName="y" values="140;110;140" dur="3s" repeatCount="indefinite" />
            </rect>
            {/* Bar 2 */}
            <rect x="92" y="70" width="16" height="80" rx="4" fill={`${color}40`} stroke={color} strokeWidth="2">
              <animate attributeName="height" values="30;80;30" dur="4s" repeatCount="indefinite" />
              <animate attributeName="y" values="120;70;120" dur="4s" repeatCount="indefinite" />
            </rect>
            {/* Bar 3 */}
            <rect x="119" y="90" width="16" height="60" rx="4" fill={`${color}15`} stroke={color} strokeWidth="2">
              <animate attributeName="height" values="20;60;20" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="y" values="130;90;130" dur="2.5s" repeatCount="indefinite" />
            </rect>
            
            {/* Line Graph overlay */}
            <path d="M50 120 L80 90 L110 110 L150 60" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeJoin="round" />
            <circle cx="150" cy="60" r="5" fill={color}>
              <animate attributeName="r" values="4;7;4" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        );

      /* ── WEB DEVELOPMENT ── */
      case 'react-js':
      case 'react-native':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <g transform="translate(100, 100)">
              {/* Nucleus */}
              <circle cx="0" cy="0" r="10" fill={color} filter="blur(1px)" />
              <circle cx="0" cy="0" r="6" fill="#ffffff" />
              
              {/* Orbit 1 */}
              <ellipse cx="0" cy="0" rx="75" ry="26" stroke={color} strokeWidth="2" transform="rotate(0)" opacity="0.7" />
              {/* Orbit 2 */}
              <ellipse cx="0" cy="0" rx="75" ry="26" stroke={color} strokeWidth="2" transform="rotate(60)" opacity="0.7" />
              {/* Orbit 3 */}
              <ellipse cx="0" cy="0" rx="75" ry="26" stroke={color} strokeWidth="2" transform="rotate(120)" opacity="0.7" />
              
              {/* Orbiting electrons */}
              <circle cx="75" cy="0" r="4" fill="#ffffff" transform="rotate(0)">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="26" r="4" fill="#ffffff">
                <animateTransform attributeName="transform" type="rotate" from="60" to="420" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="-75" cy="0" r="4" fill="#ffffff">
                <animateTransform attributeName="transform" type="rotate" from="120" to="480" dur="5s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        );

      case 'next-js':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            {/* Glowing outer ring */}
            <circle cx="100" cy="100" r="75" stroke={`${color}15`} strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="70" stroke={color} strokeWidth="2" />
            
            {/* Next.js N Logo style structure */}
            <path 
              d="M75 130 V70 L125 130 M125 70 V120" 
              stroke="url(#nextGlow)" 
              strokeWidth="10" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <defs>
              <linearGradient id="nextGlow" x1="75" y1="70" x2="125" y2="130" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="0.6" stopColor={color} />
                <stop offset="1.0" stopColor="#060913" />
              </linearGradient>
            </defs>
            <circle cx="125" cy="70" r="4" fill="#ffffff">
              <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        );

      case 'node-js':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            {/* Code bracket connection tree */}
            <path d="M100 40 L60 80 H80 V150 H120 V80 H140 Z" fill={`${color}15`} stroke={color} strokeWidth="2" />
            
            {/* Nodes */}
            <circle cx="100" cy="40" r="12" fill="#0c1328" stroke={color} strokeWidth="3" />
            <circle cx="100" cy="40" r="5" fill={color}>
              <animate attributeName="r" values="3;6;3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="60" cy="80" r="8" fill={color} />
            <circle cx="140" cy="80" r="8" fill={color} />
            
            {/* Terminal log panel */}
            <rect x="50" y="115" width="100" height="30" rx="6" fill="#060913" stroke={`${color}30`} strokeWidth="1" />
            <line x1="60" y1="125" x2="80" y2="125" stroke={color} strokeWidth="2" />
            <line x1="60" y1="133" x2="120" y2="133" stroke={`${color}60`} strokeWidth="2">
              <animate attributeName="x2" values="60;130;60" dur="3s" repeatCount="indefinite" />
            </line>
          </svg>
        );

      case 'typescript':
      case 'javascript':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            {/* Square Box Badge */}
            <rect x="50" y="50" width="100" height="100" rx="14" fill="#080e21" stroke={color} strokeWidth="3" />
            <rect x="55" y="55" width="90" height="90" rx="9" fill={`${color}08`} />
            
            {/* Code symbol */}
            <text x="100" y="112" fill={color} fontSize="40" fontWeight="900" textAnchor="middle" fontFamily="var(--font-heading)">
              {slug === 'typescript' ? 'TS' : 'JS'}
            </text>

            <path d="M40 30 H160 M40 170 H160" stroke={`${color}20`} strokeWidth="1" />
            {/* Orbiting spark */}
            <circle cx="100" cy="30" r="3" fill="#ffffff">
              <animate attributeName="cx" values="40;160;40" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
        );

      case 'asp-net':
      case 'net-core':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="60" stroke={color} strokeWidth="2" fill={`${color}05`} />
            <circle cx="100" cy="100" r="45" stroke={`${color}40`} strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Microsoft Diamond shape */}
            <polygon points="100,60 135,100 100,140 65,100" fill={`${color}20`} stroke={color} strokeWidth="2" />
            <text x="100" y="106" fill="#ffffff" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="var(--font-heading)">
              .NET
            </text>
            
            {/* Tech details */}
            <line x1="65" y1="100" x2="135" y2="100" stroke={`${color}40`} strokeWidth="1" />
          </svg>
        );

      case 'angular':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            {/* Angular Shield */}
            <polygon points="100,35 155,55 145,135 100,165 55,135 45,55" fill={`${color}15`} stroke={color} strokeWidth="3" />
            {/* The Angular "A" */}
            <path d="M100 60 L135 130 H120 L100 88 L80 130 H65 Z" fill="#ffffff" />
            <line x1="88" y1="112" x2="112" y2="112" stroke="#ffffff" strokeWidth="3" />
          </svg>
        );

      case 'wordpress':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="65" stroke={color} strokeWidth="3" fill={`${color}10`} />
            <circle cx="100" cy="100" r="55" stroke={`${color}30`} strokeWidth="1" />
            
            {/* WordPress W representation */}
            <path 
              d="M75 75 L92 125 L108 90 L124 125 L141 75" 
              stroke="#ffffff" 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        );

      case 'python':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            {/* Dual interlocking curves resembling snakes */}
            <g transform="translate(100,100)">
              <path d="M-30 -30 H10 C20 -30, 30 -20, 30 0 C30 20, 20 30, 0 30 H-30 C-40 30, -50 20, -50 0 V-15" stroke={color} strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M30 30 H-10 C-20 30, -30 20, -30 0 C-30 -20, -20 -30, 0 -30 H30 C40 -30, 50 -20, 50 0 V 15" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" fill="none" />
              <circle cx="-15" cy="-15" r="3" fill="#ffffff" />
              <circle cx="15" cy="15" r="3" fill="#ffffff" />
            </g>
          </svg>
        );

      case 'php':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <ellipse cx="100" cy="100" rx="70" ry="40" fill={`${color}12`} stroke={color} strokeWidth="3" />
            <text x="100" y="108" fill="#ffffff" fontSize="28" fontWeight="800" textAnchor="middle" fontStyle="italic" fontFamily="var(--font-heading)">
              PHP
            </text>
            <path d="M50 100 H150" stroke={`${color}20`} strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        );

      case 'ecommerce':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={`${color}15`} strokeWidth="1" />
            {/* Shopping Cart */}
            <path 
              d="M50 60 H65 L80 120 H130 L145 75 H70" 
              stroke={color} 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill={`${color}10`} 
            />
            {/* Wheels */}
            <circle cx="85" cy="140" r="8" fill="#ffffff" />
            <circle cx="85" cy="140" r="3" fill={color} />
            <circle cx="125" cy="140" r="8" fill="#ffffff" />
            <circle cx="125" cy="140" r="3" fill={color} />
            
            {/* Glowing credit card slot */}
            <rect x="90" y="45" width="40" height="20" rx="3" fill={`${color}30`} stroke={color} strokeWidth="1.5">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </rect>
          </svg>
        );

      /* ── MOBILE APP DEVELOPMENT ── */
      case 'android':
      case 'ios':
      case 'flutter':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            {/* Phone Body */}
            <rect x="60" y="25" width="80" height="150" rx="16" fill="#080e21" stroke={color} strokeWidth="3" />
            <rect x="65" y="38" width="70" height="120" rx="4" fill="rgba(255,255,255,0.01)" />
            
            {/* Camera speaker */}
            <line x1="90" y1="32" x2="110" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <circle cx="116" cy="32" r="1.5" fill={color} />

            {/* Inner Graphic */}
            {slug === 'android' && (
              <g transform="translate(100, 95) scale(0.8)">
                {/* Android robot head */}
                <path d="M-20 0 A20 20 0 0 1 20 0 Z" fill={color} />
                <rect x="-20" y="3" width="40" height="4" fill={color} />
                <circle cx="-8" cy="-8" r="2" fill="#ffffff" />
                <circle cx="8" cy="-8" r="2" fill="#ffffff" />
                <line x1="-12" y1="-14" x2="-18" y2="-22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
                <line x1="12" y1="-14" x2="18" y2="-22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
              </g>
            )}

            {slug === 'ios' && (
              <g transform="translate(100, 95) scale(0.9)">
                {/* Apple outline placeholder with concentric waves */}
                <circle cx="0" cy="0" r="12" stroke="#ffffff" strokeWidth="2" />
                <circle cx="0" cy="0" r="22" stroke={`${color}40`} strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="0" cy="0" r="30" stroke={`${color}20`} strokeWidth="1" />
              </g>
            )}

            {slug === 'flutter' && (
              <g transform="translate(100, 95) scale(0.85)">
                {/* Flutter layout wings */}
                <polygon points="0,-25 20,-25 -5,0" fill={color} />
                <polygon points="-5,0 20,25 0,25 -20,0" fill={`${color}40`} stroke={color} strokeWidth="1" />
              </g>
            )}

            {/* Home button indicator */}
            <circle cx="100" cy="165" r="4" fill={color} />
          </svg>
        );

      /* ── UI/UX DESIGN ── */
      case 'ui-ux-design':
      case 'front-end-dev':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="75" stroke={`${color}15`} strokeWidth="1" />
            
            {/* Designer canvas nodes */}
            <rect x="50" y="50" width="100" height="100" rx="8" fill="rgba(255,255,255,0.01)" stroke={`${color}30`} strokeWidth="1" />
            
            {/* Concentric circles and anchors */}
            <circle cx="100" cy="100" r="40" stroke={color} strokeWidth="2" />
            <circle cx="100" cy="60" r="4" fill="#ffffff" stroke={color} strokeWidth="1.5" />
            <circle cx="100" cy="140" r="4" fill="#ffffff" stroke={color} strokeWidth="1.5" />
            <circle cx="60" cy="100" r="4" fill="#ffffff" stroke={color} strokeWidth="1.5" />
            <circle cx="140" cy="100" r="4" fill="#ffffff" stroke={color} strokeWidth="1.5" />

            {/* Mouse Cursor */}
            <g transform="translate(115, 115)">
              <polygon points="0,0 8,24 13,17 22,22 25,17 17,13 24,8" fill={color} />
              <circle cx="0" cy="0" r="3" fill="#ffffff">
                <animate attributeName="r" values="2;5;2" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        );

      /* ── CLOUD & DEVOPS ── */
      case 'azure':
      case 'aws':
      case 'google-cloud':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            {/* Cloud Outline */}
            <path 
              d="M60 120 C45 120, 35 110, 35 95 C35 83, 44 73, 56 71 C61 53, 76 40, 95 40 C112 40, 127 51, 133 67 C145 69, 155 79, 155 92 C155 107, 143 120, 128 120 H60 Z" 
              fill={`${color}12`} 
              stroke={color} 
              strokeWidth="3" 
              strokeLinejoin="round" 
            />
            
            {/* Storage racks inside cloud */}
            <rect x="70" y="80" width="60" height="8" rx="2" fill={`${color}40`} />
            <rect x="70" y="93" width="60" height="8" rx="2" fill={`${color}40`} />
            
            {/* Blinking LEDs */}
            <circle cx="78" cy="84" r="1.5" fill="#ffffff">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="78" cy="97" r="1.5" fill="#ffffff">
              <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" />
            </circle>

            <circle cx="86" cy="84" r="1.5" fill={color} />
            <circle cx="86" cy="97" r="1.5" fill={color} />

            {/* Cloud connection sparks */}
            <line x1="100" y1="120" x2="100" y2="155" stroke={color} strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="100" cy="155" r="6" fill="#ffffff" stroke={color} strokeWidth="2" />
          </svg>
        );

      case 'git':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            {/* Git branching tree */}
            {/* Main Branch Line */}
            <line x1="70" y1="40" x2="70" y2="160" stroke={color} strokeWidth="3" strokeLinecap="round" />
            {/* Dev Branch Line */}
            <path d="M70 130 C 110 130, 130 110, 130 80 V 50" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" fill="none" />
            
            {/* Main Commit Nodes */}
            <circle cx="70" cy="50" r="7" fill="#ffffff" stroke={color} strokeWidth="2" />
            <circle cx="70" cy="100" r="7" fill="#ffffff" stroke={color} strokeWidth="2" />
            <circle cx="70" cy="145" r="7" fill="#ffffff" stroke={color} strokeWidth="2" />

            {/* Dev Commit Nodes */}
            <circle cx="130" cy="60" r="7" fill="#080e21" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="130" cy="95" r="7" fill="#080e21" stroke="#f59e0b" strokeWidth="2" />

            {/* Merge Arrow indicator */}
            <path d="M125 60 C 100 45, 85 45, 75 48" stroke={`${color}60`} strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" fill="none" />
          </svg>
        );

      default:
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={color} strokeWidth="2" strokeDasharray="6 6" />
            <polygon points="100,55 135,120 65,120" fill={`${color}20`} stroke={color} strokeWidth="2" />
            <circle cx="100" cy="95" r="10" fill="#ffffff" />
          </svg>
        );
    }
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle} />
      {renderGraphic()}
    </div>
  );
}
