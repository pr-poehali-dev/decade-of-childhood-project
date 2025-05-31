import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      number: "146M",
      label: "Население России",
      sublabel: "включая 29,2 млн детей",
    },
    {
      number: "20%",
      label: "Доля детей",
      sublabel: "в общей численности населения",
    },
    { number: "85", label: "Регионов РФ", sublabel: "участвуют в программе" },
    {
      number: "2020",
      label: "План мероприятий",
      sublabel: "утвержден Правительством",
    },
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat mb-4">
            Ключевые показатели
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Масштаб и важность программы Десятилетия детства в цифрах
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 text-center hover:bg-white/15 transition-colors duration-300"
            >
              <CardHeader>
                <div className="text-4xl lg:text-5xl font-bold font-montserrat text-white mb-2">
                  {stat.number}
                </div>
                <CardTitle className="text-lg text-white mb-1">
                  {stat.label}
                </CardTitle>
                <p className="text-blue-200 text-sm">{stat.sublabel}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">📋 Статус реализации</h3>
            <div className="w-full bg-white/20 rounded-full h-3 mb-2">
              <div
                className="bg-green-400 h-3 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <p className="text-sm text-blue-200">
              Программа активно реализуется по всей территории РФ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
