interface ITestimonialCardV2 {
  name: any;
  role: any;
  content: any;
  image: any;
}

const TestimonialCardV2 = ({
  name,
  role,
  content,
  image,
}: ITestimonialCardV2) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center gap-4 mb-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default TestimonialCardV2;
