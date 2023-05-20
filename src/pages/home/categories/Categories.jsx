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
    <div className="my-20">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8 text-blue-950">
        Shop By Categories
      </h2>
      <div>
        <Tabs className="text-center">
          <TabList className="flex flex-wrap justify-center gap-2">
            <Tab
              className="bg-blue-600 py-2 px-4 rounded-lg text-white cursor-pointer border"
              onClick={() => handleCategory("Sports Car")}
            >
              Sports Car
            </Tab>
            <Tab
              className="bg-blue-600 py-2 px-4 rounded-lg text-white cursor-pointer border"
              onClick={() => handleCategory("Trucks")}
            >
              Trucks
            </Tab>
            <Tab
              className="bg-blue-600 py-2 px-4 rounded-lg text-white cursor-pointer border"
              onClick={() => handleCategory("Regular Car")}
            >
              Regular Car
            </Tab>
            <Tab
              className="bg-blue-600 py-2 px-4 rounded-lg text-white cursor-pointer border"
              onClick={() => handleCategory("Mini Fire Trucks")}
            >
              Mini Fire Trucks
            </Tab>
            <Tab
              className="bg-blue-600 py-2 px-4 rounded-lg text-white cursor-pointer border"
              onClick={() => handleCategory("Mini Police Car")}
            >
              Mini Police Car
            </Tab>
          </TabList>

          <TabPanel className="mt-6">
            <div className="divider my-10">
              <h4 className="text-center font-semibold text-blue-950 text-xl">
                Sports Car
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {subCategories?.map((category) => (
                <CarCards key={category._id} category={category}></CarCards>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="mt-6">
            <div className="divider my-10">
              <h4 className="text-center font-semibold text-blue-950 text-xl">
                Trucks
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subCategories?.map((category) => (
                <CarCards key={category._id} category={category}></CarCards>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="mt-6">
            <div className="divider my-10">
              <h4 className="text-center font-semibold text-blue-950 text-xl">
                Regular Car
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subCategories?.map((category) => (
                <CarCards key={category._id} category={category}></CarCards>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="mt-6">
            <div className="divider my-10">
              <h4 className="text-center font-semibold text-blue-950 text-xl">
                Mini Fire Trucks
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subCategories?.map((category) => (
                <CarCards key={category._id} category={category}></CarCards>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="mt-6">
            <div className="divider my-10">
              <h4 className="text-center font-semibold text-blue-950 text-xl">
                Mini Police Car
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subCategories?.map((category) => (
                <CarCards key={category._id} category={category}></CarCards>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
