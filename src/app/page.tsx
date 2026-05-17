import MainApp from "@/components/MainApp";
import { AppProvider } from "@/context/AppContext";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-indigo-500 selection:text-white">
      <AppProvider>
        <MainApp />
      </AppProvider>
    </main>
  );
}
