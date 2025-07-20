import React from 'react';
import './Profile.css'; // optional external CSS

const Profile = () => {
  const user = {
    name: 'Muhammad Afzaal',
    email: 'afzaal@example.com',
    bio: 'I am a passionate web developer with 3 years of experience in HTML, CSS, JavaScript, and currently learning React.',
    avatar: 'https://i.pravatar.cc/150?img=3' // Replace with your image or path
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.avatar} alt="Profile" className="profile-avatar" />
        <h2>{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-bio">{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
