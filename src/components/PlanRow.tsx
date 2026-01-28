import type { ReactNode } from "react";
import { useLongPress } from "../hooks/useLongPress";

interface PlanRowProps {
  label: ReactNode;
  details: ReactNode;
  isSelected: boolean;
  onLongPress: () => void;
  baseClass: string;
}

export const PlanRow = ({
  label,
  details,
  isSelected,
  onLongPress,
  baseClass,
}: PlanRowProps) => {
  const { onMouseDown, onMouseUp, onMouseLeave, onTouchStart, onTouchEnd } =
    useLongPress({
      onLongPress,
      threshold: 500, // 500ms for long press
    });

  return (
    <tr
      className={`${baseClass} clickable-row ${isSelected ? "selected-row" : ""}`}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <td className="label">{label}</td>
      <td>{details}</td>
    </tr>
  );
};
