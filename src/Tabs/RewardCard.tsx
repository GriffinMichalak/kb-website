import '../App.scss';
import './ResumeTab.scss';

interface RewardCardProps {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
}

export const ExperienceCard = ({ company, role, location, date, bullets }: RewardCardProps) => {
  return (
    <div className="resume-card">
      <div className="date">
        {date} | {location}
      </div>
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
