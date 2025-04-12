import Link from "next/link";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 pt-24 pb-20 flex flex-col items-start">
      <h2 className="text-base font-light text-white mb-3">Hey, I&apos;m</h2>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium gradient-text mb-10 font-gt-walsheim leading-tight">
        Sanjit Soreng
      </h1>

      <p className="text-lg font-light text-[#F0F0F0] max-w-3xl mb-12 leading-relaxed">
        I&apos;m a software engineer specializing in React Native, TypeScript, JavaScript, Redux, and Firebase. I build
        performant and user-friendly applications with clean, maintainable code and a focus on test coverage. My
        experience spans across healthcare applications, IoT systems, and various web/mobile projects.
      </p>

      <div className="flex items-center space-x-4">
        <Link href="#contact" className="text-2xl font-light text-white hover:opacity-80 transition-opacity">
          Say hi
        </Link>
        <div className="w-16 h-[1px] bg-white opacity-80"></div>
      </div>
    </section>
  );
}
