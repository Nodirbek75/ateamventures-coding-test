import { api } from "lib";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Body from "./Body";
import Filter from "./Filter";
import Header from "./Header";

export const MainPage: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (filter?: string) => {
    const res = await api.get("/requests?" + filter);
    if (res.status === 200) {
      setData(res.data);
    }
  };

  const toggleHandler = (val: boolean) => {
    if (val) {
      fetchData("status=상담중");
    } else {
      fetchData();
    }
  };

  return (
    <Wrapper>
      <Header />
      <Filter toggleHandler={toggleHandler} />
      <Body data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 40px 155px 0 155px;
  border: 1px solid red;
`;
