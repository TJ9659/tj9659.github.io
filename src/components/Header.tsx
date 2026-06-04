import { NavLink } from "react-router";

export default function Header() {
  const links = [
    {
      title: "About",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Education",
      href: "/education",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div>
      <header className="flex md:flex-row flex-col gap-4 justify-center items-center">
        <div className="shrink-0">
          <img
            className="animate-spin [animation-duration:20s] size-32 sm:size-40 md:size-48 aspect-square rounded-full object-cover border-2 border-gray-900 shadow-sm"
            src="/images/profile-pic.jpeg"
            alt="Profile picture"
          />
        </div>

        <div className="md:text-left text-center">
          <h1 className="text-2xl">
            Hello! My name is <strong>Jayson</strong>.
          </h1>
          <h2 className="text-lg">
            I am a Software Engineer based in <strong>🇲🇾 Malaysia</strong>.
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 mt-5 text-sm sm:text-base w-full">
            {links.map((link) => (
              <NavLink
                key={link.href}
                className={({ isActive }) =>
                  `transition-all hover:cursor-pointer ${
                    isActive ? "font-bold underline" : ""
                  }`
                }
                to={link.href}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
