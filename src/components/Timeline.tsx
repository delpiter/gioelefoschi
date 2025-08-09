import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBook, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ background: '#6702ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h3 className="vertical-timeline-element-title">University of Bologna (Alma Mater Studiorum)</h3>
            <h4 className="vertical-timeline-element-subtitle">Cesena, Italy</h4>
            <p>
              Bachelor Degree in Computer Science and Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2023 - Nov 2023"
            iconStyle={{ background: '#6702ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Rome, Italy <i style={{ fontSize: '0.6em' }}>Full Remote</i></h4>
            <p>
              Developement of an application to reassemble fragments of ancient frescoes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 - Sep 2023"
            iconStyle={{ background: '#6702ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Rome, Italy <i style={{ fontSize: '0.6em' }}>Full Remote</i></h4>
            <p>
              Migration of Liferay framework version for Maize.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023 - Jul 2023"
            iconStyle={{ background: '#6702ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Rome, Italy <i style={{ fontSize: '0.6em' }}>Full Remote</i></h4>
            <p>
              Developement of a web app prototype for remote script management within the Workplace project.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - Jul 2022"
            iconStyle={{ background: '#6702ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faFolderOpen} />}
          >
            <h3 className="vertical-timeline-element-title">Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Mercato Saraceno, Italy</h4>
            <p>
              Part of the project "<i>Mercato Trifase</i>".
              Developement of a complete web-app for the management of the town hall finaces
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2018 - Jun 2023"
            iconStyle={{ background: '#6702ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h3 className="vertical-timeline-element-title">ITT Technical Institute</h3>
            <h4 className="vertical-timeline-element-subtitle">Cesena, Italy</h4>
            <p>
              High School Diploma, Computer Science
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;