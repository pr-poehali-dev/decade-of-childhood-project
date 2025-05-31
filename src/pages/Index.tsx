import HeroSection from "@/components/HeroSection";
import GoalsSection from "@/components/GoalsSection";
import StatsSection from "@/components/StatsSection";
import ProgramsSection from "@/components/ProgramsSection";

const Index = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <HeroSection />
      <GoalsSection />
      <StatsSection />
      <ProgramsSection />

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold font-montserrat">
                Десятилетие детства 2018-2027
              </h3>
              <p className="text-gray-400">
                Указ Президента Российской Федерации
              </p>
            </div>
            <div className="text-sm text-gray-400">
              <p>Президент Российской Федерации В. Путин</p>
              <p className="mt-2">
                🇷🇺 Официальный ресурс о государственной политике в сфере детства
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
