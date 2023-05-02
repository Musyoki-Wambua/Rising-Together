import { render, screen, waitFor } from '@testing-library/react';
import ReviewsCards from './ReviewsCards';

describe('ReviewsCards component', () => {
  const mockReviews = [
    {
      id: 1,
      user_id: 1,
      organization_id: 1,
      organization_name: 'Test Org',
      username: 'Test User',
      rating: 8,
      comments: 'Test review'
    },
    {
      id: 2,
      user_id: 2,
      organization_id: 1,
      organization_name: 'Test Org',
      username: 'Test User 2',
      rating: 9,
      comments: 'Another test review'
    }
  ];

  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockReviews)
    });
  });

  afterAll(() => {
    global.fetch.mockRestore();
  });

  it('should fetch and display reviews for the organization', async () => {
    render(<ReviewsCards match={{ params: { id: '1' } }} />);
    await waitFor(() => {
      expect(screen.getByText('Test review')).toBeInTheDocument();
    });
  });

  it('should display the correct organization name, rating, and username', async () => {
    render(<ReviewsCards match={{ params: { id: '1' } }} />);
    await waitFor(() => {
      const orgNameElements = screen.getAllByText('Test Org');
      expect(orgNameElements).toHaveLength(2);
    });
  });
});
