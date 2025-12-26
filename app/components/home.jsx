"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage () {
  return (
    <>
  
      {/* HERO SECTION */}
      <div className="w-full bg-white">
<section >

  {/* Background blobs */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 roundedull-f blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400  blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* IMAGE */}
    <div className="relative w-full  overflow-hidden shadow-2xl">

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <img
        src="/change/one.png"
        alt="Students"
        className="w-full h-130 object-cover"
      />

      {/* TEXT ON IMAGE */}
      <div className="absolute inset-0 z-20 flex items-center text-center md:text-left justify-center md:justify-start">
        <div className="px-6 md:px-16 max-w-3xl">

          <span className="inline-block text-sm text-emerald-700 font-medium bg-emerald-200 px-3 md:px-5 py-2 md:py-3 rounded-xl">
            ⭐ Trusted by 1000+ learners worldwide
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-8 text-white leading-tight max-w-30px">
            Unlock Your Potential <br /> &{" "}
            <span className="text-emerald-300">Master New Skills</span>
          </h1>

          <p className="text-gray-200 mt-4 max-w-lg">
            Expert-led IT courses designed to help beginners and professionals build in-demand tech skills.
          </p>

          <div className="flex gap-4 mt-6 items-center justify-center md:justify-start">
            <button className="border border-white text-white p-2 rounded-md hover:bg-white hover:text-emerald-600 transition">
              Start Learning
            </button>

          <Link href="/#courses" > 
          <div className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-600 transition">
              Explore Courses
            </div>
          </Link>
            
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
        
      {/* ABOUT SECTION */}
      <section
      id="about"
      className="px-8 py-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">About ErikdotIT</h2>
          <p className="text-gray-600 mb-4">
            At ErikdotIT, we make tech skills accessible to everyone. Our hands-on online courses and expert mentorship prepare learners for real-world success.
          </p>
          <p className="text-gray-600">
            Whether you're starting your tech journey or advancing your career, we provide the tools, knowledge, and support you need to thrive in today's digital world.
          </p>
        </div>

        <div className="bg-gray-200 rounded-lg h-56 overflow-hidden">
          {/* Placeholder for image: <img src="/about-image.jpg" alt="Person at computer" className="object-cover w-full h-full" /> */}
          <img src="/home/two.png" alt="Person at computer" className="object-cover w-full h-full" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">Why Choose ErikdotIT?</h2>
          <p className="text-center text-gray-600 mb-12">Discover what makes us the perfect choice for your tech learning journey.</p>

          <div className="grid md:grid-cols-3 gap-6">
  {[
    {
      icon: "bi-person-workspace",
      title: "Expert Instructors",
      desc: "Learn from industry professionals with years of real-world experience.",
    },
    {
      icon: "bi-clock",
      title: "Flexible Access",
      desc: "Study at your own pace with 24/7 access to course materials.",
    },
    {
      icon: "bi-award",
      title: "Certificates",
      desc: "Earn industry-recognized certificates upon course completion.",
    },
    {
      icon: "bi-lightbulb",
      title: "Beginner Friendly",
      desc: "Start from zero with courses designed for all skill levels.",
    },
    {
      icon: "bi-briefcase",
      title: "Career Support",
      desc: "Get job placement assistance and expert career guidance.",
    },
    {
      icon: "bi-people",
      title: "Community Access",
      desc: "Connect with fellow learners and grow your professional network.",
    },
  ].map((item, i) => (
    <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
      <div className="flex mb-3">
        <i className={`bi ${item.icon} text-3xl text-emerald-500`}></i>
      </div>

      <h3 className="font-semibold text-left text-black">{item.title}</h3>
      <p className="text-sm text-gray-600 mt-2 text-left">{item.desc}</p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* FEATURED COURSES */}
      <section 
      id="courses"
      className="px-8 py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Featured Courses</h2>
        <p className="text-center text-gray-600 mb-10">Start your learning journey with our most popular courses</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
  {
    title: "DA with Python & SQL",
    desc: "Learn data analysis using Python, pandas, and SQL to explore data, uncover insights, and support better business decisions.",
    img: "/courses/one.png",
  },
  {
    title: "Machine Learning",
    desc: "Build predictive models using supervised and unsupervised learning techniques to solve practical problems with real data.",
    img: "/courses/two.png",
  },
  {
    title: "Data Engineering",
    desc: "Design and manage data pipelines, databases, and ETL workflows to prepare reliable data for analytics and AI systems.",
    img: "/courses/three.png",
  },
  {
    title: "Visualization & Dashboarding",
    desc: "Create compelling visual reports and interactive dashboards using modern tools to communicate insights clearly and drive decisions.",
    img: "/courses/four.png",
  },
  {
    title: "Artificial Intelligence",
    desc: "Explore AI foundations and learn to build intelligent applications using Python, automation techniques, and real-world datasets.",
    img: "/courses/five.png",
  },
  {
    title: "Excel & Power BI Mastery",
    desc: "Transform raw data into insights through advanced Excel techniques and Power BI dashboards that reveal trends for business impact.",
    img: "/courses/six.png",
  },
].map((course, i) => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={course.img} alt={course.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-black">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{course.desc}</p>
                <button className="w-full bg-emerald-500 text-white py-2 rounded">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          {/* <button className="text-emerald-500 border border-emerald-400 p-1.5 rounded-[5px]">See More</button> */}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">How It Works</h2>
          <p className="text-center text-gray-600 mb-12">Your journey to mastering new skills in 4 simple steps</p>

          <div className="grid md:grid-cols-4 gap-6">
  {[
    {
      icon: "bi-search",
      title: "Choose a Course",
      desc: "Browse our perfect course for you.",
    },
    {
      icon: "bi-laptop",
      title: "Learn Online",
      desc: "Interactive lessons and hands-on projects.",
    },
    {
      icon: "bi-award",
      title: "Get Certified",
      desc: "Showcase your new skills to employers.",
    },
    {
      icon: "bi-rocket-takeoff",
      title: "Apply Your Skills",
      desc: "Advance your career or start new projects.",
    },
  ].map((step, i) => (
    <div key={i} className="text-center">
      <div className="bg-emerald-500 w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl mb-4">
        <i className={`bi ${step.icon} text-white`}></i>
      </div>

      <h3 className="font-semibold mb-2 text-black">{step.title}</h3>
      <p className="text-sm text-gray-600">{step.desc}</p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-8 py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">What Our Students Say</h2>
        <p className="text-center text-gray-600 mb-12">Real success stories from our learning community</p>

<div className="flex flex-col md:flex-row justify-center items-center gap-15">

        <div >
          {[
            { name: "Sarah Johnson", role: "Business Analyst", quote: "ErikdotIT completely transformed my career. The Python projects gave me real-world experience. Within 3 months of completing the course, I landed my dream job as a Data Analyst!", stars: "⭐⭐⭐⭐⭐", avatar: "/academy/one.png" },
          ].map((testimonial, i) => (
            <div key={i} className="bg-emerald-300 shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-800 mb-4 md:max-w-4xl">"{testimonial.quote}"</p>
              <p className="text-yellow-500">{testimonial.stars}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {[
            { name: "Michael Owen", role: "Web Developer", quote: "The Web Development Bootcamp exceeded my expectations. Great instructors and excellent support!", stars: "⭐⭐⭐⭐⭐", avatar: "/academy/two.png" },
            { name: "Precious Uche", role: "Business Analyst", quote: "The Power BI course helped me create amazing dashboards. My manager was impressed with my new skills!", stars: "⭐⭐⭐⭐⭐", avatar: "/academy/three.png" },
          ].map((testimonial, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-800 mb-4">"{testimonial.quote}"</p>
              <p className="text-yellow-500">{testimonial.stars}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12">Find answers to common questions about our courses</p>

          <div className="space-y-4">
            {[
              "Will I get a Certificate?",
              "How long do courses last?",
              "Do I need prior experience?",
              "What platform are used for classes?",
            ].map((question, i) => (
              <div key={i} className="bg-white p-4 rounded-lg flex justify-between items-center cursor-pointer">
                <p className="font-medium text-gray-700">{question}</p>
                <span className="text-gray-500">▼</span>
              </div>
            ))}
          </div>
        </div>
      </section>
</div>
 
    </>
  );
}
