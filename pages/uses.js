import Link from "next/link";

export default function Uses() {
  return (
    <>
      <div class="flex w-full">
        <div class="fixed inset-0 flex justify-center sm:px-8">
          <div class="flex w-full max-w-7xl lg:px-8">
            <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        <div class="relative flex w-full flex-col">
          <header
            class="pointer-events-none relative z-50 flex flex-none flex-col"
            style={{
              height: "var(--header-height)",
              marginBottom: "var(--header-mb)",
            }}
          >
            <div
              class="top-0 z-10 h-16 pt-6"
              style={{ position: "var(--header-position)" }}
            >
              <div
                class="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
                style={{ position: "var(--header-inner-position)" }}
              >
                <div class="mx-auto w-full max-w-7xl lg:px-8">
                  <div class="relative px-4 sm:px-8 lg:px-12">
                    <div class="mx-auto max-w-2xl lg:max-w-5xl">
                      <div class="relative flex gap-4">
                        <div class="flex flex-1">
                          <div class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                            <Link
                              aria-label="Home"
                              class="pointer-events-auto"
                              href="/"
                            >
                              <img
                                alt=""
                                fetchPriority="high"
                                width="512"
                                height="512"
                                decoding="async"
                                data-nimg="1"
                                class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                                style={{ color: "transparent" }}
                                sizes="2.25rem"
                                srcset="
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
                        <div class="flex flex-1 justify-end md:justify-center">
                          <div
                            class="pointer-events-auto md:hidden"
                            data-headlessui-state=""
                          >
                            <button
                              class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                              type="button"
                              aria-expanded="false"
                              data-headlessui-state=""
                            >
                              Menu
                              <svg
                                viewBox="0 0 8 6"
                                aria-hidden="true"
                                class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                              >
                                <path
                                  d="M1.75 1.75 4 4.25l2.25-2.5"
                                  fill="none"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
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
                          <nav class="pointer-events-auto hidden md:block">
                            <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                              <li>
                                <Link
                                  class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/about"
                                >
                                  About
                                </Link>
                              </li>
                              <li>
                                <Link
                                  class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/articles"
                                >
                                  Articles
                                </Link>
                              </li>
                              <li>
                                <Link
                                  class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/projects"
                                >
                                  Projects
                                </Link>
                              </li>
                              <li>
                                <Link
                                  class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/speaking"
                                >
                                  Speaking
                                </Link>
                              </li>
                              <li>
                                <Link
                                  class="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400"
                                  href="/uses"
                                >
                                  Uses
                                  <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div class="flex justify-end md:flex-1">
                          <div class="pointer-events-auto">
                            <button
                              type="button"
                              aria-label="Toggle theme"
                              class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                                class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
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
                                class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
                              >
                                <path
                                  d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
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
          <main class="flex-auto">
            <div class="sm:px-8 mt-16 sm:mt-32">
              <div class="mx-auto w-full max-w-7xl lg:px-8">
                <div class="relative px-4 sm:px-8 lg:px-12">
                  <div class="mx-auto max-w-2xl lg:max-w-5xl">
                    <header class="max-w-2xl">
                      <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Software I use, gadgets I love, and other things I
                        recommend.
                      </h1>
                      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I get asked a lot about the things I use to build
                        software, stay productive, or buy to fool myself into
                        thinking I’m being productive when I’m really just
                        procrastinating. Here’s a big list of all of my favorite
                        stuff.
                      </p>
                    </header>
                    <div class="mt-16 sm:mt-20">
                      <div class="space-y-20">
                        <section
                          aria-labelledby=":S1:"
                          class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                        >
                          <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                            <h2
                              id=":S1:"
                              class="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                            >
                              Workstation
                            </h2>
                            <div class="md:col-span-3">
                              <ul role="list" class="space-y-16">
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    16” MacBook Pro, M1 Max, 64GB RAM (2021)
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    I was using an Intel-based 16” MacBook Pro
                                    prior to this and the difference is night
                                    and day. I’ve never heard the fans turn on a
                                    single time, even under the incredibly heavy
                                    loads I put it through with our various
                                    launch simulations.
                                  </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    Apple Pro Display XDR (Standard Glass)
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    The only display on the market if you want
                                    something HiDPI and bigger than 27”. When
                                    you’re working at planetary scale, every
                                    pixel you can get counts.
                                  </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    IBM Model M SSK Industrial Keyboard
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    They don’t make keyboards the way they used
                                    to. I buy these any time I see them go up
                                    for sale and keep them in storage in case I
                                    need parts or need to retire my main.
                                  </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    Apple Magic Trackpad
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    Something about all the gestures makes me
                                    feel like a wizard with special powers. I
                                    really like feeling like a wizard with
                                    special powers.
                                  </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    Herman Miller Aeron Chair
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    If I’m going to slouch in the worst
                                    ergonomic position imaginable all day, I
                                    might as well do it in an expensive chair.
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </section>
                        <section
                          aria-labelledby=":S2:"
                          class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                        >
                          <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                            <h2
                              id=":S2:"
                              class="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                            >
                              Development tools
                            </h2>
                            <div class="md:col-span-3">
                              <ul role="list" class="space-y-16">
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    Sublime Text 4
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    I don’t care if it’s missing all of the
                                    fancy IDE features everyone else relies on,
                                    Sublime Text is still the best text editor
                                    ever made.
                                  </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    iTerm2
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    I’m honestly not even sure what features I
                                    get with this that aren’t just part of the
                                    macOS Terminal but it’s what I use.
                                  </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    TablePlus
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    Great software for working with databases.
                                    Has saved me from building about a thousand
                                    admin interfaces for my various projects
                                    over the years.
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </section>
                        <section
                          aria-labelledby=":S3:"
                          class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                        >
                          <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                            <h2
                              id=":S3:"
                              class="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                            >
                              Design
                            </h2>
                            <div class="md:col-span-3">
                              <ul role="list" class="space-y-16">
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    Figma
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    We started using Figma as just a design tool
                                    but now it’s become our virtual whiteboard
                                    for the entire company. Never would have
                                    expected the collaboration features to be
                                    the real hook.
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </section>
                        <section
                          aria-labelledby=":S4:"
                          class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                        >
                          <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                            <h2
                              id=":S4:"
                              class="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                            >
                              Productivity
                            </h2>
                            <div class="md:col-span-3">
                              <ul role="list" class="space-y-16">
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    Alfred
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    It’s not the newest kid on the block but
                                    it’s still the fastest. The Sublime Text of
                                    the application launcher world.
                                  </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    Reflect
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    Using a daily notes system instead of trying
                                    to keep things organized by topics has been
                                    super powerful for me. And with Reflect,
                                    it’s still easy for me to keep all of that
                                    stuff discoverable by topic even though all
                                    of my writing happens in the daily note.
                                  </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    SavvyCal
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    Great tool for scheduling meetings while
                                    protecting my calendar and making sure I
                                    still have lots of time for deep work during
                                    the week.
                                  </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    Focus
                                  </h3>
                                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    Simple tool for blocking distracting
                                    websites when I need to just do the work and
                                    get some momentum going.
                                  </p>
                                </li>
                              </ul>
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
          <footer class="mt-32 flex-none">
            <div class="sm:px-8">
              <div class="mx-auto w-full max-w-7xl lg:px-8">
                <div class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
                  <div class="relative px-4 sm:px-8 lg:px-12">
                    <div class="mx-auto max-w-2xl lg:max-w-5xl">
                      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          <Link
                            class="transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/about"
                          >
                            About
                          </Link>
                          <Link
                            class="transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/projects"
                          >
                            Projects
                          </Link>
                          <Link
                            class="transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/speaking"
                          >
                            Speaking
                          </Link>
                          <Link
                            class="transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/uses"
                          >
                            Uses
                          </Link>
                        </div>
                        <p class="text-sm text-zinc-400 dark:text-zinc-500">
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
