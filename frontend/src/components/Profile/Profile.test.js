import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Profile from './Profile';

describe('Profile component', () => {
  test('it should submit form data correctly', async () => {
    const mockProfile = {
      id: 1,
      image_url: 'https://example.com/profile.jpg',
      first_name: 'John',
      last_name: 'Doe',
      age: 30,
      gender: 'Male',
      country: 'USA',
      contact: '123-456-7890',
      skills: 'React, Node.js, SQL',
      user_id: 123,
    };

    const mockResponse = { ok: true, json: () => Promise.resolve(mockProfile) };
    global.fetch = jest.fn(() => Promise.resolve(mockResponse));

    render(<Profile />);

    const form = screen.getByRole('form');
    const imageUrlInput = screen.getByPlaceholderText('profile-image');
    const firstNameInput = screen.getByPlaceholderText('first-name');
    const lastNameInput = screen.getByPlaceholderText('last-name');
    const ageInput = screen.getByPlaceholderText('age');
    const genderInput = screen.getByPlaceholderText('gender');
    const countryInput = screen.getByPlaceholderText('country');
    const contactInput = screen.getByPlaceholderText('contact');
    const skillsInput = screen.getByPlaceholderText('skills');
    const userIdInput = screen.getByPlaceholderText('user-id');
    const submitButton = screen.getByRole('button', { name: /create profile/i });

    fireEvent.change(imageUrlInput, { target: { value: mockProfile.image_url } });
    fireEvent.change(firstNameInput, { target: { value: mockProfile.first_name } });
    fireEvent.change(lastNameInput, { target: { value: mockProfile.last_name } });
    fireEvent.change(ageInput, { target: { value: mockProfile.age } });
    fireEvent.change(genderInput, { target: { value: mockProfile.gender } });
    fireEvent.change(countryInput, { target: { value: mockProfile.country } });
    fireEvent.change(contactInput, { target: { value: mockProfile.contact } });
    fireEvent.change(skillsInput, { target: { value: mockProfile.skills } });
    fireEvent.change(userIdInput, { target: { value: mockProfile.user_id } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(fetch).toHaveBeenCalledWith('http://127.0.0.1:3000/profiles', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(mockProfile),
    });

    const profileItem = await screen.findByText(mockProfile.first_name);
    expect(profileItem).toBeInTheDocument();
  });
});
