import './App.scss'

type ArticleProps = {
    image: string;
    link: string;
    headline: string;
    publication: string;
    excerpt: string;
    date: string;
};

const Article = ({ image, link, headline, publication, excerpt, date }: ArticleProps) => {
    return (
        <article className="card">
            <div className="card__image">
                <a href={link} target="_blank" className="card__link">
                    <img src={image} alt={headline} />
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