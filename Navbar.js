import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #4CAF50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const SearchBar = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: none;
  width: 40%;
  font-size: 16px;
`;

const ProfilePhoto = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src="https://placehold.co/150x150" alt="Logo" />
      <SearchBar type="text" placeholder="Search..." />
      <ProfilePhoto src="https://placehold.co/150x150" alt="Profile" />
    </NavbarContainer>
  );
};

export default Navbar;