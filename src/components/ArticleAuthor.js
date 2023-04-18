import React from "react";

function ArticleAuthor(props) {
  return (
    <div className="article__author">
      <p className="article__author--name">{props.authorName}</p>
      <p className="article__author--date">{props.authorDate}</p>
      <p className="article__author--theme">{props.author_theme}</p>
    </div>
  );
}
export default ArticleAuthor;
