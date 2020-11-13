import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

//Set up mock API call by importing getColors as mock
import { getColors as mockGetColors } from '../api/getColors';
jest.mock('../api/getColors');

//Set up mock respose payload
const mockData = {
  data: [
    {
      color: 'red',
      code: {hex: '#FF0000'},
      id: 1
    },
    {
      color: 'green',
      code: {hex: '#00FF00'},
      id: 2
    },
    {
      color: 'blue',
      code: {hex: '#0000FF'},
      id: 3
    },
  ],
};

test("Fetches data and renders the bubbles", async () => {
  //Resolve the call once so Bubble Page has data to render
  mockGetColors.mockResolvedValueOnce(mockData);

  //Render bubble page
  render(<BubblePage />)

  await waitFor(() => {
    //capture bubbles from the DOM
    const redBubble = screen.queryByText(/red/i);
    const greenBubble = screen.queryByText(/green/i);
    const blueBubble = screen.queryByText(/blue/i);

    //Assert they exist!
    expect(redBubble).toBeInTheDocument();
    expect(greenBubble).toBeInTheDocument();
    expect(blueBubble).toBeInTheDocument();
    
    //Check out human readable prinout of DOM
    screen.debug();
  })
});
