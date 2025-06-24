import React from 'react'

const BlogPage = () => {
  return (
    <div className='relative container mx-auto mt-5 flex h-full max-w-6xl flex-col justify-between px-10 xl:px-0'>
      <h2 className='mb-1 text-3xl leading-tight font-extrabold text-gray-900 dark:text-white'>
        Services
      </h2>
      <p className='mb-12 text-lg text-gray-500 dark:text-white/50'>
        Here is a few of the awesome Services we provide
      </p>
      <div className='w-full'>
        <div className='mb-10 flex w-full flex-col sm:flex-row'>
          <div className='mb-10 w-full sm:mb-0 sm:w-1/2'>
            <h3 className='my-2 ml-3 text-lg font-bold text-shadow-amber-100'>
              DAPP Development
            </h3>
            <p>---------------</p>
            <p className='mb-2 text-amber-400'>A decent</p>
          </div>
          <div className='w-full sm:w-1/2'>
            <h3 className='my-2 ml-3 text-lg font-bold text-shadow-amber-100'>
              Smart Contract Development
            </h3>
            <p>---------------</p>
            <p className='mb-2 text-amber-400'>Web 3.0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
