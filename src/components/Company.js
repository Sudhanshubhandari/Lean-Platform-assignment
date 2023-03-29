import React from "react";
import comapnylogo from "../images/companylogo.png";

const Company = () => {
  return (
    <div className="h-full w-full  ">
      <div className="flex flex-col items-center mt-10">
        <img src={comapnylogo} alt="companylogo" className="h-16 w-14" />
        <br></br>
        <h1 className="font-bold "> COMPANY NAME</h1>
      </div>
      <div className="mx-36 mt-8  text-gray-500 text-base">
        Company discription:
        <br></br>
        years, JPMorgan Chase & Co has provided innovative financial solutions
        for consumers, small businesses, corporations, governments and
        institutions around the world.Today, titutions around the world.Today,
        <br></br>
        we're a leading global financial services firm with operations servicing
        clients years, JPMorgan Chase & Co has provided innovative financial
        solutions for consumers, small businesses, corporations, governments and
        institutions around th
        <br></br>
        vicing clients services firm with operations servicing clients years,
        JPMorgan Chase & Co has provided innovative financial solutions for
        consumers, small businesses
      </div>
      <div className="flex flex-col items-center mt-4">
        <div>
          <h1 className="font-bold ml-9 text-xl">Company details</h1>
          <br></br>
          <ul className=" text-gray-500 text-xl">
           
            website &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; www.abc.com
          </ul>
          <br></br>
          <ul className=" text-gray-500 text-xl">
        
            Industry &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lindsay labahn
          </ul>
          <br></br>
          <ul className=" text-gray-500 text-xl">
           
            company size &nbsp; &nbsp; Lindsay labahn
          </ul>
          <br></br>
          <ul className=" text-gray-500 text-xl">
            
            headquarter &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Lindsay labahn
          </ul>
          <br></br>
          <ul className=" text-gray-500 text-xl">
            
            speciality &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lindsay labahn
          </ul>
          <br></br>
          <ul className=" text-gray-500 text-xl">
            
            opening &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  www.abc.com
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Company;
