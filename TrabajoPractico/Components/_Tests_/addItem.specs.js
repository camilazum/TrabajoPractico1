// app.test.js
import { addItem } from './App';

describe('addItem', () => {
  it('should add an item when ID and image are provided', () => {
    const newItem = { id: '4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9L64eu1x_ht7CpphIO0BG3fcYXw9xPZDGWeUBuoBJccGclVwCPAIirqd1Kb_JIVor15A&usqp=CAU' };
    const data = [];
    const result = addItem(newItem, data);
    expect(result).toEqual([newItem]);
  });

  it('should not add an item when ID or image is missing', () => {
    const newItemWithoutId = { image: 'https://example.com/image.jpg' };
    const newItemWithoutImage = { id: '4' };
    const data = [];
    const result1 = addItem(newItemWithoutId, data);
    const result2 = addItem(newItemWithoutImage, data);
    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
  });
});
