// Make a component with Header and Footer
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleSection from "../components/TitleSection";

export default function Page() {
  return (
    <div>
      <Header />
      <TitleSection title="Members" />
      <h1>Members</h1>
      <Footer />
    </div>
  );
}
