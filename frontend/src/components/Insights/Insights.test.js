import { render, screen } from '@testing-library/react';
import Insight from './Insight';

describe('Insight', () => {
  test('renders a title', () => {
    render(<Insight />);
    const titleElement = screen.getByText(/Animated with CSS/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the three graphs', () => {
    render(<Insight />);
    const banksGraph = screen.getByRole('polyline', { name: /banks/i });
    const bridgeGraph = screen.getByRole('polyline', { name: /bridge/i });
    const paypalGraph = screen.getByRole('polyline', { name: /paypal/i });
    expect(banksGraph).toBeInTheDocument();
    expect(bridgeGraph).toBeInTheDocument();
    expect(paypalGraph).toBeInTheDocument();
  });

  test('renders the y-axis labels', () => {
    render(<Insight />);
    const zeroLabel = screen.getByText('0');
    const oneThousandLabel = screen.getByText('1000');
    const sixteenHundredLabel = screen.getByText('1600');
    expect(zeroLabel).toBeInTheDocument();
    expect(oneThousandLabel).toBeInTheDocument();
    expect(sixteenHundredLabel).toBeInTheDocument();
  });

  test('renders the x-axis labels', () => {
    render(<Insight />);
    const firstLabel = screen.getByText('1');
    const fifthLabel = screen.getByText('5');
    const ninthLabel = screen.getByText('9');
    expect(firstLabel).toBeInTheDocument();
    expect(fifthLabel).toBeInTheDocument();
    expect(ninthLabel).toBeInTheDocument();
  });
});
