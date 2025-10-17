import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import styles from "./BlogPosts.module.scss";

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p>Blog nije pronađen.</p>;

  return (
    <div className={styles.blogPosts}>
      <div className={styles.post}>
        <h1>{blog.title}</h1>
        <img className={styles.img} src={blog.image} alt={blog.title} />

        <p className={styles.date}>
          Posted {blog.date}
        </p>

        {blog.content.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2>{section.subtitle}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
