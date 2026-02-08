import React from "react";

/**
 * A simple, linear blogpost-style layout for data analysis results.
 * Focused on readability, accessibility, and simplicity.
 */
export default function App() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 leading-relaxed">
      {/* Navigation - Simple and clear */}
      <nav className="border-b-2 border-slate-100 py-6 px-4 mb-12">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight">
            A11y Tech Report
          </span>
          <a
            href="#contact"
            className="text-blue-700 font-bold hover:underline focus:outline-3 focus:outline-blue-500 focus:outline-offset-4"
          >
            Get in touch
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pb-24 space-y-16">
        {/* Header Section */}
        <header>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Accessibility in Technology
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            An analysis of websites and their accessibility
            violations.
          </p>
          <div className="mt-8 flex items-center gap-4 text-slate-500 text-sm">
            <span className="bg-slate-100 px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs">
              Research Paper
            </span>
            <span>February 7, 2026</span>
          </div>
        </header>

        {/* Executive Summary */}
        <article className="prose prose-slate lg:prose-xl max-w-none">
          <h2 className="text-3xl font-bold border-b-4 border-blue-600 pb-2 mb-6">
            Executive Summary
          </h2>
          <p>
            Despite years of advocacy and legislation, web
            accessibility remains a significant hurdle for many
            organizations. Our data shows that while awareness
            is rising, the implementation of core standards like
            WCAG 2.2 is still lagging in critical sectors such
            as e-commerce and public services.
          </p>
          <p>
            In this report, we break down the primary points of
            failure and highlight the sectors that are leading
            the charge toward a more inclusive digital future.
          </p>
        </article>

        {/* Data Section 1: Tableau Placeholder */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Global Compliance Trends
          </h2>
          <p className="text-lg text-slate-700">
            The following visualization represents the
            percentage of websites that pass automated
            accessibility audits over the last five years.
          </p>

          {/* Tableau Iframe Placeholder */}
          <div
            className="bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden aspect-video flex flex-col items-center justify-center p-8 text-center"
            aria-label="Interactive Chart: Global Compliance Trends"
          >
            <div className="bg-white p-4 rounded shadow-sm mb-4">
              <svg
                className="w-12 h-12 text-slate-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
              </svg>
            </div>
            <p className="font-bold text-slate-400 uppercase tracking-widest text-sm mb-2">
              Tableau Embed Placeholder
            </p>
            <p className="text-slate-500 max-w-xs">
              The interactive graph will appear here via iframe.
            </p>
            {/* Example iframe implementation (commented out or just structure) */}
            {/* <iframe src="YOUR_TABLEAU_URL" className="w-full h-full border-none" title="Global Compliance Chart"></iframe> */}
          </div>
        </section>

        {/* Data Section 2: Tableau Placeholder */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            The Top Failures
          </h2>
          <p className="text-lg text-slate-700">
            Surprisingly, the most common issues are often the
            easiest to fix. Contrast errors and missing alt-text
            account for nearly 70% of all reported failures.
          </p>

          {/* Tableau Iframe Placeholder */}
          <div
            className="bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden aspect-square md:aspect-[16/9] flex flex-col items-center justify-center p-8 text-center"
            aria-label="Interactive Chart: Top Accessibility Failures"
          >
            <div className="bg-white p-4 rounded shadow-sm mb-4">
              <svg
                className="w-12 h-12 text-slate-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>
            <p className="font-bold text-slate-400 uppercase tracking-widest text-sm mb-2">
              Detailed Data Visual Placeholder
            </p>
            <p className="text-slate-500 max-w-xs">
              Detailed industry-by-industry breakdown goes here.
            </p>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-blue-50 border-l-8 border-blue-600 p-8 rounded-r-xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Key Takeaways
          </h2>
          <ul className="space-y-4 text-blue-800 text-lg list-disc pl-5">
            <li>
              <strong>Automate, then humanize:</strong>{" "}
              Automated tools catch 40% of errors; human testing
              is required for the rest.
            </li>
            <li>
              <strong>Contrast matters:</strong> 86% of landing
              pages have low-contrast text.
            </li>
            <li>
              <strong>Mobile is lagging:</strong> Accessibility
              scores are consistently lower on mobile-optimized
              views.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <article className="prose prose-slate lg:prose-xl max-w-none">
          <h2 className="text-3xl font-bold border-b-4 border-blue-600 pb-2 mb-6">
            Conclusion
          </h2>
          <p>
            The path to 100% digital accessibility is a journey,
            not a destination. By integrating accessibility
            checks into the CI/CD pipeline and prioritizing it
            during the design phase, we can drastically reduce
            the number of barriers for users with disabilities.
          </p>
          <div className="mt-12 p-8 border-2 border-slate-200 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-4">
              Ready to learn more?
            </h3>
            <button
              id="contact"
              className="px-10 py-5 bg-slate-900 text-white font-bold text-xl rounded-xl hover:bg-slate-800 focus:outline-4 focus:outline-blue-400 focus:outline-offset-2 transition-all active:scale-95 cursor-pointer shadow-lg"
            >
              Request Full Dataset
            </button>
          </div>
        </article>
      </main>

      <footer className="bg-slate-50 py-12 px-4 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-slate-500 text-sm">
          <p>
            &copy; 2026 Accessibility Data Collective. All
            findings are open-source under the MIT license.
          </p>
          <div className="mt-4 flex gap-6">
            <a
              href="#"
              className="underline hover:text-slate-900"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="underline hover:text-slate-900"
            >
              Accessibility Statement
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}