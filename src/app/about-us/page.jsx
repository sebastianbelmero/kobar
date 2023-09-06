import React from 'react'

const aboutUs = () => {
    return (
        <div className="px-1 flex flex-col items-center">
            <h1 className="text-center text-4xl font-bold">TENTANG</h1>
            <h3 className="text-center text-2xl font-bold mt-3">Kobar Preneur Festival</h3>
            <section className="md:w-5/12 mt-3">
                <div className="flex justify-center gap-3">
                    <img src='/job-fair/tentang-1.png' alt="tentang-1" className="w-1/2 object-cover object-center rounded-lg" />
                    <img src='/job-fair/tentang-2.png' alt="tentang-2" className="w-1/2 object-cover object-center rounded-lg" />
                </div>
                <div className="text-center">
                    Pada 2 Juni 2023 Gerai Kobar diresmikan di Gedung Catholic Center,
                    Medan. Gerai ini merupakan apresiasi usai pesta dan perlombaan
                    Ekonomi Kreatif yang diadakan pada Hari Orang Muda Katolik, 20 - 23
                    April 2023 di Kabanjahe. Menjadi wadah untuk menampung produk-
                    produk Ekonomi Kreatif orang muda dari berbagai daerah,
                    mengkaryakan orang muda untuk menjual dan menghasilkan
                    pendapatan, walau masih dalam skala kecil.
                    Agara rangkaian pesta dan karya orang muda tetap berkelanjutan,
                    diselenggarakanlah KOBAR PRENEUR FESTIVAL (KPF). Merupakan
                    perjalanan bersama orang muda guna mengekspresikan diri dalam
                    karya dan karsa. Job Fair, Festival Band, Festival Budaya, Bazaar dan
                    live konser adalah ekspresi positif kobaran jiwa muda.
                </div>
            </section>
        </div>
    )
}

export default aboutUs