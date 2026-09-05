import '../App.scss';
import { EditorialAccordion } from '../Components/Accordion/EditorialAccordion';
import {
  InstagramScrollGallery,
  InstagramPostLinkInline,
  type InstagramPhoto
} from '../Components/Instagram/InstagramGallery';

// Placeholder photos sized to Instagram's 1080x1350 (4:5) portrait ratio.
// Swap `src` for Kelly's real Instagram post images once available.
const instagramPhotos: InstagramPhoto[] = Array.from({ length: 8 }, (_, i) => ({
  id: `insta-${i}`,
  src: `https://picsum.photos/seed/kelly-insta-${i}/1080/1350`,
  alt: `Instagram post ${i + 1}`
}));

// Placeholder post link. Swap for Kelly's real Instagram post URL once available.
const instagramPostUrl = 'https://www.instagram.com/p/placeholder/';

export const AudienceEngagementTab = () => {
  return (
    <div className="resume-section">
      <div className="category">
        <EditorialAccordion title="World Cup Coverage" defaultOpen>
          Placeholder content for social media reach metrics.
          <div className="instagram-gallery">
            <InstagramScrollGallery photos={instagramPhotos} />
            {instagramPostUrl && (
              <div className="instagram-gallery__link-row">
                <InstagramPostLinkInline href={instagramPostUrl} />
              </div>
            )}
          </div>
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
