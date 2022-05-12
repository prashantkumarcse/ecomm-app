import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:flex justify-between  gap-y-10 px-32 py-14 bg-gray-100'>
        <div className='space-y-4 text-gray-800'>
            <h5 className='font-bold'>CATEGORIES</h5>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
        </div>
        


        <div className='space-y-4 text-gray-800'>
            <h5 className='font-bold'>CORPORATE INFO</h5>
            <p>Career at KRITISTORE</p>
            <p>About KRITISTORE group</p>
            <p>MAIL US</p>
        </div>


        <div className='space-y-4 text-gray-800'>
            <h5 className='font-bold'>HELP</h5>
            <p>CUSTOMER SERVICE</p>
            <p>FIND A STORE</p>
            <p>CONTACT</p>
        </div>
        <div className='space-y-4 text-gray-800'>
            <h5 className='font-bold'>SIGN UP</h5>
            <p></p>
            <p>FIND A STORE</p>
            <p>CONTACT</p>
            </div>

       
    </div>
  )
}

export default Footer