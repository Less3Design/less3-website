import "./App.css";
import BlockButton from "./Components/BlockButton";
import { ReactComponent as Heart } from "./Less3Heart.svg";
import React, { useState } from "react";

function App() {
  const [showAbout, setShowAbout] = useState(true);

  return (
    <div className="App">
      <div className="m-8 rounded-[32px] bg-black absolute left-0 right-0 top-0 bottom-0 overflow-clip animate-containerEnter">
        {/* Top Left*/}
        {!showAbout && (
          <>
            <img
              src={"homepage2.png"}
              className="absolute w-full h-full shrink-0 object-cover animate-containerWhite"
            ></img>
          </>
        )}

        <img
          src="homepage1.png"
          className="w-full h-full shrink-0 object-cover transition-all duration-1000 ease-in-out"
        ></img>

        <div className="absolute left-16 top-16 gap-4 grid">
          <BlockButton
            active={showAbout}
            color="white"
            onClick={() => setShowAbout(true)}
          >
            LESS_3
          </BlockButton>
          <BlockButton
            active={!showAbout}
            color="white"
            onClick={() => setShowAbout(false)}
          >
            SCENE_COMMENTS
          </BlockButton>
        </div>

        <div className="absolute left-16 bottom-16 gap-4 grid">
          {/* Bottom Left*/}
          {showAbout && (
            <>
              <div className="flex">
                <BlockButton
                  active={false}
                  color="orange"
                  isLink={false}
                  isCopy={true}
                  onClick={() => {
                    navigator.clipboard.writeText("hello@less3.design");
                    alert("hello@less3.design copied to clipboard!");
                  }}
                />
                <div className="px-6 py-4 h-16 bg-[#FD6D40] text-2xl font-bold text-black text-nowrap w-min select-text">
                  hello@less3.design
                </div>
              </div>
              <BlockButton active={true} color="white" isLink={false}>
                Studio creating games and tools for the Unity engine
              </BlockButton>
            </>
          )}
          {!showAbout && (
            <>
              <BlockButton
                active={false}
                color="blue"
                isLink={true}
                onClick={() => {
                  window
                    .open(
                      "https://assetstore.unity.com/packages/slug/295634",
                      "_blank"
                    )
                    .focus();
                }}
              >
                ASSET STORE
              </BlockButton>
              <BlockButton active={true} color="white" isLink={false}>
                Leave notes and comments on Unity scenes
              </BlockButton>
            </>
          )}
        </div>

        {/* Temp under cunstruction
        <div className="absolute inset-0 text-white flex items-center justify-center pointer-events-none gap-0">
          <div className="flex gap-2 bg-[#FBFF33]/30 backdrop-blur-3xl items-center justify-center px-0 py-2">
            <Heart className="h-4 fill-[#FBFF33]" />
            <div className="font-bold text-xl text-[#FBFF33]">
              Site Under Construction
            </div>
            <Heart className="h-4 fill-[#FBFF33]" />
          </div>
        </div>
              */}

        {/* Enter animation stuff below */}
        <div className="absolute inset-0 animate-blurFade pointer-events-none"></div>
        {/* black fill animation*/}
        <div className="absolute left-[-4px] right-[-4px] bottom-[-4px] top-[-4px] opacity-0 bg-black animate-containerBlack pointer-events-none"></div>
        {/* <Heart className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] h-[128px] opacity-0 origin-center w-fit animate-heartEnter"></Heart>*/}
        <div className="absolute inset-0 text-white flex items-center opacity-0 justify-center pointer-events-none animate-hideAfter gap-2">
          <Heart className="h-8 fill-white" />
          <div className="font-bold text-4xl">LESS 3</div>
        </div>
        <div className="absolute left-[-4px] right-[-4px] bottom-[-4px] top-[-4px] opacity-0 bg-white animate-whiteFlash delay-1000 pointer-events-none"></div>
        <div className="absolute inset-0 border-4 rounded-[36px] border-dotted border-white/40 opacity-0 drop-shadow-[0_0_8px_rgba(255,255,255,.5)] animate-containerWhite pointer-events-none"></div>
      </div>
    </div>
  );
}

export default App;
