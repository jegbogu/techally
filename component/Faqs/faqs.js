import React, { useState } from 'react';
import classes from './faqs.module.css'
import Button from '../button';
import Link from 'next/link';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div key={index} className={`accordion-item ${isActive ? 'active' : ''}`}>
        <div
          className={classes.accordionTitle}
          onClick={() => onTitleClick(index)}
        >
          {item.title}
        </div>
        {isActive && <div className={classes.accordionContent}>{item.content}</div>}
      </div>
    );
  });

  return (
    <div className={classes.accordion}>
      {renderedItems}
      <div>
        <Button btn={<Link href='/contact'>Ask A Question</Link>}/>
      </div>

    </div>);
};

export default Accordion;
