import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Profile() {

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={}
                alt=""
              />
              <img
                className="profileUserImg"
                src={}
                alt=""
              />
            </div>
            <div className="profileInfo">            
            </div>
          </div>
          <div className="profileRightBottom">
          </div>
        </div>
      </div>
    </>
  );
}
