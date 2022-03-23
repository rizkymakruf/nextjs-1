import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import icon from fontawesome
import {
    faEarthAsia,
  } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div className="bg-green-400">
        <div className="container relative">
          <div className="bg-green-400 fixed top-0 w-full z-40 bg-fixed">
          <div className="flex  ">
            <div className="w-6/12 flex pl-5 pt-3 pb-3 ">
              <div className="pr-2">
                  <FontAwesomeIcon icon={faEarthAsia} style={{ fontSize: 25, color: "white" }}/>
              </div>
              <div className=" text-white font-semibold">
                My World
              </div>
            </div>
            <div className="w-6/12 text-white pr-5 pt-3 pb-3 text-right">
              <i class="bi bi-bell-fill"></i>
            </div>
          </div>
          </div>
        </div>
      </div> 
    );
}