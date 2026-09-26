import { useParams } from "react-router-dom";
import articles from "../data/articles.json";
import "./ArticleDetails.css";

function ArticleDetails() {
  const { id } = useParams();

  const article = articles.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="article-details">
        <h1>Article not found</h1>
        <p>The article you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <article className="article-details">
      <div className="article-header">
        <span className="article-category">
          {article.category}
        </span>

        <h1>{article.title}</h1>

        <div className="article-meta">
          <span>{article.date}</span>
          <span>By {article.author}</span>
        </div>
      </div>
{article.image ? (
  <img
    src={article.image}
    alt={article.title}
    className="article-image"
  />
) : (
  <div className="article-image-placeholder">
    No image available
  </div>
)}

      <div className="article-content">
        <p>{article.description}</p>

        <p>{article.content}</p>
      </div>
    </article>
  );
}

export default ArticleDetails;