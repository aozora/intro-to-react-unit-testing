import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';

/**
 * Test Suite for the SearchForm component
 */
describe('SearchForm', () => {
  it('should render without crashing', () => {
    let result;

    // --------------
    // Arrange
    // --------------
    const props = {};

    // --------------
    // Act
    // --------------
    result = render(<SearchForm {...props} />);

    // --------------
    // Assert
    // --------------
    const { container, getByLabelText, getByRole } = result;
    const comp = container.querySelector('.search');
    expect(comp).toBeInTheDocument();

    const input = getByLabelText('Search an Anime:');
    expect(input).toBeInTheDocument(); // Expect the element to be in the DOM
    expect(input).toHaveValue(''); // expect the element to don't have a value

    const button = getByRole('button', { name: 'Search' });
    expect(button).toBeInTheDocument(); // Expect the element to be in the DOM
  });

  it('the search button should not work if the search input is not filled', () => {
    let result;

    // --------------
    // Arrange
    // --------------
    const searchAnime = jest.fn();

    const props = {
      searchAnime
    };

    // --------------
    // Act
    // --------------
    result = render(<SearchForm {...props} />);
    // screen.debug(); // this will render in the console the rendered component markup

    // --------------
    // Assert
    // --------------
    const { getByRole } = result;

    // click the search button
    const button = getByRole('button', { name: 'Search' });
    userEvent.click(button);

    // why 0 ? because the comp check for input to be valid!
    expect(searchAnime).toHaveBeenCalledTimes(0);
  });

  it('filling the search input, the search button should work and invoke searchAnime function', () => {
    let result;

    // --------------
    // Arrange
    // --------------
    const searchAnime = jest.fn();

    const props = {
      searchAnime
    };

    // --------------
    // Act
    // --------------
    result = render(<SearchForm {...props} />);
    // screen.debug(); // this will render in the console the rendered component markup

    // --------------
    // Assert
    // --------------
    const { getByRole, getByLabelText } = result;

    // Write some text in the input
    const input = getByLabelText('Search an Anime:');
    fireEvent.change(input, { target: { value: 'Naruto' } });
    expect(input).toHaveValue('Naruto'); // expect the element to have the given value

    // click the search button
    const button = getByRole('button', { name: 'Search' });
    userEvent.click(button);

    // expect to have called the searchAnime function
    expect(searchAnime).toHaveBeenCalledTimes(1);
  });
});
