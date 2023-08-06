import React from "react";

const TypesOfCancer = () => {
  return (
    <>
      <section class="bg-white dark:bg-[#1e403c]">
        <div class="container lg:max-w-6xl py-40 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            explore the <br /> types of
            <span class="underline decoration-[#f6f2a5]">&nbsp; Cancer</span>
          </h1>

          <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Although, there are many types of cancer, here are a select few
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="p-8 bg-[#141617] space-y-3 border-2 border-[#f6f2a5] dark:border-blue-300 rounded-xl">
              <span class="inline-block text-[#f6f2a5] dark:text-[#f6f2a5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Breast Cancer
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                Breast cancer is cancer that develops from breast tissue. Signs
                of breast cancer may include a lump in the breast, a change in
                breast shape, dimpling of the skin, milk rejection, fluid coming
                from the nipple, a newly inverted nipple, or a red or scaly
                patch of skin.
              </p>
            </div>

            <div class="p-8 mt-8 space-y-3 border-2 border-[#f6f2a5] dark:border-blue-300 rounded-xl">
              <span class="inline-block text-[#f6f2a5] dark:text-[#f6f2a5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Leukemia
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                Leukemia is a group of blood cancers that usually begin in the
                bone marrow and result in high numbers of abnormal blood cells.
                These blood cells are not fully developed and are called blasts
                or leukemia cells. Symptoms may include bleeding and bruising,
                bone pain, fatigue, fever, and an increased risk of infections.
              </p>
            </div>

            <div class="p-8 mt-16 bg-[#141617] space-y-3 border-2 border-[#f6f2a5] dark:border-blue-300 rounded-xl">
              <span class="inline-block text-[#f6f2a5] dark:text-[#f6f2a5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Prostate cancer
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                Prostate cancer is the uncontrolled growth of cells in the
                prostate, a gland in the male reproductive system just below the
                bladder. Early prostate cancer usually causes no symptoms. As
                the tumor grows, it can damage nearby organs causing erectile
                dysfunction, blood in the urine or semen, and trouble urinating.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TypesOfCancer;
