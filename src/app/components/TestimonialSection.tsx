import React from "react";

export interface Testimonial {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    author: {
      name: "Nguyễn Phạm Quỳnh Anh",
      username: "@qquynh.annh",
      avatar: "/testimonials/person-1.jpg",
    },
    content:
      "CLB luôn dẫn đầu trong việc tổ chức các hoạt động độc đáo, sáng tạo, mang lại sân chơi bổ ích cho thế hệ trẻ",
  },
  {
    id: "2",
    author: {
      name: "Đinh Nguyễn Phương Ngọc",
      username: "@bongsayhiiiii",
      avatar: "/testimonials/person-2.jpg",
    },
    content:
      "Các thành viên trong CLB luôn hỗ trợ lẫn nhau, xây dựng một môi trường làm việc tràn đầy tình đồng đội và sự thấu hiểu",
  },
  {
    id: "3",
    author: {
      name: "Bùi Diệu Anh",
      username: "@_d.i.e.u_",
      avatar: "/testimonials/person-3.jpg",
    },
    content:
      "Những cán bộ trong CLB không chỉ tài năng mà còn làm việc với đam mê, tận tâm, góp phần lan tỏa giá trị tích cực đến cộng đồng",
  },
  {
    id: "4",
    author: {
      name: "Trịnh Hà An",
      username: "@_haantr_",
      avatar: "/testimonials/person-4.jpg",
    },
    content:
      "Các chương trình và hoạt động của CLB đã góp phần nuôi dưỡng tinh thần lãnh đạo và kỹ năng sống cho các em, tạo nên những thủ lĩnh trẻ xuất sắc",
  },
  {
    id: "5",
    author: {
      name: "Nguyễn Phúc Hưng",
      username: "@ng.phuc.hung",
      avatar: "/testimonials/person-5.jpg",
    },
    content:
      "CLB không ngừng cải tiến và thích nghi với xu hướng mới, đảm bảo mọi hoạt động đều ý nghĩa và thiết thực",
  },
  {
    id: "6",
    author: {
      name: "Nguyễn Thuỳ Dung",
      username: "@wormiee__",
      avatar: "/testimonials/person-6.jpg",
    },
    content:
      "CLB luôn hướng tới những mục tiêu cao đẹp, không chỉ xây dựng đội ngũ cán bộ giỏi mà còn đóng góp tích cực cho xã hội và thế hệ tương lai",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-start justify-between">
      <div className="flex gap-3">
        <img
          src={testimonial.author.avatar}
          alt={testimonial.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-medium text-gray-900">
            {testimonial.author.name}
          </h3>
          <p className="text-gray-500 text-sm">{testimonial.author.username}</p>
        </div>
      </div>
    </div>
    <p className="mt-4 text-gray-600 leading-relaxed">{testimonial.content}</p>
  </div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-sm font-medium text-gray-600">
              Lời tâm sự
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hội viên CLB nói gì?
          </h2>
          <p className="text-lg text-gray-600">
            Tất cả hội viên đều cảm thấy nơi đây thật ấm áp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
