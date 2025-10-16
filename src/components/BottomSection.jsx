import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";
import styles from "./BottomSection.module.scss";
import FAQSection from "./FAQSection";

console.log(blogs);

const BottomSection = () => {
  const last5Blogs = [
    blogs[blogs.length - 1],
    blogs[blogs.length - 2],
    blogs[blogs.length - 3],
    blogs[blogs.length - 4],
    blogs[blogs.length - 5],
  ];
  console.log(last5Blogs);
  return (
    <div className={styles.bottomContainer}>
      {/* Recent Blogs */}
      <div className={styles.recentBlogs}>
        <h4>Recent Blogs</h4>
        {last5Blogs.map((blog) => (
          <Link key={blog.id}>{blog.title}</Link>
        ))}
      </div>

      {/* FAQ */}
      <FAQSection />

      {/* Contact */}
      <div className={styles.contactDiv}>
        <h3>Contact</h3>
        <p>
          Viber:{" "}
          <span>
            <a href="tel:+381601234567">+381 60 123 4567</a>
          </span>
        </p>
        <p>
          WhatsApp:{" "}
          <span>
            <a href="tel:+381601234567">+381 60 123 4567</a>
          </span>
        </p>
        <p>
          Email:{" "}
          <span>
            <a href="mailto:lukajokic@ymail.com">lukajokic@ymail.com</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default BottomSection;
