import { useState, FormEvent } from 'react';
import { CheckCircle2, Mail, MapPin, School } from 'lucide-react';
import { studentIdentity } from '../data/portfolioData';

export function ContactFooterSection() {
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) {
      setErrorText('Harap lengkapi nama pengirim dan isi pesan terlebih dahulu.');
      return;
    }
    setErrorText('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSenderName('');
    setSenderOrg('');
    setMessage('');
    setSubmitted(false);
    setErrorText('');
  };

  return (
    <>
      <section id="kontak" className="py-16 lg:py-20 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Formal Contact Info */}
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold text-blue-700 mb-2">
                05. Korespondensi &amp; Verifikasi
              </p>
              <h2
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
                style={{ textWrap: 'balance' }}
              >
                Hubungi Siswa atau Pihak Program Keahlian
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Terbuka untuk komunikasi akademik, evaluasi tugas kejuruan, maupun informasi program Praktik Kerja Lapangan (PKL) di bidang Teknik Instalasi Tenaga Listrik.
              </p>

              <div className="space-y-5 border-t border-slate-200 pt-6">
                <div className="flex items-start gap-3">
                  <School className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs font-medium text-slate-500">
                      Institusi Pendidikan
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      {studentIdentity.school} · Kelas {studentIdentity.classGrade}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs font-medium text-slate-500">
                      Alamat Sekolah
                    </div>
                    <div className="text-sm text-slate-700">
                      {studentIdentity.schoolAddress}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs font-medium text-slate-500">
                      Surel Akademik
                    </div>
                    <a
                      href={`mailto:${studentIdentity.email}`}
                      className="text-sm font-medium text-blue-700 hover:underline break-all"
                    >
                      {studentIdentity.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Formal Inquiry Form */}
            <div className="lg:col-span-7 no-print">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <CheckCircle2
                      className="w-10 h-10 text-blue-700 mx-auto"
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      Pesan Berhasil Dicatat
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Terima kasih, <span className="font-medium text-slate-900">{senderName}</span>. Pesan Anda untuk {studentIdentity.fullName} ({studentIdentity.classGrade}) telah disiapkan. Untuk korespondensi resmi, Anda juga dapat mengirim langsung ke{' '}
                      <a
                        href={`mailto:${studentIdentity.email}?subject=${encodeURIComponent(
                          `Korespondensi Portofolio - ${senderName}`
                        )}&body=${encodeURIComponent(message)}`}
                        className="text-blue-700 font-medium hover:underline"
                      >
                        {studentIdentity.email}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer min-h-[40px]"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <h3 className="font-display text-base font-semibold text-slate-900">
                        Formulir Pesan Resmi
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Gunakan formulir ini untuk guru pembimbing, pihak industri, atau panitia evaluasi portofolio.
                      </p>
                    </div>

                    {errorText && (
                      <div
                        role="alert"
                        className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-medium text-red-800"
                      >
                        {errorText}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="senderName"
                          className="block text-xs font-medium text-slate-700 mb-1.5"
                        >
                          Nama Pengirim
                        </label>
                        <input
                          id="senderName"
                          type="text"
                          required
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          placeholder="Contoh: Bpk. Ahmad Fauzi, S.Pd."
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="senderOrg"
                          className="block text-xs font-medium text-slate-700 mb-1.5"
                        >
                          Instansi / Jabatan (Opsional)
                        </label>
                        <input
                          id="senderOrg"
                          type="text"
                          value={senderOrg}
                          onChange={(e) => setSenderOrg(e.target.value)}
                          placeholder="Contoh: Kaprog TITL / Mitra Industri"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="messageBody"
                        className="block text-xs font-medium text-slate-700 mb-1.5"
                      >
                        Isi Pesan atau Catatan Evaluasi
                      </label>
                      <textarea
                        id="messageBody"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tuliskan pesan, masukan praktikum, atau informasi kunjungan industri..."
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 resize-y"
                      />
                    </div>

                    <div className="flex items-center justify-end">
                      <button
                        type="submit"
                        className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors duration-150 min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                      >
                        Kirim Pesan
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 {studentIdentity.fullName}
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            {studentIdentity.classGrade}
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            {studentIdentity.school}
          </div>
          <div className="flex items-center gap-6">
            <a href="#beranda" className="hover:text-slate-900 transition-colors">
              Kembali ke Atas
            </a>
            <a href="#praktikum" className="hover:text-slate-900 transition-colors">
              Dokumentasi Praktikum
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
