import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('search form could be used', async () =>{
    render(<App></App>)
    const input = await screen.findByRole('textbox')
    const button = await screen.findByRole('button')

    fireEvent.change(input, { target: { value: 'Blackpink' } })
    fireEvent.click(button)

    const title = await screen.findByText('Blackpink')
    expect(button).toBeVisible()
})

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Last Search/i);
  expect(linkElement).toBeInTheDocument();
});