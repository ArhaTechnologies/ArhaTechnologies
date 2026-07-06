import React from 'react';

export default function IndustryVisual({ slug, color }) {
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

  // Render industry specific SVG graphic
  const renderGraphic = () => {
    switch (slug) {
      case 'healthcare':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={`${color}15`} strokeWidth="1" />
            
            {/* Heart Shape outline */}
            <path 
              d="M100 145 C100 145, 45 105, 45 75 C45 55, 65 40, 85 45 C100 48, 100 60, 100 60 C100 60, 100 48, 115 45 C135 40, 155 55, 155 75 C155 105, 100 145, 100 145 Z" 
              stroke={color} 
              strokeWidth="3" 
              strokeLinejoin="round" 
              fill={`${color}10`} 
            />

            {/* Glowing Heartbeat EKG Pulse Line */}
            <path 
              d="M50 90 H80 L88 70 L96 115 L106 60 L114 100 L122 85 H150" 
              stroke="#ffffff" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ filter: `drop-shadow(0 0 6px ${color})` }}
            >
              <animate 
                attributeName="stroke-dasharray" 
                values="0 200; 200 0; 0 200" 
                dur="3s" 
                repeatCount="indefinite" 
              />
            </path>
          </svg>
        );

      case 'education':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={`${color}15`} strokeWidth="1" />
            
            {/* Graduation Cap */}
            <polygon points="100,45 160,65 100,85 40,65" fill={`${color}20`} stroke={color} strokeWidth="3" />
            <path d="M70 75 V110 C70 120, 130 120, 130 110 V75" fill={`${color}05`} stroke={color} strokeWidth="3" />
            <path d="M150 68 V115" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="150" cy="115" r="5" fill={color} />

            {/* Book symbol */}
            <path d="M75 140 H125 A 5 5 0 0 1 125 150 H75 A 5 5 0 0 1 75 140 Z" fill="#ffffff" />
            <path d="M75 140 C85 140, 100 135, 100 148 V140" stroke={color} strokeWidth="2" />
          </svg>
        );

      case 'finance':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={`${color}15`} strokeWidth="1" />
            
            {/* Bank Temple vault structure */}
            <polygon points="100,40 160,65 40,65" fill={`${color}20`} stroke={color} strokeWidth="3" />
            <rect x="50" y="65" width="100" height="8" fill={color} />
            <rect x="50" y="130" width="100" height="12" fill={color} />
            
            {/* Pillars */}
            <rect x="60" y="73" width="12" height="57" fill={`${color}10`} stroke={color} strokeWidth="2" />
            <rect x="94" y="73" width="12" height="57" fill={`${color}10`} stroke={color} strokeWidth="2" />
            <rect x="128" y="73" width="12" height="57" fill={`${color}10`} stroke={color} strokeWidth="2" />

            {/* Dollar text inside vault */}
            <text x="100" y="112" fill="#ffffff" fontSize="24" fontWeight="800" textAnchor="middle" fontFamily="monospace">
              $
            </text>
          </svg>
        );

      case 'retail':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={`${color}15`} strokeWidth="1" />
            
            {/* Retail Shopping Cart */}
            <path 
              d="M50 60 H65 L80 120 H130 L145 75 H70" 
              stroke={color} 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill={`${color}12`} 
            />
            {/* Wheels */}
            <circle cx="85" cy="140" r="8" fill="#ffffff" />
            <circle cx="85" cy="140" r="3" fill={color} />
            <circle cx="125" cy="140" r="8" fill="#ffffff" />
            <circle cx="125" cy="140" r="3" fill={color} />

            {/* Price tag */}
            <polygon points="105,45 130,45 130,70 105,70" fill={color} opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </polygon>
            <circle cx="118" cy="57" r="2" fill="#ffffff" />
          </svg>
        );

      case 'manufacturing':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={`${color}15`} strokeWidth="1" />
            
            {/* Rotating Gear 1 */}
            <g transform="translate(85, 85)">
              <circle cx="0" cy="0" r="25" fill={`${color}20`} stroke={color} strokeWidth="3" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <rect 
                  key={angle} x="-4" y="-32" width="8" height="12" rx="2" fill={color} 
                  transform={`rotate(${angle})`} 
                />
              ))}
              <circle cx="0" cy="0" r="8" fill="#ffffff" />
              <animateTransform 
                attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" 
              />
            </g>

            {/* Rotating Gear 2 (Smaller, interlocked) */}
            <g transform="translate(132, 132)">
              <circle cx="0" cy="0" r="18" fill={`${color}10`} stroke={color} strokeWidth="2.5" />
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <rect 
                  key={angle} x="-3" y="-22" width="6" height="8" rx="1.5" fill={color} 
                  transform={`rotate(${angle})`} 
                />
              ))}
              <circle cx="0" cy="0" r="6" fill="#ffffff" />
              <animateTransform 
                attributeName="transform" type="rotate" from="360" to="0" dur="6s" repeatCount="indefinite" 
              />
            </g>
          </svg>
        );

      case 'logistics':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            {/* Grid trace */}
            <path d="M40 120 H160 M100 40 V160" stroke={`${color}15`} strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Cargo Truck shape */}
            <g transform="translate(45, 65)">
              <rect x="0" y="20" width="75" height="40" rx="4" fill={`${color}20`} stroke={color} strokeWidth="3" />
              <path d="M75 35 H95 L105 48 V60 H75 Z" fill={`${color}45`} stroke={color} strokeWidth="3" />
              <rect x="80" y="40" width="12" height="10" fill="#ffffff" />
              <circle cx="20" cy="65" r="10" fill="#0c1328" stroke={color} strokeWidth="3" />
              <circle cx="20" cy="65" r="4" fill="#ffffff" />
              <circle cx="75" cy="65" r="10" fill="#0c1328" stroke={color} strokeWidth="3" />
              <circle cx="75" cy="65" r="4" fill="#ffffff" />
            </g>

            {/* Glowing GPS location marker above truck */}
            <path d="M100 45 C95 45, 90 50, 90 58 C90 68, 100 78, 100 78 C100 78, 110 68, 110 58 C110 50, 105 45, 100 45 Z" fill={color}>
              <animate attributeName="transform" type="translate" values="0,0; 0,-8; 0,0" dur="2s" repeatCount="indefinite" />
            </path>
            <circle cx="100" cy="53" r="3" fill="#ffffff" />
          </svg>
        );

      case 'real-estate':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={`${color}15`} strokeWidth="1" />
            
            {/* Skyscraper Buildings */}
            {/* Building 1 (Left) */}
            <rect x="55" y="70" width="30" height="85" fill={`${color}15`} stroke={color} strokeWidth="2.5" />
            {/* Windows */}
            {[0, 1, 2, 3].map((row) => (
              <g key={row}>
                <rect x="61" y={80 + row * 16} width="6" height="8" fill="#ffffff" opacity="0.6" />
                <rect x="73" y={80 + row * 16} width="6" height="8" fill="#ffffff" opacity="0.6" />
              </g>
            ))}

            {/* Building 2 (Right) */}
            <rect x="95" y="50" width="45" height="105" fill={`${color}25`} stroke={color} strokeWidth="2.5" />
            {[0, 1, 2, 3, 4].map((row) => (
              <g key={row}>
                <rect x="103" y={60 + row * 18} width="8" height="10" fill="#ffffff" opacity="0.8">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1.5 + row * 0.3}s`} repeatCount="indefinite" />
                </rect>
                <rect x="121" y={60 + row * 18} width="8" height="10" fill="#ffffff" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur={`${1.5 + row * 0.3}s`} repeatCount="indefinite" />
                </rect>
              </g>
            ))}
          </svg>
        );

      case 'hospitality':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={`${color}15`} strokeWidth="1" />
            
            {/* Service Bell */}
            <path d="M45 130 C45 130, 45 75, 100 75 C155 75, 155 130, 155 130 H45 Z" fill={`${color}20`} stroke={color} strokeWidth="3" />
            <rect x="35" y="130" width="130" height="10" rx="3" fill={color} />
            <rect x="94" y="60" width="12" height="15" fill={color} />
            <ellipse cx="100" cy="55" rx="8" ry="4" fill="#ffffff" stroke={color} strokeWidth="1.5" />

            {/* Floating stars */}
            {[
              { x: 60, y: 55, size: 4 },
              { x: 140, y: 50, size: 6 },
              { x: 100, y: 30, size: 5 },
            ].map((star, si) => (
              <polygon 
                key={si}
                points={`${star.x},${star.y - star.size} ${star.x + star.size/2},${star.y - star.size/3} ${star.x + star.size},${star.y} ${star.x + star.size/3},${star.y + star.size/3} ${star.x},${star.y + star.size} ${star.x - star.size/3},${star.y + star.size/3} ${star.x - star.size},${star.y} ${star.x - star.size/2},${star.y - star.size/3}`} 
                fill="#eab308"
                style={{ animation: 'float 4s ease-in-out infinite', animationDelay: `${si * 0.5}s` }}
              />
            ))}
          </svg>
        );

      case 'startups':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            {/* Launch path trajectory */}
            <path d="M40 160 C 80 150, 120 120, 140 80" stroke={`${color}30`} strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Rocket ship */}
            <g transform="translate(100, 50) rotate(45)">
              <path d="M0 -30 C15 -30, 20 -10, 20 20 C20 30, 0 35, 0 35 C0 35, -20 30, -20 20 C-20 -10, -15 -30, 0 -30 Z" fill={`${color}20`} stroke={color} strokeWidth="3" />
              {/* Fins */}
              <path d="M-20 10 L-35 25 V30 H-20 Z" fill={color} />
              <path d="M20 10 L35 25 V30 H20 Z" fill={color} />
              {/* Port hole */}
              <circle cx="0" cy="-5" r="7" fill="#ffffff" stroke={color} strokeWidth="2" />
              <circle cx="0" cy="-5" r="3" fill="#060913" />

              {/* Flame spark */}
              <path d="M-6 35 L0 55 L6 35 Z" fill="#ef4444">
                <animate attributeName="d" values="M-6 35 L0 55 L6 35 Z; M-6 35 L0 45 L6 35 Z; M-6 35 L0 55 L6 35 Z" dur="0.2s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>
        );

      case 'government':
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={`${color}15`} strokeWidth="1" />
            
            {/* Capitol dome building */}
            <path d="M60 115 C60 80, 140 80, 140 115 Z" fill={`${color}15`} stroke={color} strokeWidth="3" />
            <rect x="50" y="115" width="100" height="8" fill={color} />
            <rect x="40" y="135" width="120" height="12" fill={color} />
            
            {/* Columns */}
            <rect x="55" y="123" width="8" height="12" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <rect x="73" y="123" width="8" height="12" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <rect x="91" y="123" width="8" height="12" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <rect x="109" y="123" width="8" height="12" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <rect x="127" y="123" width="8" height="12" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <rect x="145" y="123" width="8" height="12" fill={`${color}20`} stroke={color} strokeWidth="1.5" />

            {/* Flag on top of dome */}
            <line x1="100" y1="80" x2="100" y2="60" stroke={color} strokeWidth="2.5" />
            <polygon points="100,60 118,66 100,72" fill={color} />
          </svg>
        );

      default:
        return (
          <svg width="280" height="280" viewBox="0 0 200 200" fill="none" style={{ zIndex: 2 }}>
            <circle cx="100" cy="100" r="70" stroke={color} strokeWidth="2" strokeDasharray="6 6" />
            <polygon points="100,55 135,120 65,120" fill={`${color}20`} stroke={color} strokeWidth="2" />
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
