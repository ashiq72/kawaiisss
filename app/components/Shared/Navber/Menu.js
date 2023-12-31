"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {
  menuCategory,
  toggleCategory,
} from "@/store/features/categoryFilterSlice/categoryFilterSlice";
import { useDispatch } from "react-redux";

const Menu = ({ showCatMenu, setShowCatMenu, categories, category }) => {
  const [heading, setHeading] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="lg:flex lg:gap-4  hidden">
      {/* Only for Woman category start */}
      {categories &&
        categories?.slice(0, 1).map((link, index) => (
          <div
            onMouseEnter={() => {
              heading !== link._id ? setHeading(link._id) : setHeading("");
            }}
            onMouseLeave={() => {
              setHeading("");
            }}
            key={index}
          >
            <div className="text-left md:cursor-pointer group">
              <h1
                className={`py-1 my-6 flex justify-between items-center md:pr-0 px-2 group capitalize hover:bg-slate-100 rounded ${
                  heading === link._id ? "bg-slate-100" : ""
                }`}
              >
                {link.name}
                <span className="text-base pt-1 inline transition duration-1000 ease-in-out">
                  {link.firstsublinks ? (
                    <span>
                      {heading === link._id ? (
                        <span className="">
                          <IoIosArrowUp />
                        </span>
                      ) : (
                        <span className="">
                          <IoIosArrowDown />
                        </span>
                      )}
                    </span>
                  ) : null}
                </span>
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              </h1>
              {link.firstsublinks && (
                <div>
                  <div className="absolute top-14 hidden group-hover:md:block hover:md:block z-30 ">
                    <div className="py-3">
                      <div
                        className="w-4 h-4 left-3 absolute 
                  mt-1 bg-white rotate-45 -z-10"
                      ></div>
                    </div>
                    <div className="bg-white grid grid-cols-3 gap-7 p-2 rounded shadow-md">
                      {link.firstsublinks.map((mysublinks, index) => (
                        <div key={index}>
                          <h1 className="text-base font-medium border-b-2 cursor-default capitalize">
                            {mysublinks.name}
                          </h1>
                          {mysublinks?.secondsublinks?.map((slink, index) => (
                            <Link
                              key={index}
                              href="/products"
                              onClick={() => {
                                dispatch(menuCategory(slink.name));
                              }}
                            >
                              <li className="text-sm text-gray-600 rounded-md py-2 px-2 list-none hover:bg-slate-100 capitalize hover:text-green-600">
                                {slink.name}
                              </li>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      {/* Only for Woman category End */}
      {/* Only for others category start */}
      {categories &&
        categories?.slice(1).map((link, index) => (
          <div
            onMouseEnter={() => {
              heading !== link._id ? setHeading(link._id) : setHeading("");
            }}
            onMouseLeave={() => {
              setHeading("");
            }}
            key={index}
          >
            <div className="text-left md:cursor-pointer group">
              {link?.firstsublinks ? (
                <h1
                  className={`py-1 my-6 flex justify-between items-center md:pr-0 px-2 group capitalize hover:bg-slate-100 rounded ${
                    heading === link._id ? "bg-slate-100" : ""
                  }`}
                >
                  {link?.name}
                  <span className="text-base pt-1 inline ">
                    {link?.firstsublinks ? (
                      <span>
                        {heading === link._id ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </span>
                    ) : null}
                  </span>
                  <span
                    className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2 rounded
                "
                  >
                    <ion-icon name="chevron-down"></ion-icon>
                  </span>
                </h1>
              ) : (
                <Link
                  href="/products"
                  onClick={() => {
                    dispatch(menuCategory(link?.name));
                  }}
                  className="my-6 py-1 flex justify-between items-center md:pr-0 px-2 group capitalize hover:bg-slate-100"
                >
                  {link?.name}
                  <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <ion-icon name="chevron-down"></ion-icon>
                  </span>
                </Link>
              )}

              {link.firstsublinks && (
                <div>
                  <div className="absolute top-14 hidden group-hover:md:block hover:md:block z-30 ">
                    <div className="py-3">
                      <div
                        className="w-4 h-4 left-3 absolute 
                  mt-1 bg-white rotate-45 -z-10"
                      ></div>
                    </div>
                    <div className="bg-white shadow p-2 rounded">
                      {link.firstsublinks.map((mysublinks, index) => (
                        <div key={index}>
                          <Link
                            href="/products"
                            onClick={() => {
                              dispatch(menuCategory(mysublinks.name));
                            }}
                          >
                            <li className="text-sm text-gray-600 rounded-md py-2 px-2 list-none hover:bg-slate-100 capitalize hover:text-green-600">
                              {mysublinks.name}
                            </li>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      {/* Only for othewrs category End */}
    </div>
  );
};

export default Menu;
