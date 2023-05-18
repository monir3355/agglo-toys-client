import React from "react";
import { Link } from "react-router-dom";
import car1 from "../../assets/car-gallery/car1.jpg";
import car2 from "../../assets/car-gallery/car2.jpg";
import car3 from "../../assets/car-gallery/car3.jpg";
import car4 from "../../assets/car-gallery/car4.jpg";
import car5 from "../../assets/car-gallery/car5.jpg";
import car6 from "../../assets/car-gallery/car6.jpg";
import car7 from "../../assets/car-gallery/car7.jpg";
import car8 from "../../assets/car-gallery/car8.png";
import car9 from "../../assets/car-gallery/car9.jpeg";

const Gallery = () => {
  return (
    <div className="my-16">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8 text-blue-950">
        Agglo Toys Galleries
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link
          className="border rounded-lg py-3 relative transform duration-200 hover:-translate-y-2"
          to="/allToys"
        >
          <img className="h-40 w-40 mx-auto" src={car1} alt="gallery-1" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-600 rounded-md opacity-0 hover:opacity-75 text-white transition-opacity duration-200">
            <h5 className="text-white font-semibold text-xl">Toy Cars</h5>
          </div>
        </Link>
        <Link
          className="border rounded-lg py-3 relative transform duration-200 hover:-translate-y-2"
          to="/allToys"
        >
          <img className="h-40 w-40 mx-auto" src={car7} alt="gallery-1" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-600 rounded-md opacity-0 hover:opacity-75 text-white transition-opacity duration-200">
            <h5 className="text-white font-semibold text-xl">Toy Cars</h5>
          </div>
        </Link>
        <Link
          className="border rounded-lg py-3 relative transform duration-200 hover:-translate-y-2"
          to="/allToys"
        >
          <img className="h-40 w-40 mx-auto" src={car3} alt="gallery-1" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-600 rounded-md opacity-0 hover:opacity-75 text-white transition-opacity duration-200">
            <h5 className="text-white font-semibold text-xl">Toy Cars</h5>
          </div>
        </Link>
        <Link
          className="border rounded-lg py-3 relative transform duration-200 hover:-translate-y-2"
          to="/allToys"
        >
          <img className="h-40 w-40 mx-auto" src={car4} alt="gallery-1" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-600 rounded-md opacity-0 hover:opacity-75 text-white transition-opacity duration-200">
            <h5 className="text-white font-semibold text-xl">Toy Cars</h5>
          </div>
        </Link>
        <Link
          className="border rounded-lg py-3 relative transform duration-200 hover:-translate-y-2"
          to="/allToys"
        >
          <img className="h-40 w-40 mx-auto" src={car5} alt="gallery-1" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-600 rounded-md opacity-0 hover:opacity-75 text-white transition-opacity duration-200">
            <h5 className="text-white font-semibold text-xl">Toy Cars</h5>
          </div>
        </Link>
        <Link
          className="border rounded-lg py-3 relative transform duration-200 hover:-translate-y-2"
          to="/allToys"
        >
          <img className="h-40 w-40 mx-auto" src={car4} alt="gallery-1" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-600 rounded-md opacity-0 hover:opacity-75 text-white transition-opacity duration-200">
            <h5 className="text-white font-semibold text-xl">Toy Cars</h5>
          </div>
        </Link>
        <Link
          className="border rounded-lg py-3 relative transform duration-200 hover:-translate-y-2"
          to="/allToys"
        >
          <img className="h-40 w-40 mx-auto" src={car7} alt="gallery-1" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-600 rounded-md opacity-0 hover:opacity-75 text-white transition-opacity duration-200">
            <h5 className="text-white font-semibold text-xl">Toy Cars</h5>
          </div>
        </Link>
        <Link
          className="border rounded-lg py-3 relative transform duration-200 hover:-translate-y-2"
          to="/allToys"
        >
          <img className="h-40 w-40 mx-auto" src={car8} alt="gallery-1" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-600 rounded-md opacity-0 hover:opacity-75 text-white transition-opacity duration-200">
            <h5 className="text-white font-semibold text-xl">Toy Cars</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
