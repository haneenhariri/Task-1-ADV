import { useState } from 'react';
import './Accordion.css';
import { accorData } from '../../data/Accordion';

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className='accordion'>
      {accorData.map((i, index) => (
        <div 
          key={index} 
          className={`accordion-item ${openIndex === index ? 'active' : ''}`}
        >
          <div className='accordion-head' onClick={() => toggleAccordion(index)}>
            <h3>{i.head}</h3>
          </div>
          <div className='accordion-content'>
            <p>{i.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

