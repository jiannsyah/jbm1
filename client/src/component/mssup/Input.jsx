import React from "react";

const Input = (props) => {
  const { linkRef, label, onChange, readOnly, ...inputProps } = props;
  // console.log(linkRef);
  return (
    <div className="flex flex-col w-[440px] mt-3">
      <label htmlFor="" className="text-xs text-gray-400">
        {label}
      </label>
      <input
        className="p-2 my-1 mx-0 rounded-md border border-gray-600 bg-white read-only:bg-slate-300 "
        {...inputProps}
        onChange={onChange}
        readOnly={readOnly}
        ref={linkRef}
      />
    </div>
  );
};

export default Input;
// function Input(props) {
//   console.log(inputProps);
//   return (
//     <div className="flex flex-col w-[280px]">
//       <label htmlFor="" className="text-xs text-gray-300">
//         {inputProps[0].label}
//       </label>
//       <input className="p-3 my-1 mx-0 rounded-md border border-gray-600" />
//     </div>
//   );
// }

// export default Input;
