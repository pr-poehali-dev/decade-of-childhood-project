import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const GoalsSection = () => {
  const goals = [
    {
      icon: "Shield",
      title: "Защита детей",
      description:
        "Обеспечение безопасности и защиты прав каждого ребенка на территории Российской Федерации",
    },
    {
      icon: "GraduationCap",
      title: "Образование",
      description:
        "Развитие качественной и доступной системы образования для всех детей",
    },
    {
      icon: "Heart",
      title: "Здравоохранение",
      description: "Укрепление системы охраны здоровья детей и подростков",
    },
    {
      icon: "Users",
      title: "Поддержка семей",
      description:
        "Комплексная поддержка семей с детьми и развитие семейных ценностей",
    },
    {
      icon: "Home",
      title: "Социальная защита",
      description: "Создание эффективной системы социальной защиты детей",
    },
    {
      icon: "Gamepad2",
      title: "Досуг и развитие",
      description:
        "Организация качественного досуга и дополнительного образования",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Основные направления
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Десятилетие детства направлено на комплексное развитие системы
            защиты детства по всем ключевым направлениям
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name={goal.icon} size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                  {goal.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {goal.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
