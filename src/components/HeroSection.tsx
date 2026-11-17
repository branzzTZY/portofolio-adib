import { ArrowRight, Printer } from 'lucide-react';
import { studentIdentity, heroHighlights } from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroSectionProps {
  onPrintPortfolio: () => void;
}

export function HeroSection({ onPrintPortfolio }: HeroSectionProps) {
  return (
    <section id="beranda" className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Formal Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <p className="text-sm font-medium text-blue-700 tracking-normal mb-4">
                <span>{studentIdentity.school}</span>
                <span aria-hidden="true" className="mx-2 text-slate-300">
                  ·
                </span>
                <span>Kelas {studentIdentity.classGrade}</span>
                <span aria-hidden="true" className="mx-2 text-slate-300">
                  ·
                </span>
                <span>{studentIdentity.department}</span>
              </p>

              <h1
                className="font-display font-bold tracking-tight text-slate-900 leading-[1.12] mb-5"
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                  textWrap: 'balance',
                }}
              >
                {studentIdentity.fullName}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                {studentIdentity.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 no-print">
              <a
                href="#praktikum"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                <span>Lihat Dokumentasi Praktikum</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onPrintPortfolio}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                <Printer className="w-4 h-4 text-slate-600" aria-hidden="true" />
                <span>Cetak Ringkasan CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Matching-Height Formal Portrait */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] lg:aspect-auto lg:h-full">
              <ImageWithFallback
                src={studentIdentity.portraitPath}
                alt={`Foto resmi ${studentIdentity.fullName}, siswa ${studentIdentity.classGrade} ${studentIdentity.school}`}
                fallbackTitle={`${studentIdentity.fullName} — ${studentIdentity.classGrade}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Academic Summary Strip Below Split */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {heroHighlights.map((item) => (
            <div key={item.label}>
              <div className="text-xs font-medium text-slate-500 mb-1.5">
                {item.label}
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
