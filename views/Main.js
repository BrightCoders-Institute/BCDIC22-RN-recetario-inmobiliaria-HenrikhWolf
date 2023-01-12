import React from "react";
import { propiedades } from "../bd";
import { PropertiesList } from "../components/PropertiesList";
import { Layout } from "../components/Layout";

export const Main = ({ navigation }) => {
  return (
    <Layout>
      <PropertiesList properties={propiedades} navigation={navigation} />
    </Layout>
  );
};
