import Layout from "../../components/layout";
import { getSortedPostsData, getPostDataByTag } from "../../lib/posts";
//import fs from "fs";
//import path from "path";
//import matter from "gray-matter";
// Add this import
import Head from "next/head";
import Link from "next/link";
//import Date from "../../components/date";
//import utilStyles from '../../styles/utils.module.css';
//import { getSortedPostsData } from "./../../lib/posts";

export default function Tags({ filteredPosts }) {
  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}/`}>
              <h1>{post.title}</h1>
            </Link>
            <h3>{post.description}</h3>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticPaths() {
  const allPosts = await getSortedPostsData();

  const uniqueTags = [...new Set(allPosts.map((post) => post.tags).flat())];
  //console.log(uniqueTags);

  const paths = uniqueTags.map((tags) => ({
    params: { tags },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filteredPosts = await getPostDataByTag(params.tags);

  return {
    props: {
      filteredPosts,
    },
  };
}
