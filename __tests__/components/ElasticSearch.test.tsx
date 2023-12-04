import React from 'react'
import { ElasticSearch } from '../../src/components/ElasticSearch'

import { render, fireEvent, waitFor } from '@testing-library/react'

const mockOnSearchResult = jest.fn()

jest.mock('@/constants/banks', () => ({
  banks: [{ name: 'Bank A' }, { name: 'Bank B' }, { name: 'Bank C' }],
}))

describe('ElasticSearch component', () => {
  test('renders without errors', () => {
    render(<ElasticSearch onSearchResult={mockOnSearchResult} />)
  })

  test('clears results when onClear is called', async () => {
    const { getByTestId, queryByTestId } = render(
      <ElasticSearch onSearchResult={mockOnSearchResult} />
    )

    const inputElement = getByTestId('elastic-input') as HTMLInputElement
    fireEvent.change(inputElement, {
      target: { value: 'test' },
    })

    fireEvent.click(getByTestId('clear-button'))

    await waitFor(() => {
      expect(inputElement.value).toBe('')
      expect(queryByTestId('result-0')).toBeNull()
    })
  })

  test('performs search and selects a result', async () => {
    const onSearchResultMock = jest.fn()
    const { getByPlaceholderText, getByText } = render(
      <ElasticSearch onSearchResult={onSearchResultMock} />
    )

    const searchInput = getByPlaceholderText('Type to search...')
    fireEvent.change(searchInput, { target: { value: 'Bank' } })

    await waitFor(() => getByText('Bank A'))

    fireEvent.click(getByText('Bank A'))

    expect(onSearchResultMock).toHaveBeenCalledWith('Bank A')
  })

  test('clears the search input and results', async () => {
    const onSearchResultMock = jest.fn()
    const { getByPlaceholderText, getByText } = render(
      <ElasticSearch onSearchResult={onSearchResultMock} />
    )

    const searchInput = getByPlaceholderText(
      'Type to search...'
    ) as HTMLInputElement
    fireEvent.change(searchInput, { target: { value: 'Bank' } })

    await waitFor(() => getByText('Bank A'))

    fireEvent.click(getByText('x'))

    expect(searchInput.value).toBe('')

    expect(onSearchResultMock).toHaveBeenCalledWith('')
  })
})
