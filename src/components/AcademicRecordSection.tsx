import { academicRecords } from '../data/portfolioData';

export function AcademicRecordSection() {
  return (
    <section id="akademik" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold text-blue-700 mb-2">
            04. Rekam Akademik &amp; Kualifikasi
          </p>
          <h2
            className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3"
            style={{ textWrap: 'balance' }}
          >
            Riwayat Pendidikan, Evaluasi Praktik &amp; Kegiatan Kejuruan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Catatan resmi perkembangan akademik dan keterlibatan kegiatan kejuruan di lingkungan SMKN 1 Sidayu.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
          {academicRecords.map((record) => (
            <article
              key={record.title}
              className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start"
            >
              <div className="lg:col-span-3">
                <div className="font-mono tabular-nums text-xs font-semibold text-slate-900 mb-1">
                  {record.period}
                </div>
                <div className="text-xs text-slate-500">
                  {record.category}
                </div>
              </div>

              <div className="lg:col-span-6">
                <h3 className="font-display text-base font-semibold text-slate-900 mb-1">
                  {record.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mb-2">
                  {record.institution}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {record.notes}
                </p>
              </div>

              <div className="lg:col-span-3 lg:text-right">
                <span className="text-xs font-semibold text-blue-700">
                  {record.result}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
