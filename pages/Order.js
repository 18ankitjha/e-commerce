import React from 'react'

const Order = (
    { subTotal }
) => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Gardeniary</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id:87965013</h1>

                            <p className="leading-relaxed mb-4">Your order has been successfully placed!!!</p>
                            <div className="flex mb-4">
                                <div className="flex-grow  border-gray-300 border-b-2 text-lg ">Description</div>
                                <div className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-right">Quantity</div>
                                <div className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-right" > Price</div>
                            </div>
                            <div className="flex border-b border-gray-200  py-2">
                                <div className="text-gray-800 ">Money plant(XL/WHITE)</div>
                                <div className=" text-gray-800 mx-auto">1</div>
                                <div className=" text-gray-800 ">₹499</div>
                            </div>
                            <div className="flex border-b border-gray-200  py-2">
                                <div className="text-gray-800 ">Money plant(XL/WHITE)</div>
                                <div className=" text-gray-800 mx-auto">1</div>
                                <div className=" text-gray-800 ">₹499</div>
                            </div>
                            


                            <div className="flex mt-5">
                                <span className="title-font font-medium text-2xl text-gray-900">Subtotal: ₹{subTotal}</span>
                                <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Track your Order</button>
                                
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order