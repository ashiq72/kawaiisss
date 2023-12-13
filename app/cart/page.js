"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import Wrapper from "../components/Wrapper/Wrapper";
import { selectCartTotalPrice } from "@/store/selectors/productSelectors";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalCartPrice = useSelector(selectCartTotalPrice);

  const totalPrice = parseInt(totalCartPrice + 80);

  console.log(cartItems);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems?.length > 0 && (
          <>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            {/* HEADING AND PARAGRAPH END */}

            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">
                  MY BAG{" "}
                  <span className="font-medium">({cartItems.length})</span>
                </div>
                {cartItems.map((item) => (
                  <CartItem key={item._id} product={item} />
                ))}
              </div>
              {/* CART ITEMS END */}

              {/* SUMMARY START */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">ORDER SUMMARY</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="text-sm  font-serif md:text-md text-black/[0.8] w-8/12">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-normal text-black flex gap-1">
                      &#2547; {parseInt(totalCartPrice)}
                      {/* {subTotal} */}
                    </div>
                  </div>
                  <div className="flex justify-between  py-4">
                    <div className="text-sm  font-serif md:text-md text-black/[0.8] w-8/12">
                      Shipping (Standard Shipping: within 3-4 days inside Dhaka,
                      within 4-7 days outside Dhaka)
                    </div>
                    <div className="text-md md:text-lg font-normal text-black flex gap-1">
                      <span>&#2547; </span> <span> 80</span>
                      {/* {subTotal} */}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm  font-serif md:text-md text-black/[0.8] w-8/12">
                      VAT
                    </div>
                    <div className="text-md md:text-lg font-normal text-black flex gap-1">
                      &#2547; 00
                      {/* {subTotal} */}
                    </div>
                  </div>
                  <div className=" border-solid border-t-2 border-gray-300 flex justify-between mt-5 pt-5">
                    <div className="text-lg  font-serif font-semibold md:text-md text-black/[0.8] w-8/12">
                      Total
                    </div>
                    <div className="text-lg font-semibold md:text-lg  text-black flex gap-1">
                      &#2547; {totalPrice}
                      {/* {subTotal} */}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5  ">
                    Express delivery within 24 to 48 hours available for Dhaka
                    City. Select option on next screen.
                  </div>
                </div>

                {/* BUTTON START */}
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  // onClick={handlePayment}
                >
                  Checkout
                  {/* {loading && <img src="/spinner.svg" />} */}
                </button>
                {/* BUTTON END */}
              </div>
              {/* SUMMARY END */}
            </div>
            {/* CART CONTENT END */}
          </>
        )}

        {/* This is empty screen */}
        {cartItems?.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14 mt-5">
            <Image
              src="https://i.postimg.cc/SRnNpJvh/ezgif-com-webp-to-jpg-1.jpg"
              alt=""
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/products"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;