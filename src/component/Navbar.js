import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-regular-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ["여성","Divided","남성", "신생아/유아","아동","H&M Home","Sale","지속가능성",];
  const navigate=useNavigate();
  const goToLogin=()=>{
    navigate(`/login`)
  };

  const search=(event)=>{
    if (event.key === "Enter") {
      //입력한 검색어를 읽어와서
      let keyword = event.target.value
      //url을 바꿔준다
      navigate(`/?q=${keyword}`)
    }
  }

  return (
      <div>
        {authenticate === false ?
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
          :
          <div onClick={()=>setAuthenticate(false)}
            className="login-button">
            <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
          </div>
        }
        <div className="nav-section">
          <Link to="/">
            <img
              width={100}
              src="https://churchillsquare.com/wp-content/uploads/2018/05/h-m.png"
            />
          </Link>
        </div>
        <div className="menu-area">
            <ul className="menu-list">
              {menuList.map((menu, index)=> (
                 <li key={index}>{menu}</li>
              ))}
            </ul>
            <div className="search-box">
              <FontAwesomeIcon icon={faSearch}/>
              <input type="text" placeholder="제품검색"
                onKeyPress={(event)=>search(event)}
              />
            </div>
        </div>
      </div>
  )
}
export default Navbar;
