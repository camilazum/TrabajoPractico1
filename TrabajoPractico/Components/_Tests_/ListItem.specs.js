import React from 'react';
import { render } from '@testing-library/react-native';
import ListItem from './ListItem';

describe('ListItem Component', () => {
  const mockItem = {
    id: 1,
    image: 'https://i.pinimg.com/474x/f9/cd/f9/f9cdf9807c6e607bf3a2c171825cb85a.jpg',
  };

  it('renders the item id correctly', () => {
    const { getByText } = render(<ListItem item={mockItem} />);
    const idText = getByText(`ID: ${mockItem.id}`);
    expect(idText).toBeTruthy();
  });
  
  it('renders the item image correctly', () => {
    const { getByTestId } = render(<ListItem item={mockItem} />);
    const image = getByTestId('item-image');
    expect(image.props.source.uri).toBe(mockItem.image);
  });
});
