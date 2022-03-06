import { api } from "lib";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Body from "./Body";
import Filter from "./Filter";
import Header from "./Header";

interface Filter {
  method?: Array<string>;
  material?: Array<string>;
  status?: string;
}

export const MainPage: React.FC = () => {
  const [methods, setMethods] = useState<Array<string>>([]);
  const [materials, setMaterials] = useState<Array<string>>([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (filter?: Filter) => {
    const res = await api.get("/requests", { params: filter });
    if (res.status === 200) {
      setData(res.data);
    }
  };

  const toggleHandler = (val: boolean) => {
    if (val) {
      fetchData({ status: "상담중" });
    } else {
      fetchData();
    }
  };

  const onMethodFilter = (val: string, checked: boolean) => {
    let updatedMethods;
    if (checked) {
      updatedMethods = [...methods, val];
    } else {
      updatedMethods = methods.filter((el) => el !== val);
    }
    setMethods(updatedMethods);
    fetchData({ method: updatedMethods, material: materials });
  };

  const onMaterialFilter = (val: string, checked: boolean) => {
    let updatedMaterials;
    if (checked) {
      updatedMaterials = [...materials, val];
    } else {
      updatedMaterials = materials.filter((el) => el !== val);
    }
    setMaterials(updatedMaterials);
    fetchData({ material: updatedMaterials, method: methods });
  };

  return (
    <Wrapper>
      <Header />
      <Filter
        onMethodChange={onMethodFilter}
        onMaterialChange={onMaterialFilter}
        toggleHandler={toggleHandler}
      />
      <Body data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 40px 155px 0 155px;
  border: 1px solid red;
`;
