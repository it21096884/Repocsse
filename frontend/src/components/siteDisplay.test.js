import React from 'react'; // Add this line
import { render, fireEvent, waitFor } from '@testing-library/react';
import SiteDisplay from './SiteDisplay';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('renders Site Display component without errors', () => {
  render(<SiteDisplay />);
});