import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import OrganisationForm from './OrganisationForm';

describe('OrganisationForm component', () => {
  test('should submit form successfully', async () => {

    const mockResponse = { success: true };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    render(<OrganisationForm />);
    fireEvent.change(screen.getByLabelText(/organization name/i), { target: { value: 'Test Org' } });
    fireEvent.change(screen.getByLabelText(/location/i), { target: { value: 'Test Location' } });
    fireEvent.change(screen.getByLabelText(/image/i), { target: { value: 'https://test.org/image.jpg' } });
    fireEvent.change(screen.getByLabelText(/video url/i), { target: { value: 'https://test.org/video.mp4' } });
    fireEvent.change(screen.getByLabelText(/user id/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText(/year established/i), { target: { value: '2020' } });

    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));


    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(screen.getByLabelText(/organization name/i)).toHaveValue('');
    expect(screen.getByLabelText(/location/i)).toHaveValue('');
    expect(screen.getByLabelText(/image/i)).toHaveValue('');
    expect(screen.getByLabelText(/video url/i)).toHaveValue('');
    expect(screen.getByLabelText(/user id/i)).toHaveValue('');
    expect(screen.getByLabelText(/description/i)).toHaveValue('');
    expect(screen.getByLabelText(/year established/i)).toHaveValue('');

    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/organizations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Test Org',
        location: 'Test Location',
        image_url: 'https://test.org/image.jpg',
        video_url: 'https://test.org/video.mp4',
        user_id: 'testuser',
        description: 'Test Description',
        year_established: '2020',
        info: '',
        contact: ''
      })
    });
  });
});
