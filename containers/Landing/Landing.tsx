import ReactMarkdown from "react-markdown";
import { MainContainer } from "components/MainContainer";
import { Header } from "components/Header";
import {
  TodayArticleSection,
  TodayArticleContentBox,
  PopularPostSection,
} from "./Landing.style";
import Image from "next/image";

interface landingProps {
  article: {
    isOk: boolean;
    imgUrl: string;
    content: string;
  };
}

export function Landing({ article }: landingProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <TodayArticleSection>
          <h2>오늘의 초록이</h2>
          <TodayArticleContentBox>
            <div className="imgWrapper">
              <img src={`http://localhost:8080${article.imgUrl}`} alt="" />
              <Image
                src={`http://localhost:8080${article.imgUrl}`}
                width="90%"
                height="90%"
                layout="responsive"
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="boundary"></div>
            <div className="contentBox">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </TodayArticleContentBox>
        </TodayArticleSection>
        <PopularPostSection></PopularPostSection>
      </MainContainer>
    </>
  );
}
