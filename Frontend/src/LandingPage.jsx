import React from 'react'
import "../src/css/Landing.css"

export const LandingPage = () => {
  return (
    <>


<div className="nav flex flex-col items-center md:flex-row md:justify-center md:flex-wrap">
      <div className="logo  ">
    <div className="logo-dot-base logo-dot-nav"></div>
    <div className='hidden md:block'>

    GigMate
    </div>
  </div>
  <div className="nav-links md:justify-center ">
    <span className="nav-link">Features</span>
    <span className="nav-link">Pricing</span>
    <span className="nav-link">Login</span>
    <button className="btn-primary " onclick="sendPrompt('Show me the Brief Analyzer feature page')">Get started free ↗</button>
  </div>
</div>

<div className="hero">
  <div className="badge">
    <div className="logo-dot-sm logo-dot-base"></div>
    AI toolkit for freelancers
  </div>
  <h1>Win more clients. Get paid faster.</h1>
  <p>From understanding client briefs to writing proposals and chasing invoices — GigMate handles the boring stuff.</p>
  <div className="hero-btns">
    <button className="btn-big btn-primary" onclick="sendPrompt('Show me the Brief Analyzer feature page')">Try it free ↗</button>
    <button className="btn-big btn-outline">See how it works</button>
  </div>
</div>

<div className="tools-section">
  <p className="section-label">Tools</p>
  <p className="section-title">Everything a freelancer needs</p>
  <p className="section-sub">5 AI tools, one dashboard. No switching tabs.</p>
  <div className="tools-grid">
    <div className="tool-card" onclick="sendPrompt('Show me the Brief Analyzer feature page')">
      <div className="tool-icon" classNameName="background:#EEEDFE;">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#534AB7" stroke-width="1.2"/><path d="M8 5v3l2 2" stroke="#534AB7" stroke-width="1.2" stroke-linecap="round"/></svg>
      </div>
      <div className="tool-name">Brief analyzer</div>
      <div className="tool-desc">Decode confusing client requirements instantly</div>
    </div>
    <div className="tool-card">
      <div className="tool-icon" classNameName="background:#E1F5EE;">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#0F6E56" stroke-width="1.2"/><path d="M5 6h6M5 9h4" stroke="#0F6E56" stroke-width="1.2" stroke-linecap="round"/></svg>
      </div>
      <div className="tool-name">Proposal writer</div>
      <div className="tool-desc">Winning proposals with pricing in minutes</div>
    </div>
    <div className="tool-card">
      <div className="tool-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="#854F0B" stroke-width="1.2"/><path d="M5 7h6M5 10h3" stroke="#854F0B" stroke-width="1.2" stroke-linecap="round"/></svg>
      </div>
      <div className="tool-name">Invoice generator</div>
      <div className="tool-desc">Professional invoices ready to send</div>
    </div>
    <div className="tool-card">
      <div className="tool-icon" >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h8M2 12h5" stroke="#993C1D" stroke-width="1.2" stroke-linecap="round"/></svg>
      </div>
      <div className="tool-name">Follow-up writer</div>
      <div className="tool-desc">Polite payment reminders that work</div>
    </div>
    <div className="tool-card">
      <div className="tool-icon" >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="3" stroke="#185FA5" stroke-width="1.2"/><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5" stroke="#185FA5" stroke-width="1.2" stroke-linecap="round"/></svg>
      </div>
      <div className="tool-name">Bio writer</div>
      <div className="tool-desc">Upwork and LinkedIn bios that convert</div>
    </div>
  </div>
</div>

<div className="how-section">
  <p className="section-label">How it works</p>
  <p className="section-title">Simple as paste, click, done</p>
  <p className="section-sub">No learning curve. Just paste and go.</p>
  <div className="steps">
    <div className="step">
      <div className="step-num">1</div>
      <div>
        <div className="step-title">Pick a tool</div>
        <div className="step-desc">Choose from brief analyzer, proposal writer, invoice generator and more.</div>
      </div>
    </div>
    <div className="step">
      <div className="step-num">2</div>
      <div>
        <div className="step-title">Paste your content</div>
        <div className="step-desc">Client message, project details, or your skills — just paste it in.</div>
      </div>
    </div>
    <div className="step">
      <div className="step-num">3</div>
      <div>
        <div className="step-title">Get AI output</div>
        <div className="step-desc">AI generates a clear, professional result in seconds.</div>
      </div>
    </div>
    <div className="step">
      <div className="step-num">4</div>
      <div>
        <div className="step-title">Copy and use</div>
        <div className="step-desc">Copy the output and send it to your client. Done!</div>
      </div>
    </div>
  </div>
</div>

<div className="pricing-section ">
  <p className="section-label">Pricing</p>
  <p className="section-title">Start free, upgrade anytime</p>
  <p className="section-sub">No credit card needed to start.</p>
  <div className="pricing-grid ">
    <div className="price-card">
      <div className="plan-badge">Free</div>
      <div className="plan-name">Starter</div>
      <div className="plan-price">₹0 <span>/ month</span></div>
      <div className="plan-feature"><div className="check"><svg viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="#0F6E56" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg></div>10 uses/month</div>
      <div className="plan-feature"><div className="check"><svg viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="#0F6E56" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg></div>All 5 tools</div>
      <div className="plan-feature"><div className="check"><svg viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="#0F6E56" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg></div>Basic history</div>
    </div>
    <div className="price-card featured">
      <div className="plan-badge">Popular</div>
      <div className="plan-name">Pro</div>
      <div className="plan-price">₹499 <span>/ month</span></div>
      <div className="plan-feature"><div className="check"><svg viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="#0F6E56" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg></div>Unlimited uses</div>
      <div className="plan-feature"><div className="check"><svg viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="#0F6E56" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg></div>Full history</div>
      <div className="plan-feature"><div className="check"><svg viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="#0F6E56" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg></div>Export to PDF</div>
    </div>
  </div>
</div>

<div className="cta-section">
  <h2>Ready to work smarter?</h2>
  <p>Join freelancers who spend less time on paperwork and more time on real work.</p>
  <button className="btn-big btn-primary" onclick="sendPrompt('Show me the Brief Analyzer feature page')">Start for free ↗</button>
</div>

<div className="footer">
  <div className="footer-text">© 2026 GigMate. All rights reserved.</div>
  <div className="footer-text">Made for freelancers, by freelancers</div>
</div>
</>
  )
}
