import React from "react";
import { render } from "@testing-library/react";
import { SwitchSelector, Footer, EventCard } from "Components";

describe("SwitchSelector Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <SwitchSelector
        labelLeft="Light"
        labelRight="Dark"
        onChange={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Footer Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Footer />);

    // Compare the rendered output to the saved snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});
