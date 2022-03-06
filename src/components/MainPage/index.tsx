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
      <InnerWrapper>
        <Header />
        <Filter toggleHandler={toggleHandler} />
        <Body data={data} />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  margin-top: 40px;
  border: 1px solid red;
`;
