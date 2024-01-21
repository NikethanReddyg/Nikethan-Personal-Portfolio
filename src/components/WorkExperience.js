import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import WorkExperienceIcon from './WorkExperienceIcon'; // Replace with your own icon component
import OptumIcon from '../assets/img/Optum.png'
import AmazonIcon from '../assets/img/amazonLogo.png'
import SmartKnowerIcon from '../assets/img/Smart Knower.png'

const WorkExperience = () => {
  return (
    <section className="work-experience" id="work-experience">
      <h2 className="text-center" style={{ paddingTop: '20px'}}>Work Experience</h2><br/><br/>
      <VerticalTimeline>

      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'grey', color: 'white' }}
          date="May 2021 - June 2021"
          iconStyle={{ background: 'grey', color: 'white' }}
        //   icon={<WorkExperienceIcon />}
        >
            <img src={SmartKnowerIcon} alt='Smart Knower Logo'/><br /><br />
          <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Smart Knower, Bangalore, India</h4>
          <p>
            Worked on the project titled "Covid 19 Pandemic Analysis" as part of the internship program.<br/><br/>
            Developed insightful visualizations and reports using Tableau to present key findings and trends related to the pandemic.<br/><br/>
            Collaborated with the team to explore advanced machine learning models for predicting Covid-19 outcomes.<br/><br/>
            Additionally, created a real-time website to showcase the Covid-19 analysis and provide interactive visualizations to users.<br/><br/>
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'black', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="January 2022 - June 2022"
          iconStyle={{ background: 'black', color: 'white' }}
        //   icon={<WorkExperienceIcon />}
        >
            <img src={AmazonIcon} alt='amazon logo' /><br /><br />
          <h3 className="vertical-timeline-element-title">Software Development Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Amazon, Hyderabad, India</h4>
          <p>
            Worked on the project titled "Enhance Meteor Self Service with CTI Information and Add Service Registration Feature in Meteor Self Service." <br/><br/>
            Successfully completed all project requirements, showcasing strong technical skills and problem-solving abilities. <br/><br/>
            Contributed to enhancing the functionality and user experience of the Meteor Self Service portal. <br/><br/>
            Developed and implemented new features to improve customer satisfaction and streamline service registration processes. <br/><br/>
          </p>
        </VerticalTimelineElement>

        
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'grey', color: 'white' }}
          date="July 2023 - December 2024"
          iconStyle={{ background: 'grey', color: 'white' }}
        >
        <img src={OptumIcon} alt='Optum Logo'/><br /><br />
          <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Optum, Hyderabad, India</h4>
          <p>
            Collaborate on developing and enhancing existing chatbot systems, improving their functionality and performance.<br/><br/>
            Design and implement new chatbots using advanced natural language processing (NLP) techniques and machine learning algorithms.<br/><br/>
            Utilize Terraform to write Infrastructure as Code (IAC) for deploying Azure applications, ensuring efficient and scalable infrastructure setup.<br/><br/>
            Work closely with cross-functional teams to gather requirements and implement infrastructure changes using Terraform.<br/><br/>
            Utilize technologies such as Microsoft Azure, React, Jenkins, Cosmos DB, JavaScript, and Terraform to deliver robust and scalable solutions.<br/><br/>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default WorkExperience;
