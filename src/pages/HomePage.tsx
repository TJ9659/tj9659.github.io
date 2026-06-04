
export default function Home () {
  const underlineBase =
    "relative inline-block font-normal after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full";

  return (
    <div>
      <div className="rounded-xl bg-white p-8 border border-gray-200 shadow-md flex flex-col gap-8">
        <div className="flex flex-col gap-2 md:text-left text-center">
          <h1 className="text-3xl md:text-5xl font-light">
            👨‍💻 Software Engineer
          </h1>
          <p className="text-xl font-light text-gray-500">
            Specializing in robust backend systems and modern frontend
            frameworks.
          </p>
        </div>

        <div className="text-xl md:text-2xl font-light flex flex-col gap-4">
          <h2 className=" leading-loose">
            I build web apps with{" "}
            <span className={`${underlineBase} after:bg-[#6DB33F]`}>
              Spring Boot
            </span>
            ,{" "}
            <span className={`${underlineBase} after:bg-[#FF2D20]`}>
              Laravel
            </span>
            ,{" "}
            <span className={`${underlineBase} after:bg-[#339933]`}>
              Node.js
            </span>
            ,{" "}
            <span className={`${underlineBase} after:bg-[#61DAFB]`}>React</span>
            , <span className={`${underlineBase} after:bg-[#41B883]`}>Vue</span>
            ,{" "}
            <span className={`${underlineBase} after:bg-[#9553E6]`}>
              Inertia.js
            </span>
            , &{" "}
            <span className={`${underlineBase} after:bg-[#38BDF8]`}>
              Tailwind CSS
            </span>
            , but I can be flexible enough to work with any tech stack.
          </h2>

          <h2 className=" leading-loose">
            I also have experience in containerization with{" "}
            <span className={`${underlineBase} after:bg-[#0a1dc9]`}>
              Docker
            </span>
            .
          </h2>

          <h2 className=" leading-loose">
            I'm from{" "}
            <span
              className={`${underlineBase} after:bg-gradient-to-r after:from-[#0033aa] after:via-[#cc0000] after:to-[#ffcc00] after:h-[4px]`}
            >
              🇲🇾 Malaysia
            </span>
            , and am looking for a full-time position as a Software Engineer.
          </h2>

          <h2 className="">
            Find me on{" "}
            <a
              className="text-blue-600 hover:underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jayson-teoh/"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              className="text-blue-600 hover:underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tj9659"
            >
              GitHub
            </a>
            .
          </h2>
        </div>
      </div>
    </div>
  );
};
