import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginCard from '../components/LoginPage/LoginCard';

/**
 * IndexPage serves as the main entry point for the login functionality.
 * It utilizes MainAppLayout to provide a consistent page structure,
 * centering the LoginCard component in the viewport.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
