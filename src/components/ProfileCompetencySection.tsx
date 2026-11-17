import { competencies, studentIdentity } from '../data/portfolioData';

export function ProfileCompetencySection() {
  const identityRows = [
    { label: 'Nama Lengkap', value: studentIdentity.fullName },
    { label: 'Nomor Induk Siswa', value: studentIdentity.nis, mono: true },
    { label: 'Kelas', value: studentIdentity.classGrade },
    { label: 'Program Keahlian', value: studentIdentity.department },
    { label: 'Satuan Pendidikan', value: studentIdentity.school },
    { label: 'Tahun Pelajaran', value: studentIdentity.academicYear, mono: true },
    { label: 'Lokasi Sekolah', value: studentIdentity.schoolAddress },
  ];

  return (
    <section id="profil" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Formal Student Identity */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-blue-700 mb-2">
              01. Identitas Akademik
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              style={{ textWrap: 'balance' }}
            >
              Profil Siswa &amp; Tujuan Pendidikan Kejuruan
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              {studentIdentity.academicObjective}
            </p>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <dl className="divide-y divide-slate-200">
                {identityRows.map((row) => (
                  <div
                    key={row.label}
                    className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4"
                  >
                    <dt className="text-xs font-medium text-slate-500 shrink-0">
                      {row.label}
                    </dt>
                    <dd
                      className={`text-sm font-medium text-slate-900 sm:text-right ${
                        row.mono ? 'font-mono tabular-nums' : ''
                      }`}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right Column: Competency Matrix */}
          <div id="kompetensi" className="lg:col-span-7 scroll-mt-24">
            <div className="mb-8">
              <p className="text-xs font-semibold text-blue-700 mb-2">
                02. Kompetensi Dasar Kejuruan
              </p>
              <h2
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3"
                style={{ textWrap: 'balance' }}
              >
                Peta Penguasaan Materi Teknik Instalasi Tenaga Listrik
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Cakupan keterampilan teknis bengkel yang dipelajari dan diuji secara berkala di kelas X TITL 2 SMKN 1 Sidayu.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
              {competencies.map((comp) => (
                <article key={comp.code} className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono tabular-nums font-medium text-slate-700">
                        {comp.code}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{comp.category}</span>
                    </div>
                    <span className="text-xs font-semibold text-blue-700">
                      Tingkat: {comp.level}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-semibold text-slate-900 mb-2">
                    {comp.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {comp.description}
                  </p>

                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-700">Perangkat &amp; Bahan:</span>{' '}
                    {comp.tools}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
