import React from "react";
import Navbar from "../components/Navbar";

const Map = () => {
  const stores = [
    {
      name: "Store A",
      location: [0, 0],
      description: "This is Store A",
      hours: "9:00am - 5:00pm",
    },
    {
      name: "Store B",
      location: [0, 1],
      description: "This is Store B",
      hours: "10:00am - 6:00pm",
    },
    {
      name: "Store C",
      location: [2, 0],
      description: "This is Store C",
      hours: "11:00am - 7:00pm",
    },
    {
      name: "Store D",
      location: [2, 1],
      description: "This is Store A",
      hours: "9:00am - 5:00pm",
    },
    {
      name: "Store E",
      location: [3, 0],
      description: "This is Store B",
      hours: "10:00am - 6:00pm",
    },
    {
      name: "Store F",
      location: [3, 1],
      description: "This is Store C",
      hours: "11:00am - 7:00pm",
    },
    {
      name: "Store G",
      location: [5, 0],
      description: "This is Store A",
      hours: "9:00am - 5:00pm",
    },
    {
      name: "Store H",
      location: [5, 1],
      description: "This is Store B",
      hours: "10:00am - 6:00pm",
    },
    {
      name: "Store I",
      location: [5, 2],
      description: "This is Store C",
      hours: "11:00am - 7:00pm",
    },
    {
      name: "Store J",
      location: [0, 2],
      description: "This is Store C",
      hours: "11:00am - 7:00pm",
    },
    {
      name: "Elevator",
      location: [2, 3],
      description: "",
      hours: "",
    },
    {
      name: "Elevator",
      location: [3, 3],
      description: "",
      hours: "",
    },
    // Add more stores here
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="sticky top-0 w-1/6">
          <Navbar />
        </div>
        <div className="w-2/3 p-8">
          <h1 className="text-4xl font-bold mb-8">Map</h1>
          <div className="grid grid-cols-6 gap-4 p-5 border-2 border-gray rounded">
            {stores.map((store) => (
              <div
                key={store.name}
                className="bg-white p-4 rounded-md shadow-md"
                style={{
                  gridColumn: store.location[0] + 1,
                  gridRow: store.location[1] + 1,
                }}
              >
                <h2 className="text-xl text-center font-bold mb-2">
                  {store.name}
                </h2>
                <p className="text-gray-700 text-center mb-4">
                  {store.description}
                </p>
                <p className="text-gray-700 text-center mb-4">{store.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
