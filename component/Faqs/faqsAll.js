import React from 'react';
import Accordion from './faqs';
import classes from './faqs.module.css';

const FaqsAll = () => {
  const accordionItems = [
    {
      title: 'Can I use Joerally for free?',
      content: 'We believe comunication is fundamental human rights, so we also provide a free version of Joerally service to public. We do not serve ads or sell your email content or history',
    },
    {
      title: 'Can I Update a User data?',
      content: 'Yes you can update your user details when neccessary from your dashboard',
    },
    {
      title: 'Can I terminate the use of my services whenever I want?',
      content: 'You can terminate your service through your Dashboard',
    },
  ];

  return (
    <div className={classes.App}>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default FaqsAll;
