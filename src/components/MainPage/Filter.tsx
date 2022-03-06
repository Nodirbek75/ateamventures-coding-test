import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

// components
import { Dropdown } from "components/Common";

const methods = ["밀링", "선반"];
const materials = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

interface Props {
  onMethodChange: (val: string, checked: boolean) => void;
  onMaterialChange: (val: string, checked: boolean) => void;
  toggleHandler: (val: boolean) => void;
}

const Filter: React.FC<Props> = ({
  onMethodChange,
  onMaterialChange,
  toggleHandler,
}) => {
  const [checked, setChecked] = useState(false);

  const onChangeHandler = () => {
    setChecked(!checked);
    toggleHandler(!checked);
  };

  return (
    <Wrapper>
      <ButtonsWrapper>
        <Dropdown
          label="가공방식"
          options={methods}
          onChange={onMethodChange}
        />
        <Dropdown
          label="재료"
          options={materials}
          onChange={onMaterialChange}
        />
        <Button>
          <Icon src="assets/refresh.svg" /> 필터링 리셋
        </Button>
      </ButtonsWrapper>
      <SwitchWrapper>
        <Switch
          checked={checked}
          onChange={onChangeHandler}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
        <Text>상담 중인 요청만 보기</Text>
      </SwitchWrapper>
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 32px 8px;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.text`
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.textColor};
  margin-left: 16px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-width: 0;
  background-color: transparent;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondaryColor};
  margin-left: 16px;
  cursor: pointer;
`;

const Icon = styled.img`
  margin-right: 12px;
`;
