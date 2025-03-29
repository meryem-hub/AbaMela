import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
 
      <div className="about-content">
        <section className="mission-section">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              At Abamela, we're committed to democratizing access to global markets through 
              cutting-edge technology, transparent pricing, and unparalleled client support. 
              We believe everyone deserves a fair chance to grow their wealth.
            </p>
          </div>
          <div className="mission-image">
            <div className="image-placeholder"> <img src="" alt="" /></div>
          </div>
        </section>

        <section className="values-section">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon integrity"></div>
              <h3>Integrity</h3>
              <p>We operate with complete transparency and ethical standards that exceed industry norms.</p>
            </div>
            <div className="value-card">
              <div className="value-icon innovation"></div>
              <h3>Innovation</h3>
              <p>Constantly evolving our platform to give you the competitive edge you deserve.</p>
            </div>
            <div className="value-card">
              <div className="value-icon client"></div>
              <h3>Client First</h3>
              <p>Your success is our success. We measure our performance by your achievements.</p>
            </div>
          </div>
        </section>

        <section className="timeline-section">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>Abamela was founded by a team of Wall Street veterans who wanted to create a fairer brokerage model.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Platform Launch</h3>
                <p>Introduced our proprietary trading platform with AI-driven analytics tools.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>Expanded our services to 30+ countries with localized support and offerings.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Leadership</h2>
          <p className="team-subtitle">Seasoned professionals with decades of combined market experience</p>
          <div className="team-grid">
            {/* These would be replaced with actual team member components */}
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Alexandra Morgan</h3>
              <p className="position">CEO & Founder</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>James Chen</h3>
              <p className="position">Chief Trading Officer</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Sophia Rodriguez</h3>
              <p className="position">Head of Client Success</p>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default About;