import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "../cssmodule/landingpage.module.css"; 
import getProfile from '../utils/getprofile';

// Landing page
function LandingPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  const handleSetItem =(item)=>{
    localStorage.setItem('profile',JSON.stringify(item) )
    navigate(`/profile/${item.id}`)
  }

  useEffect(() => {
     getProfile().then((profile) => setUsers(profile))
  }, []);

  return (
    <div className={styles.landing_container}>
      <div className={styles.landing_box}>
        <h1>User Accounts</h1>
        <div className={styles.user_list}>
          {users?.map((user) => (
            <div onClick={()=>handleSetItem(user)} key={user.id} className={styles.user_card}>
            <div>  <img src={user.profilepicture} alt={user.name} /></div>
          <div> <p>{user.username}</p></div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
