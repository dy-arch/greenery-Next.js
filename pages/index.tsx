import type { GetServerSideProps } from "next";
import axios from "axios";
import { Landing } from "containers/Landing";

interface landingData {
  data: {
    isOk: boolean;
    imgUrl: string;
    content: string;
  };
}

function Home({ data }: landingData) {
  return <Landing article={data} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:8080/api/todays/article");
  return { props: { data: res.data } };
};

export default Home;
