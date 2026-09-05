import { useEffect } from 'react';
import '../App.scss';
import { EditorialAccordion } from '../Components/Accordion/EditorialAccordion';
import {
  InstagramScrollGallery,
  InstagramPostLinkInline,
  type InstagramPhoto
} from '../Components/Instagram/InstagramGallery';
import { VerticalVideoBlock } from '../Components/VerticalVideo/VerticalVideoBlock';

const TIKTOK_EMBED_SCRIPT_SRC = 'https://www.tiktok.com/embed.js';

declare global {
  interface Window {
    tiktokEmbed?: { lib?: { render?: () => void } };
  }
}

// TikTok's embed.js normally auto-converts .tiktok-embed blockquotes on the
// page's DOMContentLoaded event, but that event has already fired by the time
// a React SPA injects the script — so it never triggers on its own. We call
// render() manually once the script is ready to force the conversion.
const useTikTokEmbedScript = () => {
  useEffect(() => {
    if (window.tiktokEmbed?.lib?.render) {
      window.tiktokEmbed.lib.render();
      return;
    }
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${TIKTOK_EMBED_SCRIPT_SRC}"]`);
    if (existingScript) {
      existingScript.addEventListener('load', () => window.tiktokEmbed?.lib?.render?.());
      return;
    }
    const script = document.createElement('script');
    script.src = TIKTOK_EMBED_SCRIPT_SRC;
    script.async = true;
    script.onload = () => window.tiktokEmbed?.lib?.render?.();
    document.body.appendChild(script);
  }, []);
};

// Placeholder photos sized to Instagram's 1080x1350 (4:5) portrait ratio.
// Swap `src` for Kelly's real Instagram post images once available.
const instagramPhotos: InstagramPhoto[] = Array.from({ length: 8 }, (_, i) => ({
  id: `insta-${i}`,
  src: `https://picsum.photos/seed/kelly-insta-${i}/1080/1350`,
  alt: `Instagram post ${i + 1}`
}));

// Placeholder post link. Swap for Kelly's real Instagram post URL once available.
const instagramPostUrl = 'https://www.instagram.com/p/placeholder/';

// Placeholder TikTok embed. Swap for the real embed markup per video once available.
const tikTokEmbed = (
  <blockquote
    className="tiktok-embed"
    cite="https://www.tiktok.com/@bostonglobe/video/7673554308289318158"
    data-video-id="7673554308289318158"
    style={{ maxWidth: 605, minWidth: 325 }}
  >
    <section>
      <a target="_blank" rel="noreferrer" title="@bostonglobe" href="https://www.tiktok.com/@bostonglobe?refer=embed">
        @bostonglobe
      </a>{' '}
      Have you ever eaten a sandwich in Sandwich? Here&rsquo;s a local&rsquo;s take on where to get a great sandwich
      if you&rsquo;re passing through the oldest town on Cape Cod. Naturally, there&rsquo;s no shortage of
      cranberries in the bread or the fillings. Find more sandwich recommendations at globe.com. Reporting and video
      by Kelly Broder{' '}
      <a target="_blank" rel="noreferrer" title="sandwichmaking" href="https://www.tiktok.com/tag/sandwichmaking?refer=embed">
        #sandwichmaking
      </a>{' '}
      <a target="_blank" rel="noreferrer" title="capecod" href="https://www.tiktok.com/tag/capecod?refer=embed">
        #capecod
      </a>{' '}
      <a target="_blank" rel="noreferrer" title="sandwichtiktok" href="https://www.tiktok.com/tag/sandwichtiktok?refer=embed">
        #sandwichtiktok
      </a>{' '}
      <a target="_blank" rel="noreferrer" title="capecodsummer" href="https://www.tiktok.com/tag/capecodsummer?refer=embed">
        #capecodsummer
      </a>{' '}
      <a target="_blank" rel="noreferrer" title="sandwichma" href="https://www.tiktok.com/tag/sandwichma?refer=embed">
        #sandwichma
      </a>{' '}
      <a
        target="_blank"
        rel="noreferrer"
        title="♬ original sound  - The Boston Globe"
        href="https://www.tiktok.com/music/original-sound-The-Boston-Globe-7673554386915805966?refer=embed"
      >
        ♬ original sound  - The Boston Globe
      </a>
    </section>
  </blockquote>
);

export const AudienceEngagementTab = () => {
  useTikTokEmbedScript();

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
        <EditorialAccordion title="Vertical Video">
          Placeholder content for event attendance and engagement.
          <div className="vertical-video-version">
            <div className="vertical-video-version__label">Version A</div>
            <VerticalVideoBlock
              videoPosition="left"
              embed={tikTokEmbed}
              whatWasDone="Placeholder summary of what was done for this vertical video (1-2 sentences)."
              performance="Placeholder performance metrics."
            />
          </div>
          <div className="vertical-video-version">
            <div className="vertical-video-version__label">Version B</div>
            <VerticalVideoBlock
              videoPosition="right"
              embed={tikTokEmbed}
              whatWasDone="Placeholder summary of what was done for this vertical video (1-2 sentences)."
              performance="Placeholder performance metrics."
            />
          </div>
        </EditorialAccordion>
        <EditorialAccordion title="Social Strategy">
          Placeholder content for video watch-time analytics.
        </EditorialAccordion>
      </div>
    </div>
  );
};
