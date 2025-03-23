import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.jpg'; // Import logo from src folder
import profile from './profile.jpg'; // Import profile from src folder

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockData = [
        { name: 'John Doe', domain: 'Software Engineer', skills: 'React, Node.js, Python' },
        { name: 'Jane Smith', domain: 'Data Scientist', skills: 'Python, R, Machine Learning' },
        { name: 'Alice Johnson', domain: 'UI/UX Designer', skills: 'Figma, Sketch, Adobe XD' },
        { name: 'Bob Brown', domain: 'DevOps Engineer', skills: 'Docker, Kubernetes, AWS' },
        { name: 'Charlie Davis', domain: 'Mobile Developer', skills: 'Flutter, React Native, Swift' },
      ];
      setProfiles(mockData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {loading ? (
          <p className="loading-text">Loading profiles...</p>
        ) : (
          <div className="card-list">
            {profiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={logo} alt="Logo" className="logo" />
      <input type="text" placeholder="Search..." className="search-bar" />
      <img src={profile} alt="Profile" className="profile-photo" />
    </div>
  );
};

const ProfileCard = ({ name, domain, skills }) => {
  return (
    <div className="card-container">
      <img src="https://placehold.co/150x150" alt="Profile" className="profile-image" />
      <h2 className="name">{name}</h2>
      <p className="domain">{domain}</p>
      <p className="skills">{skills}</p>
    </div>
  );
};

export default App;