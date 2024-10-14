import { ReactComponent as LinkIcon } from "./LinkIcon.svg";
import { ReactComponent as CopyIcon } from "./Copy.svg";

const BlockButton = (props) => {
  if (props.active)
    return (
      <div
        className="px-6 py-4 h-16 bg-black text-2xl font-bold text-white text-nowrap w-min select-none"
        onClick={props.onClick}
      >
        {props.children}
      </div>
    );
  switch (props.color) {
    case "white":
      return (
        <div
          className="flex flex-row h-16 group items-center gap-4 px-6 py-4 text-nowrap backdrop-blur-3xl bg-white/15 text-2xl font-bold text-white w-min select-none hover:bg-white hover:text-black hover:drop-shadow-[0_0_35px_rgba(255,255,255,.5)]"
          onClick={props.onClick}
        >
          {props.children && props.children}
          {props.isLink && (
            <LinkIcon className="fill-white group-hover:fill-black" />
          )}
          {props.isCopy && (
            <CopyIcon className="fill-white group-hover:fill-black" />
          )}
        </div>
      );
    case "orange":
      return (
        <div
          className="flex flex-row group h-16 items-center gap-4 px-6 py-4 text-nowrap backdrop-blur-3xl bg-[#FD6D40]/15 text-2xl font-bold text-[#FD6D40] w-fit select-none hover:bg-[#FD6D40] hover:text-black hover:drop-shadow-[0_0_35px_#FD6D4080]"
          onClick={props.onClick}
        >
          {props.children}
          {props.isLink && (
            <LinkIcon className="fill-[#FD6D40] group-hover:fill-black" />
          )}
          {props.isCopy && (
            <CopyIcon className="fill-[#FD6D40] group-hover:fill-black" />
          )}
        </div>
      );
    case "blue":
      return (
        <div
          className="flex flex-row group items-center gap-4 px-6 py-4 text-nowrap backdrop-blur-3xl bg-[#7FD6FD]/15 text-2xl font-bold text-[#7FD6FD] w-fit h-16 select-none hover:bg-[#7FD6FD] hover:text-black hover:drop-shadow-[0_0_35px_#7FD6FD80]"
          onClick={props.onClick}
        >
          {props.children}
          {props.isLink && (
            <LinkIcon className="fill-[#7FD6FD] group-hover:fill-black" />
          )}
          {props.isCopy && (
            <CopyIcon className="fill-[#7FD6FD] group-hover:fill-black" />
          )}
        </div>
      );
  }
};

export default BlockButton;
