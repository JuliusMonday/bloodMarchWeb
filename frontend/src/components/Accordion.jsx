import  { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importing icons
import './Accordion.css'; // Importing CSS file
const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const faqs = [
    {
      question: "Why is blood group compatibility important?",
      answer: "Blood group compatibility can affect various aspects of a marriage, including health and family planning."
    },
    {
      question: "How accurate are the compatibility results?",
      answer: "Our compatibility results are based on scientific research and expert opinions."
    },
    {
      question: "Can I get personalized advice?",
      answer: "Yes, you can contact our experts for personalized advice."
    },
    {
      question: "What happens if partners have incompatible blood groups?",
      answer: "Incompatible blood groups can lead to complications during pregnancy, such as hemolytic disease of the newborn."
    },
    {
      question: "How can I find out my blood group?",
      answer: "You can find out your blood group through a simple blood test at a medical facility."
    }
  ];

  return (
    <div className="accordion">
    <h1 className="accordion-header">Blood Group Compatibility FAQs</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <h3>{faq.question}</h3>
            {isOpen === index ? <FaMinus /> : <FaPlus />}
          </div>
          {isOpen === index && (
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
