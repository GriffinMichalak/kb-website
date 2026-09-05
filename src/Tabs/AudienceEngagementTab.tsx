import '../App.scss';
import { EditorialAccordion } from '../Components/Accordion/EditorialAccordion';

export const AudienceEngagementTab = () => {
  return (
    <div className="resume-section">
      <div className="category">
        <EditorialAccordion title="Social Media Reach" defaultOpen>
          Placeholder content for social media reach metrics.
        </EditorialAccordion>
        <EditorialAccordion title="Newsletter Growth">
          Placeholder content for newsletter subscriber growth.
        </EditorialAccordion>
        <EditorialAccordion title="Comment & Community Feedback">
          Placeholder content for community feedback highlights.
        </EditorialAccordion>
        <EditorialAccordion title="Event Turnout">
          Placeholder content for event attendance and engagement.
        </EditorialAccordion>
        <EditorialAccordion title="Video Watch Time">
          Placeholder content for video watch-time analytics.
        </EditorialAccordion>
        <EditorialAccordion title="Audience Demographics">
          Placeholder content for audience demographic breakdown.
        </EditorialAccordion>
      </div>
    </div>
  );
};
