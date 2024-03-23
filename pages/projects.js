

export default function Project() {
    return (
        <>
            <div class="flex w-full">
                <div class="fixed inset-0 flex justify-center sm:px-8">
                    <div class="flex w-full max-w-7xl lg:px-8">
                    <div
                        class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
                    ></div>
                    </div>
                </div>
                <div class="relative flex w-full flex-col">
                    <header
                    class="pointer-events-none relative z-50 flex flex-none flex-col"
                    style={{ height: 'var(--header-height)', marginBottom: 'var(--header-mb)' }}
                    >
                    <div
                        class="top-0 z-10 h-16 pt-6"
                        style={{ position: 'var(--header-position)' }}
                    >
                        <div
                        class="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
                        style={{ position: 'var(--header-inner-position)' }}
                        >
                        <div class="mx-auto w-full max-w-7xl lg:px-8">
                            <div class="relative px-4 sm:px-8 lg:px-12">
                            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                                <div class="relative flex gap-4">
                                <div class="flex flex-1">
                                    <div
                                    class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
                                    >
                                    <a
                                        aria-label="Home"
                                        class="pointer-events-auto"
                                        href="/"
                                        ><img
                                        alt=""
                                        fetchPriority="high"
                                        width="512"
                                        height="512"
                                        decoding="async"
                                        data-nimg="1"
                                        class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                                        style={{ color: 'transparent' }}
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
                                    /></a>
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
                                        Menu<svg
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
                                        position: 'fixed',
                                        top: '1px',
                                        left: '1px',
                                        width: '1px',
                                        height: '0',
                                        padding: '0',
                                        margin: '-1px',
                                        overflow: 'hidden',
                                        clip: 'rect(0, 0, 0, 0)',
                                        whiteSpace: 'nowrap',
                                        borderWidth: '0',
                                        display: 'none'
                                    }}
                                    ></div>
                                    <nav class="pointer-events-auto hidden md:block">
                                    <ul
                                        class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
                                    >
                                        <li>
                                        <a
                                            class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                            href="/about"
                                            >About</a
                                        >
                                        </li>
                                        <li>
                                        <a
                                            class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                            href="/articles"
                                            >Articles</a
                                        >
                                        </li>
                                        <li>
                                        <a
                                            class="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400"
                                            href="/projects"
                                            >Projects<span
                                            class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
                                            ></span
                                        ></a>
                                        </li>
                                        <li>
                                        <a
                                            class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                            href="/speaking"
                                            >Speaking</a
                                        >
                                        </li>
                                        <li>
                                        <a
                                            class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                            href="/uses"
                                            >Uses</a
                                        >
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
                                        <path
                                            d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"
                                        ></path>
                                        <path
                                            d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                                            fill="none"
                                        ></path></svg
                                        ><svg
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
                                <h1
                                class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
                                >
                                Things I’ve made trying to put my dent in the universe.
                                </h1>
                                <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                I’ve worked on tons of little projects over the years but
                                these are the ones that I’m most proud of. Many of them
                                are open-source, so if you see something that piques your
                                interest, check out the code and contribute if you have
                                ideas for how it can be improved.
                                </p>
                            </header>
                            <div class="mt-16 sm:mt-20">
                                <ul
                                role="list"
                                class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                                >
                                <li class="group relative flex flex-col items-start">
                                    <div
                                    class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                                    >
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        class="h-8 w-8"
                                        style={{ color: 'transparent' }}
                                        src="src/media/planetaria.ecd81ade.svg"
                                    />
                                    </div>
                                    <h2
                                    class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100"
                                    >
                                    <div
                                        class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"
                                    ></div>
                                    <a href="http://planetaria.tech"
                                        ><span
                                        class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
                                        ></span
                                        ><span class="relative z-10">Planetaria</span></a
                                    >
                                    </h2>
                                    <p
                                    class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
                                    >
                                    Creating technology to empower civilians to explore
                                    space on their own terms.
                                    </p>
                                    <p
                                    class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
                                    >
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        class="h-6 w-6 flex-none"
                                    >
                                        <path
                                        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                        fill="currentColor"
                                        ></path></svg
                                    ><span class="ml-2">planetaria.tech</span>
                                    </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                    <div
                                    class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                                    >
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        class="h-8 w-8"
                                        style={{ color: 'transparent' }}
                                        src="src/media/animaginary.8d221e52.svg"
                                    />
                                    </div>
                                    <h2
                                    class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100"
                                    >
                                    <div
                                        class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"
                                    ></div>
                                    <a href="#"
                                        ><span
                                        class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
                                        ></span
                                        ><span class="relative z-10">Animaginary</span></a
                                    >
                                    </h2>
                                    <p
                                    class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
                                    >
                                    High performance web animation library, hand-written
                                    in optimized WASM.
                                    </p>
                                    <p
                                    class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
                                    >
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        class="h-6 w-6 flex-none"
                                    >
                                        <path
                                        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                        fill="currentColor"
                                        ></path></svg
                                    ><span class="ml-2">github.com</span>
                                    </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                    <div
                                    class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                                    >
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        class="h-8 w-8"
                                        style={{ color: 'transparent' }}
                                        src="src/media/helio-stream.2ac8d11f.svg"
                                    />
                                    </div>
                                    <h2
                                    class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100"
                                    >
                                    <div
                                        class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"
                                    ></div>
                                    <a href="#"
                                        ><span
                                        class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
                                        ></span
                                        ><span class="relative z-10">HelioStream</span></a
                                    >
                                    </h2>
                                    <p
                                    class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
                                    >
                                    Real-time video streaming library, optimized for
                                    interstellar transmission.
                                    </p>
                                    <p
                                    class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
                                    >
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        class="h-6 w-6 flex-none"
                                    >
                                        <path
                                        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                        fill="currentColor"
                                        ></path></svg
                                    ><span class="ml-2">github.com</span>
                                    </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                    <div
                                    class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                                    >
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        class="h-8 w-8"
                                        style={{ color: 'transparent' }}
                                        src="src/media/cosmos.c70b0295.svg"
                                    />
                                    </div>
                                    <h2
                                    class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100"
                                    >
                                    <div
                                        class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"
                                    ></div>
                                    <a href="#"
                                        ><span
                                        class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
                                        ></span
                                        ><span class="relative z-10">cosmOS</span></a
                                    >
                                    </h2>
                                    <p
                                    class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
                                    >
                                    The operating system that powers our Planetaria space
                                    shuttles.
                                    </p>
                                    <p
                                    class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
                                    >
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        class="h-6 w-6 flex-none"
                                    >
                                        <path
                                        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                        fill="currentColor"
                                        ></path></svg
                                    ><span class="ml-2">github.com</span>
                                    </p>
                                </li>
                                <li class="group relative flex flex-col items-start">
                                    <div
                                    class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                                    >
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        class="h-8 w-8"
                                        style={{ color: 'transparent' }}
                                        src="src/media/open-shuttle.db0327e4.svg"
                                    />
                                    </div>
                                    <h2
                                    class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100"
                                    >
                                    <div
                                        class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"
                                    ></div>
                                    <a href="#"
                                        ><span
                                        class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
                                        ></span
                                        ><span class="relative z-10">OpenShuttle</span></a
                                    >
                                    </h2>
                                    <p
                                    class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
                                    >
                                    The schematics for the first rocket I designed that
                                    successfully made it to orbit.
                                    </p>
                                    <p
                                    class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
                                    >
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        class="h-6 w-6 flex-none"
                                    >
                                        <path
                                        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                        fill="currentColor"
                                        ></path></svg
                                    ><span class="ml-2">github.com</span>
                                    </p>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </main>
                    <footer class="mt-32 flex-none">
                    <div class="sm:px-8">
                        <div class="mx-auto w-full max-w-7xl lg:px-8">
                        <div
                            class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40"
                        >
                            <div class="relative px-4 sm:px-8 lg:px-12">
                            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                                <div
                                class="flex flex-col items-center justify-between gap-6 sm:flex-row"
                                >
                                <div
                                    class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200"
                                >
                                    <a
                                    class="transition hover:text-teal-500 dark:hover:text-teal-400"
                                    href="/about"
                                    >About</a
                                    ><a
                                    class="transition hover:text-teal-500 dark:hover:text-teal-400"
                                    href="/projects"
                                    >Projects</a
                                    ><a
                                    class="transition hover:text-teal-500 dark:hover:text-teal-400"
                                    href="/speaking"
                                    >Speaking</a
                                    ><a
                                    class="transition hover:text-teal-500 dark:hover:text-teal-400"
                                    href="/uses"
                                    >Uses</a
                                    >
                                </div>
                                <p class="text-sm text-zinc-400 dark:text-zinc-500">
                                    ©
                                    Spencer Sharp. All rights reserved.
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
    )
}