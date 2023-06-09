import Calculator from '../../img/calculator.jpg';

import MjStore from '../../img/mj-store.png';
import PersonalBlog from '../../img/personal-blog.png';
import PigGame from '../../img/pig-game.png';
import Food from '../../img/food.png';
import Breakout from '../../img/breakout-game.png';
import Monster from '../../img/Monster.png';

import './projects.styles.scss';

const projectsData = [
	{
		id: 1,
		image: Calculator,
		title: 'Calculator App',
		description: 'Simple Calculator App using React',
		github: 'https://github.com/Mac-Jones/react-calculator',
		demo: 'https://simple-calculator-reactjs-mj.netlify.app/',
	},
	{
		id: 2,
		image: MjStore,
		title: 'Mac Jones Store',
		description: 'E-Commerce App using React, TypeScript, Redux, etc',
		github: 'https://github.com/Mac-Jones/mac-jones-store',
		demo: 'https://mac-jones-store-reactjs-redux.netlify.app',
	},
	{
		id: 3,
		image: Monster,
		title: 'Monsters Rolodex',
		description: 'Search for Monster using React and Typescript',
		github: 'https://github.com/Mac-Jones/monster-rolodex',
		demo: 'https://monsters-rolodex-mj.netlify.app/',
	},

	{
		id: 4,
		image: PigGame,
		title: 'Pig Game',
		description: 'Pig Game using Javascript, HTML, and CSS',
		github: 'https://github.com/Mac-Jones/pig-game-javascript',
		demo: 'https://pig-game-mac-jones.netlify.app/',
	},
	{
		id: 5,
		image: Food,
		title: 'Recipe App',
		description: 'Food Recipe Website using Javascript',
		github: 'https://github.com/Mac-Jones/forkify-app',
		demo: 'https://recipe-app-macjones.netlify.app',
	},
	{
		id: 6,
		image: Breakout,
		title: 'Breakout',
		description: 'Javascript Game using HTML, CSS and Javascript',
		github: 'https://github.com/Mac-Jones/breakout-game-javascript',
		demo: 'https://breakout-macjones.netlify.app/',
	},

	{
		id: 7,
		image: PersonalBlog,
		title: 'My Personal Blog',
		description: 'Simple Blog using Gatsby',
		github: 'https://github.com/Mac-Jones/gatsby-blog-mj',
		demo: 'https://macjones-blog.netlify.app',
	},
];

const ProjectsData = () => {
	return (
		<div className='projects'>
			{projectsData.map((project) => {
				const { id, image, title, description, github, demo } = project;
				return (
					<div className='project' key={id}>
						<img src={image} className='project__img' alt={`Portfolio ${id}`} />

						<h5 className='project__name'>{title}</h5>

						<div className='project__description'>{description}</div>

						<div className='project__cta-container'>
							<a
								href={github}
								className='btn-2 project__btn'
								target='_blank'
								rel='noreferrer'
							>
								Github
							</a>
							<a
								href={demo}
								className='btn-2 project__btn'
								target='_blank'
								rel='noreferrer'
							>
								Live Demo
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectsData;
