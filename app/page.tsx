import Header from "../components/header";
import Sidebar from "../components/sidebar";
import AnimationLibrary from "../components/animationlibrary";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex">
        <Sidebar />
        <AnimationLibrary />
      </main>

      <Footer />
    </div>
  );
}
