import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  practicalProjects,
  PracticalProject,
  ProjectCategory,
} from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectsSectionProps {
  onSelectProject: (project: PracticalProject) => void;
}

const categories: ProjectCategory[] = [
  'Semua',
  'Instalasi Penerangan',
  'Panel & Kontrol',
  'Pengukuran & Gambar',
];

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Semua');

  const filteredProjects =
    activeCategory === 'Semua'
      ? practicalProjects
      : practicalProjects.filter((item) => item.category === activeCategory);

  return (
    <section id="praktikum" className="py-16 lg:py-20 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold text-blue-700 mb-2">
              03. Portofolio Proyek &amp; Praktikum Bengkel
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
              style={{ textWrap: 'balance' }}
            >
              Dokumentasi Hasil Kerja Praktik Kelistrikan
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter kategori praktikum"
            className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start lg:self-auto no-print"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isWideFeatured =
              activeCategory === 'Semua' && index === 0;

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => onSelectProject(project)}
                className={`group text-left bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-colors duration-150 flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                  isWideFeatured ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                <div
                  className={`w-full overflow-hidden bg-slate-200 border-b border-slate-200 ${
                    isWideFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <ImageWithFallback
                    src={project.imagePath}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{project.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.semester}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
                    <span className="font-mono tabular-nums text-xs text-slate-500 truncate">
                      {project.technicalSpecs[0]?.value}
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 whitespace-nowrap shrink-0">
                      <span>Lihat Detail</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
