export default function Footer() {
  return (
    <footer className="bg-[#f2ede4] py-4 w-full">
      <p className="text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Developed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tj9659"
          className="font-semibold hover:underline hover:cursor-pointer"
        >
          TJ9659
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
