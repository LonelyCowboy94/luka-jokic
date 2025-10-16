import { useState, useEffect } from "react";
import styles from './FAQSection.module.scss';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    openIndex !== null ? setTimeout(() => {
        setOpenIndex(null)
    }, 2000) : null
  }, [openIndex])

  const faqItems = [
    {
      question: "How can I contact you?",
      answer: "You can reach me via Viber, WhatsApp, or email listed on the right.",
    },
    {
      question: "What services do you offer?",
      answer: "Video production, Motion Design, editing, post-production, and consultations.",
    },
    {
      question: "How long does a project take?",
      answer: "It depends on the project size, typically 1–3 weeks for medium projects.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqDiv}>
      <h3>FAQ</h3>
      {faqItems.map((item, index) => (
        <div className={styles.faqItem} key={index}>
          {openIndex === null && <p className={styles.question} onClick={() => toggleAnswer(index)}>
            {item.question}
          </p>}
          {openIndex === index && <div className={styles.answerDiv}><p className={styles.answer}>{item.answer}</p></div>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
