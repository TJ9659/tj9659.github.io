import GeneralLayout from "../components/ui/GeneralLayout";
import { ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <GeneralLayout
      header="Get In Touch"
      secondHeader="Let's discuss opportunities."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 bg-white p-8 rounded-2xl border border-gray-200 flex flex-col justify-between shadow-xs">
          <p className="text-gray-600 text-sm leading-relaxed">
            If you have any questions, just want to connect, or have a quick
            coffee chat, the best way to reach me is through LinkedIn, where I
            am highly responsive. Feel free to drop a message or connection
            request!
          </p>
        </div>

        <div className="md:col-span-7 bg-white p-8 rounded-2xl border border-gray-200 flex flex-col justify-center items-start gap-4 shadow-xs">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Connect with me
          </p>

          <a
            href="https://www.linkedin.com/in/jayson-teoh/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-between bg-[#0077B5] text-white rounded-xl py-3 px-6 text-sm font-semibold hover:bg-[#006297] transition-colors cursor-pointer"
          >
            <span>Connect on LinkedIn</span>
            <ExternalLink size={16} />
          </a>

          <a
            href="https://github.com/tj9659"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-between bg-gray-900 text-white rounded-xl py-3 px-6 text-sm font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <span>My GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </GeneralLayout>
  );
}
