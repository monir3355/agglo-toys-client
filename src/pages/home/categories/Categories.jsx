import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CarCards from "./CarCards";

const Categories = () => {
  const [subCategories, setSubCategories] = useState([]);
  // console.log(subCategories);
  useEffect(() => {
    fetch("https://agglo-toys-server.vercel.app/categoryToys/Sports Car")
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, []);
  const handleCategory = (category) => {
    // console.log(category);
    fetch(`https://agglo-toys-server.vercel.app/categoryToys/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setSubCategories(data);
      });
  };
  return (
    <div className="my-16">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8 text-blue-950">
        Shop By Categories
      </h2>
      <div>
        <Tabs className="text-center">
          <TabList>
            <Tab onClick={() => handleCategory("Sports Car")}>Sports Car</Tab>
            <Tab onClick={() => handleCategory("Trucks")}>Trucks</Tab>
            <Tab onClick={() => handleCategory("Regular Car")}>Regular Car</Tab>
            <Tab onClick={() => handleCategory("Mini Fire Trucks")}>
              Mini Fire Trucks
            </Tab>
            <Tab onClick={() => handleCategory("Mini Police Car")}>
              Mini Police Car
            </Tab>
          </TabList>

          <TabPanel className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subCategories?.map((category) => (
                <CarCards key={category._id} category={category}>
                  Sports Car
                </CarCards>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subCategories?.map((category) => (
                <CarCards key={category._id} category={category}>
                  Trucks
                </CarCards>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subCategories?.map((category) => (
                <CarCards key={category._id} category={category}>
                  Regular Car
                </CarCards>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subCategories?.map((category) => (
                <CarCards key={category._id} category={category}>
                  Mini Fire Trucks
                </CarCards>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subCategories?.map((category) => (
                <CarCards key={category._id} category={category}>
                  Mini Police Car
                </CarCards>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
