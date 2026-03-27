import '../App.scss';
import './ResumeTab.scss';

interface ExperienceCardProps {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
}

export const ExperienceCard = ({ company, role, location, date, bullets }: ExperienceCardProps) => {
  return (
    <div className="resume-card edu">
      <div className="date">{date} &middot; {location}</div>
      <h3>{role}</h3>
      <div className="org">{company}</div>
      {/* <div className="location">{location}</div> */}
      <ul>
        {bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};
