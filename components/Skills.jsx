import React from 'react'
import { Button } from './ui/button';

export const Skills = () => {

    const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB" },
  { name: "Git & GitHub" },
];

  return (
    <section className="py-10 flex flex-col items-center  ">
      <h2 className="title">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3 max-w-xl ">
        {skills.map((skill, index) => (
          <Button key={index} variant="outline" size="sm">
            {skill.name}
          </Button>
        ))}
      </div>
    </section>
  )
}
