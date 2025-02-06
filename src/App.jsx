import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const countries = [
    { name: 'Kenya', flag: '🇰🇪', code: 'KE' },
    { name: 'USA', flag: '🇺🇸', code: 'US' },
    { name: 'Canada', flag: '🇨🇦', code: 'CA' },
    { name: 'UK', flag: '🇬🇧', code: 'UK' },
    { name: 'Germany', flag: '🇩🇪', code: 'DE' },
    { name: 'Nigeria', flag: '🇳🇬', code: 'NG' },
    { name: 'Ghana', flag: '🇬🇭', code: 'GH' },
    { name: 'South Africa', flag: '🇿🇦', code: 'ZA' },
    { name: 'Ethiopia', flag: '🇪🇹', code: 'ET' },
    { name: 'Tanzania', flag: '🇹🇿', code: 'TZ' },
    { name: 'Uganda', flag: '🇺🇬', code: 'UG' },
    { name: 'Zambia', flag: '🇿🇲', code: 'ZM' },
    { name: 'Zimbabwe', flag: '🇿🇼', code: 'ZW' },
    { name: 'Rwanda', flag: '🇷🇼', code: 'RW' },
    { name: 'Angola', flag: '🇦🇴', code: 'AO' },
    { name: 'Mozambique', flag: '🇲🇿', code: 'MZ' },
    { name: 'Botswana', flag: '🇧🇼', code: 'BW' },
    { name: 'Namibia', flag: '🇳🇦', code: 'NA' },
    { name: 'Mali', flag: '🇲🇱', code: 'ML' },
    { name: 'Senegal', flag: '🇸🇳', code: 'SN' },
    { name: 'Ivory Coast', flag: '🇨🇮', code: 'CI' },
    { name: 'Cameroon', flag: '🇨🇲', code: 'CM' },
    { name: 'Congo', flag: '🇨🇬', code: 'CG' },
    { name: 'DR Congo', flag: '🇨🇩', code: 'CD' },
    { name: 'Benin', flag: '🇧🇯', code: 'BJ' },
    { name: 'Togo', flag: '🇹🇬', code: 'TG' },
    { name: 'Burkina Faso', flag: '🇧🇫', code: 'BF' },
    { name: 'Niger', flag: '🇳🇪', code: 'NE' },
    { name: 'Chad', flag: '🇹🇩', code: 'TD' },
    { name: 'Sudan', flag: '🇸🇩', code: 'SD' },
    { name: 'Somalia', flag: '🇸🇴', code: 'SO' },
    { name: 'Liberia', flag: '🇱🇷', code: 'LR' },
    { name: 'Sierra Leone', flag: '🇸🇱', code: 'SL' },
    { name: 'Guinea', flag: '🇬🇳', code: 'GN' },
    { name: 'Guinea-Bissau', flag: '🇬🇼', code: 'GW' },
    { name: 'Gambia', flag: '🇬🇲', code: 'GM' },
    { name: 'Djibouti', flag: '🇩🇯', code: 'DJ' },
    { name: 'Eritrea', flag: '🇪🇷', code: 'ER' },
    { name: 'Central African Republic', flag: '🇨🇫', code: 'CF' },
    { name: 'Equatorial Guinea', flag: '🇬🇶', code: 'GQ' },
    { name: 'Gabon', flag: '🇬🇦', code: 'GA' },
    { name: 'Comoros', flag: '🇰🇲', code: 'KM' },
    { name: 'Mauritius', flag: '🇲🇺', code: 'MU' },
    { name: 'Seychelles', flag: '🇸🇨', code: 'SC' },
    { name: 'Sao Tome and Principe', flag: '🇸🇹', code: 'ST' },
  ];
  const languages = ['English', 'Spanish', 'French', 'German', 'Swahili'];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [visitorCount, setVisitorCount] = useState(1000);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    names: '',
    phone: '',
    level: 'Early Learning',
    areaOfInterest: '',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random increment between 1 and 5
      const increment = Math.floor(Math.random() * 5) + 1;
      setVisitorCount((prevCount) => prevCount + increment);
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const handleCountryChange = (event) => {
    const countryName = event.target.value;
    const selected = countries.find((country) => country.name === countryName);
    setSelectedCountry(selected);
  };

  const logoUrls = [
    'https://eduemocion.com/wp-content/uploads/2020/02/Logo-Smile-and-Learn-horizontal-300x123.png',
    'https://static.wikia.nocookie.net/finny-the-shark/images/2/2e/Finny_the_Shark.png/revision/latest?cb=20240203010503',
    'https://citamschools.sc.ke/web/image/website/1/logo?unique=33d783b',
    'https://upload.wikimedia.org/wikipedia/en/8/86/The%2BStarehe%2BLion%2BCrest.jpg',
    'https://masingagirls.sc.ke/wp-content/uploads/2021/12/Logo-01-1.png',
    'https://atta.travel/static/1ef725b6-d400-425d-875ec5445ea87afa/opengraphimage_83f4e8796336604b59d7216d0ecd81a5_4a7c7e45a350/Safarilink-Logo-1200px-x-1200px-2.png',
    'https://banner2.cleanpng.com/20180805/zpj/f850f1bbe854162a38c3abfb0e4c21ea.webp',
    'https://www.kenyaengineer.co.ke/wp-content/uploads/2020/06/ICT-Authority-Logo.jpg',
    'https://w7.pngwing.com/pngs/585/112/png-transparent-alliance-high-school-american-high-school-national-secondary-school-education-school-text-trademark-logo-thumbnail.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwV7-YsX7Chq8I7sdUxUniQcM6cqWh8kiQgQ&s',
  ];

  const videoLinks = [
    'https://www.youtube.com/embed/ccEpTTZW34g',
    'https://www.youtube.com/embed/JQ4WduVp9k4',
    'https://www.youtube.com/embed/JGBE6he34UM',
    'https://www.youtube.com/embed/DdfV9DfSdWk',
    'https://www.youtube.com/embed/Sy_IgBD6n9A',
  ];

  const handleVideoClick = (index) => {
    setSelectedVideo(videoLinks[index]);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const handleLearnMore = () => {
    setShowPopup(false);
    // Add logic to navigate to the "About Anza Academy" page or section
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleRegisterClick = () => {
    setShowRegistrationForm(true);
    setRegistrationSuccess(false);
  };

  const handleEnlistMeClick = () => {
    setShowRegistrationForm(true);
    setRegistrationSuccess(false);
  };

  const handleContactUsClick = () => {
    window.location.href = 'https://wa.me/254701020202';
  };

  const handleRegistrationChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration
    setRegistrationSuccess(true);
    // Hide the registration form after submission
    setShowRegistrationForm(false);
  };

  const handleCloseRegistration = () => {
    setShowRegistrationForm(false);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          Anza Academy<sup>{selectedCountry.code}</sup>
        </div>
        <div className="search-bar">
          <input
            type="text"
            id="search"
            placeholder="Looking for something specific? Search Here"
          />
        </div>
        <button className="login-button" onClick={handleRegisterClick}>Register</button>
        <div className="education">Education for All</div>
      </header>

      <section className="hero">
        <h1>Transformative Learning For any Level</h1>
        <p>
          Perfect for <br />
          Early Learners | Intermediate Learners | Advanced Learners
        </p>
        <p className="hero-description">
          Learn <strong>Science, Technology, Math and Technical Courses</strong> using Interactive Lessons and <strong><span className="ai-power">Leverage the power of AI</span></strong>
        </p>
      </section>

      <section className="buttons">
        <button className="primary">Early Learning</button>
        <button className="secondary">Primary Learning</button>
        <button className="secondary">High School</button>
        <button className="secondary">Skill-Based &amp; Short Courses</button>
        <button className="secondary">Higher Learning</button>
      </section>

      <div className="logo-scroll-container">
        <div className="logo-scroll">
          {logoUrls.map((url, index) => (
            <img key={index} src={url} alt={`Logo ${index + 1}`} className="logo-image" />
          ))}
        </div>
      </div>

      <section className="ribbon">
        <div className="ribbon-content">
          <div className="ribbon-text">
            Anza Academy is loved and trusted by over 60,000 online and offline students
          </div>
          <div className="ribbon-description">
            Be among the first to experience our new platform Launch this coming Holiday.
          </div>
          <div className="visitor-count">
            You are Visitor Number {visitorCount.toLocaleString()}
          </div>
          <div className="ribbon-buttons">
            <button className="ribbon-button request-demo" onClick={handleEnlistMeClick}>Enlist Me</button>
            <button className="ribbon-button teachers-try-free" onClick={handleContactUsClick}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="video-section">
        <h2>A Platform Just for Your Need!</h2>
        <p>Interactive Learning for any level, One platform different personalized Experiences!</p>
        <div className="video-container">
          {videoLinks.map((url, index) => (
            <div key={index} className="video-placeholder" onClick={() => handleVideoClick(index)}>
              <img src={`https://img.youtube.com/vi/${url.split('/').pop()}/mqdefault.jpg`} alt={`Video ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="footer-options">
        <div className="cookies">Cookies</div>
        <select
          className="country-select"
          value={selectedCountry.name}
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
        <select className="language-select">
          {languages.map((language) => (
            <option key={language} value={language}>{language}</option>
          ))}
        </select>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>
            © 2025 Aanzar Limited.
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Status</a>
            <a href="#">Contact</a>
            <a href="#">Do not share my personal information</a>
          </p>
        </div>
      </footer>

      {selectedVideo && (
        <div className="video-overlay">
          <div className="video-player">
            <iframe
              width="800"
              height="450"
              src={selectedVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-button" onClick={handleCloseVideo}>
              Close
            </button>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Anza Academy is under development!</h2>
            <p>Expect new learning Experiences, Impactful content and Awesome Possibilities.</p>
            <button className="learn-more-button" onClick={handleLearnMore}>
              Learn About Anza Academy
            </button>
            <button className="close-popup" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {showRegistrationForm && (
        <div className="registration-overlay">
          <div className="registration-form">
            <h2>Register with Anza Academy</h2>
            {registrationSuccess ? (
              <p>Registration Successful!</p>
            ) : (
              <form onSubmit={handleRegistrationSubmit}>
                <label htmlFor="names">Names:</label>
                <input
                  type="text"
                  id="names"
                  name="names"
                  value={formData.names}
                  onChange={handleRegistrationChange}
                  required
                />

                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleRegistrationChange}
                  required
                />

                <label htmlFor="level">Level:</label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleRegistrationChange}
                >
                  <option value="Early Learning">Early Learning</option>
                  <option value="Primary Learning">Primary Learning</option>
                  <option value="High School">High School</option>
                  <option value="Short Course">Skill-Based &amp; Short Courses</option>
                  <option value="Higher Learning">Higher Learning</option>
                </select>

                <label htmlFor="areaOfInterest">Area of Interest:</label>
                <textarea
                  id="areaOfInterest"
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleRegistrationChange}
                />

                <button type="submit">Submit</button>
              </form>
            )}
            <button className="close-button" onClick={handleCloseRegistration}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
