import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Categories = () => {
  return (
    <div className="my-16">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8 text-blue-950">
        Shop By Categories
      </h2>
      <div>
        <Tabs className="text-center">
          <TabList>
            <Tab>Sports Car</Tab>
            <Tab>Trucks</Tab>
            <Tab>Regular Car</Tab>
            <Tab>Mini Fire Trucks</Tab>
            <Tab>Mini Police Car</Tab>
          </TabList>

          <TabPanel>
            <h2>Sports Car</h2>
          </TabPanel>
          <TabPanel>
            <h2>Trucks</h2>
          </TabPanel>
          <TabPanel>
            <h2>Regular Car</h2>
          </TabPanel>
          <TabPanel>
            <h2>Mini Fire Trucks</h2>
          </TabPanel>
          <TabPanel>
            <h2>Mini Police Car</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
