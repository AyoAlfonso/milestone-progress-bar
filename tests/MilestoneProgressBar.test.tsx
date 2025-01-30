import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MilestoneProgressBar } from "../src/components/MilestoneProgressBar";

describe("MilestoneProgressBar component", () => {
  it("renders the correct total counts", () => {
    const statuses = [
      { count: 5, color: "green", label: "Completed" },
      { count: 3, color: "yellow", label: "In Progress" },
      { count: 2, color: "red", label: "Incomplete" },
    ];

    render(<MilestoneProgressBar statuses={statuses} showCounts={true} />);
    // We expect to find the counts on the screen:
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("handles empty statuses gracefully", () => {
    const { container } = render(
      <MilestoneProgressBar statuses={[]} showCounts={true} />
    );
    // Typically it might display "0" or show empty
    // If you want to test that logic specifically, you can:
    expect(container.textContent).toContain("0");
  });
});
