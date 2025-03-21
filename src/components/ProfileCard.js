import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  padding: 20px;
  margin: 15px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 3px solid #6a11cb;
  margin-bottom: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Name = styled.h2`
  color: #333;
  margin-bottom: 10px;
  font-size: 24px;
`;

const Domain = styled.p`
  color: #555;
  margin-bottom: 5px;
  font-size: 18px;
`;

const Skills = styled.p`
  color: #777;
  font-size: 16px;
`;

const ProfileCard = ({ name, domain, skills }) => {
  return (
    <CardContainer>
      <ProfileImage src="https://placehold.co/150x150" alt="Profile" />
      <Name>{name}</Name>
      <Domain>{domain}</Domain>
      <Skills>{skills}</Skills>
    </CardContainer>
  );
};

export default ProfileCard;