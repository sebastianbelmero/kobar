import Link from "next/link";

const event = () => {

  const events = [
    {
      'title': 'Job Fair',
      'description': 'Adalah event Career Expo yang merupakan rangkaian dari kegiatan Kobar Preneur Festival (KPF) yang diselenggarakan oleh Komisi Kepemudaan Keuskupan Agung Medan. KPF diadakan untuk mendukung dan memfasilitasi karya dan karsa orang muda dalam mengekpresikan dan memberdayakan potensi-potensi yang dimiliki. Job Fair ini diselenggarakan karena tingginya kebutuhan akan tenaga kerja yang berkompeten dan berpengalaman serta tersedianya kandidat dari berbagai latar belakang disiplin ilmu, usia dan pengalaman yang akan menjadi model alternatif yang dibutuhkan Tim Recruitment guna memajukan dan mengembangkan suatu perusahaan.',
      'image': '/carousel/03.jpg',
      'link': '/event/job-fair'
    },
  ]

  return (
    <div className="container">
      {events.map((event, i) => {
        return (
          <Link href={event.link} key={i}>
            <figure class="flex flex-col md:flex-row bg-slate-100 rounded-xl p-8 md:p-0 mt-5 items-center">
              <img class="w-48 h-auto" src={event.image} alt="" width="384" height="512" />
              <div class="pt-6 md:pl-8 text-center md:text-left">
                <blockquote>
                  <p class="text-xl font-medium">
                    {event.title}
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-gray-500">
                    {event.description}
                  </div>
                </figcaption>
              </div>
            </figure>
          </Link>
        );
      })}
    </div>
  )
}

export default event