import { useEffect, useState } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";

interface VideoData {
  video: {
    videoId: string;
    lengthText: string;
    title: string;
    channelName: string;
    viewCountText: string;
    publishedTimeText: string;
  };
}

interface HomeProps {
  data: VideoData[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return <div>{/* Your UI components */}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.query;
  const header = {
    "X-RapidAPI-Key": process.env.NEXT_APP_API_KEY,
    "X-RapidAPI-Host": RapidAPI - Host,
  };

  let responseData: VideoData[];

  if (query) {
    const options = {
      method: "GET",
      url: "https://youtube-search-and-download.p.rapidapi.com/search",
      params: {
        query: query,
        hl: "en",
        type: "v",
      },
      headers: header,
    };

    const response = await axios.request(options);
    responseData = response.data.contents;
  } else {
    const options = {
      method: "GET",
      url: "https://youtube-search-and-download.p.rapidapi.com/trending",
      params: { hl: "en" },
      headers: header,
    };

    const response = await axios.request(options);
    responseData = response.data.contents;
  }

  return {
    props: {
      data: responseData,
    },
  };
};

export default Home;
