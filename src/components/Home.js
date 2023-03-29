import React from "react";
import img from "../images/profilepic.png";
import quote from "../images/Quote.png";
import educationdata from "../info/Homedata/educationdata";
import projectdata from "../info/Homedata/projectdata";

const Home = () => {
  const Projectdata = projectdata.map((item, index) =>
    <li key={index}>{item}</li>
  );
  const Educationdata = educationdata.map((item, index) =>
    <li key={index}>{item}</li>
  );
    
    
  return (
    <div className="h-screen w-full flex text-center pl-20 ">
      <div className=" w-2/6  flex flex-col  justify-evenly p-8">
        <img
          src={img}
          alt="profilepic"
          className="h-1/4 w-2/5 ml-auto mr-auto "
        />

        <div className="flex-col text-start items-center ml-5">
          <span className="text-slate-500 text-start ">Name</span>
          <br></br>
        <h1 className="font-bold">  Fabial levy</h1>
        </div>
        <div className="flex-col text-start ml-5 ">
          <span className="text-slate-500">age</span>
          <br></br>
          <h1 className="font-bold"> 40</h1>

        </div>
        <div className="flex-col text-start ml-5 ">
          <span className="text-slate-500">education</span>
          <br></br>
          <h1 className="font-bold"> stephens</h1>

        </div>
        <div className="flex-col text-start ml-5 ">
          <span className="text-slate-500">Skills</span>
          <br></br>
          <h1 className="font-bold"> Reactjs others</h1>

        </div>
        <div className=" flex flex-col  ">
          <img src={quote} alt="quote" className="w-3.3/4 mt-3" />
        </div>
      </div>

      {/*********Right view of the page**************/}

      <div className=" w-4/6 pl-10 pr-36 pt-10 text-start box-border mr-10 text-sm leading-6">
        <div className="bg-gray-100  p-4 pr-10 ">
          <div>
            <h1 className="font-semibold">About me</h1>A paragraph is defined as
            “a group of sentences or e do not determine whether a section in a
            aper is a paragraph. For instance, in some styles of writing,
            particularly journalistic styles, a paragraph can be just one
            sentence long. A paragraph is defined as “a group of
            a section in a paper is a paragraph. Fo be just
            one sentence long.
            <br></br>
            <br></br>
            <h1 className="font-semibold">Goal</h1>A paragraph is defined as
            “a group of sentences or e do not determine whether a section in a
            paper is a paragraph. For  sentences of sentences o
          </div>
        </div>
        <div className="box-border p-4">
          <div className="">
            <h1 className="font-semibold">Education</h1>
            {Educationdata}
            <br></br>
            <h1 className="font-semibold">Work Experience</h1>
            <ul> built muscle and gain mass</ul>
            <br></br>
            <h1 className="font-semibold">Projects</h1>  
              {Projectdata}
      <br></br>
      <h1 className="font-semibold">Skills and others</h1>A paragraph is defined as
            “a group of sentences or e do not determine whether a section in a
            paper is a paragraph.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
