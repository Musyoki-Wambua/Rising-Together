import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OrganizationDetails from './OrganizationDetails';

describe('OrganizationDetails component', () => {
  test('renders organization name', async () => {
    const mockData = {
      name: 'Test Organization',
      image_url: 'https://example.com/image.jpg',
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockData,
    });

    render(<OrganizationDetails />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    const organizationName = await screen.findByText(mockData.name);
    expect(organizationName).toBeInTheDocument();
  });

  test('renders organization image', async () => {
    const mockData = {
      name: 'Test Organization',
      image_url: 'https://example.com/image.jpg',
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockData,
    });

    render(<OrganizationDetails />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    const organizationImage = await screen.findByAltText(mockData.name);
    expect(organizationImage).toBeInTheDocument();
    expect(organizationImage).toHaveAttribute('src', mockData.image_url);
  });

  test('handles editing organization info', async () => {
    const mockData = {
      name: 'Test Organization',
      info: 'Test organization info',
    };

    jest.spyOn(global, 'fetch')
      .mockResolvedValueOnce({ json: async () => mockData })
      .mockResolvedValueOnce({ ok: true });

    render(<OrganizationDetails />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    const editButton = await screen.findByText('Edit');
    userEvent.click(editButton);

    const newInfo = 'New test organization info';
    const promptMock = jest.spyOn(window, 'prompt').mockReturnValueOnce(newInfo);
    const putMock = jest.spyOn(global, 'fetch').mockResolvedValueOnce({ ok: true });

    userEvent.click(screen.getByText('Update'));

    expect(promptMock).toHaveBeenCalledWith('Enter the new info of the organization:');
    expect(putMock).toHaveBeenCalledWith('http://localhost:3000/organizations/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ info: newInfo }),
    });

    expect(screen.getByText('Organization info updated successfully!')).toBeInTheDocument();
  });

  test('renders and deletes comments', async () => {
    const mockData = {
      name: 'Test Organization',
      image_url: 'https://example.com/image.jpg',
    };

    const mockReviews = [
      {
        id: 1,
        username: 'Test User 1',
        organization_name: mockData.name,
        comments: 'Test comment 1',
      },
      {
        id: 2,
        username: 'Test User 2',
        organization_name: mockData.name,
        comments: 'Test comment 2',
      },
      {
        id: 3,
        username: 'Test User 3',
        organization_name: mockData.name,
        comments: 'Test comment 3',
      },
    ];

    jest.spyOn(global, 'fetch')
      .mockResolvedValueOnce({ json: async () => mockData })
      .mockResolvedValueOnce({ json: async () => mockReviews })
      .mockResolvedValueOnce({ ok: true })
      .mockResolvedValueOnce({ ok: true });

    render(<OrganizationDetails />);

    expect(screen.getByText('Loading...')).test('renders organization details and reviews after loading', async () => {
        await waitFor(() => expect(screen.queryByText('Loading...')).toBeNull());
        
        expect(screen.getByText('Organization Name')).toBeInTheDocument();
        expect(screen.getByText('Address: 123 Main St')).toBeInTheDocument();
        expect(screen.getByText('Phone: 555-555-5555')).toBeInTheDocument();
        
        expect(screen.getByText('Reviews')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Great organization!')).toBeInTheDocument();
      });
    })
})   
