import React from "react";
import mercato from '../assets/images/mercato_trifase.png'
import projectErcole from '../assets/images/project_ercole.png'
import scriptManager from '../assets/images/project_script manager.png'
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="secondary-container">
                    <img src={mercato} className="zoom" alt="thumbnail" width="100%" />
                    <h2 className="project">Mercato Trifase</h2>
                    <p>Part of the project "Mercato Trifase".
                        Developement of a <i>complete web-app</i> for the management of the town hall finaces</p>
                </div>
                <div className="secondary-container">
                    <img src={scriptManager} className="zoom" alt="thumbnail" width="100%" />
                    <h2 className="project">Script Manager</h2>
                    <p>The project aimed to develop a <i>working IDE</i> that could store files in a server, organize them in directories and did have to support multiple programming languages. I worked mostly in the front-end side, integrating Editor in <i>Vue.js</i> and providing features a VS Code-like editor has.</p>
                </div>
                <div className="secondary-container">
                    <img src={projectErcole} className="zoom" alt="thumbnail" width="100%" />
                    <h2 className="project">Project Ercole</h2>

                    <p>The main goal was to create a software that, given a dataset containing pictures of fragments of ancient pots, <i>resemples the original pictures</i>. Two different approaches have been tested: trying to look up online for a ready-to-use solution and, in parallel, developing a procedural Python software. We eventually discovered <i>JigsawNet</i> by Le Canyu and Li Xin - on GitHub, a CNN capable of resembling pieces of an image without knowing how the original picture would have looked like.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;