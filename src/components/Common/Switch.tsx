import React from "react";
import styled from "styled-components";

interface Props {
  active: boolean;
  onToggle: () => void;
}

export const Switch: React.FC<Props> = ({ active, onToggle }) => {
  return (
    <>
      <SwitchInput
        id={"switch"}
        type="checkbox"
        checked={active}
        onChange={onToggle}
      />
      <SwitchLabel htmlFor={"switch"} active={active}>
        <SwitchButton />
      </SwitchLabel>
    </>
  );
};

export default Switch;

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 34px;
  height: 14px;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.secondaryColor
      : props.theme.colors.borderColor};
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  left: -3px;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  transition: 0.2s;
  background: ${(props) => props.theme.colors.lightGray};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% + 3px);
    transform: translateX(-100%);
    background-color: #1565c0;
  }
  ${SwitchLabel}:active & {
    width: 25px;
  }
`;
