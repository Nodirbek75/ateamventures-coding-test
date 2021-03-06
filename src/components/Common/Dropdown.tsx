import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  label: string;
  options: Array<string>;
  checkedOptions: Array<string>;
  onChange: (val: string, checked: boolean) => void;
}

export const Dropdown: React.FC<Props> = ({
  label,
  options,
  checkedOptions,
  onChange,
}) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (event: any) => {
    if (!dropDownRef.current?.contains(event.target)) {
      setActive(false);
    }
  };

  return (
    <Button onClick={() => setActive(true)} active={checkedOptions.length > 0}>
      {label}
      {checkedOptions.length > 0 && `(${checkedOptions.length})`}
      <Icon
        src={
          checkedOptions.length > 0
            ? "assets/arrow_drop_down_white.svg"
            : "assets/arrow_drop_down.svg"
        }
      />
      <DropdownComp active={active} ref={dropDownRef}>
        {options.map((item) => (
          <CheckboxWrapper key={item}>
            <Checkbox
              type="checkbox"
              id={item}
              name={item}
              checked={checkedOptions.includes(item)}
              onChange={(val) => onChange(val.target.name, val.target.checked)}
            />
            <Label>{item}</Label>
          </CheckboxWrapper>
        ))}
      </DropdownComp>
    </Button>
  );
};

const Button = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  padding: 9px 12px;
  margin-right: 8px;
  font-size: 12px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.primaryColor : props.theme.colors.white};
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.textColor};
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.colors.secondaryColor};
  }
`;

const DropdownComp = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  position: absolute;
  top: 30px;
  z-index: 1;
  width: 130px;
  flex-direction: column;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.white};
`;

const Icon = styled.img`
  margin-left: 12px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.colors.textColor};
`;
