import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// components
import Header from "./Header";
import Filter from "./Filter";
import Body from "./Body";

// lib
import { api } from "lib";
import { AppState } from "lib/store";

interface Filter {
  method?: Array<string>;
  material?: Array<string>;
  status?: string;
}

export const MainPage: React.FC = () => {
  const [data, setData] = useState([]);
  const { methods, materials, toggleOn } = useSelector(
    (state: AppState) => state.filters
  );

  useEffect(() => {
    fetchData({
      material: materials,
      method: methods,
      status: toggleOn ? "상담중" : undefined,
    });
  }, [methods, materials, toggleOn]);

  const fetchData = async (filter?: Filter) => {
    const res = await api.get("/requests", { params: filter });
    if (res.status === 200) {
      setData(res.data);
    }
  };

  return (
    <Wrapper>
      <Header />
      <Filter />
      <Body data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 40px 155px 0 155px;
  border: 1px solid red;
`;
