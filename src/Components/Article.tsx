import { useState } from 'react';
import '../App.scss';

type ArticleProps = {
  image: string;
  link: string;
  headline: string;
  publication: string;
  excerpt: string;
  date: string;
};

const Article = ({ image, link, headline, publication, excerpt, date }: ArticleProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="card">
      <div className="card__image">
        <a href={link} target="_blank" className="card__link">
          {!loaded && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                minHeight: '150px'
              }}
            >
              Loading...
            </div>
          )}
          <img
            src={image}
            alt={headline}
            style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </a>
      </div>
      <div className="card__meta">
        <span className="card__publication">{publication}</span>
        <span className="card__date">{date}</span>
      </div>
      <div className="card__line">
        <hr />
      </div>
      <a href={link} target="_blank" className="card__link">
        <h2 className="card__headline">{headline}</h2>
      </a>
      <p className="card__excerpt">{excerpt}</p>
    </article>
  );
};

export default Article;
