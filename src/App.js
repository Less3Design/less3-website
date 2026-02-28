import "./App.css";
import BlockButton from "./Components/BlockButton";
import { ReactComponent as Heart } from "./Less3Heart.svg";
import React from "react";
import ParallaxImage from "./Components/ParallaxImage";

function App() {
  return (
    <div className="App">
      <div className="m-4 rounded-[0px] bg-black absolute left-0 right-0 top-0 bottom-0 overflow-clip animate-containerEnter">
        {/* BG image*/}
        <ParallaxImage
          strength={3}
          src={"bg_b.jpg"}
          className="absolute w-full h-full shrink-0 object-cover animate-containerWhite select-none"
        />

        <ParallaxImage
          strength={10}
          src={"bg_f.png"}
          className="absolute w-full h-full shrink-0 object-cover animate-containerWhite select-none"
        />

        <ParallaxImage
          strength={20}
          src={"bg_sf.png"}
          className="absolute w-full h-full shrink-0 object-cover animate-containerWhite blur-[1px] select-none"
        />

        <ParallaxImage
          strength={30}
          src={"bg_ssf.png"}
          className="absolute w-full h-full shrink-0 object-cover animate-containerWhite blur-[16px] select-none"
        />

        <ParallaxImage
          strength={40}
          src={"bg_flare.png"}
          className="absolute w-full h-full shrink-0 object-cover animate-containerWhite blur-[32px] select-none"
          style={{ mixBlendMode: "screen" }}
        />

        {/* Little corner bits*/}
        <div className="absolute left-0 bottom-0 w-[24px] h-[24px] bg-black"></div>
        <div className="absolute left-0 bottom-0 w-[16px] h-[8px] bg-less3-pink"></div>
        <div className="absolute left-0 bottom-0 w-[8px] h-[16px] bg-less3-pink"></div>

        {/* Right Marquee*/}
        <div className="absolute right-0 top-0 bottom-0 w-[41px] bg-less3-pink">
        <div className="w-full h-full overflow-hidden relative">
          <div
            className="absolute left-0 w-full h-[200%] animate-marquee-vertical-reverse"
            style={{
              backgroundImage: "url('tiling.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "41px 19px",
              top: "-50%",
            }}
          ></div>
          <style>
            {`
              @keyframes marquee-vertical-reverse {
                0% {
                  top: -50%;
                }
                100% {
                  top: 0;
                }
              }
              .animate-marquee-vertical-reverse {
                animation: marquee-vertical-reverse 40s linear infinite;
              }
            `}
          </style>
        </div>

        </div>

        {/* Top Left*/}
        <div className="absolute left-16 top-16 gap-4 grid">
          <div className="bg-less3-pink text-less3-gray text-[64px] px-6 py-0 flex justify-center items-center">
            LESS3
            <div className="bg-less3-gray text-less3-pink text-[24px] h-[48px] font-bold flex justify-center items-center p-[8px] ml-4">
              VIDEO GAMES
            </div>
          </div>
          <div className="flex">
            <BlockButton
              onClick={() => {
                navigator.clipboard.writeText("hello@less3.design");
                alert("hello@less3.design copied to clipboard!");
              }}
            />
            <div className="bg-less3-gray/50 px-6 py-4 h-16 text-[24px] font-bold text-less3-pink text-nowrap w-min select-text flex items-center justify-center drop-shadow-[0_0_35px_#FF8DFD80] backdrop-blur-3xl bg-white/10">
              GET IN TOUCH
            </div>
          </div>
        </div>

        {/* Enter animation stuff below */}
        <div className="absolute inset-0 animate-blurFade pointer-events-none"></div>
        {/* black fill animation*/}
        <div className="absolute left-[-4px] right-[-4px] bottom-[-4px] top-[-4px] opacity-0 bg-black animate-containerBlack pointer-events-none"></div>
        {/* <Heart className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] h-[128px] opacity-0 origin-center w-fit animate-heartEnter"></Heart>*/}
        <div className="absolute inset-0 text-less3-pink flex items-center opacity-0 justify-center pointer-events-none animate-hideAfter gap-2">
          <Heart className="h-8 fill-less3-pink" />
          <div className="font-bold text-4xl">LESS3</div>
        </div>
        <div className="absolute left-[-4px] right-[-4px] bottom-[-4px] top-[-4px] opacity-0 bg-less3-pink animate-whiteFlash delay-1000 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default App;
