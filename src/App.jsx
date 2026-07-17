import { useState } from 'react'
import './App.css'

// SVG Icons as components
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <path d="M16.293 9.29297L12 13.586L7.70697 9.29297L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.29297Z" fill="currentColor"/>
  </svg>
)

const TerminalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9ZM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
  </svg>
)

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.032.357-.086.664-.143A2.01 2.01 0 0 1 4.406 3.34z"/>
  </svg>
)

const BoxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
  </svg>
)

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>
  </svg>
)

const GitBranchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-5.341-.916a2.251 2.251 0 0 1 2.25 2.147v.595a.75.75 0 0 0 1.5 0v-.75a.75.75 0 0 0-.75-.75 2.25 2.25 0 0 1-4.5 0V3.858a2.25 2.25 0 1 1 1.5 0v.596Zm6.75.062a.75.75 0 0 0-1.5 0v.872a.75.75 0 0 0 1.5 0v-.872ZM3.453 10.35a2.251 2.251 0 1 1 1.5 0v.596a2.25 2.25 0 1 0-1.5 0v.596Zm8.344-3.096a.75.75 0 0 0 0-1.5 2.251 2.251 0 0 0-4.5 0V10.5a.75.75 0 0 0 1.5 0V8.236a2.25 2.25 0 0 1 1.5-1.5h1.5a.75.75 0 0 0 0-1.5h-.5Z"/>
  </svg>
)

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0c-.69 0-1.32.03-1.87.08-1.41.14-2.6.57-3.63 1.34A6.97 6.97 0 0 0 .08 5.51a8.2 8.2 0 0 0-.06 1.5c.02.25.05.5.1.74.19.94.5 1.8.94 2.57.44.78.99 1.43 1.63 1.96.64.53 1.36.92 2.13 1.17.77.25 1.61.39 2.49.42.89-.03 1.72-.17 2.49-.42.77-.25 1.49-.64 2.13-1.17.64-.53 1.19-1.18 1.63-1.96.44-.77.75-1.63.94-2.57.05-.24.08-.49.1-.74.03-.5.03-1 .03-1.5V3.18c0-.69-.18-1.32-.42-1.87A6.97 6.97 0 0 0 14.47.91C13.44.14 12.25-.29 10.84-.15 10.29-.08 9.67 0 9 0H7Zm0 1h2c.6 0 1.15.04 1.67.12 1.28.14 2.37.52 3.3 1.17.93.65 1.65 1.53 2.16 2.62.51 1.09.78 2.37.78 3.84v.56c-.02.23-.05.46-.09.69-.17.87-.47 1.66-.87 2.38-.4.72-.89 1.31-1.46 1.77-.57.46-1.22.79-1.93 1-.71.21-1.48.33-2.28.35-.8-.02-1.57-.14-2.28-.35-.71-.21-1.36-.54-1.93-1-.57-.46-1.06-1.05-1.46-1.77-.4-.72-.7-1.51-.87-2.38-.04-.23-.07-.46-.09-.69v-.56c0-1.47.27-2.75.78-3.84.51-1.09 1.23-1.97 2.16-2.62.93-.65 2.02-1.03 3.3-1.17.52-.08 1.07-.12 1.67-.12Z"/>
    <path d="M8 4.5a.75.75 0 0 1 .75.75v3.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.72 1.72v-3.69A.75.75 0 0 1 8 4.5Z"/>
  </svg>
)

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M6.5 0a.5.5 0 0 1 .5.5V1h1v.5a.5.5 0 0 1-1 0V1h-1v.5a.5.5 0 0 1-1 0V1h.5a.5.5 0 0 1 0 1H5v1h.5a.5.5 0 0 1 0 1H5v1h.5a.5.5 0 0 1 0 1H5v1h.5a.5.5 0 0 1 0 1H5v1h.5a.5.5 0 0 1 0 1H5v.5a.5.5 0 0 1-1 0v-.5H3v.5a.5.5 0 0 1-1 0v-.5H1v.5a.5.5 0 0 1-1 0v-.5H-.5a.5.5 0 0 1 0-1H1v-1H-.5a.5.5 0 0 1 0-1H1v-1H-.5a.5.5 0 0 1 0-1H1v-1H-.5a.5.5 0 0 1 0-1H1V6H-.5a.5.5 0 0 1 0-1H1V4.5a.5.5 0 0 1 1 0V5h1v-.5a.5.5 0 0 1 1 0V5h1v-.5a.5.5 0 0 1 1 0V5h1v-.5a.5.5 0 0 1 .5.5ZM4.5 5.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm3 0v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0Z"/>
    <path d="M7.5 8a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H7.5V13a.5.5 0 0 1-1 0v-1.5H5a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0V9h1v-.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.5H14a.5.5 0 0 1 0 1h-.5V13a.5.5 0 0 1-1 0v-1.5H11a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1-1 0V8H9v.5a.5.5 0 0 1-1 0V8H7.5Z"/>
    <path d="M8 10a.5.5 0 0 1 .5.5V11h1a.5.5 0 0 1 0 1H8v1a.5.5 0 0 1-1 0v-1H6a.5.5 0 0 1 0-1h1v-.5A.5.5 0 0 1 8 10Z"/>
  </svg>
)

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M17 17L27.3137 17L27.3137 15H17V4.68631L15 4.68631L15 15H4.68629L4.68629 17L15 17V27.3137H17V17Z" fill="currentColor"/>
  </svg>
)

const SlackIcon = () => (
  <svg viewBox="0 0 60 60" fill="currentColor">
    <path d="M21.3 38.5a5.1 5.1 0 1 1 10.2 0v-5.1h5.1a5.1 5.1 0 0 1-5.1 5.1h-10.2z"/>
    <path d="M21.3 21.3a5.1 5.1 0 0 1-5.1-5.1H11a5.1 5.1 0 0 1 5.1 5.1v5.1h5.2v-5.1z"/>
    <path d="M38.5 21.3a5.1 5.1 0 0 1 5.1 5.1h5.1a5.1 5.1 0 0 1-5.1-5.1v-5.1h-5.1v5.1z"/>
    <path d="M38.5 38.5a5.1 5.1 0 0 1 5.1 5.1h5.1a5.1 5.1 0 0 1-5.1-5.1v-5.1h-5.1v5.1z"/>
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const OpenHandsLogo = () => (
  <svg viewBox="0 0 300 60" fill="currentColor">
    <text x="0" y="45" fontFamily="var(--font-sans)" fontSize="40" fontWeight="600">OpenHands</text>
  </svg>
)

const OpenHandsLogoDark = () => (
  <svg viewBox="0 0 300 60" fill="currentColor">
    <text x="0" y="45" fontFamily="var(--font-sans)" fontSize="40" fontWeight="600" fill="#181818">OpenHands</text>
  </svg>
)

// Navigation Component
function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  
  return (
    <nav className="nav">
      <div className="nav__container">
        <a href="/" className="nav__logo">
          <OpenHandsLogo />
        </a>
        
        <div className="nav__links">
          <div 
            className="nav__link"
            onMouseEnter={() => setActiveDropdown('product')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="nav__dropdown-trigger">
              Product
              <ChevronDown />
            </span>
            <div className="nav__dropdown">
              <div className="nav__dropdown-content">
                <a href="/product/canvas" className="nav__dropdown-item">
                  <span className="nav__dropdown-icon"><TerminalIcon /></span>
                  Agent Canvas
                </a>
                <a href="/cloud" className="nav__dropdown-item">
                  <span className="nav__dropdown-icon"><CloudIcon /></span>
                  Cloud
                </a>
                <a href="/control-plane" className="nav__dropdown-item">
                  <span className="nav__dropdown-icon"><BoxIcon /></span>
                  Agent Control Plane
                </a>
                <a href="/sdk" className="nav__dropdown-item">
                  <span className="nav__dropdown-icon"><CodeIcon /></span>
                  SDK
                </a>
              </div>
            </div>
          </div>
          
          <a href="/enterprise" className="nav__link">Enterprise</a>
          <a href="/pricing" className="nav__link">Pricing</a>
          <a href="/community" className="nav__link">Community</a>
          
          <div 
            className="nav__link"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="nav__dropdown-trigger">
              Resources
              <ChevronDown />
            </span>
            <div className="nav__dropdown">
              <div className="nav__dropdown-content">
                <a href="/docs" className="nav__dropdown-item">Documentation</a>
                <a href="/blog" className="nav__dropdown-item">Blog</a>
                <a href="/tutorials" className="nav__dropdown-item">Tutorials</a>
                <a href="/api" className="nav__dropdown-item">API Reference</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="nav__actions">
          <a href="/get-started" className="nav__btn nav__btn--outline">Start with OSS</a>
          <a href="/signup" className="nav__btn nav__btn--primary">Get OpenHands</a>
        </div>
        
        <button className="nav__mobile-toggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="hero">
      <div className="hero__ascii-bg">
        <pre>
          {`
   ___    __    _______  __    ________  ________  _   __
  /   |  / /   / ____/ |/ /   / ____/ / / / ____/ / | / /
 / /| | / /   / __/  |   /   / /   / /_/ / __/   /  |/ / 
/ ___ |/ /___/ /___ /   |   / /___/ __  / /___  / /|  /  
/_/  |_/_____/_____//_/|_|   \\____/_/ /_/_____/ /_/ |_/   
                                                          
          `}
        </pre>
      </div>
      
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Now in Public Beta
        </div>
        
        <h1 className="hero__title">
          Ship software faster with{' '}
          <span className="hero__title-accent">AI coding agents</span>
        </h1>
        
        <p className="hero__subtitle">
          OpenHands is an open-source platform for building, evaluating, and 
          deploying autonomous software agents that code, test, and ship for you.
        </p>
        
        <div className="hero__actions">
          <a href="/get-started" className="hero__btn hero__btn--primary">
            Get Started
            <ArrowRightIcon />
          </a>
          <a href="/demo" className="hero__btn hero__btn--secondary">
            Watch Demo
          </a>
        </div>
      </div>
      
      <div className="hero__scroll">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  )
}

// Code Preview Section
function CodePreview() {
  const codeLines = [
    { num: 1, content: [<span key="c1" className="code-preview__prompt">openhands</span>, <span key="c2">@repo</span>, <span key="c3" className="code-preview__operator">$</span>, <span key="c4"> add user authentication</span>] },
    { num: 2, content: [] },
    { num: 3, content: [<span key="c5" className="code-preview__comment"># Searching for relevant files...</span>] },
    { num: 4, content: [<span key="c6" className="code-preview__comment"># Found: src/auth/login.tsx, src/api/users.ts</span>] },
    { num: 5, content: [] },
    { num: 6, content: [<span key="c7" className="code-preview__comment"># Creating authentication flow</span>] },
    { num: 7, content: [<span key="c8" className="code-preview__keyword">import</span>, <span key="c9"> React </span>, <span key="c10" className="code-preview__keyword">from</span>, <span key="c11" className="code-preview__string">'react'</span>, <span key="c12">;</span>] },
    { num: 8, content: [<span key="c13" className="code-preview__keyword">import</span>, <span key="c14"> </span>, <span key="c15" className="code-preview">{`{ useState }`}</span>, <span key="c16"> </span>, <span key="c17" className="code-preview__keyword">from</span>, <span key="c18" className="code-preview__string">'react'</span>, <span key="c19">;</span>] },
    { num: 9, content: [] },
    { num: 10, content: [<span key="c20" className="code-preview__keyword">export const</span>, <span key="c21"> </span>, <span key="c22" className="code-preview__function">useAuth</span>, <span key="c23"> = () </span>, <span key="c24" className="code-preview__operator">=&gt;</span>, <span key="c25"> </span>, <span key="c26" className="code-preview__operator">{`{`}</span>] },
    { num: 11, content: [<span key="c27" className="code-preview__variable">  const</span>, <span key="c28"> user </span>, <span key="c29" className="code-preview__operator">=</span>, <span key="c30"> </span>, <span key="c31" className="code-preview__function">useState</span>, <span key="c32">(</span>, <span key="c33" className="code-preview__keyword">null</span>, <span key="c34">)</span>, <span key="c35">;</span>] },
    { num: 12, content: [<span key="c36" className="code-preview__variable">  const</span>, <span key="c37"> login </span>, <span key="c38" className="code-preview__operator">=</span>, <span key="c39"> </span>, <span key="c40" className="code-preview__operator">async</span>, <span key="c41"> </span>, <span key="c42" className="code-preview__operator">(</span>, <span key="c43">email</span>, <span key="c44" className="code-preview__operator">,</span>, <span key="c45"> password</span>, <span key="c46" className="code-preview__operator">)</span>, <span key="c47"> </span>, <span key="c48" className="code-preview__operator">=&gt;</span>, <span key="c49"> </span>, <span key="c50" className="code-preview__operator">{`{`}</span>] },
    { num: 13, content: [<span key="c51" className="code-preview__comment">    // Authenticate user via API</span>] },
    { num: 14, content: [<span key="c52" className="code-preview__comment">    </span>, <span key="c53" className="code-preview__prompt">...</span>] },
    { num: 15, content: [<span key="c54" className="code-preview__operator">  {'}'}</span>, <span key="c55">;</span>] },
    { num: 16, content: [<span key="c56" className="code-preview__operator">{'}'}</span>, <span key="c57">;</span>] },
    { num: 17, content: [] },
    { num: 18, content: [<span key="c58" className="code-preview__prompt">openhands</span>, <span key="c59" className="code-preview__prompt">@repo</span>, <span key="c60" className="code-preview__operator">$</span>, <span key="c61" className="code-preview__cursor"></span>] },
  ]
  
  return (
    <section className="code-preview">
      <div className="code-preview__container">
        <div className="code-preview__wrapper">
          <div className="code-preview__window">
            <div className="code-preview__titlebar">
              <div className="code-preview__dot code-preview__dot--red"></div>
              <div className="code-preview__dot code-preview__dot--yellow"></div>
              <div className="code-preview__dot code-preview__dot--green"></div>
              <div className="code-preview__tabs">
                <span className="code-preview__tab code-preview__tab--active">terminal</span>
                <span className="code-preview__tab">auth.tsx</span>
              </div>
            </div>
            <div className="code-preview__content">
              {codeLines.map((line) => (
                <div key={line.num} className="code-preview__line">
                  <span className="code-preview__line-num">{line.num}</span>
                  <span className="code-preview__line-content">
                    {line.content.length > 0 ? line.content : '\u00A0'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Features Section
function Features() {
  const features = [
    {
      icon: <GitBranchIcon />,
      title: "Code, commit, PR, deploy",
      text: "OpenHands handles the entire development lifecycle—from writing code to deploying to production. Just describe what you need."
    },
    {
      icon: <CloudIcon />,
      title: "Works where you work",
      text: "Seamlessly integrates with GitHub, GitLab, VS Code, and your existing CI/CD pipelines. Agents run in your cloud, under your control."
    },
    {
      icon: <ShieldIcon />,
      title: "Built on open standards",
      text: "Powered by the Model Context Protocol (MCP) and agent-to-agent communication. No vendor lock-in, full transparency."
    },
    {
      icon: <CodeIcon />,
      title: "Powered by the OpenHands SDK",
      text: "Build your own agents with our open SDK. Use any LLM, define custom tools, and deploy anywhere—from localhost to enterprise cloud."
    }
  ]
  
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__header">
          <h2 className="features__title section-title">Everything you need to build with AI agents</h2>
          <p className="features__subtitle">
            A complete platform for software development automation—from ideation to production.
          </p>
        </div>
        
        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="features__card">
              <div className="features__card-icon">{feature.icon}</div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Define your task",
      text: "Describe what you need in plain language. OpenHands understands requirements and creates a plan."
    },
    {
      num: "2",
      title: "Watch it work",
      text: "Agents read code, write tests, fix bugs, and build features. You see everything in real-time."
    },
    {
      num: "3",
      title: "Review and ship",
      text: "OpenHands submits pull requests for your review. Approve, modify, or iterate—always in control."
    }
  ]
  
  return (
    <section className="how-it-works">
      <div className="how-it-works__container">
        <div className="how-it-works__header">
          <h2 className="section-title">How it works</h2>
        </div>
        
        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={index} className="how-it-works__step">
              <div className="how-it-works__step-num">{step.num}</div>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
function Stats() {
  const stats = [
    { number: "10K+", label: "Active Developers" },
    { number: "50K+", label: "PRs Generated" },
    { number: "500+", label: "Enterprise Deployments" },
    { number: "99.9%", label: "Uptime SLA" }
  ]
  
  return (
    <section className="stats">
      <div className="stats__container">
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="stats__item">
              <div className="stats__number">{stat.number}</div>
              <div className="stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      quote: "OpenHands has transformed how we handle routine coding tasks. Our team now focuses on architecture while agents handle implementation.",
      name: "Sarah Chen",
      role: "VP of Engineering, TechCorp"
    },
    {
      quote: "The open-source nature means we can audit every decision. No black boxes—just transparent AI agents we trust.",
      name: "Marcus Johnson",
      role: "Staff Engineer, DataFlow"
    },
    {
      quote: "Deploying to our on-premise environment was seamless. Enterprise-grade security with open-source flexibility.",
      name: "Elena Rodriguez",
      role: "CTO, SecureSystems"
    }
  ]
  
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2 className="section-title">Trusted by engineering teams</h2>
        </div>
        
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonials__card">
              <p className="testimonials__quote">"{testimonial.quote}"</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="testimonials__name">{testimonial.name}</div>
                  <div className="testimonials__role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqs = [
    {
      question: "What types of teams use OpenHands?",
      answer: "OpenHands is used by platform teams automating engineering workflows at scale, teams building internal developer platforms or AI-powered tooling, and enterprises managing large or legacy codebases and mission-critical software systems."
    },
    {
      question: "How does OpenHands ensure code quality?",
      answer: "OpenHands agents generate comprehensive tests, follow your coding standards, and can be configured with custom linters and style guides. All changes go through your existing review process."
    },
    {
      question: "Is OpenHands secure for enterprise use?",
      answer: "Yes. OpenHands can be deployed in your own cloud environment, supports SSO and RBAC, and provides full audit logs. Your code never leaves your infrastructure."
    },
    {
      question: "What LLMs does OpenHands support?",
      answer: "OpenHands is model-agnostic. You can use OpenAI, Anthropic, local models, or any MCP-compatible LLM provider."
    },
    {
      question: "How does pricing work?",
      answer: "OpenHands is open-source and free to use. Enterprise features like advanced security, support, and managed cloud are available as paid tiers."
    }
  ]
  
  return (
    <section className="faq">
      <div className="faq__container">
        <div className="faq__header">
          <h2 className="section-title">Frequently asked questions</h2>
        </div>
        
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            >
              <button 
                className="faq__question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq__icon"><PlusIcon /></span>
              </button>
              <div className="faq__answer">
                <div className="faq__answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTA() {
  return (
    <section className="cta">
      <div className="cta__container">
        <h2 className="cta__title">Building the open standard for autonomous software development.</h2>
        <p className="cta__text">
          OpenHands is the foundation for secure, transparent, model-agnostic coding agents—empowering every software team to build faster with full control.
        </p>
        <div className="cta__actions">
          <a href="/community" className="cta__btn cta__btn--primary">
            Join The Community
          </a>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <OpenHandsLogoDark />
        </div>
        
        <div className="footer__bottom">
          <span className="footer__copyright">© 2026 OpenHands - All rights reserved</span>
          <div className="footer__links">
            <a href="/privacy" className="footer__link">Privacy Policy</a>
            <a href="/contact" className="footer__link">Contact</a>
          </div>
        </div>
        
        <div className="footer__social">
          <a href="/slack" className="footer__social-link" aria-label="Join Slack">
            <SlackIcon />
          </a>
          <a href="https://x.com/OpenHandsDev" className="footer__social-link" aria-label="X">
            <XIcon />
          </a>
          <a href="https://github.com/OpenHands/OpenHands" className="footer__social-link" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com/company/103318432" className="footer__social-link" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CodePreview />
        <Features />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
