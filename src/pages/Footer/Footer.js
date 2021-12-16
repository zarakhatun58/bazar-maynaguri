import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="container  py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto  text-center md:text-left devide-y-8 devide-gray-500">
            <p
              style={{ borderRight: "1px dotted black" }}
              class="mt-2 text-sm text-gray-500 text-start"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est cum
              quibusdam molestiae suscipit vero veniam <br /> <br />
              qui quis, odit voluptatibus doloribus consequuntur ipsum quidem
              mollitia non sunt perferendis doloressed distinctio totam sint
              corrupti dolore ipsam aperiam nemo. Magnam ut odit ducimus
            </p>
            <a href="#" class="moree  text-start">
              Read more <img src="images/icon32.png" alt="" />
            </a>
          </div>
          <div
            style={{ borderBottom: "1px dotted black" }}
            class=" flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
          >
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Quick Links
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="#">
                    About Bazer Maynaguri
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="#">
                    FAQ
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="#">
                    Enquiry Us
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="#">
                    B2B Information
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Contact Us
              </h2>
              <nav class="list-none mb-10">
                <li class="text-gray-600 hover:text-gray-800">
                  <span>
                    <img src="images/icon33.png" alt="" />
                  </span>
                  <p>
                    Sarkar shoss exclusive <br />
                    Natun Bazar turminal complex, <br />
                    PO : Maynaguri,
                    <br />
                    Dist : Jalpaiguri, Pin : 753224.
                  </p>
                </li>
                <li class="no1">
                  <a class="text-gray-600 hover:text-gray-800" href="#">
                    <span>
                      <img src="images/icon34.png" alt="" />
                    </span>
                    <p>+91 7797813261</p>
                  </a>
                </li>
                <li class="no2">
                  <a class="text-gray-600 hover:text-gray-800" href="#">
                    <span>
                      <img src="images/icon35.png" alt="" />
                    </span>
                    <p>dhrubadjs.mng@gmail.com</p>
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div className=""></div>
          <div className=" col-md-10 pt-4">
            {" "}
            <h4> popular Category </h4>
            <p class="ml-4">
              Vegetable | Fruits |Dairy products |Organic Products| Grocery
              Items
            </p>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © Copyright 2020 bazermaynaguri.com | All Rights Reserved.
            </p>

            <span class="inline-flex text-2xl sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              Follow us on :
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
