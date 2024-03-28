import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
//import utilStyles from "../styles/utils.module.css";
//import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
//import Date from "../components/date";
import HighlightedPosts from "../components/featuredPosts";
import Categories from "../components/categories/categories";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HighlightedPosts />
      <Categories />
    </Layout>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
