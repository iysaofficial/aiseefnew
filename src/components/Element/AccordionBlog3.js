import React, { useState } from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';

const defaultAccordion = [
  {
    title: '1. When will the winners be announced?',
    text: 'Announcement of winners is held on the last day of each event, you can check the date on the schedule listed in the Guide Book.',
  },
  {
    title: '2. Where can we see the winning results?',
    text: 'You can check the final results on the official website of the event you are participating in.',
  },
  {
    title: '3. When will the E-certificate be sent?',
    text: 'IYSA DOES NOT send E-Certificates to National participants or Indonesian Participants who take part in online events. Online National Participants will only receive a certificate in printed/hard form which will later be sent along with the medals via the JNE expedition.',
  },
  {
    title: '4. When is the online delivery of participant certificates?',
    text: 'The certificate will be sent no later than one month after the announcement of the winner. You can periodically check the delivery receipt that we sent on the Whatsapp group whether your certificate has been sent or not.',
  },
  {
    title: '5. Where can we get a supervisor certificate?',
    text: 'You can see and download the supervisor certificate on the official website of the event you are participating in.',
  },
  {
    title: '6. How to do medal doubling?',
    text: 'For offline participants, you can immediately duplicate the medals on the spot after the announcement of the winners takes place. And for online participants, you can duplicate the medals via the link we sent on the Whatsapp group, we will send duplicate information on the Whatsapp group no later than 2 days after the announcement of the winner.',
  },
];

const AccordionBlog3 = () => {
  const [activeDefault, setActiveDefault] = useState(0);

  return (
    <Accordion className="accordion dlab-accordion faq-1 box-sort-in m-b30" defaultActiveKey="0">
      {defaultAccordion.map((d, i) => (
        <Accordion.Item eventKey={`${i}`} key={i}>
          <Accordion.Header
            onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
            className={` ${activeDefault === i ? '' : 'collapsed'}`}
          >
            {d.title}
          </Accordion.Header>
          <Accordion.Body>
            <div className="acod-content">
              {d.text}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export { defaultAccordion };
export default AccordionBlog3;
