import ContainerPage from '@/common/components/atoms/ContainerPage';
import BackgroundGradient from '@/common/components/molecules/BackgroundGradient';
import AppNav from '@/common/components/organism/AppNav';
import Contact from '@/common/components/organism/Contact';
import Footer from '@/common/components/organism/Footer';
import HeroSection from '@/common/components/organism/HeroSection';
import Portfolio from '@/common/components/organism/Portfolio';
import ProfileSection from '@/common/components/organism/ProfileSection';
import WorkExperience from '@/common/components/organism/WorkExperience';

export default function Home() {
	return (
		<>
			<AppNav />
			<BackgroundGradient>
				<ContainerPage>
					<HeroSection />
				</ContainerPage>
				<ProfileSection />
				<WorkExperience />
				<Portfolio />
				<Contact />
				<Footer />
			</BackgroundGradient>
		</>
	);
}
