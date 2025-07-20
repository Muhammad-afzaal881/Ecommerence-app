import React from 'react';
import './About.css'
const About = () => {
  return (
    <div className="session-info">
      <h2>Session Management</h2>
      <p>
        A session is a way to store user information across multiple pages on a website,
        ensuring a personalized and secure browsing experience. When a user visits our site,
        a session is created to temporarily store data such as login status, preferences, and
        interactions. This helps us deliver a seamless and consistent experience without
        requiring users to re-enter information. Once the session ends—either by logging out
        or after a period of inactivity—the data is automatically cleared to protect your
        privacy and security.
      </p>
    </div>
  );
};

export default About;
