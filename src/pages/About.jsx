import React, { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { CTA } from "../components";
import { humour } from "../constants";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [experiences, setExperiences] = useState(humour.map(() => ({
    timeRemaining: 10,
    showAnswer: false,
  })));

  useEffect(() => {
    const timers = experiences.map((experience, index) => {
      return setTimeout(() => {
        const intervalId = setInterval(() => {
          setExperiences(prevExperiences => {
            const newExperiences = [...prevExperiences];
            newExperiences[index].timeRemaining -= 1;

            if (newExperiences[index].timeRemaining === 0) {
              clearInterval(intervalId);
              newExperiences[index].showAnswer = true;
            }

            return newExperiences;
          });
        }, 1000);
      }, index * 11000); 
    });

    return () => {
      timers.forEach(timerId => clearTimeout(timerId));
    };
  }, []); 

  return (
    <section className="max-container">
      <h1 className="head-text">
        Bonjour, je suis{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Ahmed
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Plongez dans une aventure ludique où chaque question vous mettra au
          défi de trouver la réponse dans un temps limité. L'objectif est de
          susciter des éclats de rire tout en testant vos compétences
          humoristiques. Rappelons que rire est une source de joie essentielle
          dans nos vies, et ce défi vise à apporter un sourire tout en
          soulignant l'importance de l'humour dans notre quotidien.
        </p>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Humoristique Éclatant</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Préparez-vous à éclater de rire avec nos blagues drôles ! Une dose
            garantie de bonne humeur.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                iconStyle={{ background: humour[index].iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={humour[index].icon}
                      alt={humour[index].reponse}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: humour[index].iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {humour[index].blague}
                  </h3>
                  {experience.showAnswer ? (
                    <p className="text-black-500 font-medium text-base">
                      {humour[index].reponse}
                    </p>
                  ) : (
                    <div className="flex items-center">
                      <p className="text-black-500 font-medium text-base">
                        Réponse dans{" "}
                        <span className="text-red-500 font-bold text-lg">
                          {experience.timeRemaining}
                        </span>{" "}
                        secondes...
                      </p>
                    </div>
                  )}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
