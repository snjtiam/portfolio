import Link from "next/link";

interface ContactButtonProps {
  label: string;
  href: string;
}

function ContactButton({ label, href }: ContactButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 py-3 px-4 border border-[#C6C6C6] rounded-md text-[#C4C4C4] hover:bg-secondary/5 hover:border-white transition-colors"
    >
      <span className="text-base font-light">{label}</span>
    </Link>
  );
}

interface EducationProps {
  school: string;
  degree: string;
  period: string;
  location: string;
}

function Education({ school, degree, period, location }: EducationProps) {
  return (
    <div className="mb-6">
      <p className="text-sm font-light text-[#6CACE4] mb-1">
        {school} <span className="text-[#C4C4C4]">/ {location}</span>
      </p>
      <p className="text-base font-light text-white mb-1">{degree}</p>
      <p className="text-base font-light text-[#C4C4C4]">{period}</p>
    </div>
  );
}

interface CertificationProps {
  name: string;
}

function Certification({ name }: CertificationProps) {
  return (
    <div className="mb-2">
      <p className="text-base font-light text-[#C4C4C4]">• {name}</p>
    </div>
  );
}

export default function Contact() {
  const contactLinks = [
    {
      label: "Send an email",
      href: "mailto:sanjit.soreng@example.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/sanjit-soreng",
    },
    {
      label: "Github",
      href: "https://github.com/sanjitsoreng",
    },
  ];

  const education = {
    school: "Tula's Institute of Engineering",
    degree: "Bachelor of Technology (Computer Science and Engineering)",
    period: "2016 - 2020",
    location: "Dehradun, India",
  };

  const certifications = [
    { name: "Software Architecture & Design of Modern Large Scale Systems" },
    { name: "HIPAA Overview for End Users" },
    { name: "An Introduction to the General Data Protection Regulation (GDPR)" },
    { name: "PII and Compliance" },
    { name: "Kevin Mitnick Security Awareness Training" },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-start md:gap-36 mb-16">
        <h2 className="text-lg font-light uppercase text-white tracking-wide mb-10 md:mb-0">contact</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contactLinks.map((link, index) => (
            <ContactButton key={index} label={link.label} href={link.href} />
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:gap-36 mb-16">
        <h2 className="text-lg font-light uppercase text-white tracking-wide mb-10 md:mb-0">education</h2>

        <div>
          <Education {...education} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:gap-36">
        <h2 className="text-lg font-light uppercase text-white tracking-wide mb-10 md:mb-0">certifications</h2>

        <div className="max-w-xl">
          {certifications.map((cert, index) => (
            <Certification key={index} name={cert.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
