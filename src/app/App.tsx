import React, { useEffect, useRef } from "react";

import { TableauViz } from '@tableau/embedding-api';
export{};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tableau-viz': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id?: string;
        src?: string;
        toolbar?: string;
        'hide-tabs'?: boolean;
      };
    }
  }
}

/**
 * A simple, linear blogpost-style layout for data analysis results.
 * Focused on readability, accessibility, and simplicity.
 */
export default function App() {
  const viz1Ref = useRef<HTMLDivElement>(null);
  const viz2Ref = useRef<HTMLDivElement>(null);
  const viz3Ref = useRef<HTMLDivElement>(null);
  const viz4Ref = useRef<HTMLDivElement>(null);
  const viz5Ref = useRef<HTMLDivElement>(null);
  const viz6Ref = useRef<HTMLDivElement>(null);
  const viz7Ref = useRef<HTMLDivElement>(null);
  const viz8Ref = useRef<HTMLDivElement>(null);
  const viz9Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const vizzes = [
      { ref: viz1Ref, url: 'https://public.tableau.com/views/UWDatathon2026/Sheet7' },
      { ref: viz2Ref, url: 'https://public.tableau.com/views/UWDatathon2026/Sheet2' },
      { ref: viz3Ref, url: 'https://public.tableau.com/views/UWDatathon2026/Dashboard3' },
      { ref: viz4Ref, url: 'https://public.tableau.com/views/UWDatathon2026/Sheet5' },
      { ref: viz5Ref, url: 'https://public.tableau.com/views/UWDatathon2026/Dashboard2' },
      { ref: viz6Ref, url: 'https://public.tableau.com/views/UWDatathon2026/Sheet6' },
      // { ref: viz7Ref, url: 'https://public.tableau.com/views/UWDatathon2026/Dashboard2' },
      // { ref: viz8Ref, url: 'https://public.tableau.com/views/UWDatathon2026/Dashboard3' },
      // { ref: viz9Ref, url: 'https://public.tableau.com/views/UWDatathon2026/Sheet6' },
    ];
  
    vizzes.forEach((item) => {
      if (item.ref.current) {
        item.ref.current.innerHTML = ''; // Prevents duplicates
        const viz = new TableauViz();
        viz.src = item.url;
        item.ref.current.appendChild(viz);
      }
    });
  
    return () => {
      vizzes.forEach((item) => {
        if (item.ref.current) item.ref.current.innerHTML = '';
      });
    };
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 leading-relaxed">
      {/* Navigation - Simple and clear */}
      <nav className="border-b-2 border-slate-100 py-6 px-4 mb-12">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight">
            Team Robert
          </span>
          {/* <a
            href="#contact"
            className="text-red-700 font-bold hover:underline focus:outline-3 focus:outline-red-500 focus:outline-offset-4"
          >
            Get in touch
          </a> */}
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
            {/*<span className="bg-slate-100 px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs">
              Research Paper
            </span>*/}
            <span>Kirby Vo, Kelbin Luong</span>
            <span>February 7, 2026</span>
          </div>
        </header>

        {/* Executive Summary */}
        <article className="prose prose-slate lg:prose-xl max-w-none">
          <h2 className="text-3xl font-bold border-b-4 border-red-600 pb-2 mb-6">
            Overview
          </h2>
          <p>
            Accessibility is defined as the "quality of being
            able to be reached". One of the internet's main
            goals is to make information vastly accessible to
            people around the world. Despite this, some websites
            that have thousands of visitors per day still
            contain critical violations of accessibility.
          </p>
          <p>
            Website accessibility is crucial to achieve equity
            by allowing everyone to have an effective
            experience.
          </p>

          <p>
            Using the{" "}
            <a
              href="https://b2find.eudat.eu/dataset/e0aa764f-959c-51a9-9f39-60ac02bbb1c7"
              className="text-red-600 underline hover:text-red-800 hover:no-underline transition-colors"
            >
              AccessGuru dataset
            </a>
            , we analyzed the trends of websites and their
            accessibility violations.
          </p>

          <p>
            Our findings aim to answer the following questions:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              Which domains (health, education, government,
              etc.) have the highest number of accessibility
              violations?
            </li>
            <li>
              What violation types are most common across sites
              or domains?
            </li>
            <li>
              Are there patterns in violations by violation category (syntactic, semantic, layout)?
            </li>
            <li>
              Examine invisible barriers: e.g., are certain
              violations more common on government sites than on e-commerce sites?
            </li>
          </ul>
        </article>

        {/* Data Section 1: Tableau Placeholder */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Which domains (health, education, government,
            etc.) have the highest number of accessibility
            violations?
          </h2>
          <p className="text-lg text-slate-700">
            The following Tableau visualization displays a
            chart of the top 20 domains with the most accessibility violations.
          </p>

          {/* Tableau Iframe Placeholder */}
          {/* First Tableau Embed */}
          <div ref={viz1Ref} />


          <p className="text-lg text-slate-700">
            However, the data involved aggregates the specific pages within each
            domain. The next visualization takes that into account by using the
            average number of accessibility violations within a domain per page.
          </p>

          {/* Tableau Iframe Placeholder */}
          {/* First Tableau Embed */}
          <div ref={viz2Ref} />
        </section>


        {/* Data Section 2: Tableau Placeholder */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            What violation types are most common across sites or domains?
          </h2>
          <p className="text-lg text-slate-700">
            The pie chart below shows the spread of different violation types.
            The Other group contains violation types that occur less than image-alt text.
          </p>

          {/* Tableau Iframe Placeholder */}
          {/* First Tableau Embed */}
          <div ref={viz5Ref} />
        </section>



        {/* Data Section 3: Tableau Placeholder */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Are there patterns in violations by violation category (syntactic, semantic, layout)?
          </h2>
          <p className="text-lg text-slate-700">
            This shows how each violation is grouped into three categories: syntax violations,
            layout violations, and semantic violations. Notice how syntax violations are
            noticeably more frequent than layout and semantic violations.
          </p>

          {/* Tableau Iframe Placeholder */}
          {/* First Tableau Embed */}
          <div ref={viz3Ref} />


          <p className="text-lg text-slate-700">
            Instead of grouping solely based on categories, the values can also be split based
            on the different domain categories.
          </p>

          {/* Tableau Iframe Placeholder */}
          {/* First Tableau Embed */}
          <div ref={viz4Ref} />
        </section>




        {/* Data Section 4: Tableau Placeholder */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Examine invisible barriers: e.g., are certain
            violations more common on government sites than on e-commerce sites?
          </h2>
          <p className="text-lg text-slate-700">
            The heatmap displays how common certain violation types occur within a specific domain category.
          </p>

          {/* Tableau Iframe Placeholder */}
          {/* First Tableau Embed */}
          <div ref={viz6Ref} />
        </section>

        

        {/* Key Takeaways */}
        <section className="bg-red-50 border-l-8 border-red-600 p-8 rounded-r-xl">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Key Takeaways
          </h2>
          <ul className="space-y-4 text-red-800 text-lg list-disc pl-5">
            <li>
              Syntax violations are the most common, especially in news-and-media-related websites.
            </li>
            <li>
              The most offending violation group is color contrast.
            </li>
            <p>Tip: ensure your website's color scheme has sufficient contrast. Alternatively, include a high-contrast color theme.</p>
          </ul>
        </section>

        {/* Conclusion */}
        <article className="prose prose-slate lg:prose-xl max-w-none">
          <h2 className="text-3xl font-bold border-b-4 border-red-600 pb-2 mb-6">
            Conclusion
          </h2>
          <p>
            The AccessGuru dataset reveals that many websites have accessibility violations, even including websites that should support
            accessible experiences in the first place (e.g. government-powered .gov, school-related .edu domains). These findings emphasize
            that web accessibility is not only a challenge for design; it's an issue of equity. Failing to meet accessibility standards
            prevent a large audience from having access to information.
          </p>
          <p>
            Luckily, many common accessibility violations are easily preventable. Web developers taking accessibility into account can create
            more inclusive online experiences for everyone.
          </p>
          {/*<div className="mt-12 p-8 border-2 border-slate-200 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-4">
              Ready to learn more?
            </h3>
            <button
              id="contact"
              className="px-10 py-5 bg-slate-900 text-white font-bold text-xl rounded-xl hover:bg-slate-800 focus:outline-4 focus:outline-red-400 focus:outline-offset-2 transition-all active:scale-95 cursor-pointer shadow-lg"
            >
              Request Full Dataset
            </button>
          </div>*/}
        </article>
      </main>

      <footer className="bg-slate-50 py-12 px-4 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-slate-500 text-sm">
          <p>Team Robert</p>
          <div className="mt-4 flex gap-6">
            <a
              href="https://github.com/luongk10/uwdatathon2026"
              className="underline hover:text-slate-900"
            >
              Github repo
            </a>
            <a
              href="https://b2find.eudat.eu/dataset/e0aa764f-959c-51a9-9f39-60ac02bbb1c7"
              className="underline hover:text-slate-900"
            >
              About AccessGuru dataset
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}