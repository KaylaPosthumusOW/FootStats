import React from 'react';
import './blocks.css';

function Highlight() {
  return (
    <div className="yellow-block">
      <h6>Manchester United Highlights - Top Goals</h6>
      <div className="video">
        
        <iframe width="530" height="315" src="https://www.youtube.com/embed/Cp6tLt6HOaU?si=1Ys2_TMX-h1X7lCP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Highlight;
