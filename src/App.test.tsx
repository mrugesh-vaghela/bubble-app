import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders bubbles and swap should work', async () => {
  render(<App />);  
  expect(screen.getByTestId('test-1-true')).toBeInTheDocument();
  expect(screen.getByTestId('test-2-true')).toBeInTheDocument();
  expect(screen.getByTestId('test-3-true')).toBeInTheDocument();
  expect(screen.getByTestId('test-4-true')).toBeInTheDocument();
  expect(screen.getByTestId('test-5-true')).toBeInTheDocument();

  //swap one bubble
  const bubbleTable = screen.getByTestId('bubble-table');
  expect(bubbleTable.childElementCount).toBe(0);
  const inputElement = screen.getByTestId('bubble-number');  
  fireEvent.change(inputElement, { target: { value: "1" } });
  const swapButton = screen.getByTestId('swap-button');      
  fireEvent.click(swapButton);    
  await waitFor(() => {    
    expect(bubbleTable.childElementCount).toBe(1);
  });
  
  //reset for and then table should be clear
  const resetButton = screen.getByTestId('reset-button');      
  fireEvent.click(resetButton);    
  await waitFor(() => {    
    expect(bubbleTable.childElementCount).toBe(0);
  });
});


