import React from "react";
import larvelrequirement from "../info/jobinfo/larvelrequirementinfo.";
import Responsibilities from "../info/jobinfo/Responsibility";

const Jobportal = () => {
  const responsibilities = Responsibilities.map((item, index) =>
    <li key={index}>{item}</li>
)
const Larvelrequirement= larvelrequirement.map((item, index) =>
    <li key={index} className="text-sm">{item}</li>
)

  return (
    <div className="h-full w-full ">
      <div className="flex h-14">
        <div className="w-1/2 m-4 ml-10 mt-3 text-2xl font-bold text-blue-500">
          JobsPortals
        </div>
        <div className=" flex flex-row justify-end  w-1/2 pr-10 m-3">
          <div>
            <button
              type="button"
              class="text-green-600  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
            >
              Login
            </button>
          </div>
          <div>
            {" "}
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gray-200 text-2xl h-16 items-center">
        Laravel Developer &nbsp;{" "}
        <span className="text-xl flex items-center"> (Full time) </span> &nbsp;
        - Match Company Limited
      </div>
      <div>
        <div className="flex flex-row justify-center">
          <button
            type="button"
            class="bg-white w-1/12 text-black  border-2 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 mt-4 "
          >
            View Company
          </button>
          <button
            type="button"
            class="text-white w-1/12 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mr-2 mb-2 mt-4 "
          >
            Apply This Job
          </button>
        </div>
      </div>
      <div className="ml-20">
        <ul>
          <span className="font-semibold text-xl ">Minimim Qualification:</span>{" "}
          <span className="text-sm">Bachelor</span>
        </ul>
        <ul>
          <span className="font-semibold text-xl ">Experience level:</span>{" "}
          <span className="text-sm">Mid level</span>
        </ul>
        <ul>
          <span className="font-semibold text-xl ">Experience length:</span>{" "}
          <span className="text-sm">2 Years</span>
        </ul>
        <ul>
          <span className="font-semibold text-xl ">Location:</span> {" "}
          <span className="text-sm">San franscisco,USA</span>
        </ul>
        <ul>
          <span className="font-semibold text-xl ">Application Deadline:</span>{" "}
          <span className="text-sm">12/8/2022</span>
        </ul>
        <ul>
          <span className="font-semibold text-xl ">Salary range:</span>{" "}
          <span className="text-sm">$105,000-150,000</span>
        </ul>
          <br>
          </br>
        <h1 className="text-xl font-bold"> Job Description </h1>
        
        <ul className="pr-36 text-sm">
          We are searching for a Laravel developer to build web applications for
          our company. In this role, you will design and create projects using
          Laravel framework and PHP, and assist the team in delivering
          high-qualWe are searching for a Laravel developer to build web
          applications for our company. In this role, you will design and create
          projects using Laravel framework and PHP, and assist the team in
          delivering high-quality.
        </ul>
        <br></br>
        <h1 className="text-xl font-bold">Larvel designer requirement</h1>
        {Larvelrequirement}
        <br></br>
        <h1 className="text-xl font-bold">Responsibilities</h1>
        {responsibilities}
      </div>
    </div>
  );
};

export default Jobportal;
