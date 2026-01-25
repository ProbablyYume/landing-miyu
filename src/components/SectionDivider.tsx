import '../styles/sectionDivider.css';

export default function SectionDivider() {
  return (
    <div className="section-divider">
      <svg
        className="elden-divider"
        viewBox="0 0 800 30"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central circle */}
        <circle cx="400" cy="15" r="2" fill="#d4af37" opacity="0.8" />
        
        {/* Eye/oval shapes on each side of center */}
        <ellipse cx="385" cy="15" rx="6" ry="4" fill="#d4af37" opacity="0.7" />
        <ellipse cx="415" cy="15" rx="6" ry="4" fill="#d4af37" opacity="0.7" />
        
        {/* Outlined diamond shapes */}
        <path
          d="M370 15 L375 10 L380 15 L375 20 Z"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <path
          d="M430 15 L425 10 L420 15 L425 20 Z"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.5"
          opacity="0.7"
        />
        
        {/* Inner small diamonds within outlined diamonds */}
        <path
          d="M375 15 L377 13 L375 11 L373 13 Z"
          fill="#d4af37"
          opacity="0.5"
        />
        <path
          d="M425 15 L423 13 L425 11 L427 13 Z"
          fill="#d4af37"
          opacity="0.5"
        />
        
        {/* Cross-hatched diamond/chevron shapes */}
        {/* Left side */}
        <path
          d="M350 15 L360 8 L370 15 L360 22 Z"
          fill="#d4af37"
          opacity="0.6"
        />
        <line x1="355" y1="11" x2="365" y2="19" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
        <line x1="365" y1="11" x2="355" y2="19" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
        
        <path
          d="M330 15 L340 8 L350 15 L340 22 Z"
          fill="#d4af37"
          opacity="0.6"
        />
        <line x1="335" y1="11" x2="345" y2="19" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
        <line x1="345" y1="11" x2="335" y2="19" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
        
        {/* Right side */}
        <path
          d="M450 15 L440 8 L430 15 L440 22 Z"
          fill="#d4af37"
          opacity="0.6"
        />
        <line x1="445" y1="11" x2="435" y2="19" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
        <line x1="435" y1="11" x2="445" y2="19" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
        
        <path
          d="M470 15 L460 8 L450 15 L460 22 Z"
          fill="#d4af37"
          opacity="0.6"
        />
        <line x1="465" y1="11" x2="455" y2="19" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
        <line x1="455" y1="11" x2="465" y2="19" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
        
        {/* Tapered arrowhead ends */}
        {/* Left */}
        <path
          d="M0 15 L300 12 L310 15 L300 18 Z"
          fill="#d4af37"
          opacity="0.5"
        />
        
        {/* Right */}
        <path
          d="M800 15 L500 12 L490 15 L500 18 Z"
          fill="#d4af37"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
