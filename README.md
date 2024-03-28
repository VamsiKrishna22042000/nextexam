This is a starter template for [Learn Next.js](https://nextjs.org/learn).

npm i aos bootstrap-icons

change layout.js:

# Enclose header and footer in _app.js

# Put <link rel="stylesheet"> in _document.js

# Google fonts to be imported in _app.js as under:

`   
import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-eb_garamond",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
  variable: "--playfair_display",
  display: "swap",
}); 
` 

# sass to be installed as dev dependency
npm install --save-dev sass   

#  Backup of [categories].js

import Layout from "../../components/layout";
import { getPostDataByCategory } from "../../lib/posts";
//import fs from "fs";
//import path from "path";
//import matter from "gray-matter";
// Add this import
import Head from "next/head";
import Link from "next/link";
//import Date from "../../components/date";
//import utilStyles from '../../styles/utils.module.css';

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
  //let posts = filteredPosts.map((obj) => Object.values(obj));
  //posts = filteredPosts.map(Object.values);
  console.log(filteredPosts);
  console.log(typeof filteredPosts);
  console.log(filteredPosts.filteredPosts);
  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />
      <ul>
        {filteredPosts.filteredPosts.flat().map((post) => (
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
  //const allPosts = await getSortedPostsData();
  // const fileNames = fs.readdirSync(postsDirectory);
  // const allPosts = fileNames.map((fileName) => {
  //   // Remove ".md" from file name to get slug
  //   const slug = fileName.replace(/\.mdx$/, "");

  //   // Read markdown file as string
  //   const fullPath = path.join(postsDirectory, fileName);
  //   const fileContents = fs.readFileSync(fullPath, "utf8");

  //   // Use gray-matter to parse the post metadata section
  //   const matterResult = matter(fileContents);

  //   // Combine the data with the slug
  //   return {
  //     slug,
  //     ...matterResult.data,
  //   };
  // });

  // const uniqueCategory = [
  //   ...new Set(allPosts.map((post) => post.categories).flat()),
  // ];

  const paths = [
    { params: { categories: "history" } },
    { params: { categories: "culture" } },
  ];

  //const paths = uniqueCategory;
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  //const allPosts = await getPostData(params.slug);
  // const category = params.categories;
  // console.log(category);
  // const fileNames = fs.readdirSync(postsDirectory);
  // const allPosts = fileNames.map((fileName) => {
  //   // Remove ".md" from file name to get slug
  //   const slug = fileName.replace(/\.mdx$/, "");

  //   // Read markdown file as string
  //   const fullPath = path.join(postsDirectory, fileName);
  //   const fileContents = fs.readFileSync(fullPath, "utf8");

  //   // Use gray-matter to parse the post metadata section
  //   const matterResult = matter(fileContents);

  //   // Combine the data with the slug
  //   return {
  //     slug,
  //     ...matterResult.data,
  //   };
  // });
  // const uniqueCategory = [
  //   ...new Set(allPosts.map((post) => post.categories).flat()),
  // ];

  // console.log(uniqueCategory);

  // let filteredPosts = [];

  // uniqueCategory.map((category) => {
  //   filteredPosts.push(
  //     allPosts.filter((post) => post.categories.includes(category))
  //   );
  // });

  let posts = await getPostDataByCategory(params.categories);
  const filteredPosts = JSON.parse(JSON.stringify(posts));

  console.log("Inside GetStaticProps");
  //for (let i = 0; i < filteredPosts.length; i++) {
  //console.log(filteredPosts[0].title);
  //}
  console.log(filteredPosts);
  console.log(typeof filteredPosts);
  console.log(Array.isArray(filteredPosts.filteredPosts));
  return {
    props: {
      filteredPosts,
    },
  };
}

# Integration with React SPA
  Install axios -> npm i axios
  Install js-cookie -> npm i js-cookie
  Install npm i react-icons
  Install npm i react-toastify
  Don't Install npm i react-router-dom




