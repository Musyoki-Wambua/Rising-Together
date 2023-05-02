import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders the title and children', () => {
    const title = 'Card Title';
    const children = <p>Card Content</p>;
    render(<Card title={title}>{children}</Card>);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });
});
