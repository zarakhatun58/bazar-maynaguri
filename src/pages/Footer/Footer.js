import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="container  py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left devide-y-8 devide-gray-500">
            <p class="mt-2 text-sm text-gray-500 text-start">
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
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
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
            <hr />
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                @knyttneve
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
