import ProjectCard from '@/common/components/atoms/ProjectCard';
import { Stack } from '@mui/material';
import SliderComponent from '../atoms/SliderComponent';

export default function ProjectSlider() {
	return (
		<Stack
			spacing={2}
			className='mt-8 xs:w-[100%] md:w-full md:bottom-[4rem] lg:bottom-[8rem] mx-auto'>
			<SliderComponent
				options={{
					arrows: false,
					dots: true,
					autoplay: true,
					pauseOnFocus: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
							},
						},
						{
							breakpoint: 760,
							settings: {
								slidesToShow: 1,
							},
						},
					],
				}}>
				{projectItem.map((item, index) => {
					return (
						<ProjectCard
							key={index}
							image={item.image}
							title={item.title}
							role={item.role}
							duration={item.duration}
							description={item.desc}
							tech={item.tech}
							link={item.link}
						/>
					);
				})}
			</SliderComponent>
		</Stack>
	);
}

const projectItem = [
	{
		image: '/sinata-cover.png',
		title: 'Sistem Informasi Manajemen Pelayanan dan Berita (SINATA)',
		role: 'Full Stack',
		duration: 'Feb 23 - Aug 23',
		desc: 'A management information system for conducting service management owned by Sebelas Maret University Public Relations. With this website, users can apply for services to public relations digitally.',
		tech: 'Next JS, Typescript, Tailwind CSS, Material UI, Express JS, Javascript, MySQL.',
		link: 'https://sinata.vercel.app',
	},
	{
		image: '/bytrade-cover.png',
		title: 'Bytrade Crypto Exchange Platform',
		role: 'Front End',
		duration: 'Apr 23 - Apr 23',
		desc: 'A private project, a cryptocurrency exchange platform. With this system, visitors can see the profile of the platform and monitor cryptocurrencies prices in real time.',
		tech: 'Next JS, Typescript, Tailwind CSS, Material UI, Coinmarketcap API.',
		link: 'https://bytrade.vercel.app',
	},
	{
		image: '/bytrade-cover.png',
		title: 'UI Design Bytrade Crypto Exchange Platform',
		role: 'UI/UX',
		duration: 'Apr 23 - Apr 23',
		desc: 'A private project, a cryptocurrency exchange platform. With this system, visitors can see the profile of the platform and monitor cryptocurrencies prices in real time.',
		tech: 'Figma, Adobe Photoshop',
		link: 'https://www.figma.com/proto/hfkxD18DBISLMHjhY4VeEf/bytrade-ui-design?page-id=0%3A1&node-id=3-12&starting-point-node-id=3%3A12&mode=design&t=fJJMB8jXqlDYnX1r-1',
	},
	{
		image: '/tenant-cover.png',
		title: 'Tenant Map Solo Square',
		role: 'Front End',
		duration: 'Dec 22 - Dec 22',
		desc: 'A semi 3D interactive map widget for tenants in a shopping center in Surakarta. With this system, visitors can see the list and location of tenants in the mall.',
		tech: 'React JS, Typescript.',
		link: 'https://tenantmap.vercel.app',
	},
	{
		image: '/ppid-cover.png',
		title: 'Migration/update of PPID UNS Website UI Themes',
		role: 'Front End',
		duration: 'Jul 22 - Aug 22',
		desc: 'Make updates in terms of theme and appearance of the UNS PPID website, so that the website has a better UI and user experience than before. This website uses the Wordpress CMS.',
		tech: 'WPAstra, Elementor, Wordpress.',
		link: 'https://ppid.uns.ac.id',
	},
	{
		image: '/climbee.jpg',
		title: 'Auth API for Climbee',
		role: 'Back End',
		duration: 'Sep 22 - Dec 22',
		desc: 'A simple Auth API using JWT Token. Developed for Climbee, so that this API can be consumed by both front end and mobile developers.',
		tech: 'Express JS, Node JS, JWT Token.',
		link: 'https://github.com/arricodyanto/climbee-api',
	},
	{
		image: '/emp-cover.png',
		title: 'Eleven March Project Company Profile',
		role: 'Front End',
		duration: 'May 21 - May 21',
		desc: ' A single page company profile from the Event Organizer company, Eleven March Project. Developed using HTML, some styling changes from Bootstrap, and additional Javascript for the WhatsApp chat feature.',
		tech: 'HTML, CSS, Bootstrap.',
		link: 'https://arricodyanto.github.io/elevenmarchproject',
	},
];
