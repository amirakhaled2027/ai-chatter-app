import { useContext, useState } from "react";
import { Context } from "../context/Context";

function SideNav() {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  //going back to previous prompts
  const loadPrevPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sideNav bg-blue-700 min-h-dvh h-full inline-flex flex-col justify-between py-5 px-5">
      {/* TOP SECTION */}
      <div className="top ">
        {/* bar icon */}
        <div>
          <svg
            onClick={() => setExtended((prev) => !prev)}
            class="w-8 h-8  dark:text-white cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </div>

        {/* new chat input */}
        {extended ? (
          <div
            onClick={() => newChat()}
            className="mt-10 inline-flex items-center gap-2 py-3 px-4 bg-white rounded-full text-black cursor-pointer"
          >
            {/* plus icon */}
            <div>
              <svg
                class="w-6 h-6  dark:text-white block pl-0 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            </div>
            {/* new chat text*/}
            <p>New Chat</p>
          </div>
        ) : null}

        {/* Recent Section */}
        {extended ? (
          <div className="flex flex-col">
            <p className="mt-8 mb-5">Recent </p>
            {prevPrompts.map((prevPrompt, index) => {
              return (
                <div
                  onClick={() => loadPrevPrompt(prevPrompt)}
                  key={index}
                  className="flex items-start gap-3 p-3 pr-10 rounded-full  cursor-pointer hover:bg-white hover:text-blue-700"
                >
                  {/* chat icon */}
                  <div>
                    <svg
                      class="w-6 h-6  dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                      />
                    </svg>
                  </div>
                  {/* recent chat text */}
                  <p>{prevPrompt.slice(0, 16)} ...</p>
                </div>
              );
            })}
            {/*  recent chat input*/}
          </div>
        ) : null}
      </div>

      {/* BOTTOM SECTION */}
      {extended ? (
        <div className="flex flex-col">
          {/* First Option */}
          <div className="flex items-start gap-3 p-2 -ml-2 rounded-full cursor-pointer hover:bg-white hover:text-blue-700">
            {/* icon */}
            <div>
              <svg
                class="w-6 h-6 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            {/* text */}
            <p>Settings</p>
          </div>

          {/* Second Option */}
          <div className="flex items-start gap-3 p-2 -ml-2 rounded-full cursor-pointer hover:bg-white hover:text-blue-700">
            {/* icon */}
            <div>
              <svg
                class="w-6 h-6 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            {/* text */}
            <p>Settings</p>
          </div>

          {/* Third Option */}
          <div className="flex items-start gap-3 p-2 -ml-2 rounded-full cursor-pointer hover:bg-white hover:text-blue-700">
            {/* icon */}
            <div>
              <svg
                class="w-6 h-6  dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            {/* text */}
            <p>Settings</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SideNav;
