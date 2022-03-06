import { api } from "lib";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Header from "./Header";

export const MainPage: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await api.get("/requests");
    if (res.status === 200) {
      setData(res.data);
    }
  };

  return (
    <Wrapper>
      <Header />
      <Filter />
      {/* {data.map((item: any) => (
        <SingleItem>{item.title}</SingleItem>
      ))} */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 155px;
  margin-right: 155px;
  margin-top: 40px;
`;

const SingleItem = styled.div`
  margin-left: 40px;
`;
