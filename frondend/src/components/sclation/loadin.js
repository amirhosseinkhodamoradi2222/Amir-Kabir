import React from 'react'
import Skeleton from 'react-loading-skeleton'


export  function Loadin() {
  return (
    <>
    <div className='bg-white rounded p-2 shadow-sm mb-4'>
    <div className='grid grid-rows-1 grid-cols-12'>
          <div className='col-span-2'>
        <Skeleton count={1} width={100} height={100} borderRadius={'50%'} />
          </div>
          <div className='col-span-10 mt-1'>
        <Skeleton count={3} height={25} width={"100%"} borderRadius={10} />
          </div>
          <div className='col-span-2'>
        <Skeleton count={1} width={100} height={100} borderRadius={'50%'} />
          </div>
          <div className='col-span-10 mt-1'>
        <Skeleton count={3} height={25} width={"100%"} borderRadius={10} />
          </div>
          <div className='col-span-2'>
        <Skeleton count={1} width={100} height={100} borderRadius={'50%'} />
          </div>
          <div className='col-span-10 mt-1'>
        <Skeleton count={3} height={25} width={"100%"} borderRadius={10} />
          </div>
        </div>
    </div>
    </>
  )
}
