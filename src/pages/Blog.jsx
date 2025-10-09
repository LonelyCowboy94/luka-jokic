import styles from "./Blog.module.scss";
import { blogs } from "../data/blogs";
import { Fragment } from "react";

const Blog = () => {

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Blog</h1>
        <h2>
          Video Editing Tips, Creative Montage Ideas, Professional Insights
        </h2>
      </div>
      <section className={styles.blogs}>
        {blogs.map((blog, index) => {
          return (
            <Fragment key={index}>
              <article className={styles.blogCard}>
                <div>
                  <h2>{blog.title}</h2>
                  <img src={blog.image} alt={`blog-image-${index}`} />
                </div>
                <div>
                  <p>{blog.teaser}</p>
                </div>
                <p className={styles.author}>Posted {formatDate(blog.date)} by <strong>{blog.author}</strong></p>
              </article>
            </Fragment>
          );
        })}
      </section>
    </main>
  );
};

export default Blog;
