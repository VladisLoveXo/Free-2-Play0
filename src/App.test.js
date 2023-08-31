import { createRoot } from 'react-dom/client';
import App from './App';
import { screen } from '@testing-library/react';

test('renders learn react link', () => {
  createRoot(document.createElement('div')).render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});