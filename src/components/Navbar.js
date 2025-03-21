import React from 'react';
import styled from 'styled-components';
import logo from '../logo.jpg';
import profile from '../profile.jpg';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(360deg);
  }
`;

const SearchBar = styled.input`
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  width: 40%;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.8);
  transition: background 0.3s ease;

  &:focus {
    background: rgba(255, 255, 255, 1);
    outline: none;
  }
`;

const ProfilePhoto = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />
      <SearchBar type="text" placeholder="Search..." />
      <ProfilePhoto src={profile} alt="Profile" />
    </NavbarContainer>
  );
};

export default Navbar;