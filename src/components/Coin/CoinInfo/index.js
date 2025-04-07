import React, { useState } from "react";
import "./styles.css";

const CoinInfo = ({ heading, desc }) => {

  const shortDesc = desc.slice(0 , 200) + " <span style = 'color:var(--grey)'> Read More ... </span>";
  const longDesc = desc + " <span style = 'color:var(--grey)'> Read Less ... </span>";

  const [flag , setFlag] = useState(false);

  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading"> {heading} </h2>
      { desc.length > 200 ? (
        <p
        onClick={ () => setFlag(!flag)}
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html: !flag?  shortDesc : longDesc }}
      >

      </p>
      ) : (
        <p className="coin-info-desc" dangerouslySetInnerHTML={{__html: desc}}></p>
      )}
      
    </div>
  );
};

export default CoinInfo;
