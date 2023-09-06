import Image from 'next/image'
import React from 'react'

const OurProduct = () => {
    return (
        <div className="mx-auto md:px-0 py-10">
            <div className="flex flex-col justify-center items-center items-center mt-10">
                <div className="flex flex-col md:w-1/2 justify-center items-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-center">Produk Ekraf Gerai Kobar</h1>
                    <p className="text-center mt-10 container">Produk - produk Ekraf Gerai Kobar diyakini memiliki kualitas yang mumpuni. Produk Makanan hasil dari kreatifitas dan Inovasi kaum muda</p>
                </div>
                <div className="flex flex-wrap justify-center w-full container mt-20">
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/4 mt-5 flex justify-center">
                                <Image src="/produk-ekraf/booganza.png" alt="hero-section-photo" className="rounded-xl"
                                    width={150} height={210} />
                            </div>
                            <div className="w-1/2 md:w-1/4 mt-5 flex justify-center">
                                <Image src="/produk-ekraf/minyak_kemiri.png" alt="hero-section-photo" className="rounded-xl"
                                    width={150} height={210} />
                            </div>
                            <div className="w-1/2 md:w-1/4 mt-5 flex justify-center">
                                <Image src="/produk-ekraf/probiote.png" alt="hero-section-photo" className="rounded-xl"
                                    width={150} height={210} />
                            </div>
                            <div className="w-1/2 md:w-1/4 mt-5 flex justify-center">
                                <Image src="/produk-ekraf/pupuk.png" alt="hero-section-photo" className="rounded-xl"
                                    width={150} height={210} />
                            </div>
                            <div className="w-1/2 md:w-1/4 mt-5 flex justify-center">
                                <Image src="/produk-ekraf/skupitd.png" alt="hero-section-photo" className="rounded-xl"
                                    width={150} height={210} />
                            </div>
                            <div className="w-1/2 md:w-1/4 mt-5 flex justify-center">
                                <Image src="/produk-ekraf/bricket.png" alt="hero-section-photo" className="rounded-xl"
                                    width={150} height={210} />
                            </div>
                            <div className="w-1/2 md:w-1/4 mt-5 flex justify-center">
                                <Image src="/produk-ekraf/malas_uhur.png" alt="hero-section-photo" className="rounded-xl"
                                    width={150} height={210} />
                            </div>
                            <div className="w-1/2 md:w-1/4 mt-5 flex justify-center">
                                <Image src="/produk-ekraf/keripik_biji_durian.png" alt="hero-section-photo" className="rounded-xl"
                                    width={150} height={210} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProduct