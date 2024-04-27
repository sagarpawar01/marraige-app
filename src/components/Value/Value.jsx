import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
  MdOutlineArrowDropUp,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";
// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {

  const [activeDiv, setActiveDiv] = useState(null);

  const handleDivClick = (divNumber) => {
    setActiveDiv(divNumber);
  };

  return (
    <section id="value" className="v-wrapper">
       <div className="headingText">Our Value</div>
      <div className="paddings innerWidth flexCenter v-container">

        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
        <div class="uk-container uk-padding">
    <div class="uk-timeline">
        <div class={`uk-timeline-item ${activeDiv >= 1 ? 'active' : ''}`} onClick={() => handleDivClick(1)}>
            <div class="uk-timeline-icon"></div>
            <div class="uk-timeline-content">
                <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <h3 class="uk-card-title"><time datetime="2020-07-08">Beat in the Market</time></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class={`uk-timeline-item ${activeDiv >= 2 ? 'active' : ''}`} onClick={() => handleDivClick(2)}>
            <div class="uk-timeline-icon"></div>
            <div class="uk-timeline-content">
                <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <h3 class="uk-card-title"><time datetime="2020-07-07">Unbeatabe price</time></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
				<div class={`uk-timeline-item ${activeDiv >= 3 ? 'active' : ''}`} onClick={() => handleDivClick(3)}>
            <div class="uk-timeline-icon"></div>
            <div class="uk-timeline-content">
                <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <h3 class="uk-card-title"><time datetime="2020-07-06">Extensive range of vendors</time></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


          {/* <span className="orangeText">Our Value</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            At Craft My Event, we make excellence our standard.
            <br />
            From creative concepts to flawless execution, we ensure your event leaves a lasting impression.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={true}
          preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [expanded, setExpanded] = useState(false);

              const toggleAccordion = () => {
                setExpanded(prevExpanded => !prevExpanded);
              };

              const collapseAccordion = () => {
                setExpanded(false);
              };

              return (
                <AccordionItem className={`accordionItem ${expanded ? "expanded" : "collapsed"}`} uuid={i} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton" onClick={toggleAccordion}>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        {expanded ? <MdOutlineArrowDropUp size={20} /> : <MdOutlineArrowDropDown size={20} />}
                      </div>
                    </AccordionItemButton>
                    {expanded && (
                      <button className="collapseButton" onClick={collapseAccordion}>
                        Collapse
                      </button>
                    )}
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion> */}

        </div>
      </div>
    </section>
  );
};

export default Value;
