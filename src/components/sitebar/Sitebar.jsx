import { useState } from "react";
import "./Sitebar.css";

const Sitebar = ({ links, logoImg, profileImg, profileH2 }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar__logo" onClick={() => setOpen(!open)}>
          <img src={logoImg} alt="logo" />
          <span>Puspa</span>
        </div>

        <div className="sidebar__links">
          {links.map((link, index) => (
            <div key={index} className="sidebar__link">
              <img src={link.img} alt={link.title} />
              <span>{link.title}</span>
            </div>
          ))}
        </div>

        <div className="sidebar__profile">
          <img src={profileImg} alt="profile" />
          <span>{profileH2}</span>
        </div>
      </div>
    </div>
  );
};

export default Sitebar;
