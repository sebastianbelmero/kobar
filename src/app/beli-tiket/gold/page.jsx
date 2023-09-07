"use client"
import Link from 'next/link'
import { useState } from 'react'

const gold = () => {

  const [seats, setSeats] = useState([])

  const GLSeat = {
    'GLQ': [1, 2, 3, 4, 5, 6, 7],
    'GLP': [1, 2, 3, 4, 5, 6, 7],
    'GLO': [1, 2, 3, 4, 5, 6, 0],
    'GLN': [1, 2, 3, 4, 5, 6, 7],
    'GLM': [1, 2, 3, 4, 5, 6, 7],
    'GLL': [1, 2, 3, 4, 5, 6, 7],
    'GLK': [1, 2, 3, 4, 5, 6, 7],
    'GLJ': [1, 2, 3, 4, 5, 6, 7],
    'GLI': [1, 2, 3, 4, 5, 6, 7],
    'GLH': [0, 2, 3, 4, 5, 6, 7],
    'GLG': [0, 2, 3, 0, 0, 0, 0],
    'GLF': [0, 0, 3, 0, 0, 0, 0],
    'GLE': [0, 0, 0, 0, 0, 0, 0],
    'GLD': [0, 0, 0, 4, 5, 6, 7],
    'GLC': [0, 0, 0, 0, 5, 6, 7],
    'GLB': [0, 0, 0, 0, 0, 6, 7],
    'GLA': [0, 0, 0, 0, 0, 6, 7],
  }

  const GMLSeat = {
    'GMLQ': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'GMLP': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'GMLO': [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 12, 13, 14, 15, 16, 0, 0, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMLN': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMLM': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMLL': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMLK': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMLJ': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMLI': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMLH': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 0, 0, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMLG': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 0, 0, 19, 20, 0, 0, 0, 0, 25, 26, 27, 28, 29],
    'GMLF': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 0, 0, 0, 25, 26, 27, 28, 29],
    'GMLE': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 0, 0, 0, 25, 26, 27, 28, 29],
    'GMLD': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMLC': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMLB': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMLA': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  }

  const GMRSeat = {
    'GMRQ': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRP': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRO': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 14, 15, 16, 17, 18, 0, 0, 21, 22, 23, 24, 25, 26, 27, 28, 0],
    'GMRN': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRM': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRL': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRK': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRJ': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRI': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRH': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 14, 15, 16, 0, 0, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRG': [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 11, 12, 0, 14, 15, 16, 0, 0, 19, 20, 0, 0, 0, 0, 25, 26, 27, 28, 29],
    'GMRF': [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 0, 0, 0, 25, 26, 27, 28, 29],
    'GMRE': [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 0, 0, 0, 25, 26, 27, 28, 29],
    'GMRD': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRC': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRB': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'GMRA': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  }

  const GRSeat = {
    'GRQ': [1, 2, 3, 4, 5, 6, 7],
    'GRP': [1, 2, 3, 4, 5, 6, 7],
    'GRO': [0, 2, 3, 4, 5, 6, 7],
    'GRN': [1, 2, 3, 4, 5, 6, 7],
    'GRM': [1, 2, 3, 4, 5, 6, 7],
    'GRL': [1, 2, 3, 4, 5, 6, 7],
    'GRK': [1, 2, 3, 4, 5, 6, 7],
    'GRJ': [1, 2, 3, 4, 5, 6, 7],
    'GRI': [1, 2, 3, 4, 5, 6, 7],
    'GRH': [1, 0, 3, 4, 5, 6, 0],
    'GRG': [1, 0, 0, 0, 5, 6, 0],
    'GRF': [1, 0, 0, 0, 5, 0, 0],
    'GRE': [1, 0, 0, 0, 0, 0, 0],
    'GRD': [1, 2, 3, 4, 0, 0, 0],
    'GRC': [1, 2, 3, 0, 0, 0, 0],
    'GRB': [1, 2, 0, 0, 0, 0, 0],
    'GRA': [1, 2, 0, 0, 0, 0, 0],
  }

  const sold = [
    'GLA-7', 'GRB-2', 'GMRH-5', 'GMLM-12'
  ]

  return (
    <div>
      <div className='overflow-x-auto'>
        <div className='items-center flex gap-5 container'>
          <div className="w-[7/72]">
            <div className="bg-gray-800 p-5 rounded-xl text-white">
              {
                Object.keys(GLSeat).map((row, index) => (
                  <div key={index} className="flex gap-1 justify-end">
                    <span className='min-w-[4em] text-center'>{row}</span>
                    {
                      GLSeat[row].map((GLSeat, index) => (
                        <div key={index} className="flex items-center justify-center w-full">
                          <input type="checkbox" className="hidden" id={`${row}-${GLSeat}`}
                            {...GLSeat === 0 ? { disabled: true } : {}}
                            {...sold.includes(`${row}-${GLSeat}`) ? ({ disabled: true }) : ''}
                            value={`${row}-${GLSeat}`}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSeats([...seats, e.target.value])
                              } else {
                                setSeats(seats.filter((GLSeat) => GLSeat !== e.target.value))
                              }
                            }}
                          />
                          {GLSeat === 0 ? (
                            <label htmlFor={`${row}-${GLSeat}`}
                              className={`w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${GLSeat}`) ? 'bg-red-500' : ''}`}
                            >{GLSeat === 0 ? '' : ''}</label>
                          ) : (
                            <label htmlFor={`${row}-${GLSeat}`}
                              className={`select-none text-black text-xs w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${GLSeat}`) ? 'bg-red-500' : sold.includes(`${row}-${GLSeat}`) ? 'bg-gray-500' : 'bg-green-500'}`}
                            >{GLSeat === 0 ? '' : GLSeat}</label>

                          )}
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>

          </div>
          <div className="w-[29/72]">
            <div className="bg-gray-800 p-5 rounded-xl text-white">
              {
                Object.keys(GMLSeat).map((row, index) => (
                  <div key={index} className="flex gap-1 justify-end">
                    <span className='min-w-[4em] text-center'>{row}</span>
                    {
                      GMLSeat[row].map((GMLSeat, index) => (
                        <div key={index} className="flex items-center justify-center w-full">
                          <input type="checkbox" className="hidden" id={`${row}-${GMLSeat}`}
                            {...GMLSeat === 0 ? { disabled: true } : {}}
                            {...sold.includes(`${row}-${GMLSeat}`) ? ({ disabled: true }) : ''}
                            value={`${row}-${GMLSeat}`}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSeats([...seats, e.target.value])
                              } else {
                                setSeats(seats.filter((GMLSeat) => GMLSeat !== e.target.value))
                              }
                            }}
                          />
                          {GMLSeat === 0 ? (
                            <label htmlFor={`${row}-${GMLSeat}`}
                              className={`w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${GMLSeat}`) ? 'bg-red-500' : ''}`}
                            >{GMLSeat === 0 ? '' : ''}</label>
                          ) : (
                            <label htmlFor={`${row}-${GMLSeat}`}
                              className={`select-none text-black text-xs w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${GMLSeat}`) ? 'bg-red-500' : sold.includes(`${row}-${GMLSeat}`) ? 'bg-gray-500' : 'bg-green-500'}`}
                            >{GMLSeat === 0 ? '' : GMLSeat}</label>

                          )}
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>

          </div>

          <div className="w-[29/72]">
            <div className="bg-gray-800 p-5 rounded-xl text-white">
              {
                Object.keys(GMRSeat).map((row, index) => (
                  <div key={index} className="flex gap-1 justify-end">
                    <span className='min-w-[4em] text-center'>{row}</span>
                    {
                      GMRSeat[row].map((GMRSeat, index) => (
                        <div key={index} className="flex items-center justify-center w-full">
                          <input type="checkbox" className="hidden" id={`${row}-${GMRSeat}`}
                            {...GMRSeat === 0 ? { disabled: true } : {}}
                            {...sold.includes(`${row}-${GMRSeat}`) ? ({ disabled: true }) : ''}
                            value={`${row}-${GMRSeat}`}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSeats([...seats, e.target.value])
                              } else {
                                setSeats(seats.filter((GMRSeat) => GMRSeat !== e.target.value))
                              }
                            }}
                          />
                          {GMRSeat === 0 ? (
                            <label htmlFor={`${row}-${GMRSeat}`}
                              className={`w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${GMRSeat}`) ? 'bg-red-500' : ''}`}
                            >{GMRSeat === 0 ? '' : ''}</label>
                          ) : (
                            <label htmlFor={`${row}-${GMRSeat}`}
                              className={`select-none text-black text-xs w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${GMRSeat}`) ? 'bg-red-500' : sold.includes(`${row}-${GMRSeat}`) ? 'bg-gray-500' : 'bg-green-500'}`}
                            >{GMRSeat === 0 ? '' : GMRSeat}</label>

                          )}
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>

          </div>

          <div className="w-[7/72]">
            <div className="bg-gray-800 p-5 rounded-xl text-white">
              {
                Object.keys(GRSeat).map((row, index) => (
                  <div key={index} className="flex gap-1 justify-end">
                    <span className='min-w-[4em] text-center'>{row}</span>
                    {
                      GRSeat[row].map((GRSeat, index) => (
                        <div key={index} className="flex items-center justify-center w-full">
                          <input type="checkbox" className="hidden" id={`${row}-${GRSeat}`}
                            {...GRSeat === 0 ? { disabled: true } : {}}
                            {...sold.includes(`${row}-${GRSeat}`) ? ({ disabled: true }) : ''}
                            value={`${row}-${GRSeat}`}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSeats([...seats, e.target.value])
                              } else {
                                setSeats(seats.filter((GRSeat) => GRSeat !== e.target.value))
                              }
                            }}
                          />
                          {GRSeat === 0 ? (
                            <label htmlFor={`${row}-${GRSeat}`}
                              className={`w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${GRSeat}`) ? 'bg-red-500' : ''}`}
                            >{GRSeat === 0 ? '' : ''}</label>
                          ) : (
                            <label htmlFor={`${row}-${GRSeat}`}
                              className={`select-none text-black text-xs w-4 h-4 flex items-center justify-center text-white rounded mx-1 my-1 ${seats.includes(`${row}-${GRSeat}`) ? 'bg-red-500' : sold.includes(`${row}-${GRSeat}`) ? 'bg-gray-500' : 'bg-green-500'}`}
                            >{GRSeat === 0 ? '' : GRSeat}</label>

                          )}
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>

          </div>

        </div>
      </div>
      <div className="bg-black text-white text-center">STAGE</div>
      <Link href='/beli-tiket' className='mt-5'>
        <button className="bg-green-500 text-white px-5 py-2 rounded-xl">Beli</button>
      </Link>
    </div>
  )
}

export default gold