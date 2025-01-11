import Image from "next/image";

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div
      className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"
      data-testid="feature-card"
    >
      <Image
        src={icon}
        alt={title}
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
      />
      <div>
        <h4 className="font-medium capitalize text-lg">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};
