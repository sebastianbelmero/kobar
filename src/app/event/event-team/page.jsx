const eventTeam = () => {

  const team1 = [
    {
      name: 'Drs. Hendrik Sitompul, M.M.',
      position: 'Event Producer',
      image: '/event-team/Drs. Hendrik Sitompul, M.M.jpg',
      description: 'Pengusaha sekaligus politikus. Jabatan politis saat ini adalah Anggota DPR RI Komisi VII dari Fraksi Demokrat. Bang Hendrik merupakan alumni Lemhanas PPRA52. Sejak muda Bang Hendrik senang berorganisasi. Pernah menjadi Ketua Muda-Mudi Katolik (Mudika), aktif di PMKRI Cab.Medan dan hingga saat ini masih menjabat sebagai Ketua Ikatan Sarjana Katolik (ISKA) Provinsi Sumatera Utara. Selain itu, sampai saat ini Bang Hendrik masih menjabat sebagai Wakil Bendahara DPP Partai Demokrat dan Bendahara Ikatan Alumni Lemhanas (IKAL) Provinsi Sumatera Utara.'
    },
    {
      name: 'RP. Serafin Dany Sanusi, OSC',
      position: 'Event Leader',
      image: '/event-team/RP. Serafin Dany Sanusi, OSC.jpg',
      description: 'Imam dari Ordo Salib Suci. Jabatan saat ini adalah Ketua Komisi Kepemudaan Keuskupan Agung Medan dan anggota Ikatan Alumni Lemhanas (IKAL) PPSA XXII. Berpengalaman dalam mengorganisir acara-acara besar mulai dari tingkat lokal, nasional maupun Internasional.'
    }
  ]

  const team2 = [
    {
      name: 'Doli Renaldo Simbolon',
      position: 'General Director',
      image: '/event-team/Doli Renaldo Simbolon.jpg',
      description: 'Musisi, arranger dan script writer. Banyak mencipta lagu termasuk lagu "Berkobar" yaitu lagu wajib dalam festival band kali ini.'
    },
    {
      name: 'RD.Shan Efran Sinaga',
      position: 'CO General Director',
      image: '/event-team/RD. Shan Efran Sinaga.jpg',
      description: 'Imam Diosesan Keuskupan Agung Medan. Saat ini menjabat sebagai Direktur Spiritual Rumah Bina Orang Muda "Jericho" di Bingkawan.'
    },
    {
      name: 'Irma Suriyani Sinaga',
      position: 'Band Festival Director',
      image: '/event-team/Irma Suriyani Sinaga.jpg',
      description: 'Mahasiswi Prodi Manajemen Fakultas Ekonomi Universitas Katolik St.Thomas, Medan. Saat ini menjabat sebagai Sekretaris Keluarga Besar Mahasiswa Katolik Keuskupan Agung Medan.'
    },
    {
      name: 'Veronika Sitanggang',
      position: 'Concert Director',
      image: '/event-team/Veronika Sitanggang.jpg',
      description: 'Orang muda berbakat dengan segudang pengalaman, menangani banyak event, terutama konser - konser yang menampilkan banyak artis, baik local maupun nasional.'
    },
    {
      name: 'Sahat Rumapea',
      position: 'Culture Festival Director',
      image: '/event-team/Sahat Rumapea.jpg',
      description: 'Choreographer lulusan dari seni pertunjukan Sendratasik Universitas Negeri Medan. Sejak mahasiswa, kerap berkecimpung dalam berbagai event budaya.'
    }
  ]


  return (
    <div className="container">
      {
        team1.map((team, index) => (
          <div className="flex flex-col md:flex-row bg-slate-100 rounded-xl p-8 md:p-0 mt-5 items-center" key={index}>
            <img className="w-48 h-auto" src={team.image} alt="" width="384" height="512" />
            <div className="pt-6 md:pl-8 text-center md:text-left">
              <blockquote>
                <p className="text-xl font-medium">
                  {team.position}
                </p>
                <p className="text-xl font-medium">
                  {team.name}
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-gray-500">
                  {team.description}
                </div>
              </figcaption>
            </div>
          </div>
        ))
      }

      <div className="flex flex-wrap justify-center">
        {
          team2.map((team, index) => (
            <div className="md:w-1/3 p-3 flex">
              <div className="flex flex-col bg-slate-100 rounded-xl p-8 mt-5 items-center" key={index}>
                <img className="w-48 h-auto" src={team.image} alt="" width="384" height="512" />
                <div className="pt-6 text-center">
                  <blockquote>
                    <p className="text-xl font-medium">
                      {team.position}
                    </p>
                    <p className="text-xl font-medium">
                      {team.name}
                    </p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-gray-500">
                      {team.description}
                    </div>
                  </figcaption>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default eventTeam