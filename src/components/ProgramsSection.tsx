import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Безопасное детство",
      description:
        "Программы по профилактике детского травматизма, борьбе с насилием и создание безопасной среды",
      status: "Активная",
      icon: "ShieldCheck",
      areas: ["Профилактика", "Безопасность", "Защита прав"],
    },
    {
      title: "Современное образование",
      description:
        "Цифровизация образования, развитие инклюзивного образования и поддержка талантливых детей",
      status: "Развивается",
      icon: "BookOpen",
      areas: ["Цифровизация", "Инклюзия", "Таланты"],
    },
    {
      title: "Здоровое поколение",
      description:
        "Укрепление здоровья детей, развитие детского спорта и формирование здорового образа жизни",
      status: "Активная",
      icon: "Activity",
      areas: ["Здоровье", "Спорт", "Профилактика"],
    },
    {
      title: "Крепкая семья",
      description:
        "Поддержка многодетных семей, развитие семейного устройства детей-сирот",
      status: "Приоритет",
      icon: "Heart",
      areas: ["Многодетность", "Усыновление", "Поддержка"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активная":
        return "bg-green-500";
      case "Развивается":
        return "bg-blue-500";
      case "Приоритет":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Ключевые программы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Основные направления работы в рамках Десятилетия детства
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon
                        name={program.icon}
                        size={24}
                        className="text-blue-600"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {program.title}
                      </CardTitle>
                      <Badge
                        className={`${getStatusColor(program.status)} text-white text-xs`}
                      >
                        {program.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {program.areas.map((area, areaIndex) => (
                    <Badge
                      key={areaIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block bg-blue-50 border-blue-200 p-6">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="FileText" size={24} className="text-blue-600" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">
                  План основных мероприятий
                </h3>
                <p className="text-sm text-gray-600">
                  утвержден Правительством РФ до 2020 года
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
