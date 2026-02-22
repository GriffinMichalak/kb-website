import './App.scss'

type ArticleProps = {
    image: string;
    headline: string;
    publication: string;
    excerpt: string;
    date: string;
};

const Article = ({ image, headline, publication, excerpt, date }: ArticleProps) => {
    return (
        <article className="card">
            <div className="card__image">
                <img src={image} alt={headline} />
            </div>
            <div className="card__meta">
                <span className="card__publication">{publication}</span>
                <span className="card__date">{date}</span>
            </div>
            <div className="card__line">
                <hr />
            </div>
            <h2 className="card__headline">{headline}</h2>
            <p className="card__excerpt">{excerpt}</p>
        </article>
    );
  };
  
  export default Article;