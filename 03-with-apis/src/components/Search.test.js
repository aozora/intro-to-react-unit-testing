import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';

describe('SearchForm', () => {
  // reset the fetch mock for every run
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should render without crashing', () => {
    let result;

    // --------------
    // Arrange
    // --------------

    // --------------
    // Act
    // --------------
    result = render(<Search />);

    // --------------
    // Assert
    // --------------
    const { getByTestId } = result;
    const comp = getByTestId('search');
    expect(comp).toBeInTheDocument();
  });

  it('should call the API when input is filled and button pressed', async () => {
    let result;

    // --------------
    // Arrange
    // --------------
    fetch.mockResponseOnce(
      JSON.stringify({
        results: [
          {
            mal_id: 20,
            url: 'https://myanimelist.net/anime/20/Naruto',
            image_url: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6',
            title: 'Naruto'
          }
        ]
      })
    );

    // --------------
    // Act
    // --------------
    result = render(<Search />);

    // --------------
    // Assert
    // --------------
    const { getByLabelText, getByRole, findAllByTestId } = result;

    // Write some text in the input
    const input = getByLabelText('Search an Anime:');
    fireEvent.change(input, { target: { value: 'Naruto' } });
    expect(input).toHaveValue('Naruto'); // expect the element to have the given value

    // click the search button
    const button = getByRole('button', { name: 'Search' });
    userEvent.click(button);

    const cards = await findAllByTestId('card0');

    // I expect to find 1 exact item
    expect(cards.length).toBe(1);
  });
});
