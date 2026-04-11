import React from "react";

const skillsData = [
    {
        title: "Backend",
        className: "backend",
        skills: [
            { name: "PHP", percent: 95 },
            { name: "Laravel", percent: 90 },
            { name: "MVC Architecture", percent: 80 },
            { name: "RESTful API", percent: 80 },
            { name: "Eloquent ORM", percent: 85 },
            { name: "Filament", percent: 70 },
        ],
    },
    {
        title: "Frontend",
        className: "frontend",
        skills: [
            { name: "HTML", percent: 90 },
            { name: "CSS", percent: 90 },
            { name: "JavaScript", percent: 85 },
            { name: "Bootstrap", percent: 70 },
            { name: "Tailwind", percent: 70 },
            { name: "React JS", percent: 80 },
        ],
    },
    {
        title: "Database",
        className: "database",
        skills: [
            { name: "SQL", percent: 85 },
            { name: "MySQL", percent: 80 },
            { name: "SQLite", percent: 70 },
            { name: "Database Admin", percent: 70 },
        ],
    },
    {
        title: "Software Engineering",
        className: "software",
        skills: [
            { name: "OOP", percent: 90 },
            { name: "Data Structures", percent: 75 },
            { name: "SOLID Principles", percent: 80 },
            { name: "Design Patterns", percent: 70 },
        ],
    },
    {
        title: "Systems & Tools",
        className: "systems",
        skills: [
            { name: "Git & GitHub", percent: 90 },
            { name: "Linux Commands", percent: 75 },
            { name: "DevOps Basics", percent: 65 },
            { name: "Postman", percent: 90 },
        ],
    },
];

const Skills = () => {
    return (
        <section className="sec6" id="sec6">
            <h1>Skills</h1>

            <div className="cont">
                {skillsData.map((category, index) => (
                    <div
                        className={`skill-card ${category.className}`}
                        key={index}
                    >
                        <h2>&lt; {category.title} /&gt;</h2>

                        {category.skills.map((skill, i) => (
                            <div className="skill" key={i}>
                                <span>
                                    {skill.name} <b>{skill.percent}%</b>
                                </span>

                                <div className="bar">
                                    <div
                                        className="progress"
                                        style={{ width: `${skill.percent}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;