import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PaycomIcon from '../assets/img/paycom.jpeg';
import OptumIcon from '../assets/img/Optum.png';
import AmazonIcon from '../assets/img/amazonLogo.png';
import SmartKnowerIcon from '../assets/img/Smart Knower.png';

const WorkExperience = () => {
  return (
    <section className="work-experience" id="work-experience">
      <h2 className="text-center" style={{ paddingTop: '20px' }}>Work Experience</h2><br /><br />
      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'black', color: 'white' }}
          date="May 2025 - Present"
          iconStyle={{ background: 'black', color: 'white' }}
        >
          <img src={PaycomIcon} alt='Paycom Logo' /><br /><br />
          <h3 className="vertical-timeline-element-title"><strong>Software Development Intern</strong></h3>
          <h4 className="vertical-timeline-element-subtitle">Paycom, Irving, Texas</h4>
          <p>
            • <strong>Full-stack development</strong> and design of a sophisticated real-time request management system for hardware resource allocation, enhancing operational efficiency, resource accessibility, and user engagement.<br /><br />
            • <strong>Tech Stack:</strong> React, Node.js (Express.js), GraphQL (Apollo Client & Server), Python, Google Gemini API, PostgreSQL, Redis, Docker, Kubernetes, AWS (ECS, RDS, Lambda), Figma<br /><br />
            • <strong>Real-Time Queue Management:</strong> Engineered an interactive queue management system enabling developers to check out auxiliary ports (Auxports), implementing dynamic user notifications upon availability through integration with Apollo GraphQL for efficient state management and real-time data updates.<br /><br />
            • <strong>Database Sharding & Permissions:</strong> Developed backend microservices to facilitate precise access control and real-time interactions with specific database shards, ensuring security compliance and enabling rapid data retrieval critical for client-impacting research.<br /><br />
            • <strong>AI Integration & Notifications:</strong> Integrated Google Gemini for AI-driven analytics and intelligent notification services, significantly enhancing decision-making capabilities and optimizing resource utilization.<br /><br />
            • <strong>End-to-End Project Lifecycle:</strong> Conducted comprehensive project planning, from initial design using Figma for high-quality dashboard prototyping, through full-stack implementation, testing, and deployment using Docker and Kubernetes on AWS ECS, resulting in streamlined development processes and rapid iteration cycles.<br /><br />
            • <strong>Performance & Scalability:</strong> Implemented Redis caching and optimized PostgreSQL database interactions to achieve rapid response times, sustaining high concurrency and providing seamless user experiences.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'grey', color: 'white' }}
          date="Jul 2022 - Dec 2023"
          iconStyle={{ background: 'grey', color: 'white' }}
        >
          <img src={OptumIcon} alt='Optum Logo' /><br /><br />
          <h3 className="vertical-timeline-element-title"><strong>Software Engineer</strong></h3>
          <h4 className="vertical-timeline-element-subtitle">UnitedHealth Group (Optum), Hyderabad, India</h4>
          <p>
            • Full-stack development of an <strong>AI-driven healthcare chatbot</strong> platform with focus on microservices architecture, cloud infrastructure, and performance optimization.<br /><br />
            • <strong>Tech Stack:</strong> React (TypeScript), Azure OpenAI (GPT-3.5), Azure Functions (Node.js), Azure Cosmos DB, MongoDB, Redis, Terraform, GitHub Actions, Microsoft LUIS<br /><br />
            • <strong>Chatbot Performance:</strong> Executed front-end migration from AngularJS to React (TypeScript) with code-splitting (lazy loading), reducing initial UI load time by 67%.<br /><br />
            • <strong>Database Optimization:</strong> Led migration of chatbot data from MongoDB to Azure Cosmos DB, achieving 30% faster query response times for high-latency operations.<br /><br />
            • <strong>DevOps Modernization:</strong> Spearheaded CI/CD pipeline migration from Jenkins to GitHub Actions, streamlining workflows and cutting deployment time by 30%.<br /><br />
            • <strong>Infrastructure as Code:</strong> Implemented automated cloud provisioning with Terraform on Azure, reducing environment setup time by 25% and improving scalability.<br /><br />
            • <strong>NLP & AI Enhancement:</strong> Integrated Azure OpenAI GPT-3.5 services and optimized NLP models (Microsoft LUIS), boosting intent detection accuracy by 15% and increasing chatbot self-service resolution rate by 20%.<br /><br />
            • <strong>Scalable Architecture:</strong> Refactored the monolithic chatbot system into a microservices architecture using containerized Node.js services and Python FastAPI components.<br /><br />
            • <strong>Cross-Functional Leadership:</strong> Collaborated with product, design, and QA teams to align technical solutions with business goals, improving project delivery timelines by 15% and elevating stakeholder satisfaction.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'black', color: 'white' }}
          date="Jan 2022 - Jun 2022"
          iconStyle={{ background: 'black', color: 'white' }}
        >
          <img src={AmazonIcon} alt='Amazon Logo' /><br /><br />
          <h3 className="vertical-timeline-element-title"><strong>Software Development Engineer Intern</strong></h3>
          <h4 className="vertical-timeline-element-subtitle">Amazon, Hyderabad, India</h4>
          <p>
            • Full-stack development of internal automation tools and platform migration in a large-scale cloud environment.<br /><br />
            • <strong>Tech Stack:</strong> Java (Spring Boot), Node.js, AngularJS, AWS (EC2, S3, Lambda, DynamoDB), Docker, Kubernetes<br /><br />
            • <strong>Service Automation:</strong> Developed a self-service registration tool for an internal platform (“Meteor”) using AWS Lambda and DynamoDB, reducing manual effort by 50%, cutting onboarding time by 2 weeks, and saving ~1 month of engineering work annually.<br /><br />
            • <strong>Platform Enhancement:</strong> Built a new feature enabling users to manage plugin ownership (Node.js + AngularJS UI), eliminating manual admin steps and improving user experience (reducing support tickets by ~30%).<br /><br />
            • <strong>Process Automation:</strong> Implemented an automated change-request pipeline using AWS serverless workflows (Step Functions + S3), increasing operational efficiency by 20%.<br /><br />
            • <strong>Tech Stack Migration:</strong> Contributed to re-architecting the legacy platform into containerized microservices on Kubernetes (EKS) and updated the front-end framework, resulting in ~30% performance improvement.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'grey', color: 'white' }}
          date="May 2021 - Jun 2021"
          iconStyle={{ background: 'grey', color: 'white' }}
        >
          <img src={SmartKnowerIcon} alt='Smart Knower Logo' /><br /><br />
          <h3 className="vertical-timeline-element-title"><strong>Software Engineer Intern</strong></h3>
          <h4 className="vertical-timeline-element-subtitle">Smart Knower, Bangalore, India</h4>
          <p>
            • Developed high-performance, cross-platform network analysis tools leveraging advanced serialization techniques and optimized frontend rendering.<br /><br />
            • <strong>Tech Stack:</strong> Electron, JavaScript, Java, Clusterize.js, Google Protocol Buffers, Socket Programming<br /><br />
            • <strong>Cross-Platform Application:</strong> Designed and implemented a scalable client-server network analyzer using Electron, supporting seamless data packet analysis on Windows, macOS, and Linux.<br /><br />
            • <strong>Frontend Optimization:</strong> Integrated Clusterize.js to optimize data visualization, reducing buffer/rendering times for large datasets by over 95%.<br /><br />
            • <strong>Real-Time Communication:</strong> Developed a robust socket-based communication framework within Electron, ensuring efficient real-time data packet delivery and visualization.<br /><br />
            • <strong>Serialization Improvement:</strong> Achieved a 10x acceleration in data transfer efficiency by transitioning from JSON to Google Protocol Buffers, significantly minimizing network latency and bandwidth utilization.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </section>
  );
};

export default WorkExperience;
