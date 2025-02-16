import React from "react";
import "../Services/Services.css";
import CustomBlocks from "../../components/CustomBlocks/CustomBlocks";
import "./About.css";
const About = () => {
  const languages = [
    {
      name: "Python",
      content: [
        "I am proficient in Python, I enjoy solving complex problems and continuously improving my coding skills.",
      ],
    },
    {
      name: "JavaScript",
      content: [
        "Used HTML, CSS, and JavaScript to build dynamic and responsive web applications, creating engaging user interfaces with smooth interactions and modern design principles. Several projects have been completed using these technologies, including multiple portfolios, quiz games",
      ],
    },
    {
      name: "C/C++",
      content: [
        "I am using C and C++ to solve DSA problems efficiently, leveraging their speed and powerful standard libraries to implement complex algorithms and data structures.",
      ],
    },
  ];
  const frameworks = [
    {
      name: "React JS",
      content: [
        "I am proficient in React and have built many dynamic and responsive web applications using this powerful library",
      ],
    },
    {
      name: "Flask",
      content: [
        "I recently started working with Flask for web development and have become proficient in it. I have successfully built full-stack applications using Flask, including a project focused on SOS feature.",
      ],
    },
    {
      name: "React Native",
      content: [
        "I recently got into Android development and started working with React Native. I am now proficient in it and have successfully built high-performance mobile applications. One of my notable projects is a full-stack application designed to empower safety at times of emergency.",
      ],
    },
  ];
  return (
    <>
      <div name="About" className="about-section">
        <CustomBlocks
          name={"ABOUT ME"}
          title={"Student at Kendriya Vidyalaya"}
          contentsList={[
            "Joined on April 2, 2019",
            "It was Exciteful journey and an opportunity to study at K.V",
            "Cleared Boards in 2024 with PCM",
          ]}
        />
        <CustomBlocks
          isName={false}
          title={"Studying in Rayat Bahra University"}
          contentsList={[
            "Joined on Aug 24, 2024",
            "Currently persuing Bachelors in Computer Application",
          ]}
        />

        <CustomBlocks title={"Languages"} isName={false} />
        {languages.map((language) => (
          <CustomBlocks
            name={language.name}
            isTitle={false}
            contentsList={language.content}
          />
        ))}

        <CustomBlocks title={"Frameworks"} />
        {frameworks.map((framework) => (
          <CustomBlocks
            name={framework.name}
            contentsList={framework.content}
          />
        ))}
      </div>
    </>
  );
};

export default About;
