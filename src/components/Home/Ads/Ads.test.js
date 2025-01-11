import React from 'react';
import { render, screen } from '@testing-library/react';
import Ads from './Ads';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock the next/link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => {
    return <a href={href}>{children}</a>;
  },
}));

describe('Ads Component', () => {
  it('renders the advertisement image with correct properties', () => {
    render(<Ads />);
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/assets/images/offer.jpg');
    expect(image).toHaveAttribute('alt', 'ads');
    expect(image).toHaveAttribute('width', '1020');
    expect(image).toHaveAttribute('height', '380');
    expect(image).toHaveClass('w-full');
  });

  it('wraps the image in a link that points to homepage', () => {
    render(<Ads />);
    
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders within a container with correct padding', () => {
    const { container } = render(<Ads />);
    
    const divContainer = container.querySelector('.container');
    expect(divContainer).toBeInTheDocument();
    expect(divContainer).toHaveClass('pb-16');
  });
});