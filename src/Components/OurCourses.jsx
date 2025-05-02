import React from "react";
import robot1 from "../../public/img/image (1).png";
import robot2 from "../../public/img/image (2).png";

const courses = [
  {
    id: 1,
    image: robot1,
    duration: "4 Weeks",
    level: "Beginner",
    author: "John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS,  and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
  },
  {
    id: 2,
    image: robot2,
    duration: "4 Weeks",
    level: "Beginner",
    author: "John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
  },
];

const OurCourses = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="font-manrope mx-auto bg-white px-6 pt-12 lg:max-w-[1440px]">
        {/* Header for the card making section*/}
        <div className="mb-8 flex items-center justify-between pb-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 lg:text-5xl">
              Our Courses
            </h2>
            <p className="mt-1.5 text-gray-600 lg:text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et.
              <br /> Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse
              in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button className="rounded-md bg-blue-900 px-3 py-2 text-white hover:bg-blue-800 lg:px-6 lg:py-4.5 lg:text-[18px]">
            View All
          </button>
        </div>

        {/* Cards for the task  */}
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-xl bg-[#F0F0F0] shadow-sm transition hover:shadow-lg lg:p-12.5"
            >
              <img
                src={course.image}
                alt={course.title}
                className="mb-4 rounded-lg object-cover"
              />
              <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
                <span className="bg-[#FFFFFF] px-4 py-2.5 shadow-md">
                  {course.duration}
                </span>
                <span className="bg-[#FFFFFF] px-4 py-2.5 shadow-md">
                  {course.level}
                </span>
                <span>By {course.author}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {course.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600">{course.description}</p>
              <button className="w-full rounded-md bg-blue-900 py-2 text-sm text-white hover:bg-blue-800 lg:py-4.5">
                Get it Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
