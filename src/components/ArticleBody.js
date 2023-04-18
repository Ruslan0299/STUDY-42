import React, { useContext } from "react";
import { LanguageContext } from "../App";

const translations = {
  EN: {
    description: "Article description:",
    preview:
      "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
    content:
      "Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.",
  },
  UA: {
    description: "Опис статті:",
    preview:
      "NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.",
    content:
      "Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.",
  },
};

function ArticleBody(props) {
  const { read, markRead, markUnRead } = props;
  const languageContext = useContext(LanguageContext);
  const language = translations[languageContext.lang];
  return (
    <div className={read ? "article__body read" : "article__body "}>
      <h3 className="article__description">
        {!props.show && language.description}
      </h3>
      <p className="article__text">
        {props.show ? language.content : language.preview}
      </p>
    </div>
  );
}
export default ArticleBody;