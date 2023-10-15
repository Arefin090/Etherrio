import React from "react";
import "./Footer.css"
import DiamondIcon from '@mui/icons-material/Diamond';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => (
  <>
    {/* FOOTER MOBILE DEVICES */}
    <footer className="md:hidden bg-gray-900 text-white">
      {/* Footer Top Section */}
      <div className="bg-gray-800 mx-auto px-15">
        <div className="container flex flex-col md:flex-row justify-between items-center mx-auto">
          <div className="logo w-full my-5 justify-center text-center">
          <DiamondIcon/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 1,
              align: 'inherit',
              fontFamily: 'Light',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Etherrio
          </Typography>
          </div>
          <div className="social w-full flex justify-center text-center"></div>
          <div className="newsletter w-full mx-5 my-5 justify-center text-center">
            <FacebookIcon sx={{ mr: 1.5 }} />
            <RedditIcon sx={{ mr: 1.5 }} />
            <YouTubeIcon sx={{ mr: 1.5 }} />
            <LinkedInIcon sx={{ mr: 1.5 }} />
            <TwitterIcon />
          </div>
        </div>
      </div>
      {/* Footer Middle Section*/}
      <div className="container overflow-hidden flex flex-col lg:flex-row mx-auto p-4">
        <div className="w-full mx-auto p-2">
          {/* Accordions */}
          <div className="tab w-full overflow-hidden">
            <input
              className="absolute hidden opacity-0"
              id="tab-multi-one"
              type="checkbox"
              name="tabs"
              defaultChecked=""
            />
            <div className="label relative">
              <label
                className="block py-2 px-3 text-white uppercase font-medium tracking-wide cursor-pointer"
                htmlFor="tab-multi-one"
              >
                Product
              </label>
              <div className="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                <svg
                  className="icon w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <div className="tab-content overflow-hidden leading-normal">
              <ul className="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab w-full overflow-hidden">
            <input
              className="absolute hidden opacity-0"
              id="tab-multi-two"
              type="checkbox"
              name="tabs"
            />
            <div className="label relative">
              <label
                className="block py-2 px-3 text-white uppercase font-medium tracking-wide cursor-pointer"
                htmlFor="tab-multi-two"
              >
                Company
              </label>
              <div className="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                <svg
                  className="icon w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <div className="tab-content overflow-hidden leading-normal">
              <ul className="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab w-full overflow-hidden">
            <input
              className="absolute hidden opacity-0"
              id="tab-multi-three"
              type="checkbox"
              name="tabs"
            />
            <div className="label relative">
              <label
                className="block py-2 px-3 text-white uppercase font-medium tracking-wide cursor-pointer"
                htmlFor="tab-multi-three"
              >
                Developers
              </label>
              <div className="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                <svg
                  className="icon w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <div className="tab-content overflow-hidden leading-normal">
              <ul className="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    Samuel Chin
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    Md Arefin Newaz Sojol
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    Mohammad Tousif Shahriar
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab w-full overflow-hidden">
            <input
              className="absolute hidden opacity-0"
              id="tab-multi-four"
              type="checkbox"
              name="tabs"
            />
            <div className="label relative">
              <label
                className="block py-2 px-3 text-white uppercase font-medium tracking-wide cursor-pointer"
                htmlFor="tab-multi-four"
              >
                Community
              </label>
              <div className="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                <svg
                  className="icon w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <div className="tab-content overflow-hidden leading-normal">
              <ul className="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="border-t border-gray-800 flex flex-col md:flex-row justify-center items-center p-6 mt-4 text-gray-600">
        <div>© 2020 Etherrio.</div>
        <div>
          &nbsp;All rights reserved.<div></div>
        </div>
      </div>
    </footer>

    {/* FOOTER DESKTOP DEVICES */}
    <footer className="hidden md:block bg-gray-900 text-white">
      {/* Footer Top Section*/}
      <div className="bg-gray-800 mx-auto px-11">
        <div className="container flex flex-col md:flex-row justify-between items-center mx-auto">
          <div className="logo w-1/5 mx-5 my-5">
          <DiamondIcon/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 1,
              fontFamily: 'Light',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Etherrio
          </Typography>
          </div>
          <div className="social w-1/5 mx-5 my-5 flex flex-start"></div>
          <div className="newsletter w-1/5 mx-5 my-5">
            <FacebookIcon sx={{ mr: 1.5 }} />
            <RedditIcon sx={{ mr: 1.5 }} />
            <YouTubeIcon sx={{ mr: 1.5 }} />
            <LinkedInIcon sx={{ mr: 1.5 }} />
            <TwitterIcon />
          </div>
        </div>
      </div>
      {/* Footer Middle Section*/}
      <div className="container overflow-hidden flex flex-col lg:flex-row justify-between mx-auto p-5">
        <div className="container block md:flex text-sm mt-6 lg:mt-0">
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
              Product
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                FAQ
              </a>
            </li>
          </ul>
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
              Company
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                Terms of Service
              </a>
            </li>
          </ul>
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
              Developers
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                Samuel Chin
              </a>
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                Md Arefin Newaz Sojol
              </a>
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                Mohammad Tousif Shahriar
              </a>
            </li>
          </ul>
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
              Explore
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-white no-underline">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom Section*/}
      <div className="border-t border-gray-800 flex flex-col md:flex-row justify-center items-center p-6 mt-4 text-gray-600">
        <div>© 2023 Etherrio. </div>
        <div>
          &nbsp;All rights reserved.<div></div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
