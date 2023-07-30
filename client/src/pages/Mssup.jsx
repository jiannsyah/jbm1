import { useEffect, useRef, useState } from "react";
import Button from "../component/mssup/Button";
import Input from "../component/mssup/Input";

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

const Mssup = () => {
  const [values, setValues] = useState({
    code: "",
    name: "",
  });
  const [data, setData] = useState([]);
  const [cmd, setCmd] = useState("");
  const linkRef = useRef();

  const inputs = [
    {
      id: 1,
      name: "code",
      type: "text",
      placeholder: "Kode Supplier",
      label: "Kode Supplier",
      maxLength: "5",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Nama Supplier",
      label: "Nama Supplier",
      maxLength: "40",
      required: true,
    },
  ];

  const displayData = () => {
    data.length === 0 ? setCmd("") : setCmd("mhlcmd");
  };

  useEffect(() => {
    // displayData();
  }, [cmd]);

  const clickAdd = (e) => {
    e.preventDefault();
    setCmd("mhladd");
    linkRef.current.focus();
  };
  // console.log(data, cmd);
  const clickChange = () => {};
  const clickDelete = () => {};
  const clickSave = (e) => {
    e.preventDefault();
    setData([...data, values]);
    setValues({ code: "", name: "" });
    linkRef.current.focus();
  };
  const clickCancel = (e) => {
    e.preventDefault();
    displayData();
  };
  const clickExit = () => {};
  const clickTop = () => {};
  const clickBottom = () => {};
  const clickNext = () => {};
  const clickPrev = () => {};
  const clickFind = () => {};
  const clickPrint = () => {};

  const buttons = [
    {
      id: 1,
      text: "Add",
      icon: (size = 15) => <BsPlusSquare size={size} />,
      handleClick: clickAdd,
    },
    {
      id: 2,
      text: "Change",
      icon: (size = 15) => <FiEdit size={size} />,

      handleClick: clickChange,
    },
    {
      id: 3,
      text: "Delete",
      icon: (size = 15) => <RxCross2 size={size} />,
      handleClick: clickDelete,
    },
    {
      id: 4,
      text: "Save",
      icon: (size = 15) => <FiSave size={size} />,
      handleClick: clickSave,
    },
    {
      id: 5,
      text: "Cancel",
      icon: (size = 15) => <TbArrowBackUp size={size} />,
      handleClick: clickCancel,
    },
    {
      id: 6,
      text: "Exit",
      icon: (size = 15) => <RxExit size={size} />,
      handleClick: clickExit,
    },
    {
      id: 7,
      text: "Top",
      icon: (size = 15) => <ImPrevious2 size={size} />,
      handleClick: clickTop,
    },
    {
      id: 8,
      text: "Bottom",
      icon: (size = 15) => <ImNext2 size={size} />,
      handleClick: clickBottom,
    },
    {
      id: 9,
      text: "Next",
      icon: (size = 15) => <GrPrevious size={size} />,
      handleClick: clickNext,
    },
    {
      id: 10,
      text: "Prev",
      icon: (size = 15) => <GrNext size={size} />,
      handleClick: clickPrev,
    },
    {
      id: 11,
      text: "Find",
      icon: (size = 15) => <MdOutlineFindInPage size={size} />,
      handleClick: clickFind,
    },
    {
      id: 12,
      text: "Print",
      icon: (size = 15) => <AiOutlinePrinter size={size} />,
      handleClick: clickPrint,
    },
  ];
  const handleDisabledButtons = (name) => {
    let disabled = false;
    if (cmd === "mhlcmd") {
      disabled =
        name.toLowerCase() === "save" || name.toLowerCase() === "cancel"
          ? true
          : false;
    } else if (
      cmd === "mhladd" ||
      cmd === "mhlchange" ||
      cmd === "mhldelete" ||
      cmd === "mhlsave"
    ) {
      disabled =
        name.toLowerCase() === "save" ||
        name.toLowerCase() === "cancel" ||
        name.toLowerCase() === "exit"
          ? false
          : true;
    } else {
      disabled =
        name.toLowerCase() === "add" || name.toLowerCase() === "exit"
          ? false
          : true;
    }
    return disabled;
  };
  const handleDisabledInputs = () => {
    // let disabled = false;
    let disabled = cmd === "mhladd" || cmd === "mhlchange" ? false : true;
    // console.log(disabled);
    return disabled;
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value.toUpperCase() });
  };
  // console.log(values);
  return (
    <form action="" className="bg-white px-[35px] py-1 rounded-xl">
      <h1 className="text-purple-400 text-xl text-center font-medium ">
        Master Supplier
      </h1>
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          onChange={onChange}
          readOnly={handleDisabledInputs()}
          linkRef={input.name === "code" ? linkRef : null}
          value={values[input.name]}
        />
      ))}
      <div className="w-[440px] h-16 my-3 flex flex-row flex-wrap gap-1">
        {buttons.map((button) => (
          <Button
            key={button.id}
            onClick={button.handleClick}
            disabled={handleDisabledButtons(button.text)}
            {...button}
          />
        ))}
      </div>
    </form>
  );
};

export default Mssup;
