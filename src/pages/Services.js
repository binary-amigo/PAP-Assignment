"use client"
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'

const Services = () => {
  return (
    <div className=''>
      <div className='h-[288px] flex bg-[#F5F7FA] justify-between px-80 items-center'>
        <div>
            <div className='text-[36px]'>Helping a local <br/> <span className='text-[#4CAF4F]'> buisness reinvent itself </span></div>
            <p>We reached here with our hard work and dedication</p>
        </div>
        <div cla>
            <div className='flex justify-between gap-4 mb-2'>
                <div>
                    <Image src='/assets/Icon1.svg' width={65} height={56} alt='icon1'></Image>
                </div>
                <div className='text-4xl'><CountUp start={0} end={2245341}></CountUp></div>
                <div className='text-4xl'><CountUp start={0} end={46328}></CountUp></div>
            </div>
            <div className='flex justify-between gap-4 mt-4'>
                <div className='text-4xl'><CountUp start={0} end={828867}></CountUp></div>
                <div className='text-4xl'><CountUp start={0} end={1926436}></CountUp></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
