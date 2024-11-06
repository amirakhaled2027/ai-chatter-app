import { Context } from "../context/Context";
import { useContext } from "react";
import SideNav from "../components/SideNav";
import Logo from "../assets/logo.jpg";
import Main from "../assets/main.jpg";

function Homepage() {
  //getting the states and functions using the Context API
  const {
    onSent,
    setInput,
    input,
    showResult,
    resultData,
    recentPrompt,
    loading,
  } = useContext(Context);
  return (
    <div className=" relative flex min-h-dvh ">
      <div>
        <SideNav />
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex-1 min-h-dvh">
        {/* Logo */}
        <div className="flex flex-row items-center justify-between text-2xl p-5 text-blue-700">
          <p className="font-bold">AI Chatter</p>
          <img src={Logo} alt="Logo" className="w-20 rounded-[50%]" />
        </div>

        {/* ----------MAIN CONTEXT----------- */}

        <div className="">
          {!showResult ? (
            <>
              {/* MAIN TITLE */}
              <div class="my-14 mx-0 text-6xl">
                <h1 class=" mainTitle mb-5  text-3xl sm:text-4xl md:text-5xl font-[700] text-blue-700 text-center">
                  Let's get something done! <br />
                  <br /> What's on your mind?
                </h1>
              </div>
              {/*CARDS */}
              <div className="px-10 ">
                <img src={Main} alt="Logo" className="block sm:hidden" />
                <section id="testimonies" class="py-20 hidden sm:block">
                  <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
                    <div class="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8  ">
                      {/* first card */}
                      <ul class="hidden space-y-8 sm:block">
                        <li class="text-sm leading-6">
                          <div class="relative group">
                            <div class="absolute transition rounded-lg opacity-40 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-60 group-hover:duration-200"></div>
                            <div class="relative h-auto lg:h-80 xl:h-48 p-6 space-y-6 leading-none rounded-lg bg-blue-700 ring-1 ring-red-900/5">
                              <p class="leading-normal text-white text-[17px]">
                                <strong>Smart Conversations:</strong> Ask
                                anything! Get instant answers, creative content,
                                and helpful assistance.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>

                      {/* second card */}
                      <ul class="hidden space-y-8 sm:block ">
                        <li class="text-sm leading-6">
                          <div class="relative group">
                            <div class="absolute transition rounded-lg opacity-40 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-60 group-hover:duration-200"></div>
                            <div class="relative h-auto lg:h-80 xl:h-48 p-6 space-y-6 leading-none rounded-lg bg-blue-700 ring-1 ring-red-900/5">
                              <p class="leading-normal text-white text-[17px]">
                                <strong>Solve Problems Efficiently</strong> Our
                                AI can provide insightful perspectives and
                                assist you in finding solutions.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>

                      {/* third card */}
                      <ul class="hidden space-y-8 sm:block">
                        <li class="text-sm leading-6">
                          <div class="relative group">
                            <div class="absolute transition rounded-lg opacity-40 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-60 group-hover:duration-200"></div>
                            <div class="relative h-auto lg:h-80 xl:h-48 p-6 space-y-6 leading-none rounded-lg bg-blue-700 ring-1 ring-red-900/5">
                              <p class="leading-normal text-white text-[17px]">
                                <strong>Learn & Explore:</strong> Discover new
                                information, expand your knowledge, and engage
                                in insightful discussions on any topic.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>

                      {/* fourth card */}
                      <ul class="hidden space-y-8 sm:block">
                        <li class="text-sm leading-6">
                          <div class="relative group">
                            <div class="absolute transition rounded-lg opacity-40 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-60 group-hover:duration-200"></div>
                            <div class="relative h-auto lg:h-80 xl:h-48 p-6 space-y-6 leading-none rounded-lg bg-blue-700 ring-1 ring-red-900/5">
                              <p class="leading-normal text-white text-[17px]">
                                <strong>Unlock Your Creativity:</strong>{" "}
                                Effortlessly create stories, poems, code, and
                                various other forms of text.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </>
          ) : (
            <div className=" pt-18  px-0 sm:px-20 ">
              <div>
                <p className="font-bold text-xl mb-2 capitalize">
                  {recentPrompt}
                </p>
              </div>
              <div>
                {loading ? (
                  <div class="bg-white flex space-x-12 p-12 justify-center items-center">
                    <div class=" border-blue-300  rounded-md p-4  w-full mx-auto">
                      <div class="animate-pulse flex space-x-60">
                        <div class="flex-1 space-y-4 py-1">
                          <div class="h-4 bg-blue-400 rounded w-3/4"></div>
                          <div class="space-y-2">
                            <div class="h-4 bg-blue-400 rounded"></div>
                            <div class="h-4 bg-blue-400 rounded w-5/6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[70dvh] overflow-y-auto px-10 sm:py-2">
                    <p
                      className="response text-[18px] font-normal leading-relaxed px-14"
                      dangerouslySetInnerHTML={{ __html: resultData }}
                    ></p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* PROMPT INPUT */}
          {/* the main input with h and icons */}
          <div className=" h-full flex flex-col items-center justify-center mx-6 bg-white mb-5 mt-5 ">
            {/* the search box */}
            <div className="flex-grow overflow-y-auto p-6    w-full max-w-2xl flex items-center gap-5 bg-gray-200 py-3 px-5 rounded-full">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Chat with AI chatter"
                className="z-50 block w-full rounded-md border-0 bg-gray-200 py-0.5 sm:py-1.5 pl-1 sm:pl-7 text-gray-900 outline-none placeholder:text-gray-400 placeholder:text-base focus:border-none focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
              />

              <div className="flex gap-4  pr-1 sm:pr-7">
                {/* send icon */}
                <div>
                  <svg
                    className="h-7 w-7 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 24 24"
                    onClick={() => onSent()}
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
