import type { GetStaticProps } from "next";
import axios from "axios";
import { Landing } from "containers/Landing";

interface staticProps {
  data: {
    isOk: boolean;
    imgUrl: string;
    content: string;
  };
}

function Home({ data }: staticProps) {
  return <Landing article={data} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get("http://localhost:8080/api/todays/article");
  return {
    props: { data: res.data },
    revalidate: 60,
  };
};

export default Home;
