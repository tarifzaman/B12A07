import React from 'react';
import './Footer.css';

const FooterSection = ({ title, children }) => (
  <div className="footer-section">
    <h3>{title}</h3>
    <ul>{children}</ul>
  </div>
);

const FooterLink = ({ href, children }) => (
  <li><a href={href}>{children}</a></li>
);

const Footer = () => {
  return (
    <footer className="cs-footer">
      <div className="footer-content-container">

        {/* Intro Section */}
        <div className="footer-intro">
          <h2>CS — Ticket System</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>

        {/* Navigation Sections */}
        <FooterSection title="Company">
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/mission">Our Mission</FooterLink>
          <FooterLink href="/contact">Contact Sales</FooterLink>
        </FooterSection>

        <FooterSection title="Services">
          <FooterLink href="/products">Products & Services</FooterLink>
          <FooterLink href="/stories">Customer Stories</FooterLink>
          <FooterLink href="/apps">Download Apps</FooterLink>
        </FooterSection>

        <FooterSection title="Information">
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/terms">Terms & Conditions</FooterLink>
          <FooterLink href="/join">Join Us</FooterLink>
        </FooterSection>

        {/* Social Links */}
        <div className="footer-social-links">
          <h3>Social Links</h3>
          <ul>
            <FooterLink href="https://twitter.com"><span>&#x1F426;</span> @CS — Ticket System</FooterLink>
            <FooterLink href="https://youtube.com"><span>&#x1F4FD;</span> @CS — Ticket System</FooterLink>
            <FooterLink href="https://facebook.com"><span>&#x1F44D;</span> @CS — Ticket System</FooterLink>
            <FooterLink href="mailto:support@csst.com"><span>&#x2709;</span> support@csst.com</FooterLink>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
