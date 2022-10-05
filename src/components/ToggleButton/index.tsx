import React, { FC } from "react";

interface Props {
  toggleOn: boolean;
  toggleHandler: Function;
}

const ToggleButton: FC<Props> = ({ toggleOn, toggleHandler }) => {
  return (
    <div
      onClick={toggleHandler()}
      className={`relative w-32 h-10 ${
        toggleOn ? "bg-light-purple" : "bg-gray"
      } rounded-full`}
    >
      <div
        className={`${
          toggleOn ? "right-0 bg-blue-sky" : "left-0 bg-gray"
        }  rounded-full h-full absolute dropShadow-sm`}
      />
    </div>
  );
};

export default ToggleButton;
