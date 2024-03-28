import Layout from "../../components/layout";
import { getSortedPostsData, getPostDataByCategory } from "../../lib/posts";
//import fs from "fs";
//import path from "path";
//import matter from "gray-matter";
// Add this import
import Head from "next/head";
import Link from "next/link";
//import Date from "../../components/date";
//import utilStyles from '../../styles/utils.module.css';
import Image from "next/image";

//const postsDirectory = path.join(process.cwd(), "posts");

// type Post = {
//   slug: string,
//   title: string,
//   pubDate: string,
//   description: string,
//   draft: boolean,
//   author: string,
//   image: string,
//   tags: string[],
//   categories: string,
//   summary: string,
// };

export default function Category({ filteredPosts }) {
  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />
      <div className="category-content col-md-9">
        <h3 className="category-title">Category: </h3>
        <ul>
          {filteredPosts.map((post) => (
            <div key={post.slug} className="d-md-flex post-entry-2 half">
              <Link href={`/posts/${post.slug}/`} className="me-4 thumbnail">
                <Image
                  src={post.image}
                  alt=""
                  width={500}
                  height={300}
                  className="img-fluid "
                />
              </Link>
              <div>
                <div className="post-meta">
                  <span className="date">{post.categories}</span>{" "}
                  <span className="mx-1">&bullet;</span>{" "}
                </div>
                <h3>
                  <Link href={`/posts/${post.slug}/`}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <div className="d-flex align-items-center author">
                  <div className="name">
                    <h3 className="m-0 p-0">{post.author}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const allPosts = await getSortedPostsData();

  const uniqueCategories = [
    ...new Set(allPosts.map((post) => post.categories).flat()),
  ];
  //console.log(uniqueCategories);

  const paths = uniqueCategories.map((categories) => ({
    params: { categories },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filteredPosts = await getPostDataByCategory(params.categories);

  return {
    props: {
      filteredPosts,
    },
  };
}
