import React, { useState, ChangeEvent, useEffect } from "react";

interface RangeComponentProps {
  min: number;
  max: number;
  step: number;
  dual?: boolean;
  valueA: number;
  valueB: number;
  setValueA: (value: number) => void;
  setValueB: (value: number) => void;
  onRangeChange: (valueA: number, valueB: number) => void;
}

const RangeComponent: React.FC<RangeComponentProps> = ({
  min,
  max,
  step,
  dual = false,
  valueA,
  valueB,
  setValueA,
  setValueB,
  onRangeChange,
}) => {
  const handleChangeA = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValueA(newValue);
  };

  const handleChangeB = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValueB(newValue);
  };

  useEffect(() => {
    onRangeChange(valueA, valueB);
  }, [valueA, valueB]);

  const start = Math.min(valueA, valueB);
  const diff = Math.abs(valueA - valueB);

  const thumbOffset = 12; // 12px on each side for padding
  const totalWidth = 210 - thumbOffset * 2;
  const thumbWidth = 24; // Thumb width

  return (
    <div className="inline-block">
      <div className="flex text-[#1C5356] font-semibold text-sm">
        {dual
          ? `₹${Math.min(valueA, valueB)} - ₹${Math.max(valueA, valueB)}`
          : valueA}
      </div>
      <div className="range-container">
        <div className="range-track"></div>
        <div
          className="range-progress"
          style={{
            left: `${thumbOffset + (start / max) * totalWidth}px`,
            width: `${(diff / max) * totalWidth}px`,
          }}
        ></div>
        <div
          className="range-thumb"
          style={{
            left: `${(valueA / max) * totalWidth}px`,
          }}
        >
          <div className="range-thumb-inner">
            <div className="range-thumb-inner-circle"></div>
          </div>
        </div>
        {dual && (
          <div
            className="range-thumb"
            style={{
              left: `${(valueB / max) * totalWidth}px`,
            }}
          >
            <div className="range-thumb-inner">
              <div className="range-thumb-inner-circle"></div>
            </div>
          </div>
        )}
        <input
          type="range"
          id="rangeInputA"
          name="rangeInputA"
          min={min}
          max={max}
          step={step}
          value={valueA}
          onChange={handleChangeA}
        />
        {dual && (
          <input
            type="range"
            id="rangeInputB"
            name="rangeInputB"
            min={min}
            max={max}
            step={step}
            value={valueB}
            onChange={handleChangeB}
          />
        )}
      </div>
    </div>
  );
};

export default RangeComponent;
