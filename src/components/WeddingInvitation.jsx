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
          <p className="save-the-date">Nisha weds Kartik</p>
        </div>

        {/* Couple Photos Section */}
        <div className={`couple-photos ${showContent ? 'show' : ''}`}>
          <div className="photo-container bride-photo-container">
            <div className="photo-frame">
              <img 
                loading="lazy"
                src="/bride.jpg" 
                alt="Portrait of Bride Nisha" 
                className="couple-photo"
              />
              <div className="photo-overlay">
                <div className="floral-corner tl"></div>
                <div className="floral-corner tr"></div>
                <div className="floral-corner bl"></div>
                <div className="floral-corner br"></div>
              </div>
            </div>
            <h3 className="photo-label">The Bride</h3>
          </div>

          <div className="heart-divider">
            <span className="heart-beat">💕</span>
          </div>

          <div className="photo-container groom-photo-container">
            <div className="photo-frame">
              <img 
                loading="lazy"
                src="/groom.jpg" 
                alt="Portrait of Groom Kartik" 
                className="couple-photo"
              />
              <div className="photo-overlay">
                <div className="floral-corner tl"></div>
                <div className="floral-corner tr"></div>
                <div className="floral-corner bl"></div>
                <div className="floral-corner br"></div>
              </div>
            </div>
            <h3 className="photo-label">The Groom</h3>
          </div>
        </div>

        {/* Couple names */}
        <div className={`couple-names ${showContent ? 'show' : ''}`}>
          <h2 className="bride-name">Nisha</h2>
          <div className="and-symbol">&</div>
          <h2 className="groom-name">Kartik</h2>
        </div>

        {/* Invitation message */}
        <div className={`invitation-message ${showContent ? 'show' : ''}`}>
          <p className="message-text">
            Together with their families, request the honor of your presence
            at the celebration of their marriage
          </p>
        </div>

        {/* Date/Time/Venue section removed for full-screen mobile layout */}

        {/* Reception details */}
        <div className={`reception-details ${showContent ? 'show' : ''}`}>
          <div className="divider-small"></div>
          <h3>Reception to follow</h3>
          <p>Dinner & Dancing</p>
          <div className="divider-small"></div>
        </div>

        {/* Full Schedule (mobile-first) */}
        <div className={`full-schedule ${showContent ? 'show' : ''}`}>
          <h2 className="section-title">{isGujarati ? 'મંગલ વિધિઓ' : 'Ceremony Schedule'}</h2>
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
          <p>👗 Dress Code</p>
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

        {/* Footer */}
        <div className={`footer ${showContent ? 'show' : ''}`}>
          <div className="flower-divider">🌸 ✨ 🌸</div>
          <p className="footer-text">We can't wait to celebrate with you!</p>
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

