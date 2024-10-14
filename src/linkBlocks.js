import './blocks.css';
import link from './link-icon.png'

function LinkBlocks() {
  return (
    <div className="white-block">
        <h2>Compare Teams</h2>
        <p>Uncover the fascinating dynamics of football clashes with our team comparison feature.</p>
        <img src={link} alt="link" className="link"></img>
    </div>
    
  );
}

export default LinkBlocks;
