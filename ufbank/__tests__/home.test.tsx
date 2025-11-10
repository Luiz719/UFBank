import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page"; // Ajuste o caminho se necessário

describe("Home Page", () => {
  it("deve renderizar o texto principal", () => {
    render(<Home />);
    const heading = screen.getByText("Hello World");
    expect(heading).toBeInTheDocument();
  });
});