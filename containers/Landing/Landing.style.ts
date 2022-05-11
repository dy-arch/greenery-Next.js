import styled from "@emotion/styled";

export const TodayArticleSection = styled.section`
  margin-top: 1rem;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgb(222, 249, 246) 0%,
    rgb(249, 235, 222) 100%
  );
  border-radius: 10px;

  h2 {
    padding: 0 5.5rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }
`;

export const TodayArticleContentBox = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: underline;
    font-size: 1.2rem;
  }

  .imgWrapper {
    width: 16rem;
    border-radius: 10px;
    overflow: hidden;
  }

  .boundary {
    width: 1px;
    height: auto;
    background-color: #dbdbdb;
  }

  .contentBox {
    width: 50%;
    padding: 1rem 0;
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.deviceType.tablet}) {
    flex-direction: column;
    align-items: center;

    .imgWrapper {
      width: 70%;
      margin-bottom: 1rem;
    }

    .boundary {
      width: 100%;
      height: 1px;
      background-color: #dbdbdb;
    }

    .contentBox {
      width: 80%;
    }
  }
`;

export const PopularPostSection = styled.section``;
