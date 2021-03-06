import React from "react";
import { InpDiv, Input } from "../../style";
import { Props } from "./types";

const SetBoxSize = ({ settingState, handleChangeWidth, handleChangeHeight }: Props) => {
  const { width, height } = settingState;
  return (
    <InpDiv>
      <Input placeholder={`가로 (현재: ${width} px)`} onChange={handleChangeWidth} />
      <Input placeholder={`세로 (현재: ${height} px)`} onChange={handleChangeHeight} />
    </InpDiv>
  );
};
export default SetBoxSize;
