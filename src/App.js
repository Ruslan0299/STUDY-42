import React, { useState, createContext } from "react";
import Article from "./components/Article";
import ArticleBody from "./components/ArticleBody";
import ArticleAuthor from "./components/ArticleAuthor";

export const LanguageContext = createContext(); 

function App() {
  
  const article = {
    description: "Article description:",
    preview:
      "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
    content:
      "Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.",
  };

  const [isShow, setIsShow] = useState('Read');
   const [read, setRead] = useState(false);
   const [lang, setLang] = useState('EN');
   const [isUnreadClicked, setIsUnreadClicked] = useState(false);

   const EN = {
    title: 'NVIDIA News',
    article__title: 'Article description',
    author_name: 'Author: Mike',
    author_date: 'Published: 06.12.2022',
    author_theme: 'Theme: Video cards',
    mark_button: 'Mark as read',
    read_button: 'Read',
    close_button: 'Close',
    not_read_button: 'Mark as unread',
    ua_button: 'UA',
    en_button: 'EN',
  };
  const UA = {
    title: 'Новини NVIDIA',
    article__title: 'Опис статті',
    author_name: 'Автор: Майк',
    author_date: 'Опубліковано: 06.12.2022',
    author_theme: 'Тема: відео карти',
    mark_button: 'Прочитано',
    read_button: 'Читати',
    close_button: 'Закрити',
    not_read_button: 'Не прочитано',
    ua_button: 'UA',
    en_button: 'EN',
  };
   
   const toggleArticle = () => {
    setIsShow(!isShow);
    }
    const markRead = () => {
      setRead(true);
      setIsUnreadClicked(false);
    }
    const markUnRead = () => {
     setRead(false);
     setIsUnreadClicked(true);
    }
      const setLangUA = () => {
     setLang('UA');
   };
   const setLangEN = () => {
     setLang('EN');
   };
   const language = lang === 'UA' ? UA : EN;

  return (
    <LanguageContext.Provider value={{ lang, setLangUA, setLangEN }}>
    <div className="wrapper">
      <h1 className="title">{language.title}</h1>
      <div className="article">
          <Article text={article} show={isShow}  read={read}>
          <div className="article__title">
          <h2>{language.article__title}</h2>
          </div>
           </Article>
           <ArticleAuthor authorName={language.author_name} authorDate={language.author_date} author_theme={language.author_theme} />
         <div className="article__actions">
          <button onClick={markRead} className="article__btn" > {language.mark_button}</button>
          <button onClick={toggleArticle} className="article__btn">{isShow ? language.close_button : language.read_button}</button>
          <button onClick={markUnRead} className="article__btn">{language.not_read_button}</button>
        </div>
      </div>
      <div className="lang">
        <button onClick={setLangUA} className="lang-btn">{language.ua_button}</button>
        <button onClick={setLangEN} className="lang-btn">{language.en_button}</button>
      </div>
       </div>
       </LanguageContext.Provider>
    );
}
export default App;
