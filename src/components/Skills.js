import 'react-multi-carousel/lib/styles.css';


import { FaCode, FaDatabase, FaCloud, FaTools, FaLanguage, FaCogs, FaBrain, FaFileCode, FaCodeBranch, FaDesktop } from 'react-icons/fa';

export const Skills = () => {
  const skillsData = [
    { icon: <FaCode />, title: 'Programming Languages', skills: 'Java, JavaScript, Python' },
    { icon: <FaDesktop />, title: 'Web Development', skills: 'HTML, CSS, React, Angular' },
    { icon: <FaDatabase />, title: 'Databases', skills: 'MySQL, MongoDB, PostgreSQL' },
    { icon: <FaCloud />, title: 'Cloud Platforms', skills: 'Microsoft Azure, AWS, Google Cloud Platform' },
    { icon: <FaTools />, title: 'DevOps', skills: 'Jenkins, Docker, Kubernetes, Terraform' },
    { icon: <FaBrain />, title: 'NLP & Machine Learning', skills: 'NLP techniques, Machine learning, TensorFlow, PyTorch, scikit-learn' },
    { icon: <FaCodeBranch />, title: 'Big Data Technologies', skills: 'Hadoop, Spark' },
    { icon: <FaFileCode />, title: 'Version Control', skills: 'Git' },
    { icon: <FaCogs />, title: 'Operating Systems', skills: 'Linux, Windows' },
  ];

  return (
    <section className="skill" id="skills" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container">
        <div className="row" >
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>Here are some of the technical skills I possess:</p>
              <div className="card-container">
                {skillsData.map((skill, index) => (
                  <div className="card" key={index} style={{ backgroundColor: 'black', color: 'white' }}>
                    <div className="icon">{skill.icon}</div>
                    <h5>{skill.title}</h5>
                    <p>{skill.skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

