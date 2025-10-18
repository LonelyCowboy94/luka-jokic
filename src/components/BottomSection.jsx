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
    <>
    <div className={styles.bottomContainer}>
      {/* Recent Blogs */}
      <div className={styles.recentBlogs}>
        <h4>Recent Blogs</h4>
        {last5Blogs.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.slug}`}>{blog.title}</Link>
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
            <a href="tel:+381612214049">+381612214049</a>
          </span>
        </p>
        <p>
          WhatsApp:{" "}
          <span>
            <a href="tel:+381612214049">+381612214049</a>
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
    <div className="divider"></div>
    <p className={styles.lastSentence}>In a world overflowing with content, authenticity has become the rarest form of art.
My work is driven by a simple principle — to create with intention.
Every frame, every sound, every cut has a purpose.
It’s not just about what you see, but how it makes you feel.
That’s the kind of storytelling I believe in.</p>
    </>
  );
};

export default BottomSection;
