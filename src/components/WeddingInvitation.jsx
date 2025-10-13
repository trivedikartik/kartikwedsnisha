import { useState, useEffect } from 'react';
import './WeddingInvitation.css';

const WeddingInvitation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isGujarati, setIsGujarati] = useState(true);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setShowContent(true), 800);
  }, []);

  return (
    <div className="invitation-container">
      {/* Floating hearts animation */}
      <div className="hearts-background">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`heart heart-${i + 1}`}>❤</div>
        ))}
      </div>

      {/* Main invitation card */}
      <div className={`invitation-card ${isVisible ? 'visible' : ''}`}>
        {/* Decorative corner elements */}
        <div className="corner corner-top-left"></div>
        <div className="corner corner-top-right"></div>
        <div className="corner corner-bottom-left"></div>
        <div className="corner corner-bottom-right"></div>

        {/* Header with rings */}
        <div className={`header ${showContent ? 'show' : ''}`}>
          <div className="rings-icon">💍</div>
          <h1 className="invitation-title">Shubh Vivah</h1>
          <div className="divider"></div>
          <p className="save-the-date">Kartik Weds Nisha</p>
        </div>

        {/* Couple Photos Section */}
        <div className={`couple-photos ${showContent ? 'show' : ''}`}>
          <div className="photos-wrapper">
            {/* Bride Section */}
            
            <div className="photo-container groom-photo-container">
              <div className="photo-frame-wrapper">
                <div className="ornate-frame">
                  <div className="frame-corner frame-tl"></div>
                  <div className="frame-corner frame-tr"></div>
                  <div className="frame-corner frame-bl"></div>
                  <div className="frame-corner frame-br"></div>
                </div>
                <div className="photo-frame">
                  <img 
                    loading="lazy"
                    src="/groom.jpg" 
                    alt="Portrait of Groom Kartik" 
                    className="couple-photo"
                  />
                  <div className="photo-shine"></div>
                </div>
              </div>
              <div className="photo-info">
                <h3 className="photo-label">The Groom</h3>
                <p className="photo-name">Kartik</p>
              </div>
            </div>

            {/* Center Divider */}
            <div className="heart-divider-container">
              <div className="connecting-line line-left"></div>
              <div className="heart-circle">
                <span className="heart-icon">💕</span>
                <div className="heart-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                </div>
              </div>
              <div className="connecting-line line-right"></div>
            </div>

            

            {/* Groom Section */}
            <div className="photo-container bride-photo-container">
              <div className="photo-frame-wrapper">
                <div className="ornate-frame">
                  <div className="frame-corner frame-tl"></div>
                  <div className="frame-corner frame-tr"></div>
                  <div className="frame-corner frame-bl"></div>
                  <div className="frame-corner frame-br"></div>
                </div>
                <div className="photo-frame">
                  <img 
                    loading="lazy"
                    src="/bride.jpg" 
                    alt="Portrait of Bride Nisha" 
                    className="couple-photo"
                  />
                  <div className="photo-shine"></div>
                </div>
              </div>
              <div className="photo-info">
                <h3 className="photo-label">The Bride</h3>
                <p className="photo-name">Nisha</p>
              </div>
            </div>
          </div>
        </div>

      

        {/* Invitation message */}
        <div className={`invitation-message ${showContent ? 'show' : ''}`}>
          <p className="message-text">
            Together with their families, request the honor of your presence
            at the celebration of their marriage
          </p>
        </div>

        {/* Date/Time/Venue section removed for full-screen mobile layout */}

        {/* Full Schedule (mobile-first) */}
        <div className={`full-schedule ${showContent ? 'show' : ''}`}>
          <h2 className="section-title">Ceremony Schedule</h2>
          <div className="schedule-grid mobile-one">
            <div className="schedule-item">
              <div className="schedule-icon">🙏</div>
              <div className="schedule-content">
                <h4>Ganesh Sthapana</h4>
                <p className="schedule-time">Saturday, Nov 22, 2025 • 8:00 AM</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-icon">🏛️</div>
              <div className="schedule-content">
                <h4>Mandap Muhurat</h4>
                <p className="schedule-time">Saturday, Nov 22, 2025 • 8:30 AM</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-icon">🕊️</div>
              <div className="schedule-content">
                <h4>Gruh Shanti</h4>
                <p className="schedule-time">Saturday, Nov 22, 2025 • 8:00 AM</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-icon">🍽️</div>
              <div className="schedule-content">
                <h4>Lunch Ceremony</h4>
                <p className="schedule-time">Saturday, Nov 22, 2025 • 12:30 PM</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-icon">🪘</div>
              <div className="schedule-content">
                <h4>Dandiya Raas</h4>
                <p className="schedule-time">Saturday, Nov 22, 2025 • 8:00 PM</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-icon">🚗</div>
              <div className="schedule-content">
                <h4>Jan Prasthan</h4>
                <p className="schedule-time">Sunday, Nov 23, 2025 • 8:00 AM</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-icon">🔥</div>
              <div className="schedule-content">
                <h4>Hast Medap (Wedding Ceremony)</h4>
                <p className="schedule-time">Sunday, Nov 23, 2025 • 11:30 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* RSVP section removed per request */}

        {/* Dress code */}
        <div className={`dress-code ${showContent ? 'show' : ''}`}>
          <p>Dress Code</p>
          <div className="dress-grid">
            <div className="dress-card">
              <div className="swatch swatch-red"></div>
              <div className="dress-info">
                <h4>Mandap</h4>
                <p>Red</p>
              </div>
            </div>
            <div className="dress-card">
              <div className="swatch swatch-yellow"></div>
              <div className="dress-info">
                <h4>Haldi</h4>
                <p>Yellow (boys)</p>
              </div>
            </div>
            <div className="dress-card">
              <div className="swatch swatch-pink"></div>
              <div className="dress-info">
                <h4>Haldi</h4>
                <p>Pink / Purple (girls)</p>
              </div>
            </div>
            <div className="dress-card">
              <div className="swatch swatch-blue"></div>
              <div className="dress-info">
                <h4>Garba</h4>
                <p>Dark Blue</p>
              </div>
            </div>
            <div className="dress-card">
              <div className="swatch swatch-offwhite"></div>
              <div className="dress-info">
                <h4>Marriage</h4>
                <p>Off White</p>
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className={`address-section ${showContent ? 'show' : ''}`}>
          <div className="address-icon-container">
            <div className="address-icon">📍</div>
            <div className="decorative-line"></div>
          </div>
          <h3 className="address-title">Venue Address</h3>
          <div className="address-content">
            <p className="venue-name">🏛️ Bramhsamaj Community Hall</p>
            <p className="venue-address">
              Bramhsamaj Chowk, Raiya Road<br />
              Bramhsamaj Society 1<br />
              Rajkot - 360007
            </p>
            <a 
              href="https://maps.app.goo.gl/DWSvt4w9qPsvEzk5A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-button"
            >
              📌 Open in Google Maps
            </a>
            
            <div className="contact-info">
              <div className="contact-divider"></div>
              <p className="contact-label">For any queries, contact:</p>
              <p className="contact-details">
                <span className="contact-icon">📞</span>
                <span className="contact-name">Manish Trivedi</span>
                <a href="tel:+918758520787" className="contact-number">8758520787</a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer - Unique Ribbon Banner */}
        <div className={`footer ${showContent ? 'show' : ''}`}>
          <div className="footer-banner">
            <div className="footer-garland top">🌸 ✨ 🌸 ✨ 🌸</div>
            <p className="footer-quote">We can't wait to celebrate with you!</p>
            <div className="footer-garland bottom">🌸 ✨ 🌸 ✨ 🌸</div>
          </div>
        </div>
      </div>

      {/* Sparkles effect */}
      <div className="sparkles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`sparkle sparkle-${i + 1}`}>✨</div>
        ))}
      </div>
    </div>
  );
};

export default WeddingInvitation;

