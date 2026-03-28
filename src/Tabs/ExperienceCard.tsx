import '../App.scss';
import './ResumeTab.scss';

interface ExperienceCardProps {
  company: string;
  companyImage: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
}

export const ExperienceCard = ({
  company,
  companyImage,
  role,
  location,
  date,
  bullets
}: ExperienceCardProps) => {
  return (
    <div className="resume-card edu">
      <div style={{ display: 'flex' }}>
        <div style={{ paddingTop: '1.438rem', paddingRight: '1.25rem' }}>
          <img width={'50px'} height={'50px'} src={companyImage} alt="" />
        </div>
        <div>
          <div>
            <div className="date">
              {date} &middot; {location}
            </div>
            <h3>{role}</h3>
            <div className="org">{company}</div>
          </div>
          <div>
            <ul>
              {bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
