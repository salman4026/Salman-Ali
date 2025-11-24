import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { EducationSkills } from './components/EducationSkills';
import { CoursesAndCertifications } from './components/CoursesandCertifications';
import { Research } from './components/Research';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { Blog } from './components/Blog';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import portfolioData from './data/portfolio.json';
import type { PortfolioData } from './types/portfolio';

const data = portfolioData as PortfolioData;

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Experience data={data.experience} />
        <CoursesAndCertifications />
        <EducationSkills education={data.education} skills={data.skills} />
        <Research
          publications={data.research.publications}
          workshops={data.research.workshops}
        />
        <Achievements
          achievements={data.achievements}
          volunteering={data.volunteering}
        />
        <Projects data={data.projects} />
        <Gallery data={data.gallery} />
        <Blog data={data.blog} />
        <Testimonials data={data.testimonials} />
        <Contact data={data.contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
