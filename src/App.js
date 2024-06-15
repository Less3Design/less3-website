import "./App.css";
import BlockButton from "./Components/BlockButton";
import { ReactComponent as Heart } from "./Less3Heart.svg";

function App() {
  return (
    <div className="App">
      <div className="m-8 rounded-[32px] bg-neutral-800 absolute left-0 right-0 top-0 bottom-0 overflow-clip animate-containerEnter">
        {/* Top Left*/}
        <img
          src="bg_temp.png"
          className="w-full h-full shrink-0 object-cover"
        ></img>
        <div className="absolute left-16 top-16 gap-4 grid">
          <BlockButton active={true} color="white">
            SCENE_COMMENTS
          </BlockButton>
          <BlockButton active={false} color="white">
            FORCE_GRAPH
          </BlockButton>
          <BlockButton active={false} color="white">
            CONTROL_CENTER
          </BlockButton>
          <BlockButton active={false} color="white">
            OTHER_THING
          </BlockButton>
        </div>

        {/* Bottom Left*/}
        <div className="absolute left-16 bottom-16 px-9 py-6 bg-black text-white font-bold text-8xl select-none">
          LESS_3
        </div>
        {/* Bottom Right*/}
        <div className="absolute right-16 bottom-16 gap-4 grid justify-items-end">
          <BlockButton active={false} color="blue" isLink={true}>
            ASSET STORE
          </BlockButton>
          <BlockButton active={false} color="orange" isLink={true}>
            DOCMENTATION
          </BlockButton>
        </div>

        {/* Temp under cunstruction*/}
        <div className="absolute inset-0 text-white flex items-center justify-center pointer-events-none gap-2">
          <div className="flex gap-2 bg-[#FBFF33]/50 backdrop-blur-3xl items-center justify-center px-6 py-4">
            <Heart className="h-8 fill-[#FBFF33]" />
            <div className="font-bold text-4xl text-[#FBFF33]">
              Site Under Construction
            </div>
            <Heart className="h-8 fill-[#FBFF33]" />
          </div>
        </div>

        {/* Enter animation stuff below */}
        <div className="absolute inset-0 animate-blurFade pointer-events-none"></div>
        {/* black fill animation*/}
        <div className="absolute left-[-4px] right-[-4px] bottom-[-4px] top-[-4px] opacity-0 bg-black animate-containerBlack pointer-events-none"></div>
        {/* <Heart className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] h-[128px] opacity-0 origin-center w-fit animate-heartEnter"></Heart>*/}
        <div className="absolute inset-0 text-white flex items-center opacity-0 justify-center pointer-events-none animate-hideAfter gap-2">
          <Heart className="h-8 fill-white" />
          <div className="font-bold text-4xl">LESS_3</div>
        </div>
        <div className="absolute left-[-4px] right-[-4px] bottom-[-4px] top-[-4px] opacity-0 bg-white animate-whiteFlash delay-1000 pointer-events-none"></div>
        <div className="absolute inset-0 border-4 rounded-[36px] border-dotted border-white/40 opacity-0 drop-shadow-[0_0_8px_rgba(255,255,255,.5)] animate-containerWhite pointer-events-none"></div>
      </div>
    </div>
  );
}

export default App;
