import React, { useState, useEffect } from 'react';
import {
  ArrowRight, MapPin, Phone, MessageCircle, Mail, Menu, X,
  ChevronRight, Play, Calendar, Shield, FileCheck, Compass,
  Ruler, TrendingUp, Award, Users, Star, ChevronDown, ArrowUpRight
} from 'lucide-react';
import peLogo from './assets/pe-logo.png';

export default function PropertyExpertsWeb() {
  const [scrolled, setScrolled] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVenture, setActiveVenture] = useState(0);
  const [logoSrc, setLogoSrc] = useState(peLogo);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const c = {
    blue: '#1E5FAB',
    blueDeep: '#0D3D7A',
    blueDark: '#062654',
    blueLight: '#E8F0FB',
    blueSoft: '#F5F9FE',
    yellow: '#F5C518',
    yellowSoft: '#FEF7D9',
    red: '#D32F2F',
    redDeep: '#A01F1F',
    cream: '#FAF8F3',
    paper: '#F7F5EE',
    white: '#FFFFFF',
    ink: '#0A1628',
    text: '#2C3E50',
    muted: '#5A6B7A',
    subtle: '#94A3B8',
    line: '#E5E7EB',
    whatsapp: '#25D366',
  };

  const ventures = [
    { 
      id: 0,
      name: 'Amaravathi Gateway', 
      tel: 'అమరావతి గేట్‌వే',
      tagline: 'Where the Krishna meets opportunity',
      price: '5 Lakhs', 
      size: '100 sq.yd',
      location: 'Krishna Riverfront · 12 km from Vijayawada',
      plots: 38,
      total: 100,
      badge: 'Flagship',
      year: '2024',
    },
    { 
      id: 1,
      name: 'Lucky Gardens', 
      tel: 'లక్కీ గార్డెన్స్',
      tagline: 'Before you buy, we protect',
      price: '3 Lakhs', 
      size: '100 sq.yd',
      location: 'Mangalagiri · 18 km from Vijayawada',
      plots: 12,
      total: 60,
      badge: 'Hot',
      year: '2024',
    },
    { 
      id: 2,
      name: 'Tripuranagar', 
      tel: 'త్రిపురనగర్',
      tagline: '100 yards. One lakh. One story.',
      price: '1 Lakh', 
      size: '100 sq.yd',
      location: 'Vijayawada Outer Ring',
      plots: 4,
      total: 80,
      badge: 'Limited',
      year: '2023',
    },
    { 
      id: 3,
      name: 'Bhavisya Nagar', 
      tel: 'భవిష్య నగర్',
      tagline: 'A future, mapped',
      price: '1 Lakh', 
      size: '100 sq.yd',
      location: 'Hanuman Junction Highway',
      plots: 22,
      total: 120,
      badge: null,
      year: '2024',
    },
    { 
      id: 4,
      name: 'Mahalakshmi', 
      tel: 'మహాలక్ష్మి',
      tagline: 'Prosperity, in plot form',
      price: '3 Lakhs', 
      size: '100 sq.yd',
      location: 'Gannavaram',
      plots: 18,
      total: 80,
      badge: null,
      year: '2023',
    },
  ];

  return (
    <div style={{ background: c.cream, minHeight: '100vh', position: 'relative' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Inter:wght@300;400;500;600;700&family=Noto+Serif+Telugu:wght@400;500;600;700&family=Noto+Sans+Telugu:wght@400;500;600&family=DM+Mono:wght@300;400;500&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }
        
        .display { font-family: 'Fraunces', serif; font-optical-sizing: auto; font-variation-settings: 'opsz' 144; }
        .mono { font-family: 'DM Mono', monospace; }
        .telugu-serif { font-family: 'Noto Serif Telugu', serif; }
        .telugu-sans { font-family: 'Noto Sans Telugu', sans-serif; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -4px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.03;
          z-index: 1000;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
        }

        .anim-1 { animation: fadeUp 0.8s ease-out 0.1s both; }
        .anim-2 { animation: fadeUp 0.8s ease-out 0.2s both; }
        .anim-3 { animation: fadeUp 0.8s ease-out 0.3s both; }
        .anim-4 { animation: fadeUp 0.8s ease-out 0.4s both; }
        .anim-5 { animation: fadeUp 0.8s ease-out 0.5s both; }
        .anim-6 { animation: fadeUp 0.8s ease-out 0.6s both; }

        .float-slow { animation: float 6s ease-in-out infinite; }
        .drift-slow { animation: drift 12s ease-in-out infinite; }

        .underline-red {
          position: relative;
          display: inline-block;
        }
        .underline-red::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          bottom: -4px;
          height: 4px;
          background: ${c.red};
        }

        .link-hover {
          position: relative;
          transition: color 0.3s;
        }
        .link-hover::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          height: 1px;
          width: 0;
          background: currentColor;
          transition: width 0.3s ease;
        }
        .link-hover:hover::after { width: 100%; }

        .btn-primary {
          background: ${c.ink};
          color: ${c.white};
          padding: 16px 28px;
          border-radius: 999px;
          border: none;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          background: ${c.blue};
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -8px ${c.blue}80;
        }

        .btn-secondary {
          background: transparent;
          color: ${c.ink};
          padding: 15px 27px;
          border-radius: 999px;
          border: 1px solid ${c.ink};
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        .btn-secondary:hover {
          background: ${c.ink};
          color: ${c.white};
        }

        .venture-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .venture-card:hover {
          transform: translateY(-8px);
        }
        .venture-card:hover .venture-img {
          transform: scale(1.05);
        }
        .venture-img {
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .marker-pulse {
          position: relative;
        }
        .marker-pulse::before {
          content: '';
          position: absolute;
          inset: -8px;
          border: 2px solid ${c.red};
          border-radius: 50%;
          animation: pulse-ring 2s ease-out infinite;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }

        .scroll-snap {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .scroll-snap > * { scroll-snap-align: start; }
        .scroll-snap::-webkit-scrollbar { display: none; }

        .ticker {
          background-image: linear-gradient(90deg, transparent, ${c.ink}, transparent);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }


        @media (min-width: 901px) {
          .mobile-brand {
            gap: 12px !important;
            align-items: center !important;
          }
          .mobile-brand-logo {
            height: 72px !important;
            width: 72px !important;
            border-radius: 14px !important;
            border: 1px solid #d8dee8 !important;
            box-shadow: 0 2px 10px rgba(10, 22, 40, 0.08);
            padding: 6px !important;
            background: #fff !important;
            object-fit: contain;
          }
          .mobile-brand-copy {
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          .mobile-brand-title {
            font-size: 28px !important;
            line-height: 0.92 !important;
            color: ${c.red} !important;
            letter-spacing: -0.3px !important;
          }
          .mobile-brand-tagline {
            display: inline-block !important;
            margin-top: 6px !important;
            padding: 6px 10px !important;
            border-radius: 8px !important;
            background: #1ea047 !important;
            color: #fff !important;
            font-size: 12px !important;
            font-weight: 700 !important;
            line-height: 1 !important;
            white-space: nowrap;
          }
          .mobile-only { display: none !important; }
        }

        @media (max-width: 900px) {
          .desktop-only { display: none !important; }
          .mobile-nav-shell {
            justify-content: center !important;
          }
          .mobile-brand {
            gap: 12px !important;
            align-items: center !important;
          }
          .mobile-brand-logo {
            height: 100px !important;
            width: 100px !important;
            border-radius: 20px !important;
            border: 1px solid #d8dee8 !important;
            box-shadow: 0 2px 10px rgba(10, 22, 40, 0.08);
            padding: 8px !important;
            background: #fff !important;
            object-fit: contain;
          }
          .mobile-brand-title {
            font-size: 34px !important;
            line-height: 0.9 !important;
            color: ${c.red} !important;
            letter-spacing: -0.3px !important;
          }
          .mobile-brand-copy {
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            gap: 6px !important;
          }
          .mobile-brand-tagline {
            display: inline-block !important;
            margin-top: 0 !important;
            padding: 8px 12px !important;
            border-radius: 8px !important;
            background: #1ea047 !important;
            color: #fff !important;
            font-size: 12px !important;
            font-weight: 700 !important;
            line-height: 1 !important;
          }
          .mobile-right-controls {
            display: none !important;
          }
        }

      `}</style>

      <div className="grain" />

      {/* TOP TICKER STRIP */}
      <div style={{ 
        background: c.ink,
        color: c.white,
        padding: '8px 0',
        fontSize: 11,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 100,
      }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} style={{ display: 'flex', gap: 60, paddingRight: 60, flexShrink: 0 }}>
              {['New venture launching · Amaravathi Gateway', `★ Plot bookings open · 38 left`, 
                'DTCP approved · RERA verified', '10 years of trust · 8 active ventures', 
                <span className="telugu-sans" key="te">మీ కష్టాన్ని, వ్యర్థం కానివ్వం</span>,
                'Free site visit · AC pickup from Vijayawada'].map((t, i) => (
                <div key={`${dup}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 60, flexShrink: 0 }}>
                  <span>{t}</span>
                  <span style={{ color: c.yellow }}>✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* NAV */}
      <nav style={{ 
        position: 'sticky',
        top: 0,
        zIndex: 90,
        background: scrolled > 100 ? `${c.cream}f5` : 'transparent',
        backdropFilter: scrolled > 100 ? 'blur(20px)' : 'none',
        borderBottom: scrolled > 100 ? `1px solid ${c.line}` : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '20px 5%',
      }}>
        <div className="mobile-nav-shell" style={{ 
          maxWidth: 1400, 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Logo */}
          <div className="mobile-brand" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img
              src={logoSrc}
              alt="Property Experts"
              onError={() => setLogoSrc('/favicon.svg')}
              className="mobile-brand-logo"
              style={{ height: 72, width: 'auto', display: 'block' }}
            />
            <div className="mobile-brand-copy">
              <div className="mobile-brand-title" style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                textTransform: 'uppercase',
                lineHeight: 0.95,
                fontSize: 26,
                color: c.red,
              }}>
                <div>Property</div>
                <div>Experts</div>
              </div>
              <div style={{
                width: 84,
                height: 4,
                borderRadius: 999,
                background: c.yellow,
                margin: '6px 0 8px',
              }} />
              <div className="mobile-brand-tagline telugu-sans">
                మీ కష్టార్జితం వృధా కానివ్వం
              </div>
            </div>
          </div>

          {/* Center nav */}
          <div className="desktop-only" style={{ 
            display: 'flex',
            gap: 40,
          }}>
            {['Ventures', 'About', 'Why Us', 'Site Visit', 'Contact'].map((item, i) => (
              <a key={i} href="#" className="link-hover" style={{ 
                color: c.text, 
                textDecoration: 'none',
                fontSize: 13,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                {item}
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="mobile-right-controls" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div className="desktop-only mono" style={{ 
              fontSize: 12, 
              color: c.muted,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <Phone size={12} /> +91 8233 992 339
            </div>
            <button className="btn-primary">
              Book site visit <ArrowRight size={14} />
            </button>
            <div className="mobile-only" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} color={c.ink} /> : <Menu size={24} color={c.ink} />}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ 
        padding: '60px 5% 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
          {/* Decorative line */}
          <div className="anim-1 mono" style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: c.muted,
            fontSize: 12,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: 40,
          }}>
            <span>Vijayawada · Est. 2014</span>
            <div style={{ flex: 1, height: 1, background: c.line }} />
            <span>10 years · 8 ventures · 1000+ families</span>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.9fr)',
            gap: 60,
            alignItems: 'center',
          }}>
            <div>
              {/* Telugu lockup */}
              <div className="anim-2 telugu-sans" style={{
                display: 'inline-block',
                padding: '6px 14px',
                background: c.red,
                color: c.white,
                borderRadius: 4,
                fontSize: 16,
                fontWeight: 500,
                marginBottom: 32,
                boxShadow: `4px 4px 0 ${c.ink}`,
              }}>
                మీ కష్టాన్ని, వ్యర్థం కానివ్వం
              </div>

              {/* Display heading */}
              <h1 className="anim-3 display" style={{
                fontSize: 'clamp(48px, 7vw, 96px)',
                fontWeight: 400,
                color: c.ink,
                lineHeight: 0.95,
                letterSpacing: '-3px',
                marginBottom: 32,
              }}>
                Land that<br/>
                <em style={{ fontStyle: 'italic', color: c.blue }}>holds</em> its<br/>
                <span className="underline-red">promise.</span>
              </h1>

              <p className="anim-4" style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: c.text,
                maxWidth: 480,
                marginBottom: 40,
              }}>
                Property Experts curates DTCP-approved plot ventures across the
                Krishna delta. Founded by Raghu Barla in 2014, with a single principle —
                <em style={{ color: c.blue, fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}> before you buy, we protect.</em>
              </p>

              <div className="anim-5" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <button className="btn-primary">
                  Explore ventures <ArrowRight size={14} />
                </button>
                <button className="btn-secondary">
                  <Play size={12} /> Watch our story
                </button>
              </div>

              {/* Stats strip */}
              <div className="anim-6" style={{ 
                display: 'flex',
                gap: 40,
                marginTop: 60,
                paddingTop: 40,
                borderTop: `1px solid ${c.line}`,
              }}>
                {[
                  { num: '8', label: 'Active ventures' },
                  { num: '1000+', label: 'Families served' },
                  { num: '4.8★', label: 'Justdial rating' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="display" style={{ 
                      fontSize: 36, 
                      color: c.ink, 
                      fontWeight: 500,
                      letterSpacing: '-1px',
                      lineHeight: 1,
                    }}>
                      {s.num}
                    </div>
                    <div className="mono" style={{ 
                      fontSize: 11, 
                      color: c.muted, 
                      marginTop: 6,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="anim-3" style={{ position: 'relative' }}>
              <div style={{
                aspectRatio: '4/5',
                borderRadius: 8,
                overflow: 'hidden',
                background: `linear-gradient(135deg, ${c.blue} 0%, ${c.blueDeep} 70%, ${c.blueDark} 100%)`,
                position: 'relative',
                boxShadow: `0 40px 80px -20px ${c.blue}40, 0 20px 40px -20px ${c.ink}30`,
              }}>
                {/* Imagined drone shot of Amaravathi Gateway */}
                <svg width="100%" height="100%" viewBox="0 0 500 625" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
                  <defs>
                    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={c.yellow} stopOpacity="0.4"/>
                      <stop offset="35%" stopColor={c.yellow} stopOpacity="0.05"/>
                      <stop offset="100%" stopColor={c.blueDeep} stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={c.blueDeep}/>
                      <stop offset="100%" stopColor={c.blueDark}/>
                    </linearGradient>
                  </defs>
                  
                  {/* Sky glow */}
                  <rect width="500" height="350" fill="url(#sky)" />
                  
                  {/* Sun */}
                  <circle cx="380" cy="160" r="56" fill={c.yellow} opacity="0.4"/>
                  <circle cx="380" cy="160" r="36" fill={c.yellow} opacity="0.85"/>
                  
                  {/* Topo lines (sky) */}
                  <g opacity="0.4">
                    <path d="M0,260 Q250,240 500,265" stroke={c.yellow} fill="none" strokeWidth="0.6"/>
                    <path d="M0,290 Q250,270 500,295" stroke={c.yellow} fill="none" strokeWidth="0.6"/>
                    <path d="M0,320 Q250,300 500,325" stroke={c.yellow} fill="none" strokeWidth="0.6"/>
                  </g>
                  
                  {/* Distant hills */}
                  <path d="M0,300 L80,250 L180,290 L280,235 L380,275 L500,245 L500,360 L0,360 Z" 
                    fill={c.blueDark} opacity="0.7"/>
                  <path d="M0,330 L100,290 L220,320 L340,280 L460,310 L500,295 L500,360 L0,360 Z" 
                    fill={c.blueDark} opacity="0.85"/>
                  
                  {/* Krishna river (winding) */}
                  <path d="M-20,400 Q120,380 240,420 T520,405 L520,440 Q380,420 240,455 T-20,440 Z" 
                    fill={c.blue} opacity="0.4"/>
                  
                  {/* Land - the venture itself */}
                  <rect x="0" y="440" width="500" height="185" fill="url(#land)"/>
                  
                  {/* Plot grid */}
                  <g opacity="0.5">
                    {[460, 480, 500, 520, 540, 560, 580, 600].map((y, i) => (
                      <path key={i} d={`M0,${y} L500,${y - 10}`} stroke={c.yellow} strokeWidth="0.3"/>
                    ))}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <path key={`v${i}`} d={`M${i * 45},440 L${i * 45 + 30},625`} stroke={c.yellow} strokeWidth="0.3"/>
                    ))}
                  </g>

                  {/* Roads */}
                  <path d="M0,520 L500,510" stroke={c.yellow} strokeWidth="2" opacity="0.6"/>
                  <path d="M250,440 L260,625" stroke={c.yellow} strokeWidth="2" opacity="0.6"/>
                  
                  {/* Plot markers */}
                  <circle cx="120" cy="490" r="3" fill={c.yellow}/>
                  <circle cx="180" cy="540" r="3" fill={c.yellow}/>
                  <circle cx="340" cy="500" r="3" fill={c.yellow}/>
                  <circle cx="400" cy="560" r="3" fill={c.yellow}/>
                </svg>

                {/* Floating venture badge */}
                <div className="float-slow" style={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  background: c.white,
                  padding: '14px 18px',
                  borderRadius: 4,
                  boxShadow: `0 10px 30px -10px ${c.ink}40`,
                }}>
                  <div className="mono" style={{ 
                    fontSize: 9, color: c.red, fontWeight: 700,
                    letterSpacing: '1.5px', textTransform: 'uppercase',
                  }}>
                    ★ Flagship Venture · 2024
                  </div>
                  <div className="display" style={{ 
                    fontSize: 18, color: c.ink, fontWeight: 600,
                    marginTop: 2, letterSpacing: '-0.5px',
                  }}>
                    Amaravathi Gateway
                  </div>
                </div>

                {/* Floating price tag */}
                <div className="drift-slow" style={{
                  position: 'absolute',
                  bottom: 24,
                  right: 24,
                  background: c.yellow,
                  padding: '16px 20px',
                  borderRadius: 4,
                  boxShadow: `0 10px 30px -10px ${c.ink}50, 4px 4px 0 ${c.ink}`,
                }}>
                  <div className="mono" style={{ 
                    fontSize: 10, color: c.ink, fontWeight: 700,
                    letterSpacing: '1.5px', textTransform: 'uppercase', opacity: 0.7,
                  }}>
                    From
                  </div>
                  <div className="display" style={{ 
                    fontSize: 26, color: c.ink, fontWeight: 700,
                    lineHeight: 1, marginTop: 2,
                  }}>
                    ₹5 Lakhs
                  </div>
                  <div className="mono" style={{ 
                    fontSize: 10, color: c.ink, opacity: 0.7,
                    marginTop: 2,
                  }}>
                    100 sq.yd
                  </div>
                </div>

                {/* Trust badge bottom-left */}
                <div style={{
                  position: 'absolute',
                  bottom: 24,
                  left: 24,
                  background: `${c.white}f0`,
                  backdropFilter: 'blur(8px)',
                  padding: '10px 14px',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}>
                  <Shield size={14} color={c.blue} />
                  <div className="mono" style={{ 
                    fontSize: 10, color: c.ink, fontWeight: 600,
                    letterSpacing: '1px', textTransform: 'uppercase',
                  }}>
                    DTCP · RERA
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mono" style={{ 
                marginTop: 16, fontSize: 11, color: c.muted,
                letterSpacing: '1.5px', textTransform: 'uppercase',
                display: 'flex', justifyContent: 'space-between',
              }}>
                <span>Pl. 01 — Aerial study</span>
                <span>📷 Drone capture · 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER WITH TELUGU */}
      <section style={{ padding: '60px 5%', background: c.paper }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
          <div className="display" style={{ 
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: c.muted,
            lineHeight: 1.3,
          }}>
            "Ten years on, we've never sold<br/>
            a plot we wouldn't <em style={{ color: c.blue, fontWeight: 400 }}>buy ourselves</em>."
          </div>
          <div className="mono" style={{ 
            marginTop: 32, fontSize: 11, color: c.muted,
            letterSpacing: '2px', textTransform: 'uppercase',
          }}>
            ★ Raghu Barla · Founder & MD
          </div>
        </div>
      </section>

      {/* VENTURES SECTION */}
      <section style={{ padding: '120px 5% 80px', position: 'relative' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 60,
            flexWrap: 'wrap',
            gap: 20,
          }}>
            <div>
              <div className="mono" style={{ 
                fontSize: 12, color: c.red, fontWeight: 600,
                letterSpacing: '2px', textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                ✦ Index No. 02 — Active Ventures
              </div>
              <h2 className="display" style={{ 
                fontSize: 'clamp(40px, 5.5vw, 72px)',
                fontWeight: 400,
                color: c.ink,
                letterSpacing: '-2px',
                lineHeight: 1,
              }}>
                Eight stories,<br/>
                <em style={{ fontStyle: 'italic', color: c.blue }}>one</em> philosophy.
              </h2>
            </div>
            <div style={{ maxWidth: 380 }}>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: c.text }}>
                Each venture is hand-selected by Raghu Barla. From Amaravati's CRDA-zone 
                riverfront to Mangalagiri's hill foothills — all DTCP-approved, all transparent.
              </p>
            </div>
          </div>

          {/* VENTURE GRID */}
          <div style={{ 
            display: 'flex',
            gap: 24,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: 16,
            cursor: 'grab',
          }}
          onMouseDown={e => {
            const el = e.currentTarget;
            el.dataset.dragging = '1';
            el.dataset.startX = e.pageX - el.scrollLeft;
          }}
          onMouseMove={e => {
            const el = e.currentTarget;
            if (el.dataset.dragging !== '1') return;
            e.preventDefault();
            el.scrollLeft = e.pageX - Number(el.dataset.startX);
          }}
          onMouseUp={e => { e.currentTarget.dataset.dragging = '0'; }}
          onMouseLeave={e => { e.currentTarget.dataset.dragging = '0'; }}
          >
            {ventures.map((v, i) => (
              <div key={v.id} className="venture-card" style={{ cursor: 'pointer', flex: '0 0 320px', scrollSnapAlign: 'start' }}>
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  background: c.ink,
                  borderRadius: 4,
                  overflow: 'hidden',
                  marginBottom: 20,
                }}>
                  <div className="venture-img" style={{
                    position: 'absolute', inset: 0,
                    background: i === 0
                      ? `linear-gradient(135deg, ${c.blue}, ${c.blueDeep})`
                      : i === 1
                      ? `linear-gradient(135deg, ${c.blueDeep}, ${c.blueDark})`
                      : i === 2
                      ? `linear-gradient(135deg, ${c.red}, ${c.redDeep})`
                      : i === 3
                      ? `linear-gradient(135deg, ${c.blue}, ${c.blueDark})`
                      : `linear-gradient(135deg, ${c.blueDeep}, ${c.ink})`,
                  }}>
                    <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                      <g opacity="0.4">
                        <path d="M0,200 Q200,180 400,210" stroke={c.yellow} fill="none" strokeWidth="0.6"/>
                        <path d="M0,240 Q200,220 400,250" stroke={c.yellow} fill="none" strokeWidth="0.6"/>
                        <path d="M0,280 Q200,260 400,290" stroke={c.yellow} fill="none" strokeWidth="0.6"/>
                      </g>
                      <circle cx="320" cy="120" r="40" fill={c.yellow} opacity="0.35"/>
                      <circle cx="320" cy="120" r="24" fill={c.yellow} opacity="0.7"/>
                      <path d="M0,330 L500,330 L500,500 L0,500 Z" fill={c.ink} opacity="0.5"/>
                      <g opacity="0.3">
                        {Array.from({ length: 6 }).map((_, idx) => (
                          <line key={idx} x1="0" y1={350 + idx * 25} x2="400" y2={350 + idx * 25 - 5} 
                            stroke={c.yellow} strokeWidth="0.3"/>
                        ))}
                      </g>
                    </svg>
                  </div>

                  {/* Year tag */}
                  <div className="mono" style={{
                    position: 'absolute', top: 16, left: 16,
                    fontSize: 10, color: c.white, opacity: 0.85,
                    letterSpacing: '1.5px', textTransform: 'uppercase',
                  }}>
                    Pl. 0{v.id + 1} · {v.year}
                  </div>

                  {/* Badge */}
                  {v.badge && (
                    <div style={{
                      position: 'absolute', top: 16, right: 16,
                      background: v.badge === 'Flagship' ? c.red : v.badge === 'Hot' ? c.red : c.yellow,
                      color: v.badge === 'Limited' ? c.ink : c.white,
                      padding: '4px 10px', borderRadius: 3,
                      fontSize: 9, fontWeight: 700,
                      letterSpacing: '1.5px', textTransform: 'uppercase',
                      fontFamily: 'DM Mono, monospace',
                    }}>
                      ★ {v.badge}
                    </div>
                  )}

                  {/* Bottom info */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '24px 20px',
                    background: `linear-gradient(180deg, transparent, ${c.ink}d0)`,
                  }}>
                    <div className="display" style={{ 
                      fontSize: 26, color: c.white, fontWeight: 500,
                      letterSpacing: '-0.5px', lineHeight: 1.1,
                    }}>
                      {v.name}
                    </div>
                    <div className="telugu-sans" style={{ 
                      fontSize: 13, color: c.yellow, marginTop: 4,
                    }}>
                      {v.tel}
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="display" style={{ 
                  fontSize: 15, color: c.text, fontStyle: 'italic',
                  fontWeight: 400, marginBottom: 14, lineHeight: 1.4,
                }}>
                  "{v.tagline}"
                </div>

                <div style={{ 
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', paddingTop: 14, 
                  borderTop: `1px solid ${c.line}`,
                }}>
                  <div>
                    <div className="mono" style={{ 
                      fontSize: 9, color: c.muted, letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                    }}>
                      From · {v.size}
                    </div>
                    <div className="display" style={{ 
                      fontSize: 22, color: c.ink, fontWeight: 600,
                      letterSpacing: '-0.5px',
                    }}>
                      ₹{v.price}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="mono" style={{ 
                      fontSize: 9, color: c.muted, letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                    }}>
                      Available
                    </div>
                    <div className="display" style={{ 
                      fontSize: 22, color: v.plots < 10 ? c.red : c.blue, fontWeight: 600,
                      letterSpacing: '-0.5px',
                    }}>
                      {v.plots}<span style={{ color: c.subtle, fontSize: 14 }}>/{v.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <button className="btn-secondary">
              See all 8 ventures <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* TRUST SECTION - editorial spread */}
      <section style={{ 
        padding: '120px 5%',
        background: c.ink,
        color: c.white,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative element */}
        <div style={{
          position: 'absolute',
          top: -200, right: -200,
          width: 600, height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${c.blue}30, transparent 70%)`,
        }}/>
        <div style={{
          position: 'absolute',
          bottom: -150, left: -150,
          width: 400, height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${c.yellow}15, transparent 70%)`,
        }}/>

        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
          <div className="mono" style={{ 
            fontSize: 12, color: c.yellow, fontWeight: 600,
            letterSpacing: '2px', textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            ✦ Index No. 03 — Why Choose Us
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40,
            marginTop: 40,
          }}>
            {[
              { 
                icon: <Shield size={32}/>, 
                num: '01',
                title: 'Documents first',
                tel: 'మొదట కాగితాలు',
                desc: 'Every plot we sell is DTCP-approved and RERA-verified before listing. We won\'t list what we won\'t buy.',
              },
              { 
                icon: <Users size={32}/>, 
                num: '02',
                title: 'Telugu by default',
                tel: 'తెలుగు మొదట',
                desc: 'Every conversation, contract clause, and site visit happens in Telugu unless you ask otherwise. No translation friction.',
              },
              { 
                icon: <TrendingUp size={32}/>, 
                num: '03',
                title: 'Ten years, same hands',
                tel: 'పదేళ్ల అనుభవం',
                desc: 'Founded 2014. Same office in Satyanarayanapuram. 1000+ families. Reputation we can\'t afford to lose.',
              },
              { 
                icon: <Award size={32}/>, 
                num: '04',
                title: 'Aftercare, not after-thought',
                tel: 'అమ్మిన తర్వాత కూడా',
                desc: 'Construction guidance, mutation, EC, plot fencing — services that begin after registration, not end there.',
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="mono" style={{ 
                  fontSize: 11, color: c.yellow, opacity: 0.7,
                  letterSpacing: '2px', marginBottom: 14,
                }}>
                  No. {item.num}
                </div>
                <div style={{ color: c.yellow, marginBottom: 24 }}>
                  {item.icon}
                </div>
                <div className="display" style={{ 
                  fontSize: 28, fontWeight: 500, lineHeight: 1.1,
                  letterSpacing: '-1px', marginBottom: 8,
                }}>
                  {item.title}
                </div>
                <div className="telugu-sans" style={{ 
                  fontSize: 14, color: c.yellow, marginBottom: 16, opacity: 0.8,
                }}>
                  {item.tel}
                </div>
                <div style={{ 
                  fontSize: 14, lineHeight: 1.7, color: '#ffffffbb',
                }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section style={{ padding: '120px 5%', background: c.cream }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
            gap: 80,
            alignItems: 'center',
          }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                aspectRatio: '4/5',
                borderRadius: 4,
                background: `linear-gradient(135deg, ${c.blue} 0%, ${c.blueDeep} 100%)`,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: `20px 20px 0 ${c.yellow}, 30px 30px 60px -20px ${c.ink}40`,
              }}>
                <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                  {/* Portrait silhouette suggestion */}
                  <defs>
                    <radialGradient id="lite" cx="50%" cy="40%" r="50%">
                      <stop offset="0%" stopColor={c.yellow} stopOpacity="0.3"/>
                      <stop offset="100%" stopColor={c.yellow} stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  <rect width="400" height="500" fill="url(#lite)"/>
                  {/* Abstract portrait shape */}
                  <ellipse cx="200" cy="180" rx="55" ry="65" fill={c.ink} opacity="0.4"/>
                  <path d="M120,260 Q200,220 280,260 L300,500 L100,500 Z" fill={c.ink} opacity="0.4"/>
                  {/* Topo */}
                  <g opacity="0.2">
                    <path d="M0,400 Q200,380 400,410" stroke={c.yellow} fill="none" strokeWidth="0.6"/>
                    <path d="M0,430 Q200,410 400,440" stroke={c.yellow} fill="none" strokeWidth="0.6"/>
                  </g>
                </svg>

                {/* Quote tag */}
                <div style={{
                  position: 'absolute', bottom: 24, left: 24, right: 24,
                  background: c.white, padding: '20px',
                  borderRadius: 4,
                }}>
                  <div className="display" style={{ 
                    fontSize: 18, fontStyle: 'italic',
                    color: c.ink, lineHeight: 1.4, fontWeight: 400,
                  }}>
                    "Trust is the only contract<br/>that can't be registered."
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mono" style={{ 
                fontSize: 12, color: c.red, fontWeight: 600,
                letterSpacing: '2px', textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                ✦ Index No. 04 — Founder
              </div>
              <h2 className="display" style={{ 
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 400,
                color: c.ink,
                letterSpacing: '-2px',
                lineHeight: 1,
                marginBottom: 16,
              }}>
                <em style={{ fontStyle: 'italic', color: c.blue }}>Raghu</em> Barla.
              </h2>
              <div className="telugu-serif" style={{ 
                fontSize: 22, color: c.muted, marginBottom: 32,
              }}>
                రఘు బర్లా · వ్యవస్థాపకుడు
              </div>

              <p style={{ 
                fontSize: 16, lineHeight: 1.8, color: c.text, marginBottom: 24,
              }}>
                Raghu founded Property Experts in 2014, after seeing too many families
                lose savings to broker fraud across the Vijayawada–Amaravati corridor.
                The fix was simple: <em style={{ color: c.blue, fontFamily: 'Fraunces, serif' }}>verify everything</em>,
                explain everything, and never sell what you can't defend.
              </p>

              <p style={{ 
                fontSize: 16, lineHeight: 1.8, color: c.text, marginBottom: 32,
              }}>
                Today the firm runs eight active ventures across Krishna and Guntur
                districts, with a team of 14 and a 4.8-star rating built on a thousand
                handshake closes.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="btn-primary">
                  Read full story <ArrowUpRight size={14} />
                </button>
                <button className="btn-secondary">
                  Watch on YouTube <Play size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT SECTION */}
      <section style={{ 
        padding: '120px 5%',
        background: c.paper,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: 80,
          }}>
            <div>
              <div className="mono" style={{ 
                fontSize: 12, color: c.red, fontWeight: 600,
                letterSpacing: '2px', textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                ✦ Begin Your Visit
              </div>
              <h2 className="display" style={{ 
                fontSize: 'clamp(48px, 6vw, 88px)',
                fontWeight: 400,
                color: c.ink,
                letterSpacing: '-2.5px',
                lineHeight: 0.95,
                marginBottom: 32,
              }}>
                Stand on<br/>
                <em style={{ fontStyle: 'italic', color: c.blue }}>your land</em><br/>
                <span className="underline-red">this Saturday.</span>
              </h2>
              <p style={{ 
                fontSize: 17, lineHeight: 1.7, color: c.text, 
                maxWidth: 480, marginBottom: 32,
              }}>
                Book a free site visit and we'll send an AC vehicle from Vijayawada.
                No commitment, no pressure — just plot, paperwork, and answers.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
                <button className="btn-primary">
                  Book site visit <Calendar size={14} />
                </button>
                <a href="https://wa.me/918233992339" style={{
                  background: c.whatsapp,
                  color: c.white,
                  padding: '16px 28px',
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 0.3s',
                }}>
                  <MessageCircle size={14} /> WhatsApp Raghu
                </a>
              </div>

              {/* Contact methods */}
              <div style={{ 
                paddingTop: 32, borderTop: `1px solid ${c.line}`,
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 32,
              }}>
                {[
                  { icon: <Phone size={16}/>, label: 'Call us', val: '+91 8233 992 339' },
                  { icon: <Mail size={16}/>, label: 'Email', val: 'tailormadeproperties25@gmail.com' },
                  { icon: <MapPin size={16}/>, label: 'Office', val: 'Satyanarayanapuram, Vijayawada' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="mono" style={{ 
                      fontSize: 10, color: c.muted, letterSpacing: '1.5px',
                      textTransform: 'uppercase', marginBottom: 6,
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                      {item.icon} {item.label}
                    </div>
                    <div style={{ fontSize: 14, color: c.ink, fontWeight: 500 }}>
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inline form */}
            <div style={{
              background: c.white,
              borderRadius: 4,
              padding: 40,
              boxShadow: `0 30px 60px -20px ${c.ink}15`,
              alignSelf: 'start',
            }}>
              <div className="display" style={{ 
                fontSize: 26, color: c.ink, fontWeight: 500,
                letterSpacing: '-0.5px', marginBottom: 8,
              }}>
                Tell us about your search.
              </div>
              <div className="mono" style={{ 
                fontSize: 11, color: c.muted, letterSpacing: '1.5px',
                textTransform: 'uppercase', marginBottom: 28,
              }}>
                We reply within 2 hours · 9am–8pm IST
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { label: 'Your name', placeholder: 'Sudhakar' },
                  { label: 'Phone (with WhatsApp)', placeholder: '+91 98xxx xxxxx' },
                  { label: 'Interested venture', placeholder: 'Amaravathi Gateway' },
                ].map((field, i) => (
                  <div key={i}>
                    <div className="mono" style={{ 
                      fontSize: 10, color: c.muted, letterSpacing: '1.5px',
                      textTransform: 'uppercase', marginBottom: 8,
                    }}>
                      {field.label}
                    </div>
                    <input 
                      type="text" 
                      placeholder={field.placeholder}
                      style={{
                        width: '100%',
                        padding: '14px 0',
                        border: 'none',
                        borderBottom: `1px solid ${c.line}`,
                        background: 'transparent',
                        fontSize: 15,
                        color: c.ink,
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>
                ))}

                <button className="btn-primary" style={{ marginTop: 16, alignSelf: 'flex-start' }}>
                  Send enquiry <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ 
        background: c.ink, 
        color: c.white, 
        padding: '80px 5% 40px',
        position: 'relative',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Top */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.5fr) repeat(3, minmax(0, 1fr))',
            gap: 60,
            marginBottom: 80,
          }}>
            <div>
              <img
                src={logoSrc}
                alt="Property Experts"
                onError={() => setLogoSrc('/favicon.svg')}
                style={{ height: 64, width: 'auto', display: 'block', marginBottom: 16 }}
              />
              <p style={{ 
                marginTop: 24, fontSize: 14, lineHeight: 1.7,
                color: '#ffffffaa', maxWidth: 320,
              }}>
                DTCP-approved plot ventures across the Krishna delta. Founded 2014.
                Built on documents, delivered with care.
              </p>
              <div className="telugu-sans" style={{
                marginTop: 20, padding: '6px 14px',
                background: c.red, color: c.white,
                borderRadius: 4, fontSize: 14,
                display: 'inline-block', fontWeight: 500,
              }}>
                మీ కష్టాన్ని, వ్యర్థం కానివ్వం
              </div>

              {/* App badges - Footer */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 24 }}>
                <a href="#" style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: '#ffffff15', color: c.white,
                    padding: '9px 14px', borderRadius: 8,
                    border: `1px solid #ffffff20`,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.55-2.97-2.97-10.62 14.32zM20.7 10.06l-2.88-1.67-3.24 2.97 3.24 2.97 2.91-1.68c.83-.48.83-1.62-.03-2.59zM1.05.56C.78.87.63 1.32.63 1.89v20.25l10.8-10.8L1.05.56zM14.49 7.41L2.07.24c-.33-.18-.66-.21-.99-.12l10.8 10.8 2.61-3.51z"/>
                    </svg>
                    <div>
                      <div style={{ fontSize: 8, opacity: 0.6, letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'DM Mono, monospace' }}>Get it on</div>
                      <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.1 }}>Google Play</div>
                    </div>
                  </div>
                </a>
                <a href="#" style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: '#ffffff15', color: c.white,
                    padding: '9px 14px', borderRadius: 8,
                    border: `1px solid #ffffff20`,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.16 1.3-2.14 3.87.03 3.06 2.6 4.06 2.63 4.07l-.04.13zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div>
                      <div style={{ fontSize: 8, opacity: 0.6, letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'DM Mono, monospace' }}>Download on the</div>
                      <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.1 }}>App Store</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {[
              { title: 'Ventures', links: ['Amaravathi Gateway', 'Lucky Gardens', 'Tripuranagar', 'Bhavisya Nagar', 'View all'] },
              { title: 'Company', links: ['About', 'Founder', 'Press', 'Careers', 'Contact'] },
              { title: 'Resources', links: ['Plot guide', 'DTCP process', 'EMI calculator', 'NRI buying', 'FAQ'] },
            ].map((col, i) => (
              <div key={i}>
                <div className="mono" style={{ 
                  fontSize: 11, color: c.yellow, fontWeight: 600,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  marginBottom: 20,
                }}>
                  {col.title}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map((link, j) => (
                    <a key={j} href="#" className="link-hover" style={{ 
                      color: '#ffffffcc', textDecoration: 'none',
                      fontSize: 14, fontWeight: 400,
                    }}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>



          {/* Bottom row */}
          <div style={{ 
            paddingTop: 40,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
          }}>
            <div className="mono" style={{ 
              fontSize: 11, color: '#ffffff80',
              letterSpacing: '1.5px', textTransform: 'uppercase',
            }}>
              © 2014–2026 Property Experts · All rights reserved
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map((item, i) => (
                <a key={i} href="#" className="mono link-hover" style={{ 
                  fontSize: 11, color: '#ffffff80', textDecoration: 'none',
                  letterSpacing: '1.5px', textTransform: 'uppercase',
                }}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/918233992339"
        style={{
          position: 'fixed',
          bottom: 24, right: 24,
          width: 60, height: 60,
          borderRadius: '50%',
          background: c.whatsapp,
          color: c.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 20px 40px -10px ${c.whatsapp}80, 0 0 0 8px ${c.whatsapp}20`,
          textDecoration: 'none',
          zIndex: 100,
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        <MessageCircle size={28} fill={c.white}/>
      </a>
    </div>
  );
}
