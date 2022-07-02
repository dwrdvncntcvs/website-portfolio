import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useHomeContext } from "../../../../hooks/dataHooks";
import { ACCESS_VAR } from "../../../../utils/variables";
import "./hoverElement.scss";

export default function HoverElement({ children, title, value }) {
  const { access } = useOutletContext();
  const { state } = useHomeContext();
  const { addHomeDetail } = useHomeContext();
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const child = children.props.children;

  const buttons = [
    {
      label: "Update",
      action: () => {
        console.log("Update");
      },
    },
    {
      label: "Remove",
      action: () => {
        console.log("Remove");
      },
    },
  ];

  const addHomeDetailAction = async () => {
    console.log(state);
    await addHomeDetail(inputValue, value, state.data.id);
  };

  return (
    <div
      className="g__main-container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {child !== "" ? (
        children
      ) : (
        <div>
          {value === "description" ? (
            <textarea
              type="text"
              placeholder={title}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></textarea>
          ) : (
            <input
              type="text"
              placeholder={title}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}
          <button onClick={addHomeDetailAction}>Submit</button>
        </div>
      )}
      {child !== "" &&
        access === ACCESS_VAR.PRIVATE &&
        show &&
        buttons.map(({ label, action }, i) => (
          <button key={i} onClick={action}>
            {label}
          </button>
        ))}
    </div>
  );
}
