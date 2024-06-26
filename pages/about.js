import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Head>
      <title>About Me</title>
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
                              {/* <Image
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
                                  src={i}
                              /> */}
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
                                  className="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400"
                                  href="/about"
                                >
                                  About
                                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
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
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/speaking"
                                >
                                  Speaking
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
                    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                      <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                          {/* <Image
                            alt=""
                            loading="lazy"
                            width="800"
                            height="800"
                            decoding="async"
                            data-nimg="1"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            style={{ color: "transparent" }}
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=16&amp;q=75     16w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=32&amp;q=75     32w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=48&amp;q=75     48w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=64&amp;q=75     64w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=96&amp;q=75     96w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=128&amp;q=75   128w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=256&amp;q=75   256w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=384&amp;q=75   384w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=640&amp;q=75   640w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=750&amp;q=75   750w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=828&amp;q=75   828w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1080&amp;q=75 1080w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1200&amp;q=75 1200w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1920&amp;q=75 1920w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=2048&amp;q=75 2048w,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=3840&amp;q=75 3840w
                            "
                            src=" "
                          /> */}
                        </div>
                      </div>
                      <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                          I’m Spencer Sharp. I live in New York City, where I
                          design the future.
                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                          <p>
                            I’ve loved making things for as long as I can
                            remember, and wrote my first program when I was 6
                            years old, just two weeks after my mom brought home
                            the brand new Macintosh LC 550 that I taught myself
                            to type on.
                          </p>
                          <p>
                            The only thing I loved more than computers as a kid
                            was space. When I was 8, I climbed the 40-foot oak
                            tree at the back of our yard while wearing my older
                            sister’s motorcycle helmet, counted down from three,
                            and jumped — hoping the tree was tall enough that
                            with just a bit of momentum I’d be able to get to
                            orbit.
                          </p>
                          <p>
                            I spent the next few summers indoors working on a
                            rocket design, while I recovered from the multiple
                            surgeries it took to fix my badly broken legs. It
                            took nine iterations, but when I was 15 I sent my
                            dad’s Blackberry into orbit and was able to transmit
                            a photo back down to our family computer from space.
                          </p>
                          <p>
                            Today, I’m the founder of Planetaria, where we’re
                            working on civilian space suits and manned shuttle
                            kits you can assemble at home so that the next
                            generation of kids really <em>can</em> make it to
                            orbit — from the comfort of their own backyards.
                          </p>
                        </div>
                      </div>
                      <div className="lg:pl-20">
                        <ul role="list">
                          <li className="flex">
                            <Link
                              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                              href="#"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                              >
                                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path>
                              </svg>
                              <span className="ml-4">Follow on X</span>
                            </Link>
                          </li>
                          <li className="mt-4 flex">
                            <Link
                              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                              href="#"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                              >
                                <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                                <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                              </svg>
                              <span className="ml-4">Follow on Instagram</span>
                            </Link>
                          </li>
                          <li className="mt-4 flex">
                            <Link
                              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                              href="#"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                                ></path>
                              </svg>
                              <span className="ml-4">Follow on GitHub</span>
                            </Link>
                          </li>
                          <li className="mt-4 flex">
                            <Link
                              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                              href="#"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                              >
                                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                              </svg>
                              <span className="ml-4">Follow on LinkedIn</span>
                            </Link>
                          </li>
                          <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                            <Link
                              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                              href="mailto:spencer@planetaria.tech"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                                ></path>
                              </svg>
                              <span className="ml-4">spencer@planetaria.tech</span>
                            </Link>
                          </li>
                        </ul>
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
