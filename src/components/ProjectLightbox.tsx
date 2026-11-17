import { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { PracticalProject } from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectLightboxProps {
  project: PracticalProject | null;
  onClose: () => void;
}

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-slate-200 bg-white shrink-0">
          <div>
            <p className="text-xs font-medium text-slate-500 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true" className="mx-2">
                ·
              </span>
              <span className="font-mono tabular-nums">{project.date}</span>
              <span aria-hidden="true" className="mx-2">
                ·
              </span>
              <span>{project.semester}</span>
            </p>
            <h3
              id="lightbox-title"
              className="font-display text-lg sm:text-xl font-bold text-slate-900"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail praktikum"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-8">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-video">
            <ImageWithFallback
              src={project.imagePath}
              alt={project.imageAlt}
              fallbackTitle={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="font-display text-sm font-semibold text-slate-900 mb-2">
                  Ringkasan Pekerjaan
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold text-slate-900 mb-3">
                  Langkah Kerja &amp; Pengujian
                </h4>
                <ol className="space-y-2.5 text-sm text-slate-600">
                  {project.methodology.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="font-mono tabular-nums text-xs font-semibold text-blue-700 pt-0.5 shrink-0">
                        0{idx + 1}.
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <div className="px-4 py-3 border-b border-slate-200 bg-white">
                  <h4 className="font-display text-xs font-semibold text-slate-900">
                    Spesifikasi Teknis
                  </h4>
                </div>
                <dl className="divide-y divide-slate-200">
                  {project.technicalSpecs.map((spec) => (
                    <div key={spec.label} className="px-4 py-3">
                      <dt className="text-xs text-slate-500 mb-0.5">
                        {spec.label}
                      </dt>
                      <dd className="font-mono tabular-nums text-xs font-medium text-slate-900">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
                  <span>Catatan K3LH &amp; Verifikasi</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {project.safetyNotes}
                </p>
                <p className="text-xs font-medium text-slate-500 pt-2 border-t border-slate-200">
                  {project.supervisor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
