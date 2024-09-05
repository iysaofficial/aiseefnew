import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const defaultAccordion = [
  {
    title: "1. When will the presentation schedule be given by the committee?",
    text: "We will provide a presentation schedule no later than 2 days before the judging takes place or it could be earlier, and we will send it via the WA group and also the team leaders e-mail.",
  },
  {
    title: "2. What application used for online presentation? Zoom, Google Meet or something else?",
    text: "For online judging, we always use the Zoom application and make sure your Zoom application is up to date.",
  },
  {
    title: "3. When will the zoom link be given by the committee?",
    text: "We will provide a Zoom link on the judging day, and we will send it periodically to the group according to your teams presentation time.",
  },
  {
    title: "4. how many zoom accounts can join and what should i set my name",
    text: 'You can enter Zoom with a maximum of 5 accounts for participants, and all Zoom accounts must follow the name format that we have provided, namely "Room Number_Team Leader Name_Institution Name',
  },
  {
    title: "5. how long will the participants make the presentation?",
    text: "You will be given 15 minutes for 1 presentation session which will be divided into 2, namely the initial 7 minutes for the presentation and the final 8 minutes for the question and answer session with the jury.",
  },
  {
    title: "6. How many judges will come to the offline participants booth?",
    text: "Just like online judging, there will be 2 judges judging each team. And after being judged you will be given a sticker as a sign that your booth has been judged, make sure you get 2 stickers",
  },
  {
    title: "7. Can we tidy up our booth after being judged?",
    text: "You can start tidying up the booth when all the teams have finished being judged, so if you have finished judging you can visit the booths of other participants first.",
  },
];

const AccordionBlog2 = () => {
  const [activeDefault, setActiveDefault] = useState(0);

  return (
    <Accordion className="accordion dlab-accordion faq-1 box-sort-in m-b30" defaultActiveKey="0">
      {defaultAccordion.map((d, i) => (
        <Accordion.Item eventKey={`${i}`} key={i}>
          <Accordion.Header
            onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
            className={` ${activeDefault === i ? "" : "collapsed"}`}
          >
            {d.title}
          </Accordion.Header>
          <Accordion.Body>
            {d.text}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export { defaultAccordion };
export default AccordionBlog2;
