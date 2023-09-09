import ProjectCard from '@/common/components/atoms/ProjectCard';
import { Stack } from '@mui/material';
import SliderComponent from '../atoms/SliderComponent';

export default function ProjectSlider() {
	return (
		<Stack
			spacing={2}
			// direction={{ xs: 'column', md: 'row' }}
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
							breakpoint: 1300,
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
		image: '/src/assets/images/sinata.jpg',
		title: 'Sistem Informasi Manajemen Pelayanan dan Berita (SINATA)',
		role: 'Full Stack',
		duration: 'Feb 23 - Aug 23',
		desc: 'A management information system for conducting service management owned by Sebelas Maret University Public Relations. With this website, users can apply for services to public relations digitally.',
		link: 'https://sinata.vercel.app',
	},
	{
		image: '/src/assets/images/tenant-map.jpg',
		title: 'Tenant Map Solo Square',
		role: 'Front End',
		duration: 'Dec 22 - Dec 22',
		desc: 'A semi 3D interactive map widget for tenants in a shopping center in Surakarta. With this system, visitors can see the list and location of tenants in the mall.',
		link: 'https://tenantmap.vercel.app',
	},
	{
		image: '/src/assets/images/ppid-uns.jpg',
		title: 'Migration/update of PPID UNS Website UI Themes',
		role: 'Front End',
		duration: 'Jul 22 - Aug 22',
		desc: 'A semi 3D interactive map widget for tenants in a shopping center in Surakarta. With this system, visitors can see the list and location of tenants in the mall.',
		link: 'https://ppid.uns.ac.id',
	},
	{
		image: '/src/assets/images/climbee.jpg',
		title: 'Auth API for Climbee',
		role: 'Back End',
		duration: 'Sep 22 - Dec 22',
		desc: 'A simple Auth API using JWT Token. Developed for Climbee, so that this API can be consumed by both front end and mobile developers.',
		link: 'https://github.com/arricodyanto/climbee-api',
	},
	{
		image: '/src/assets/images/profile-emp.jpg',
		title: 'Eleven March Project Company Profile',
		role: 'Front End',
		duration: 'May 21 - May 21',
		desc: ' A single page company profile from the Event Organizer company, Eleven March Project. Developed using HTML, some styling changes from Bootstrap, and additional Javascript for the WhatsApp chat feature.',
		link: 'https://arricodyanto.github.io/elevenmarchproject',
	},
];
