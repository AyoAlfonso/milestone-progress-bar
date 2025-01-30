import React, { FC, useMemo } from "react";
import styled from "styled-components";

/**
 * Type for each milestone status category.
 * - `count` - how many items fall under this status
 * - `color` - the color representing this status
 */
export interface IMilestoneStatus {
  count: number;
  color: string;
  /** Optional label or name of the status; not mandatory for the gradient itself */
  label?: string;
}

/**
 * Props for MilestoneProgressBar
 * 
 * @param statuses    An array of IMilestoneStatus containing count & color
 * @param height      Height of the gradient bar (default 4px)
 * @param showCounts  Whether to display the count text above the bar
 * @param style       Optional style overrides
 * @param className   Optional className for container
 */
export interface MilestoneProgressBarProps {
  statuses: IMilestoneStatus[];
  height?: string;
  showCounts?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * A component to visualize milestones as a color-coded gradient bar.
 * - For example, completed (green), in-progress (yellow), incomplete (red), etc.
 * - The gradient is calculated based on the proportion of each status count to the total.
 */
export const MilestoneProgressBar: FC<MilestoneProgressBarProps> = ({
  statuses,
  height = "4px",
  showCounts = true,
  style,
  className,
}) => {
  /**
   * Compute the total count and create the gradient stops.
   */
  const { totalCount, gradientString } = useMemo(() => {
    // 1. Calculate total items
    const total = statuses.reduce((acc, s) => acc + s.count, 0);

    // Edge case: if total = 0, fallback to a single color or a default style
    if (total === 0) {
      return {
        totalCount: 0,
        gradientString: "to right, #ccc 0%, #ccc 100%",
      };
    }

    // 2. Construct the gradient stops
    let cumulativePercentage = 0;
    const stops: string[] = [];

    statuses.forEach((status) => {
      if (status.count === 0) return; // no segment if count is 0

      const percentage = (status.count / total) * 100;
      const start = cumulativePercentage;
      const end = cumulativePercentage + percentage;
      stops.push(`${status.color} ${start}%, ${status.color} ${end}%`);
      cumulativePercentage += percentage;
    });

    const gradient = `to right, ${stops.join(", ")}`;
    return {
      totalCount: total,
      gradientString: gradient,
    };
  }, [statuses]);

  // Renders the count for each color segment (optional)
  const renderCounts = () => {
    if (totalCount === 0) {
      return (
        <CountContainer>
          <Count style={{ color: "#999" }}>0</Count>
        </CountContainer>
      );
    }

    // For each status, we place its count in the approximate midpoint
    let cumulativePercentage = 0;

    return statuses.map((status, idx) => {
      if (status.count === 0) return null;

      const percentage = (status.count / totalCount) * 100;
      const midpoint = cumulativePercentage + percentage / 2; // midpoint for the text
      cumulativePercentage += percentage;

      return (
        <CountContainer key={idx} style={{ left: `${midpoint}%` }}>
          <Count style={{ color: status.color }}>{status.count}</Count>
        </CountContainer>
      );
    });
  };

  return (
    <Wrapper style={style} className={className}>
      {showCounts && renderCounts()}
      <GradientBar height={height} gradient={gradientString} />
    </Wrapper>
  );
};

// ----------------------
// Styled Components
// ----------------------

const Wrapper = styled.div`
  position: relative;
  width: 100%; /* Can be overridden via styled or parent container */
`;

interface GradientBarProps {
  height: string;
  gradient: string;
}

const GradientBar = styled.div<GradientBarProps>`
  height: ${(props) => props.height};
  width: 100%;
  background: linear-gradient(${(props) => props.gradient});
  border-radius: 2px;
`;

const CountContainer = styled.div`
  position: absolute;
  top: -20px; /* Adjust as needed */
  transform: translateX(-50%);
`;

const Count = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
`;
