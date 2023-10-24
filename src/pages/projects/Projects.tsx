import React from 'react';
import './Projects.css';
import Page from '../../components/Page';
import ProjectItem, { ProjectItemProps } from './ProjectItem';

const Projects: React.FC = () => {

	const projects: ProjectItemProps[] = [
		{
			name: 'TechNet',
			description: 'With a team of 4, we transformed an old static internal site into a dynamic React web app. I converted several pages from JavaScript to TypeScript and was in charge of implementing the redesigns from Figma and maintaining responsiveness. I utilized Framer Motion to create fluid interactablilty.',
			tag: '2023 / Team Project',
			image: './images/technet.jpg',
			techStack: ['React', 'TypeScript', 'CSS', 'HTML', 'Figma'],
			link: 'https://technet.rit.edu/',
			d: .2,
		},
		{
			name: 'Portfolio',
			description: 'Using React, TypeScript, and CSS, my portfolio acts as a visual and interactable extension of my resume. I extensively use React components and arrays to minimize repeated code and prioritize readability. I utilize Framer Motion to build fluid transitions and choreograph animations.',
			tag: '2023 / Personal Project',
			image: './images/portfolio.jpg',
			techStack: ['React', 'TypeScript', 'CSS', 'HTML'],
			link: 'https://ethan-logue.github.io/',
			d: .3,
		},
		{
			name: 'Travel Site',
			description: 'Created a travel site about a familiar place with over 15 pages that uses dropdown menus to navigate made using CSS. It utilizes PHP includes to minimize code repeat and JavaScript to place the header depending on how much content is on the screen.',
			tag: '2023 / Class Project',
			image: './images/travel-site.jpg',
			techStack: ['JavaScript', 'CSS', 'HTML', 'PHP'],
			link: 'https://people.rit.edu/~eml8469/ISTE240/final/index.php',
			d: .4,
		},
		{
			name: 'Video Portfolio',
			description: 'As one of my first projects, it was technically basic but I wanted something to showcase my video editing skills since I was doing commission work on Roblox. I exercised CSS grid to create a well organized and appealing site. I also incorporated some JavaScript to create the accordion effect, although since it was my first time I had a lot of help from others on that part.',
			tag: '2022 / Personal Project',
			image: './images/video-portfolio.jpg',
			techStack: ['CSS', 'HTML'],
			link: 'https://people.rit.edu/~eml8469/iste140/Roblox%20Application/',
			d: .5,
		},
	];

	return (
		<Page page={'projects'}>
			<h1 className='page-title'>Projects</h1>
			<div className='project-container'>
				{projects.map((project, index) => (
					<ProjectItem key={index} {...project} />
				))}
			</div>
    	</Page>
  	);
};

export default Projects;