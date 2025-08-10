import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Expertise.scss';

const softDevIconsSrc = "https://skillicons.dev/icons?i=c,cpp,cs,java,py"
const dataManipulationSrc = "https://skillicons.dev/icons?i=mysql,dotnet,latex"
const enviromentSrc = "https://skillicons.dev/icons?i=linux,git,github,vscode,powershell,md"

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill secondary-container">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <h3 className="title">Software Developement</h3>
                        <p> Began learning programming in high school and expanded my skills through university studies in computer science. I've worked on several projects mainly desktop and backend development.</p>
                        <div className="flex-chips" style={{ alignItems: 'center' }}>
                            <img src={softDevIconsSrc} />
                        </div>
                    </div>

                    <div className="skill secondary-container">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3 className="title">Data Manipulation</h3>
                        <p>I have experience working with relational databases, focusing on project data analysis and designing efficient schemas. From planning data structures to writing complex queries. My work often involves translating real-world requirements into normalized, practical database models.</p>
                        <div className="flex-chips" style={{ alignItems: 'center' }}>
                            <img src={dataManipulationSrc} />
                        </div>
                    </div>

                    <div className="skill secondary-container">
                        <FontAwesomeIcon icon={faTerminal} size="3x" />
                        <h3 className="title">Development Enviroments</h3>
                        <p>I'm comfortable working in Linux-based environments and have experience using Git for version control and collaboration. I regularly use tools like VS Code to manage projects efficiently and streamline development workflows.</p>
                        <div className="flex-chips" style={{ alignItems: 'center' }}>
                            <img src={enviromentSrc} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;