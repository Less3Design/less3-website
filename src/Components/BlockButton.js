import { ReactComponent as MailIcon } from "./mail.svg";

const BlockButton = (props) => {
  return (
    <div
      className="flex flex-row group items-center gap-4 px-6 py-4 text-nowrap backdrop-blur-3xl bg-less3-pink text-2xl font-bold text-less3-pink w-fit h-16 select-none hover:bg-less3-gray hover:text-black hover:drop-shadow-[0_0_35px_#7FD6FD80]"
      onClick={props.onClick}
    >
      {props.children}
      <MailIcon className="fill-less3-gray group-hover:fill-less3-pink" />
    </div>
  );
};

export default BlockButton;
