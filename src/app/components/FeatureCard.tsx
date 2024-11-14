interface IFeatureCard {
  icon: any;
  title: any;
  description: any;
  bgColor: any;
}

const FeatureCard = ({ icon, title, description, bgColor }: IFeatureCard) => (
  <div className={`${bgColor} rounded-xl p-6 text-center`}>
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default FeatureCard;
