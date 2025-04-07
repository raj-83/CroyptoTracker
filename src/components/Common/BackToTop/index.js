import React from "react";
import "./styles.css";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

function BackToTop() {
  let mybutton = document.getElementById("myBtn");

  // window.onscroll = function () {
  //   scrollFunction();
  // };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="back-to-top-btn" id="myBtn" onClick={() => topFunction()}>
      {
        (window.onscroll = function () {
          scrollFunction();
        })
      }
      <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  );
}

export default BackToTop;
