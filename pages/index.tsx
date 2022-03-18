import type { NextPage, GetServerSideProps } from "next";
import Landing from "container/Landing/Landing";
import axios from "axios";

interface todaysArticle {
  data: {
    isOk: boolean;
    imgUrl: string;
    content: string;
  };
}

const Home: NextPage<todaysArticle> = ({ data }) => {
  console.log(data);
  return <Landing />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:8080/api/todays/article");
  console.log(res.data);
  return { props: { data: res.data } };
};

export default Home;
