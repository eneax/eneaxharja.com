import React from 'react';
import projectsList from './projectsList';
import ProjectItem from './ProjectItem';
import Footer from '../Footer/Footer';

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
									projectsList.map((item, i) => (
				          	<ProjectItem render={item.render} key={i} />
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


 