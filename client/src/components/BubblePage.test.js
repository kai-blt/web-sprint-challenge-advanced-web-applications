import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

//Set up mock API call by importing getColors as mock
import { getColors as mockGetColors } from '../api/getColors';
jest.mock('../api/getColors');


const mockData = [
  {
    color: 'red',
    code: {hex: '#fff'},
    id: 1
  }
]

test("Fetches data and renders the bubbles", async () => {
  mockGetColors.mockResolvedValueOnce(mockData);

  render(<BubblePage />)

  await waitFor(() => {
    const color = screen.queryByText(/red/i);
    screen.debug();
  })
});
