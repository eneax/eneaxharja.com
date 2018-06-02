import React from 'react';
import projects from './projects';
import Footer from '../Footer/Footer';

const ProjectItem = ({ title, descOne, descTwo, repo, link }) => {
	return (
		<div className="fl w-100 w-50-m w-third-ns pa2">
			<div className="bg-washed-blue br3 grow shadow-5">
				<div className="center mw6 br3 hidden mv3 tc">
					<h1 className="f5 bg-washed-green br3 br--top black-70 mv0 pv2 ph3 courier">{title}</h1>
					<div className="pa3 bt b--black-10 black-70 georgia">
						<p className="f6 f5-ns lh-copy measure">
							{descOne} 
							<br/> 
							{descTwo}
						</p>
						<a className="f6 grow dib v-mid ph3 pv2 mb3 dark-gray" href={`${repo}`} target="_blank" rel="noopener noreferrer">
							<i className="fab fa-github fa-2x"></i>	
						</a>
						<a className="f6 grow dib v-mid ph3 pv2 mb3 dark-gray" href={`${link}`} target="_blank" rel="noopener noreferrer">
							<i className="fas fa-globe fa-2x"></i>
						</a>
					</div>

				</div>
			</div>
		</div>
	)
}

const Projects = () => {
	return (
		<div>
			<main className="pt1">
		  	<div className="ph2 ph5-m ph6-l">
					<div className="pv3 f5 f2-ns measure center">
						<h1 className="fw6 f2 fl w-100 black-70 mt0 mb2 courier">Projects</h1>
					</div>
					<div className="f3 center mt3 mb0 black-70 tj">
						<div className="mw9 center ph3-ns">
						  <div className="cf ph2-ns">
								{
									projects.map((project, i) => (
										<ProjectItem 
											key={i}
											title={projects[i].title}
											descOne={projects[i].descOne}
											descTwo={projects[i].descTwo}
											repo={projects[i].repo}
											link={projects[i].link}
										/>
				        	))
				        }
						  </div>
						</div>
					</div>
				</div>
			</main>
			
			<Footer />
		</div>
	)
}

export default Projects;