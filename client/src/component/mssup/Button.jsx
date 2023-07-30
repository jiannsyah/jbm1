import { BsPlusSquare } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FiSave } from "react-icons/fi";
import { TbArrowBackUp } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import { ImPrevious2 } from "react-icons/im";
import { ImNext2 } from "react-icons/im";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { MdOutlineFindInPage } from "react-icons/md";
import { AiOutlinePrinter } from "react-icons/ai";

function Button(props) {
  const { icon, text, disabled, onClick } = props;
  return (
    <button
      className="w-[70px] h-7 gap-x-1 bg-slate-200 disabled:bg-slate-500 disabled:text-white text-black border border-blue-400 flex items-center justify-center text-sm hover:border-blue-900 hover:border-2"
      disabled={disabled}
      onClick={onClick}
    >
      {icon()}
      {text}
    </button>
  );
}

export default Button;
