import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 text-sm">
                🇷🇺 Указ Президента Российской Федерации
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-montserrat leading-tight">
                Десятилетие детства
                <span className="block text-blue-200">2018 — 2027</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                В целях совершенствования государственной политики в сфере
                защиты детства, учитывая результаты, достигнутые в ходе
                реализации Национальной стратегии действий в интересах детей на
                2012 - 2017 годы
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Card className="bg-white/10 border-white/20 text-white p-4">
                <div className="text-2xl font-bold">2018</div>
                <div className="text-blue-200">Начало программы</div>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white p-4">
                <div className="text-2xl font-bold">2027</div>
                <div className="text-blue-200">Завершение</div>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white p-4">
                <div className="text-2xl font-bold">10 лет</div>
                <div className="text-blue-200">Защиты детства</div>
              </Card>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-30"></div>
              <img
                src="https://cdn.poehali.dev/files/f2ac54f9-9c55-4ddc-b84d-c58316605af2.png"
                alt="Указ Президента РФ о Десятилетии детства"
                className="relative bg-white rounded-lg shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
