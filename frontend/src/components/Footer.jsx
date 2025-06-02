import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*-----------left section --------*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 ">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            dolorem magni distinctio officia maiores aliquid minima nobis, ullam
            eaque reiciendis rerum quisquam quaerat, deserunt illum quis quod
            placeat architecto. Hic.{" "}
          </p>
        </div>

        {/*-----------center section --------*/}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/*-----------right section --------*/}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>drconsultmate@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copyright*/}
      <div>
        <hr />

        <p className="text-center">
          {" "}
          Copyright 2025 © Drconsultmate. All rights reserved. |{" "}
          <a href="/terms">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="/privacy">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
