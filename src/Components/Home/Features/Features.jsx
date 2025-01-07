import { FeatureCard } from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: "assets/images/icons/delivery-van.svg",
      title: "Free Shipping",
      description: "Order over $200",
    },
    {
      icon: "assets/images/icons/money-back.svg",
      title: "Money Returns",
      description: "30 days money returns",
    },
    {
      icon: "assets/images/icons/service-hours.svg",
      title: "24/7 Support",
      description: "Customer support",
    },
  ];

  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
