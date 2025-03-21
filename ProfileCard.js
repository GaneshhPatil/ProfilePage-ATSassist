import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const Name = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const Domain = styled.p`
  color: #555;
  margin-bottom: 5px;
`;

const Skills = styled.p`
  color: #777;
`;

const ProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
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