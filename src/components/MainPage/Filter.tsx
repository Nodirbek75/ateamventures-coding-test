import React from "react";
import styled from "styled-components";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";

// components
import { Dropdown } from "components/Common";

// lib
import {
  filterMaterials,
  filterMethods,
  resetFilters,
  toggle,
} from "lib/store/slices/filtersSlice";
import { AppState } from "lib/store";

const methodsList = ["밀링", "선반"];
const materialsList = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const { methods, materials, toggleOn } = useSelector(
    (state: AppState) => state.filters
  );

  const onChangeMethods = (val: string, checked: boolean) => {
    dispatch(filterMethods({ val, checked }));
  };

  const onChangeMaterials = (val: string, checked: boolean) => {
    dispatch(filterMaterials({ val, checked }));
  };

  const onResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <Wrapper>
      <ButtonsWrapper>
        <Dropdown
          label="가공방식"
          options={methodsList}
          checkedOptions={methods}
          onChange={onChangeMethods}
        />
        <Dropdown
          label="재료"
          options={materialsList}
          checkedOptions={materials}
          onChange={onChangeMaterials}
        />
        {(methods.length > 0 || materials.length > 0) && (
          <Button onClick={onResetFilters}>
            <Icon src="assets/refresh.svg" /> 필터링 리셋
          </Button>
        )}
      </ButtonsWrapper>
      <SwitchWrapper>
        <Switch
          checked={toggleOn}
          onChange={(on) => dispatch(toggle(on))}
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
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 425px) {
    margin-bottom: 20px;
  }
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
