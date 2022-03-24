import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { MainContainer } from "components/MainContainer";
import { TodayArticleSection } from "./Landing.style";

export function Landing({ article }: any) {
  return (
    <>
      <header></header>
      <MainContainer>
        <TodayArticleSection>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </TodayArticleSection>
      </MainContainer>
    </>
  );
}
