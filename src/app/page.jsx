'use client'
import Image from "next/image";
import Carousel from "./components/Carousel";
import { useRouter } from "next/navigation";
import OurProduct from "./our-product/page";
import Link from "next/link";

export default function Home() {

  const images = [
    '/carousel/01.jpg',
    '/carousel/02.jpg',
    '/carousel/03.jpg',
  ];

  const router = useRouter();

  return (
    <div>
      <div className="jumbotron jumbotron-fluid md:h-screen md:-mt-[7.5em]">
        <div className="flex relative z-10">
          <div className="flex flex-col md:w-1/2 justify-center items-center -mt-10">
            <Image src="/banner.png" width={500} height={500} alt="logo" />
            <div className="flex justify-evenly w-full">
              <button className="btn btn-success btn-sm">Job Fair</button>
              <button className="btn btn-success btn-sm">Festifal Musik</button>
              <Link href="/beli-tiket" className="btn btn-success btn-sm">
                Beli Tiket
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:w-1/2 justify-center items-center md:mt-[5em]">
            <Carousel loop>
              {images.map((src, i) => {
                return (
                  <div className="flex relative flex-[0_0_100%] justify-center" key={i}>
                    <Image src={src} width={400} height={500} className="object-cover rounded-2xl" alt="alt" selectedIndex={i} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>

      {/* welcome to gerai kobar */}
      <div className="mx-auto md:px-0 py-10 kobar-repeat">
        <div className="flex flex-col justify-center items-center items-center mt-10">
          <div className="flex flex-col md:w-1/2 justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-bold text-center">Welcome to Gerai Kobar</h1>
            <p className="text-center mt-10 container">Sebuah karya besar senantiasa berawal dari mimpi. Orang muda ditantang untuk terus berani bermimpi</p>
            <p className="text-center mt-10 container">{router.pathname}</p>
          </div>
          <div className="flex flex-wrap justify-between w-full container mt-20">
            <div className="w-full md:w-1/3 flex md:justify-center gap-3 mt-10">
              <div className="image">
                <Image src="/roasting.png" alt="Gambar" className="image" width={50} height={50} />
              </div>
              <div className="text">
                <h3>Roasting Coffee</h3>
                <p>Nikmati Roasting Kopi Kobar</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex md:justify-center gap-3 mt-10">
              <div className="image">
                <Image src="/snack.png" alt="Gambar" className="image" width={50} height={50} />
              </div>
              <div className="text">
                <h3>Snack</h3>
                <p>Makanan ringan dari UMK dan BUM Desa</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex md:justify-center gap-3 mt-10">
              <div className="image">
                <Image src="/livemusic.png" alt="Gambar" className="image" width={50} height={50} />
              </div>
              <div className="text">
                <h3>Live Music</h3>
                <p>Menikmati Pertunjukan Music Akustik</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Produk Ekraf Gerai Kobar */}
      <OurProduct />

      {/* Our Partners */}
      <div className="mx-auto md:px-0 py-10 bg-white">
        <div className="flex flex-col justify-center items-center items-center mt-10">
          <div className="flex flex-col md:w-1/2 justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-bold text-center">Our Partners</h1>
          </div>
          <div className="flex flex-wrap justify-center w-full container mt-20">
            <div className="container">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/4 mt-5 flex items-center justify-center">
                    <img src="/partner/manama.png" alt="hero-section-photo" className="rounded-xl"
                      fill/>
                </div>
                <div className="w-full md:w-1/4 mt-5 flex items-center justify-center">
                    <img src="/partner/fbi.png" alt="hero-section-photo" className="rounded-xl"
                      fill/>
                </div>
                <div className="w-full md:w-1/4 mt-5 flex items-center justify-center">
                    <img src="/partner/pijar.png" alt="hero-section-photo" className="rounded-xl"
                      fill/>
                </div>
                <div className="w-full md:w-1/4 mt-5 flex items-center justify-center">
                    <img src="/partner/rauads.png" alt="hero-section-photo" className="rounded-xl"
                      fill/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
