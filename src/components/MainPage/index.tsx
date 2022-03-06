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

  const fetchData = async () => {
    const res = await api.get("/requests?method=선반&&method=밀링");
    if (res.status === 200) {
      setData(res.data);
    }
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Header />
        <Filter />
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
