"use client"
import Link from 'next/link'
import { useState } from 'react'

const silver = () => {

  const [seats, setSeats] = useState([])

  const sold = [
    'BL1L-2', 'BL1J-10', 'BL2P-7', 'BL2C-3'
  ]


  const BL1Seat = {
    'BL1Q': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1P': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1O': [1, 2, 3, 4, 5, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1N': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1M': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1L': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1K': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1J': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1I': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1H': [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1G': [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1F': [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1E': [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1D': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1C': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1B': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    'BL1A': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  }

  const BL2Seat = {
    'BL2Q': [1, 2, 3, 4, 5, 6, 7],
    'BL2P': [1, 2, 3, 4, 5, 6, 7],
    'BL2O': [1, 2, 3, 4, 5, 0, 7],
    'BL2N': [1, 2, 3, 4, 5, 6, 7],
    'BL2M': [1, 2, 3, 4, 5, 6, 7],
    'BL2L': [1, 2, 3, 4, 5, 6, 7],
    'BL2K': [1, 2, 3, 4, 5, 6, 7],
    'BL2J': [1, 2, 3, 4, 5, 6, 7],
    'BL2I': [1, 2, 3, 4, 5, 6, 7],
    'BL2H': [1, 2, 3, 4, 5, 6, 0],
    'BL2G': [0, 0, 0, 0, 5, 6, 0],
    'BL2F': [0, 0, 0, 0, 5, 0, 0],
    'BL2E': [0, 0, 0, 0, 0, 0, 0],
    'BL2D': [1, 2, 3, 4, 0, 0, 0],
    'BL2C': [1, 2, 3, 0, 0, 0, 0],
    'BL2B': [1, 2, 0, 0, 0, 0, 0],
    'BL2A': [1, 0, 0, 0, 0, 0, 0],
  }

  return (
    <div className='overflow-x-auto bg-red-200 min-h-screen'>
      <div className='items-center flex gap-5 container'>
        <div className="w-[16/23]">
          <div className="bg-gray-800 p-5 rounded-xl text-white">
            {
              Object.keys(BL1Seat).map((row, index) => (
                <div key={index} className="flex gap-1 justify-end">
                  <span className='min-w-[4em] text-center'>{row}</span>
                  {
                    BL1Seat[row].map((BL1Seat, index) => (
                      <div key={index} className="flex items-center justify-center w-full">
                        <input type="checkbox" className="hidden" id={`${row}-${BL1Seat}`}
                          {...BL1Seat === 0 ? { disabled: true } : {}}
                          {...sold.includes(`${row}-${BL1Seat}`) ? ({ disabled: true }) : ''}
                          value={`${row}-${BL1Seat}`}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSeats([...seats, e.target.value])
                            } else {
                              setSeats(seats.filter((BL1Seat) => BL1Seat !== e.target.value))
                            }
                          }}
                        />
                        {BL1Seat === 0 ? (
                          <label htmlFor={`${row}-${BL1Seat}`}
                            className={`w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${BL1Seat}`) ? 'bg-red-500' : ''}`}
                          >{BL1Seat === 0 ? '' : ''}</label>
                        ) : (
                          <label htmlFor={`${row}-${BL1Seat}`}
                            className={`select-none text-black text-xs w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${BL1Seat}`) ? 'bg-red-500' : sold.includes(`${row}-${BL1Seat}`) ? 'bg-gray-500' : 'bg-green-500'}`}
                          >{BL1Seat === 0 ? '' : BL1Seat}</label>

                        )}
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>

        </div>
        <div className="w-[7/29]">
          <div className="bg-gray-800 p-5 rounded-xl text-white">
            {
              Object.keys(BL2Seat).map((row, index) => (
                <div key={index} className="flex gap-1 justify-end">
                  <span className='min-w-[4em] text-center'>{row}</span>
                  {
                    BL2Seat[row].map((BL2Seat, index) => (
                      <div key={index} className="flex items-center justify-center w-full">
                        <input type="checkbox" className="hidden" id={`${row}-${BL2Seat}`}
                          {...BL2Seat === 0 ? { disabled: true } : {}}
                          {...sold.includes(`${row}-${BL2Seat}`) ? ({ disabled: true }) : ''}
                          value={`${row}-${BL2Seat}`}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSeats([...seats, e.target.value])
                            } else {
                              setSeats(seats.filter((BL2Seat) => BL2Seat !== e.target.value))
                            }
                          }}
                        />
                        {BL2Seat === 0 ? (
                          <label htmlFor={`${row}-${BL2Seat}`}
                            className={`w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${BL2Seat}`) ? 'bg-red-500' : ''}`}
                          >{BL2Seat === 0 ? '' : ''}</label>
                        ) : (
                          <label htmlFor={`${row}-${BL2Seat}`}
                            className={`select-none text-black text-xs w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${BL2Seat}`) ? 'bg-red-500' : sold.includes(`${row}-${BL2Seat}`) ? 'bg-gray-500' : 'bg-green-500'}`}
                          >{BL2Seat === 0 ? '' : BL2Seat}</label>

                        )}
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>

        </div>

        {/* lanjutkan */}
        {/* <Link href='/beli-tiket' className='mt-5'>
        <button className="bg-green-500 text-white px-5 py-2 rounded-xl">Beli</button>
      </Link> */}
      </div>
    </div>
  )
}

export default silver