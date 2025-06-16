import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiGithub } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { Code } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-600" />,
        level: 100,
      },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600" />, level: 100 },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" />,
        level: 85,
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        name: "React.js",
        icon: <FaReact className="text-cyan-400" />,
        level: 90,
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-500" />,
        level: 80,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
        level: 100,
      },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 99 },
      {
        name: "GitHub",
        icon: <SiGithub className="text-gray-700 dark:text-white" />,
        level: 90,
      },
      {
        name: "VS Code",
        icon: <Code className="text-blue-500" />,
        level: 100,
      },

      { name: "Figma", icon: <FaFigma className="text-pink-500" />, level: 80 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      {
        name: "Teamwork",
        icon: <MdDesignServices className="text-green-500" />,
        level: 98,
      },
      {
        name: "Problem Solving",
        icon: <MdDesignServices className="text-green-400" />,
        level: 90,
      },
      {
        name: "Time Management",
        icon: <MdDesignServices className="text-green-300" />,
        level: 95,
      },
    ],
  },
];

const ExtendedSkillsSection = () => {
  return (
    <section className="bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202] py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-800 dark:text-white mb-4">
          My Expertise
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-14 max-w-2xl mx-auto">
          A comprehensive view of my technical and interpersonal skills as a
          frontend developer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {skillsData.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-left mb-6 text-zinc-700 dark:text-zinc-200 border-b pb-2 border-zinc-300 dark:border-zinc-700">
                {group.category}
              </h3>
              <div className="space-y-6">
                {group.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-1">
                      <div className="mr-3 text-2xl">{skill.icon}</div>
                      <div className="text-base font-medium text-zinc-800 dark:text-white w-40">
                        {skill.name}
                      </div>
                      <div className="ml-auto text-sm text-zinc-500 dark:text-zinc-400">
                        {skill.level}%
                      </div>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-2 rounded">
                      <div
                        className="h-2 rounded bg-gradient-to-r from-indigo-400 to-indigo-600 transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtendedSkillsSection;
