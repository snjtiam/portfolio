import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string;
  gradientClass: string;
  githubLink?: string;
  liveLink?: string;
}

function Project({ title, description, technologies, gradientClass, githubLink, liveLink }: ProjectProps) {
  return (
    <div className="flex flex-col h-full group">
      <div
        className={`${gradientClass} w-full h-52 rounded-md mb-8 transition-transform duration-300 group-hover:scale-[1.02]`}
      ></div>

      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-2xl font-light text-white">{title}</h3>
          <div className="flex space-x-5">
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${title}`}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z"
                    fill="white"
                  />
                </svg>
              </Link>
            )}
            {liveLink && (
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live version of ${title}`}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 10.82C17.5 10.82 17.1 10.42 17.1 9.92V7.12L12.71 11.5C12.51 11.7 12.26 11.8 12 11.8C11.74 11.8 11.49 11.7 11.29 11.5C10.9 11.1 10.9 10.47 11.29 10.08L15.68 5.7H12.88C12.38 5.7 11.98 5.3 11.98 4.8C11.98 4.3 12.38 3.9 12.88 3.9H18C18.5 3.9 18.9 4.3 18.9 4.8V9.92C18.9 10.42 18.5 10.82 18 10.82Z"
                    fill="white"
                  />
                  <path
                    d="M12 20.1C7.03 20.1 3 16.07 3 11.1C3 6.13 7.03 2.1 12 2.1C12.5 2.1 12.9 2.5 12.9 3C12.9 3.5 12.5 3.9 12 3.9C8.01 3.9 4.8 7.12 4.8 11.1C4.8 15.08 8.01 18.3 12 18.3C15.98 18.3 19.2 15.08 19.2 11.1C19.2 10.6 19.6 10.2 20.1 10.2C20.6 10.2 21 10.6 21 11.1C21 16.07 16.98 20.1 12 20.1Z"
                    fill="white"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>

        <p className="text-base font-light text-[#C4C4C4] mb-5 flex-1 leading-relaxed">{description}</p>
        <p className="text-sm font-light text-[#6CACE4]">{technologies}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "IntenseProxy",
      description: "Proxy provider website including authentication, dashboard and dynamic features",
      technologies: "React - Bootstrap - Styled Components",
      gradientClass: "card-gradient-1",
      githubLink: "https://github.com/username/intenseproxy",
      liveLink: "https://intenseproxy.com",
    },
    {
      title: "$AAPE Coin",
      description: "Site for a BSC based coin called $AAPE",
      technologies: "Vue - Nuxt - Netlify",
      gradientClass: "card-gradient-2",
      githubLink: "https://github.com/username/aape-coin",
      liveLink: "https://aapecoin.com",
    },
    {
      title: "Blockchain Explorer; Hive Attention Tokens",
      description: "Sidechain explorer open source project (block explorer) for transactions.",
      technologies: "React - TailwindCSS - Context API",
      gradientClass: "card-gradient-3",
      githubLink: "https://github.com/username/blockchain-explorer",
      liveLink: "https://hivehat.com",
    },
    {
      title: "GitProfile",
      description:
        "A nicer look to Github profiles using features such as user search, authentication using Firebase and charts using the GitHub API.",
      technologies: "React - Redux - Firebase - GitHub API",
      gradientClass: "card-gradient-4",
      githubLink: "https://github.com/username/gitprofile",
      liveLink: "https://gitprofile.dev",
    },
    {
      title: "MovieDB",
      description:
        "TV application, displays different categories of movies/shows (popular, in theaters, trending etc) alongside a search option using TheMovieDB API for the data",
      technologies: "React.js - Redux - TheMovieDB API",
      gradientClass: "card-gradient-5",
      githubLink: "https://github.com/username/moviedb",
      liveLink: "https://themoviedb-app.vercel.app",
    },
    {
      title: "Soundify",
      description:
        "Music search application, displays informations about artists such as albums, biography, songs that are available on youtube and much more using TheAudioDB API",
      technologies: "Vue.js - Vuex - TheAudioDB API",
      gradientClass: "card-gradient-6",
      githubLink: "https://github.com/username/soundify",
      liveLink: "https://soundify.vercel.app",
    },
    {
      title: "Mu6icbot",
      description:
        "Discord music bot using Node.js and Discord's API library to play music through YouTube, added Genius API making the bot capable to pull the lyrics for the current playing song",
      technologies: "Discord Library - Node.js - Genius API - Youtube API",
      gradientClass: "card-gradient-1",
      githubLink: "https://github.com/username/mu6icbot",
      liveLink: "https://mu6icbot.vercel.app",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-light uppercase text-white tracking-wide mb-12">Featured projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
