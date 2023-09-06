import React from 'react'

const beliTiket = () => {


    const festifalA = {
        type: 'Festival A (Standing)',
        price: 25000
    }

    const festifalB = {
        type: 'Festival B (Standing)',
        price: 15000
    }

    const bronzeA = {
        type: 'Bronze A (seating)',
        price: 35000
    }

    const bronzeB = {
        type: 'Bronze B (seating)',
        price: 35000
    }

    const silverA = {
        type: 'Silver A (seating)',
        price: 50000,
        seat: {
            'SAG': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAF': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAE': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAD': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAC': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAB': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAA': [1, 2, 3, 4, 5, 6, 7, 8],
        }

    }

    const silverB = {
        type: 'Silver B (seating)',
        price: 50000,
        seat: {
            col: 20,
            row: 10,
        }
    }

    const gold = {
        type: 'Gold (seating)',
        price: 75000,
        seat: {
            col: 20,
            row: 10,
        }
    }


    return (
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full p-5">
                    <div>
                        <div className="silver-a bg-green-900 w-1/4 rounded-xl p-5 my-2 -rotate-90">
                            {/* draw silver a seat ticket using checkbox and rotate -90deg */}
                            {
                                Object.keys(silverA.seat).map((row, index) => (
                                    <div key={index} className="flex">
                                        <span>{row}</span>
                                        {
                                            silverA.seat[row].map((seat, index) => (
                                                <div key={index} className="flex items-center justify-center">
                                                    <input type="checkbox" className="hidden" id={seat} />
                                                    <label htmlFor={seat} className="bg-green-500 w-8 h-8 flex items-center justify-center text-white rounded-xl mx-1 my-1">{seat}</label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className="festifal bg-green-100 rounded-xl p-5 my-2">
                        </div>
                        <div className="silver-b bg-green-100 rounded-xl p-5 my-2">
                        </div>
                        <div className="gold bg-green-100 rounded-xl p-5 my-2">
                        </div>
                    </div>
                </div>
                <div className="w-full p-5">
                    <div className="bg-green-100 rounded-xl p-5 my-2">
                        <h3 className="text-xl font-bold">Ringkasan Belanja</h3>
                        <div className="flex justify-between my-2">
                            <p className="text-sm">Total Harga Tiket</p>
                            <p className="text-sm">Rp. 100.000</p>
                        </div>
                        <div className="flex justify-between my-2">
                            <p className="text-sm">Biaya Admin</p>
                            <p className="text-sm">Rp. 5.000</p>
                        </div>
                        <div className="flex justify-between my-2">
                            <p className="text-sm">Total Pembayaran</p>
                            <p className="text-sm">Rp. 105.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default beliTiket