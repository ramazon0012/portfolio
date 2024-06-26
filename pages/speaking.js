import Link from "next/link";
import Head from "next/head";

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking</title>
      </Head>
      <div className="flex w-full">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        <div className="relative flex w-full flex-col">
          <header
            className="pointer-events-none relative z-50 flex flex-none flex-col"
            style={{
              height: "var(--header-height)",
              marginBottom: "var(--header-mb)",
            }}
          >
            <div
              className="top-0 z-10 h-16 pt-6"
              style={{ position: "var(--header-position)" }}
            >
              <div
                className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
                style={{ position: "var(--header-inner-position)" }}
              >
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="relative flex gap-4">
                        <div className="flex flex-1">
                          <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                            <Link
                              aria-label="Home"
                              className="pointer-events-auto"
                              href="/"
                            >
                              <img
                                alt=""
                                fetchpriority="high"
                                width="512"
                                height="512"
                                decoding="async"
                                data-nimg="1"
                                className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                                style={{ color: "transparent" }}
                                sizes="2.25rem"
                                srcSet="
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=16&amp;q=75     16w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=32&amp;q=75     32w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=48&amp;q=75     48w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=64&amp;q=75     64w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=96&amp;q=75     96w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=128&amp;q=75   128w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=256&amp;q=75   256w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=384&amp;q=75   384w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=640&amp;q=75   640w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=750&amp;q=75   750w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=828&amp;q=75   828w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=1080&amp;q=75 1080w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=1200&amp;q=75 1200w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=1920&amp;q=75 1920w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=2048&amp;q=75 2048w,
                                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=3840&amp;q=75 3840w
                                        "
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=3840&amp;q=75"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="flex flex-1 justify-end md:justify-center">
                          <div
                            className="pointer-events-auto md:hidden"
                            data-headlessui-state=""
                          >
                            <button
                              className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                              type="button"
                              aria-expanded="false"
                              data-headlessui-state=""
                            >
                              Menu
                              <svg
                                viewBox="0 0 8 6"
                                aria-hidden="true"
                                className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                              >
                                <path
                                  d="M1.75 1.75 4 4.25l2.25-2.5"
                                  fill="none"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            style={{
                              position: "fixed",
                              top: "1px",
                              left: "1px",
                              width: "1px",
                              height: "0",
                              padding: "0",
                              margin: "-1px",
                              overflow: "hidden",
                              clip: "rect(0, 0, 0, 0)",
                              whiteSpace: "nowrap",
                              borderWidth: "0",
                              display: "none",
                            }}
                          ></div>
                          <nav className="pointer-events-auto hidden md:block">
                            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                              <li>
                                <Link
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/about"
                                >
                                  About
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/articles"
                                >
                                  Articles
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/projects"
                                >
                                  Projects
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400"
                                  href="/speaking"
                                >
                                  Speaking
                                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/uses"
                                >
                                  Uses
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="flex justify-end md:flex-1">
                          <div className="pointer-events-auto">
                            <button
                              type="button"
                              aria-label="Toggle theme"
                              className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
                              >
                                <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                                <path
                                  d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                                  fill="none"
                                ></path>
                              </svg>
                              <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
                              >
                                <path
                                  d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <header className="max-w-2xl">
                      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        I’ve spoken at events all around the world and been
                        interviewed for many podcasts.
                      </h1>
                      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        One of my favorite ways to share my ideas is live on
                        stage, where there’s so much more communication
                        bandwidth than there is in writing, and I love podcast
                        interviews because they give me the opportunity to
                        answer questions instead of just present my opinions.
                      </p>
                    </header>
                    <div className="mt-16 sm:mt-20">
                      <div className="space-y-20">
                        <section
                          aria-labelledby=":S1:"
                          className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                        >
                          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                            <h2
                              id=":S1:"
                              className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                            >
                              Conferences
                            </h2>
                            <div className="md:col-span-3">
                              <div className="space-y-16">
                                <article className="group relative flex flex-col items-start">
                                  <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                    <Link href="#">
                                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                      <span className="relative z-10">
                                        In space, no one can watch you stream —
                                        until now
                                      </span>
                                    </Link>
                                  </h3>
                                  <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                    <span
                                      className="absolute inset-y-0 left-0 flex items-center"
                                      aria-hidden="true"
                                    >
                                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                    </span>
                                    SysConf 2021
                                  </p>
                                  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    A technical deep-dive into HelioStream, the
                                    real-time streaming library I wrote for
                                    transmitting live video back to Earth.
                                  </p>
                                  <div
                                    aria-hidden="true"
                                    className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                                  >
                                    Watch video
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      aria-hidden="true"
                                      className="ml-1 h-4 w-4 stroke-current"
                                    >
                                      <path
                                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </article>
                                <article className="group relative flex flex-col items-start">
                                  <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                    <Link href="#">
                                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                      <span className="relative z-10">
                                        Lessons learned from our first product
                                        recall
                                      </span>
                                    </Link>
                                  </h3>
                                  <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                    <span
                                      className="absolute inset-y-0 left-0 flex items-center"
                                      aria-hidden="true"
                                    >
                                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                    </span>
                                    Business of Startups 2020
                                  </p>
                                  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    They say that if you’re not embarassed by
                                    your first version, you’re doing it wrong.
                                    Well when you’re selling DIY space shuttle
                                    kits it turns out it’s a bit more
                                    complicated.
                                  </p>
                                  <div
                                    aria-hidden="true"
                                    className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                                  >
                                    Watch video
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      aria-hidden="true"
                                      className="ml-1 h-4 w-4 stroke-current"
                                    >
                                      <path
                                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section
                          aria-labelledby=":S2:"
                          className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                        >
                          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                            <h2
                              id=":S2:"
                              className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                            >
                              Podcasts
                            </h2>
                            <div className="md:col-span-3">
                              <div className="space-y-16">
                                <article className="group relative flex flex-col items-start">
                                  <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                    <Link href="#">
                                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                      <span className="relative z-10">
                                        Using design as a competitive advantage
                                      </span>
                                    </Link>
                                  </h3>
                                  <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                    <span
                                      className="absolute inset-y-0 left-0 flex items-center"
                                      aria-hidden="true"
                                    >
                                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                    </span>
                                    Encoding Design, July 2022
                                  </p>
                                  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    How we used world-class visual design to
                                    attract a great team, win over customers,
                                    and get more press for Planetaria.
                                  </p>
                                  <div
                                    aria-hidden="true"
                                    className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                                  >
                                    Listen to podcast
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      aria-hidden="true"
                                      className="ml-1 h-4 w-4 stroke-current"
                                    >
                                      <path
                                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </article>
                                <article className="group relative flex flex-col items-start">
                                  <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                    <Link href="#">
                                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                      <span className="relative z-10">
                                        Bootstrapping an aerospace company to
                                        $17M ARR
                                      </span>
                                    </Link>
                                  </h3>
                                  <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                    <span
                                      className="absolute inset-y-0 left-0 flex items-center"
                                      aria-hidden="true"
                                    >
                                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                    </span>
                                    The Escape Velocity Show, March 2022
                                  </p>
                                  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    The story of how we built one of the most
                                    promising space startups in the world
                                    without taking any capital from investors.
                                  </p>
                                  <div
                                    aria-hidden="true"
                                    className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                                  >
                                    Listen to podcast
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      aria-hidden="true"
                                      className="ml-1 h-4 w-4 stroke-current"
                                    >
                                      <path
                                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </article>
                                <article className="group relative flex flex-col items-start">
                                  <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                    <Link href="#">
                                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                      <span className="relative z-10">
                                        Programming your company operating
                                        system
                                      </span>
                                    </Link>
                                  </h3>
                                  <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                    <span
                                      className="absolute inset-y-0 left-0 flex items-center"
                                      aria-hidden="true"
                                    >
                                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                    </span>
                                    How They Work Radio, September 2021
                                  </p>
                                  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    On the importance of creating systems and
                                    processes for running your business so that
                                    everyone on the team knows how to make the
                                    right decision no matter the situation.
                                  </p>
                                  <div
                                    aria-hidden="true"
                                    className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                                  >
                                    Listen to podcast
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      aria-hidden="true"
                                      className="ml-1 h-4 w-4 stroke-current"
                                    >
                                      <path
                                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="mt-32 flex-none">
            <div className="sm:px-8">
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          <Link
                            className="transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/about"
                          >
                            About
                          </Link>
                          <Link
                            className="transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/projects"
                          >
                            Projects
                          </Link>
                          <Link
                            className="transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/speaking"
                          >
                            Speaking
                          </Link>
                          <Link
                            className="transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/uses"
                          >
                            Uses
                          </Link>
                        </div>
                        <p className="text-sm text-zinc-400 dark:text-zinc-500">
                          © Spencer Sharp. All rights reserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
