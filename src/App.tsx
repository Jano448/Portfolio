import ExperiencePage from "./pages/Experience";
import WelcomePage from "./pages/Welcome";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <main className="w-screen h-auto p-4 flex flex-col items-center gap-2">
      <NavBar />
      <WelcomePage />
      <ExperiencePage />
    </main>
  );
}
