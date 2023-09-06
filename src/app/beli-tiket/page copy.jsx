import React from 'react'

const beliTiket = () => {

    const tickets = [
        {
            type: 'Festival A (Standing)',
            price: 25000
        },
        {
            type: 'Festival B (Standing)',
            price: 15000
        },
        {
            type: 'Bronze (seating)',
            price: 35000
        },
        {
            type: 'Silver (seating)',
            price: 50000
        },
        {
            type: 'Gold (seating)',
            price: 75000
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