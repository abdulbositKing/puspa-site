import "./Puspa.css";

const Puspa = ({ PuspaTextH2, PuspaTextP, PuspaButton1, PuspaButton2, PuspaButton3, PuspaButton4, PuspaButton5, PuspaButton6 }) => {
  return (
    <div className="container">
      <div className="puspa">
        <div className="puspa__text">
          <div className="puspa__text--left">
            <h2>{PuspaTextH2}</h2>
            <p>{PuspaTextP}</p>
          </div>
          <div className="puspa__text--right">
            <input type="text" placeholder="Search menu" />
          </div>
        </div>
        <div className="puspa__buttons">
          <button>{PuspaButton1}</button>
          <button>{PuspaButton2}</button>
          <button>{PuspaButton3}</button>
          <button>{PuspaButton4}</button>
          <button>{PuspaButton5}</button>
          <button>{PuspaButton6}</button>
        </div>
      </div>
    </div>
  );
};

export default Puspa;
