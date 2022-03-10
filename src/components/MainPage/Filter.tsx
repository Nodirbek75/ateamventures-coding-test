import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// components
import { Dropdown, Switch } from "components/Common";

// lib
import {
  filterMaterials,
  filterMethods,
  resetFilters,
  toggle,
} from "lib/store/slices/filtersSlice";
import { AppState } from "lib/store";

// utils
import { materialsFilterList, methodsFilterList } from "utils";

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

  const toggleHandler = () => {
    dispatch(toggle());
  };

  return (
    <Wrapper>
      <ButtonsWrapper>
        <Dropdown
          label="가공방식"
          options={methodsFilterList}
          checkedOptions={methods}
          onChange={onChangeMethods}
        />
        <Dropdown
          label="재료"
          options={materialsFilterList}
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
        <Switch active={toggleOn} onToggle={toggleHandler} />
        <SwitchText>상담 중인 요청만 보기</SwitchText>
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

const SwitchText = styled.text`
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
