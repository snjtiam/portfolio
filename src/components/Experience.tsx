interface JobProps {
  title: string;
  period: string;
  company: string;
  location?: string;
  responsibilities: string[];
}

function Job({ title, period, company, location, responsibilities }: JobProps) {
  return (
    <div className="mb-14">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-2">
        <h3 className="text-2xl font-light text-white">{title}</h3>
        <p className="text-base font-light text-[#C4C4C4]">{period}</p>
      </div>
      <p className="text-sm font-light text-[#6CACE4] mb-4">
        {company}
        {location ? ` / ${location}` : ""}
      </p>

      <div className="space-y-3">
        {responsibilities.map((responsibility, index) => (
          <p key={index} className="text-base font-light text-[#C4C4C4] leading-relaxed">
            {responsibility}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const jobs: JobProps[] = [
    {
      title: "Senior Software Engineer",
      period: "April 2022 - March, 2025",
      company: "Mindbowser Infosolution(BrightInsight)",
      location: "Remote",
      responsibilities: [
        "• Planned and architected major features serving over 500,000 end users",
        "• Designed and developed internal SDKs to streamline app development across various teams, reducing redundant effort and improving developer productivity.",
        "• Delivered a high-impact healthcare application for a major French pharmaceutical client, adhering to strict HIPAA and GDPR standards.",
        "• Created comprehensive documentation and specification of the application to meet audit and compliance requirements.",
        "• Developed robust unit tests and contributed to improving overall test coverage, resulting in a more stable and reliable codebase.",
        "• Monitored and resolved performance issues, leading to a 20% improvement in app load time and responsiveness.",
        "• Collaborated with cross-functional teams including QA, Product, and UI/UX to merge features on time and with high quality.",
        "• Actively contributed to sprint planning, retrospectives, and agile ceremonies to ensure smooth delivery cycles.",
        "• Mentored and supported new team members, facilitating onboarding and continuous learning through code reviews and pair programming.",
      ],
    },
    {
      title: "Software Engineer",
      period: "May 2020 - March 2022",
      company: "Audertec Solutions",
      location: "Remote",
      responsibilities: [
        "• Developed a Project & Task Management app with Redux, reusable UI components, and REST API integrations.",
        "• Designed and developed an IoT-based room heater control app using TCP sockets and Firebase Cloud Messaging.",
        "• Built an IoT sensor monitoring app with performance optimizations and real-time chart visualizations for sensor alerts.",
        "• Developed a video streaming and educational app for kids with extended video player functionality and animated UI.",
        "• Collaborated with designers to create a kid-friendly interface with custom animations using Reanimated.",
        "• Contributed to an eCommerce application focusing on seamless user experience and performance optimization.",
        "• Created interactive charts and alert plotting based on threshold breaches in sensor data.",
        "• Built a task assignment app for service agents with integrated maps, GPS, and camera functionality.",
        "• Used Google Maps API for task location plotting and RNFS for image capture/upload with a custom gallery interface.",
        "• Integrated secure payment gateways and handled checkout workflows with validations and real-time feedback.",
        "• Worked on user authentication, wishlist, cart management, and order history modules.",
        "• Ensured app performance and responsiveness across Android and iOS platforms with platform-specific optimizations.",
      ],
    },
  ];

  return (
    <div className="max-w-3xl">
      {jobs.map((job, index) => (
        <Job key={index} {...job} />
      ))}
    </div>
  );
}
