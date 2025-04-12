export default function Skills() {
  const skills = ["React Native", "Typescript", "Javascript", "Redux", "Firebase Cloud", "Razorpay/Stripe", "Jest"];

  return (
    <div className="max-w-3xl mb-8">
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-md border border-[#6CACE4] bg-transparent px-5 py-2.5 text-sm font-light text-[#6CACE4]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
