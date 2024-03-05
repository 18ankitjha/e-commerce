import React from 'react'
import mongoose from 'mongoose'
import Order from '../models/Order'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const Orders = (
    { }
) => {
    const router = useRouter()
    useEffect(() => {
        if(!localStorage.getItem('token')) {
          router.push('/')
        }
      }, [])
    
    return (
        <div>
            <div className="overflow-x-hidden mx-auto md:w-4/5 my-5">
                <h1 className="font-bold text-2xl">My Orders</h1>
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Color
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b  ">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="py-4 px-6">
                                Sliver
                            </td>
                            <td className="py-4 px-6">
                                Laptop
                            </td>
                            <td className="py-4 px-6">
                                $2999
                            </td>
                        </tr>
                        <tr className="bg-white border-b  ">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                Microsoft Surface Pro
                            </th>
                            <td className="py-4 px-6">
                                White
                            </td>
                            <td className="py-4 px-6">
                                Laptop PC
                            </td>
                            <td className="py-4 px-6">
                                $1999
                            </td>
                        </tr>
                        <tr className="bg-white ">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                Magic Mouse 2
                            </th>
                            <td className="py-4 px-6">
                                Black
                            </td>
                            <td className="py-4 px-6">
                                Accessories
                            </td>
                            <td className="py-4 px-6">
                                $99
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        // console.log("Already connected");
        await mongoose.connect(process.env.MONGO_URI);

    }

    let orders = await Order.findOne();
    // console.log(product);
    let variants = await Order.find()
    // console.log(variants);
    let colorSizeSlug = {}//{red:{xl:{slug:"gardeniaey"}}}
    


    return {
        props: { orders:orders }, // will be passed to the page component as props
    }
}


export default Orders