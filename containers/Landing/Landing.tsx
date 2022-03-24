import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { MainContainer } from "components/MainContainer";
import { Header } from "components/Header";
import { TodayArticleSection } from "./Landing.style";

export function Landing({ article }: any) {
  return (
    <>
      <Header />
      <MainContainer>
        <TodayArticleSection>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </TodayArticleSection>
      </MainContainer>
    </>
  );
}
