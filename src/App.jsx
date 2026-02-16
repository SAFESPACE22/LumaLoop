import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import TechSpecs from './components/TechSpecs';
import UseCases from './components/UseCases';
import FoundersNote from './components/FoundersNote';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-sand-light text-bark font-sans">
            <Navbar />
            <Hero />
            <ProblemSolution />
            <TechSpecs />
            <UseCases />
            <FoundersNote />
            <Footer />
        </div>
    );
}
