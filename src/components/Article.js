import React from "react";
import ArticleAuthor from "./ArticleAuthor";
import ArticleBody from "./ArticleBody";

function Article(props) {
  return (
    <React.Fragment>
      {props.children}
      <ArticleBody show={props.show} text={props.text} read={props.read} />
      <ArticleAuthor />
    </React.Fragment>
  );
}
export default Article;
