"use static"
import React from 'react'

const Total = () => {
    return (
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
    )
}

export default Total