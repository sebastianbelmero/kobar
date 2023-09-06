import React from 'react'
import Total from '../total'

const festival = () => {

  const tickets = [
    {
      type: 'Festival A (Standing)',
      price: 25000
    },
    {
      type: 'Festival B (Standing)',
      price: 15000
    }
  ]


  return (
    <div className="container">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-5">
          {
            tickets.map((ticket, index) => (
              <div key={index} className="flex items-center justify-between bg-green-100 rounded-xl p-5 my-2">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">{ticket.type}</h3>
                  <p className="text-sm">Rp. {ticket.price}</p>
                </div>
                <button className="bg-green-500 text-white px-5 py-2 rounded-xl">Beli</button>
              </div>
            ))
          }
        </div>
        <div className="w-full md:w-1/2 p-5">
          <Total />
        </div>
      </div>

    </div>
  )
}

export default festival