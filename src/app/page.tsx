import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>John Doe Resume</title>
        <meta name="description" content="Resume of John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="max-w-4xl mx-auto p-8 text-gray-800 font-sans">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <p className="text-xl text-gray-600">Full Stack Developer</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Summary</h2>
          <p>
            Passionate full stack developer with over 10 years of experience in building scalable web applications,
            leading teams, and driving innovation. Skilled in JavaScript, React, and Node.js.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-bold">Senior Developer at XYZ Company</h3>
            <p className="text-sm text-gray-500">Jan 2020 - Present</p>
            <p className="mt-2">
              Leading a team of developers to build and maintain high-performance web applications. Focused on creating
              robust and scalable solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Developer at ABC Inc.</h3>
            <p className="text-sm text-gray-500">Jan 2015 - Dec 2019</p>
            <p className="mt-2">
              Developed full stack solutions for clients across various industries, contributing to both front-end and
              back-end development.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
            <p className="text-sm text-gray-500">University of Somewhere, 2010 - 2014</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Skills</h2>
          <ul className="list-disc ml-5">
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
            <li>Python / Django</li>
            <li>SQL / NoSQL</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:johndoe@example.com" className="text-blue-500 hover:underline">
              johndoe@example.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              John Doe
            </a>
          </p>
        </section>

        <footer className="text-center border-t border-gray-300 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
