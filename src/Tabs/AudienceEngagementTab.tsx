import '../App.scss';
import { EditorialAccordion } from '../Components/Accordion/EditorialAccordion';

export const AudienceEngagementTab = () => {
  return (
    <div className="resume-section">
      <div className="category">
        <EditorialAccordion title="World Cup Coverage" defaultOpen>
          Placeholder content for social media reach metrics.
        </EditorialAccordion>
        <EditorialAccordion title="SCOTUS Decisions">
          Placeholder content for newsletter subscriber growth.
        </EditorialAccordion>
        <EditorialAccordion title="Lindsay Clancy Trial">
          Placeholder content for community feedback highlights.
        </EditorialAccordion>
        <EditorialAccordion title="Performance Metrics">
          Placeholder content for event attendance and engagement.
        </EditorialAccordion>
        <EditorialAccordion title="Social Strategy">
          Placeholder content for video watch-time analytics.
        </EditorialAccordion>
      </div>
    </div>
  );
};
