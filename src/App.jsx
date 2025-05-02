import Footer from "./Components/Footer";
import HomeSection from "./Components/HomeSection";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import FAQ from "./Components/FAQ";
import TestimonialSlider from "./Components/TestimonialSlider";
import OurCourses from "./Components/OurCourses";

function App() {
  return (
    // <div className="bg-gradient-to-r from-[#86ABFA] to-[#6fbeff00]">
    <div>
      <Navbar />
      <HomeSection />
      <Form />
      <OurCourses />
      <FAQ />
      <TestimonialSlider />
      <Footer />
    </div>
    // </div>
  );
}
export default App;
