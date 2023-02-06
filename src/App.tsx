import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Connect = lazy(() => import("./pages/Connect"));
const Experience = lazy(() => import("./pages/Experience"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Testimonials = lazy(() => import("./pages/Testimonials"));

const App = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="experience" element={<Experience />} />
					<Route path="testimonials" element={<Testimonials />} />
					<Route path="connect" element={<Connect />} />
				</Routes>
			</Suspense>
			<Footer />
		</>
	);
};

export default App;
