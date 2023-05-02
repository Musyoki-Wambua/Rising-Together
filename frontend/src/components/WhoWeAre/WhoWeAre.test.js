import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignupPage from './SignupPage';

describe('SignupPage component', () => {
  test('should render SignupPage component', () => {
    render(<SignupPage />);
    const headingElement = screen.getByText(/SignUp/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('should submit form when all fields are valid', async () => {
    // mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    );

    render(<SignupPage />);

    const usernameInput = screen.getByPlaceholderText(/your user name/i);
    const emailInput = screen.getByPlaceholderText(/youremail@gmail.com/i);
    const passwordInput = screen.getByPlaceholderText(/your password/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/confirm password/i);
    const roleInput = screen.getByPlaceholderText(/role/i);

    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password' } });
    fireEvent.change(roleInput, { target: { value: 'user' } });

    const submitButton = screen.getByRole('button', { name: /signup/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'johndoe',
          email: 'johndoe@example.com',
          password: 'password',
          password_confirmation: 'password',
          role: 'user'
        }),
      });
    });
  });
});
