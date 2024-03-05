import React from 'react'
import Link from 'next/link'
import mongoose from "mongoose";
import Product from "../models/Product"
const Seed = ({ products }) => {
  // console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
          {Object.keys(products).length === 0 && <p className="text-center">Sorry all Seeds are out of stock</p>}
            {Object.keys(products).map((item) => {
              return (
                <div key={products[item]._id} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-md m-5">
                  <Link href={`/product/${products[item].slug}`}>
                    <div className="block  pr-4  rounded overflow-hidden ">
                      <img alt="ecommerce" className="block m-auto  h-[36vh]  md:m-2" src={products[item].img} />
                    </div>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ">{products[item].category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                      <p className="mt-1">₹{products[item].price}</p>
                      <p className="mt-1">
                      {products[item].color.includes('White') && <button className="text-xs border-gray-300  border-2 rounded-full  w-4 h-4 mt-3 focus:outline"></button>}
                      {products[item].color.includes('Brown') && <button className="text-xs border-gray-300  border-2 rounded-full bg-orange-900 w-4 h-4 mt-3 focus:outline"></button>}
                      </p>
                      <p className="mt-1">
                        {products[item].size.includes('S') && <span className="text-xs border-gray-400 px-1 mx-0.5 border">S</span>}
                        {products[item].size.includes('M') && <span className="text-xs border-gray-400 px-1 mx-0.5 border">M</span>}
                        {products[item].size.includes('L') && <span className="text-xs border-gray-400 px-1 mx-0.5 border">L</span>}

                      </p>
                    </div>
                  </Link>
                </div>
              )
            })}







          </div>
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    // console.log("Already connected");
    await mongoose.connect(process.env.MONGO_URI);

  }

  let products = await Product.find({ category: "Seed" })
  let Seed = {}
  for (let item of products) {
    if (item.title in Seed) {
      if (!Seed[item.title].color.includes(item.color) && item.availableQty > 0) {
        Seed[item.title].color.push(item.color)

      }
      if (!Seed[item.title].size.includes(item.size) && item.availableQty > 0) {
        Seed[item.title].size.push(item.size)
      }
    } else {
      Seed[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        Seed[item.title].color = [item.color]
        Seed[item.title].size = [item.size]
      }
    }
  }
  // console.log(Seed);

  return {
    props: { products: JSON.parse(JSON.stringify(Seed)) }, // will be passed to the page component as props
  }
}
export default Seed