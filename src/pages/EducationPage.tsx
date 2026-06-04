import GeneralLayout from "../components/ui/GeneralLayout";
import educationHistoryData from "../data/educationHistory.json";

export default function Education() {
  return (
    <GeneralLayout
      header="Education"
      secondHeader="My academic background and milestones."
    >
      <div className="relative border-l border-gray-200 ml-3 md:ml-6 space-y-12">
        {educationHistoryData.map((edu) => (
          <div key={edu.id} className="relative pl-8 md:pl-12">
            <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-[#f5e2bc] ring-4 ring-[#f5e2bc]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5e2bc]" />
            </span>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-md font-medium text-gray-600 mt-1">
                    {edu.institution}
                  </p>
                </div>
                <span className="inline-block text-sm font-medium text-gray-500 md:text-right bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">
                  {edu.duration}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {edu.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg text-sm"
                  >
                    <span className="text-gray-500 font-medium">
                      {metric.label}:
                    </span>
                    <span className="text-gray-900 font-semibold">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <ul className="space-y-2.5 text-gray-600 list-disc list-outside pl-4 text-sm leading-relaxed">
                {edu.highlights.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </GeneralLayout>
  );
}
