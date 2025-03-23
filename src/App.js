import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import styled from 'styled-components';
import './profile.css'; // Import profile.css instead of App.css

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh; /* Full page height */
`;

const CardList = styled.div`
  width: 90%; /* Cards take up 90% width */
  max-width: 800px;
  overflow-y: auto; /* Enable vertical scrolling */
  max-height: calc(100vh - 150px); /* Adjust height based on navbar */
  padding: 10px;
`;

const LoadingText = styled.p`
  font-size: 20px;
  color: #6a11cb;
`;

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data from an API
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
    }, 2000); // Simulate a 2-second delay
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Container>
        {loading ? (
          <LoadingText>Loading profiles...</LoadingText>
        ) : (
          <CardList>
            {profiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </CardList>
        )}
      </Container>
    </div>
  );
}

export default App;