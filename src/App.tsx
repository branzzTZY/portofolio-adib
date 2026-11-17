import { useState } from 'react';
import { PracticalProject, studentIdentity } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfileCompetencySection } from './components/ProfileCompetencySection';
import { ProjectsSection } from './components/ProjectsSection';
import { AcademicRecordSection } from './components/AcademicRecordSection';
import { ContactFooterSection } from './components/ContactFooterSection';
import { ProjectLightbox } from './components/ProjectLightbox';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PracticalProject | null>(
    null
  );

  const handleContactClick = () => {
    const el = document.getElementById('kontak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrintPortfolio = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar
        brandName={studentIdentity.shortName}
        onContactClick={handleContactClick}
      />

      <main className="flex-1">
        <HeroSection onPrintPortfolio={handlePrintPortfolio} />
        <ProfileCompetencySection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <AcademicRecordSection />
        <ContactFooterSection />
      </main>

      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
