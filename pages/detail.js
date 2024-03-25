import Link from "next/link";

export default function Detail() {
  return (
    <>
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
            <div className="sm:px-8 mt-16 lg:mt-32">
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="xl:relative">
                      <div className="mx-auto max-w-2xl">
                        <article>
                          <header className="flex flex-col">
                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                              Crafting a design system for a multiplanetary
                              future
                            </h1>
                            <time
                              dateTime="2022-09-05"
                              className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                            >
                              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                              <span className="ml-3">September 5, 2022</span>
                            </time>
                          </header>
                          <div
                            className="mt-8 prose dark:prose-invert"
                            data-mdx-content="true"
                          >
                            <p>
                              Most companies try to stay ahead of the curve when
                              it comes to visual design, but for Planetaria we
                              needed to create a brand that would still inspire
                              us 100 years from now when humanity has spread
                              across our entire solar system.
                            </p>
                            <img
                              alt=""
                              loading="lazy"
                              width="1310"
                              height="872"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              srcSet="
                                    /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplanetaria-design-system.d4cfce90.png&amp;w=1920&amp;q=75 1x,
                                    /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplanetaria-design-system.d4cfce90.png&amp;w=3840&amp;q=75 2x
                                    "
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplanetaria-design-system.d4cfce90.png&amp;w=3840&amp;q=75"
                            />
                            <p>
                              I knew that to get it right I was going to have to
                              replicate the viewing conditions of someone from
                              the future, so I grabbed my space helmet from the
                              closet, created a new Figma document, and got to
                              work.
                            </p>
                            <h2>Sermone fata</h2>
                            <p>
                              Lorem markdownum, bracchia in redibam! Terque unda
                              puppi nec, linguae posterior in utraque respicere
                              candidus Mimasque formae; quae conantem cervice.
                              Parcite variatus, redolentia adeunt. Tyrioque
                              dies, naufraga sua adit partibus celanda torquere
                              temptata, erit maneat et ramos,
                              <Link href="#">iam</Link> ait dominari potitus! Tibi
                              litora matremque fumantia condi radicibus opusque.
                            </p>
                            <p>
                              Deus feram verumque, fecit, ira tamen, terras per
                              alienae victum. Mutantur levitate quas ubi arcum
                              ripas oculos abest. Adest
                              <Link href="#">commissaque victae</Link> in gemitus
                              nectareis ire diva dotibus ora, et findi huic
                              invenit; fatis? Fractaque dare superinposita
                              nimiumque simulatoremque sanguine, at voce
                              aestibus diu! Quid veterum hausit tu nil utinam
                              paternos ima, commentaque.
                            </p>
                            <p>
                              Aere repetiti cognataque natus. Habebat vela
                              solutis saepe munus nondum adhuc oscula nomina
                              pignora corpus deserat.
                            </p>
                            <h2>Lethaei Pindumve me quae dinumerat Pavor</h2>
                            <p>
                              Idem se saxa fata pollentibus geminos; quos
                              pedibus. Est urnis Herses omnes nec divite: et
                              ille illa furit sim verbis Cyllenius.
                            </p>
                            <ol>
                              <li>Captus inpleverunt collo</li>
                              <li>Nec nam placebant</li>
                              <li>Siquos vulgus</li>
                              <li>Dictis carissime fugae</li>
                              <li>A tacitos nulla viginti</li>
                            </ol>
                            <p>
                              Ungues fistula annoso, ille addit linoque motatque
                              uberior verso <Link href="#">rubuerunt</Link> confine
                              desuetaque. <em>Sanguine</em> anteit emerguntque
                              expugnacior est pennas iniqui ecce
                              <strong>haeret</strong> genus: peiora imagine
                              fossas Cephisos formosa! Refugitque amata
                              <Link href="#">refelli</Link> supplex. Summa brevis
                              vetuere tenebas, hostes vetantis, suppressit,
                              arreptum regna. Postquam conpescit iuvenis habet
                              corpus, et erratica, perdere, tot mota ars talis.
                            </p>

                            <p>
                              Sit volat naturam; motu Cancri. Erat pro simul
                              quae valuit quoque timorem quam proelia: illo
                              patrio
                              <em>esse summus</em>, enim sua serpentibus,
                              Hyleusque. Est coniuge recuso; refert Coroniden
                              ignotos manat, adfectu.
                            </p>
                          </div>
                        </article>
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
