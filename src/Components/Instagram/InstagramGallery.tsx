import './InstagramGallery.scss';

export type InstagramPhoto = {
  id: string;
  src: string;
  alt: string;
};

type GalleryProps = {
  photos: InstagramPhoto[];
};

// Horizontal scroll strip: fixed-size thumbnails, scrolls on every viewport.
export const InstagramScrollGallery = ({ photos }: GalleryProps) => (
  <div className="instagram-scroll">
    {photos.map((photo) => (
      <div className="instagram-scroll__item" key={photo.id}>
        <img src={photo.src} alt={photo.alt} loading="lazy" />
      </div>
    ))}
  </div>
);

type PostLinkProps = {
  href: string;
};

// Plain inline text link, styled like body copy.
export const InstagramPostLinkInline = ({ href }: PostLinkProps) => (
  <a className="instagram-link instagram-link--inline" href={href} target="_blank" rel="noreferrer">
    See on Instagram
  </a>
);
