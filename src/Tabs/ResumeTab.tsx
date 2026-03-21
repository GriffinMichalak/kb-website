import '../App.scss';
import './ResumeTab.scss';
import { experiences, otherMediaExperience } from './resumeData';
import { ExperienceCard } from './ExperienceCard';

export const ResumeTab = () => {
  const RESUME_LINK =
    'https://docs.google.com/document/d/1veqBOO1-B9lLvew1TsQuRyw945VmSq5NrqaVjl1BZ9Q/edit?tab=t.0embedded=true';

  return (
    <div>
      <div className="resume-section">
        {/* <h2 className="resume-header">Résumé</h2>
        <p className="subtitle">Journalism · Reporting · Multimedia</p> */}

        <div className="view-full-resume">
          <a href={RESUME_LINK} target="_blank" className="fade-hover">
            View Full Resume
          </a>
        </div>

        <div className="category">
          <div className="category-label">Education</div>
          <div className="resume-card-grid">
            <div className="resume-card edu">
              <div className="date">Aug. 2023 - May 2027</div>
              <h3>Boston University</h3>
              <div className="org">B.S. in Journalism</div>
              <p>GPA: 3.8 | College of Communication, Kilachand Honors College</p>
            </div>
          </div>
        </div>
        {/* ========== EXPERIENCE ========== */}
        <div className="category">
          <div className="category-label">Experience</div>
          <div className="resume-card-grid">
            {experiences.map((e, idx) => (
              <ExperienceCard
                key={idx}
                company={e.company}
                role={e.role}
                location={e.location}
                date={e.date}
                bullets={e.bullets}
              />
            ))}
          </div>
        </div>
        {/* ========== OTHER MEDIA EXPERIENCE ========== */}
      </div>
      <div className="category">
        <div className="category-label">Other Media Experience</div>
        <div className="resume-card-grid">
          {otherMediaExperience.map((e, idx) => (
            <ExperienceCard
              key={idx}
              company={e.company}
              role={e.role}
              location={e.location}
              date={e.date}
              bullets={e.bullets}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
