"use client"
import Link from 'next/link'
import { useState } from 'react'

const gold = () => {

  const [seats, setSeats] = useState([])

  const seat = {
    'GA': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    'GB': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    'GC': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    'GD': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    'GE': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  }

  return (
    <div className='items-center flex flex-col container'>
      <div className="bg-gray-400 p-5 rounded-xl">
        {
          Object.keys(seat).map((row, index) => (
            <div key={index} className="flex">
              <span>{row}</span>
              {
                seat[row].map((seat, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <input type="checkbox" className="hidden" id={`${row}-${seat}`}
                      value={`${row}-${seat}`}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSeats([...seats, e.target.value])
                        } else {
                          setSeats(seats.filter((seat) => seat !== e.target.value))
                        }
                      }}
                    />
                    <label htmlFor={`${row}-${seat}`}
                      className={`bg-green-500 w-8 h-8 flex items-center justify-center text-white rounded-xl mx-1 my-1 ${seats.includes(`${row}-${seat}`) ? 'bg-red-500' : ''}`}
                    >{seat}</label>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
      {/* lanjutkan */}
      <Link href='/beli-tiket' className='mt-5'>
        <button className="bg-green-500 text-white px-5 py-2 rounded-xl">Beli</button>
      </Link>
    </div>
  )
}

export default gold