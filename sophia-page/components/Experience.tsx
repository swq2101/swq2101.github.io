import React from "react";

const experience = [
                    {"title":"Data Science Fellow",
                      "desc":"Assisting a judicial campaign in Lehigh County, PA with data analysis.",
                      "year":"2021",
                      "company":"Bluebonnet",
                      "companyLink": "https://bluebonnetdata.org",
                    },
                    {"title":"Product Manager",
                      "desc":"For Clubswipe, a Tinder-like app that matches students with on-campus orgs. Also worked as a backend developer.",
                      "year":"2021",
                      "company":"Columbia Data Product Initiative",
                      "companyLink": "",
                    },
                    {"title":"Project Manager",
                      "desc":"Grow open-source culture and contribution on campus",
                      "year":"2021",
                      "company":"Codeprentice",
                      "companyLink": "https://codeprentice.org/",
                    },
                    {"title":"Software Engineer Intern",
                    "desc":"Migrated and refactored search UI for an SPA, among other cool projects like internationalization and API implementation.",
                    "year":"2021",
                    "company":"Justworks",
                    "companyLink": "https://justworks.com",
                    },
                    {"title":"Undergraduate Research Assistant",
                    "desc":"Working under Director Liam Paninski, built a UI for neuroscientists to easily use machine learning algorithms to better understand data.",
                    "year":"2021",
                    "company":"Grossman Center for the Statistics of the Mind",
                    "companyLink": "http://grossmancenter.columbia.edu/",
                    },
                    {"title":"Revenue Manager",
                    "desc":"Worked with clients to maximize their impact on the Columbia community while devising strategies to generate revenue for our publishing company.",
                    "year":"2020",
                    "company":"Columbia Daily Spectator",
                    "companyLink": "http://www.specpublishing.com/#overview-welcome",
                    },
                    {"title":"Software Engineer Intern",
                    "desc":"Built safety tools so that robots wouldn't fall off buildings",
                    "year":"2020",
                    "company":"A Robotics Company",
                    "companyLink": "http://arobotics.company/",
                    },
                    {"title":"Virtual Tech Camp Instructor",
                    "desc":"Taught kids 5-18 how to code in Python, Java, Javascript, and Scratch",
                    "year":"2020",
                    "company":"iD Tech",
                    "companyLink": "https://www.idtech.com/",
                    }
                ];

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl text-green-900 md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExeperienceCardProps {
    title: string,
    desc: string, 
    year: string, 
    company: string,
    companyLink: string
}

const ExperienceCard = ({title, desc, year, company, companyLink}: ExeperienceCardProps) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};