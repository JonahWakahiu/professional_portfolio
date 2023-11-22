import Info from "../../components/Info";
import { FaDownload } from "react-icons/fa";
import "./about.css";
import Stats from "../../components/Stats";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import Resume from "../../components/Resume";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section_title">
          About <span>Me</span>
        </h2>

        <div className="about_container grid">
          <div className="about_info">
            <div className="section_subtitle">Personal Infos</div>
            <h3>
              <ul className="info_list grid">
                <Info />
              </ul>

              <a href="" className="button">
                Download Cv
                <span className="button_icon">
                  <FaDownload />
                </span>
              </a>
            </h3>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="page_divider"></div>

      <section className="skills">
        <h3 className="section_container subtitle_center">My Skills</h3>

        <div className="skills_container grid">
          <Skills />
        </div>
      </section>
      <div className="page_divider"></div>

      <section className="resume">
        <h3 className="section_subtitle subtitle_center">
          Experience & Education
        </h3>

        <div className="resume_container grid">
          <div className="resume_data">
            {resume.map((val, index) => {
              if (val.category === "experience") {
                return <Resume key={index} {...val} />;
              }
            })}
          </div>
          <div className="resume_data">
            {resume.map((val, index) => {
              if (val.category === "education") {
                return <Resume key={index} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
