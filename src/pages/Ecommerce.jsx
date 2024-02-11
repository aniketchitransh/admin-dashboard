import React from 'react';
import { FaDotCircle } from "react-icons/fa";
import { BsCurrencyDollar } from 'react-icons/bs';

import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
    return (
        <div className='mt-12'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-gradient-to-r from-[#C9FFBF] to-[#FFAFBD]'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-gray-400'>Earnings</p>
                            <p className='text-2xl'>₹63,448.50</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <Button
                            color='white'
                            bgColor='blue'
                            text='Download'
                            borderRadius='10px'
                            size='md'
                        />
                    </div>
                </div>
                <div className='flex m-3 flex-wrap justify-center items-center gap-1'>
                    {earningData.map((item) => (
                        <div
                            key={item.title}
                            className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
                        >
                            <button
                                type='button'
                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                className='text-2xl opasity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                            >
                                {item.icon}
                            </button>
                            <p className='mt-3'>
                                <span className='text-xl font-semibold'>
                                    {item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className='text-sm text-gray-400 mt-1'>
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex gap-10 flex-wrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
                    <div className='flex justify-between'>
                        <p className='font-semibold text-xl'>Revenue Updates</p>
                        <div className='felx items-center gap-4'>
                            <p className=''>
                                <span><FaDotCircle /></span>
                                <span>Expence</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce