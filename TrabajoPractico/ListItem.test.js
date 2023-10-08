import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ListItem from './Components/ListItem';


test('should render the item id and image', async () => {
    const item = {
        id: 1,
        image: 'https://i.pinimg.com/474x/f9/cd/f9/f9cdf9807c6e607bf3a2c171825cb85a.jpg',
    };

    const wrapper = render(<ListItem item={item} />);

    
    await wrapper.findByText('ID: 1');
    
    expect(wrapper.findByText('ID: 1')).toBeTruthy();
});