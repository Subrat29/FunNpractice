import React from 'react'

function App() {
  return (

    <main class="mb-auto">
      <div>
        <div class="pt-6 space-y-2 md:space-y-5">
          <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Blog. ✍️</h1>
          <h2 class="mb-16 text-lg prose text-gray-600 dark:text-gray-400">The archive of everything I've written.</h2>
          <div class="relative max-w-lg">
            <input type="text" aria-label="Search articles" placeholder="Search articles" class="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100" />
            <svg class="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
              </path>
            </svg>
          </div>
        </div>
        <div class="pt-6 grid grid-cols-1 gap-4 w-full md:grid-cols-1">
          <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full">
            <div class="flex flex-col space-y-5">
              <div class="grid grid-cols-2 gap-3 md:grid-cols-2 text-navy-green float-root">
                <div class="flex space-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"></path>
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                  </svg>
                  <span class="text-xs text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">December 17, 2023</span>
                </div>
                <div class="flex space-x-2 right-0">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
                  </svg>
                  <span class="text-xs text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">667 views</span>
                </div>
              </div>
              <a href="#">
                <h2 class="text-xl font-bold text-slate-light">I built a gnome shell extension to show how much my day, month, year and life has passed.</h2>
              </a>
              <p class="text-slate text-gray-500 dark:text-gray-400">last night, Inspired by the concept of "Memento Mori", I built a Linux gnome shell extension which shows how much day, month, year,my life has passed, in menu bar.</p>
              <div class="text-base font-medium leading-6">
                <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Read &quot;I built a gnome shell extension to show how much my day, month, year and life has passed.&quot;" href="#">Read more →</a>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </main>
  )
}

export default App
