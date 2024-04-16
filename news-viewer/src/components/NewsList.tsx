import { useEffect, useState } from "react";
import "../styles/NewsList.scss";
import NewsItem from "./NewsItem";
import axios from "axios";

type MyProps = {
  category: string;
};

const NewsList = ({ category }: MyProps) => {
  const [articles, setArticles] = useState<
    | {
        title: string;
        description: string;
        url: string;
        urlToImage: string;
      }[]
    | null
  >(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=68a28dd822344f2eb51e7a34d6ac34ed`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <div className="NewsList">대기 중...</div>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  return (
    <div className="NewsList">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
