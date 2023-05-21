import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import { faqs } from "../information/data";
const Faqs = () => {
  return (
    <>
      <div className="faq-area bg-2 ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">FAQ,s</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Here are some most common questions that our clients frequently ask about dental care and procedures. These questions will be helpful for you. Take a look
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img">
                <img src="/img/faq-img.jpg" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  {
                    faqs && faqs.map((faq, index) => {
                      return (
                        <AccordionItem uuid={index}>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <span>{faq.question}</span>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel dangerouslySetInnerHTML={{ __html: faq.answer }}>

                          </AccordionItemPanel>
                        </AccordionItem>
                      )
                    })
                  }

                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
