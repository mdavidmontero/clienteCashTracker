"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="flex justify-center items-center p-10">
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: percentage >= 100 ? "#DC2626" : "#F59E0B",
          trailColor: "#e1e1e1",
          textColor: percentage >= 100 ? "#DC2626" : "#F59E0B",
          textSize: 8,
        })}
        text={`${percentage.toFixed(2)}%`}
      />
    </div>
  );
}
