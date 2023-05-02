import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  test('renders a heading and two buttons', () => {
    render(<LandingPage />);
    const heading = screen.getByText(/No\.1 Trusted source for Giving and Volunteering/i);
    const giveButton = screen.getByText(/Give now/i);
    const volunteerButton = screen.getByText(/Become a Volunteer/i);
    expect(heading).toBeInTheDocument();
    expect(giveButton).toBeInTheDocument();
    expect(volunteerButton).toBeInTheDocument();
  });
});
