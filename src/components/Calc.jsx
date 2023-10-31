import React, { useState } from "react";

function Calc() {
  const [result, setResult] = useState("0");
  const [val, setVal] = useState("0");
  const display = (value) => {
    setResult((prevResult) =>
      prevResult === "0" ? value : prevResult + value
    );
  };

  const resetResult = () => {
    setResult("0");
    setVal("0 ");
  };

  const removeLast = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };

  const exprResult = () => {
    try {
      setVal(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const buttonStyles = {
    backgroundColor: "#f2f2f2",
    color: "black",
    fontSize: "24px",
    fontWeight: "bold",
    border: "none",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const NumberStyles = {
    backgroundColor: "white",
    color: "black",
    fontSize: "24px",
    fontWeight: "bold",
    border: "none",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "31px",
  };

  return (
    <div
      style={{
        width: "400px",
        height: "600px",
        background: "white",
        borderRadius: "10px",
      }}
      className="shadow"
    >
      <div
        style={{
          width: "100%",
          height: "30%",
          background: "#cccccc",
          borderRadius: "10px 10px 0 0",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", bottom: "50px", right: "20px"}}>
          {" "}
          <h1 style={{ fontSize: "5rem" }}>{val}</h1>
        </div>
        <div style={{ position: "absolute", bottom: "0", right: "20px" }}>
          <h3>{result}</h3>
        </div>
      </div>
      <div className="buttongrid mt-4 d-flex justify-content-center">
        <div style={buttonGridStyle}>
          <button style={buttonStyles} onClick={resetResult}>
            AC
          </button>
          <button style={buttonStyles} onClick={() => display("(")}>
            (
          </button>
          <button style={buttonStyles} onClick={() => display(")")}>
            )
          </button>
          <button style={buttonStyles} onClick={() => display("*")}>
            <i
              className="fa-solid fa-xmark"
              style={{
                backgroundColor: "#E30B5C",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                border: "none",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></i>
          </button>
          <button style={NumberStyles} onClick={() => display("1")}>
            1
          </button>
          <button style={NumberStyles} onClick={() => display("2")}>
            2
          </button>
          <button style={NumberStyles} onClick={() => display("3")}>
            3
          </button>
          <button style={buttonStyles} onClick={() => display("-")}>
            <i
              className="fa-solid fa-minus"
              style={{
                backgroundColor: "orangered",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                border: "none",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></i>
          </button>
          <button style={NumberStyles} onClick={() => display("4")}>
            4
          </button>
          <button style={NumberStyles} onClick={() => display("5")}>
            5
          </button>
          <button style={NumberStyles} onClick={() => display("6")}>
            6
          </button>
          <button style={buttonStyles} onClick={() => display("/")}>
            <i
              className="fa-solid fa-divide"
              style={{
                backgroundColor: "green",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                border: "none",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></i>
          </button>
          <button style={NumberStyles} onClick={() => display("7")}>
            7
          </button>
          <button style={NumberStyles} onClick={() => display("8")}>
            8
          </button>
          <button style={NumberStyles} onClick={() => display("9")}>
            9
          </button>
          <button style={buttonStyles} onClick={() => display("+")}>
            <i
              className="fa-solid fa-plus"
              style={{
                backgroundColor: "red",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                border: "none",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></i>
          </button>
          <button style={NumberStyles} onClick={() => display("0")}>
            0
          </button>
          <button style={NumberStyles} onClick={() => display(".")}>
            .
          </button>
          <button style={buttonStyles} onClick={removeLast}>
            {" "}
            <i className="fa-solid fa-c"></i>
          </button>
          <button style={buttonStyles} onClick={exprResult}>
            <i
              className="fa-solid fa-equals"
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                border: "none",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
