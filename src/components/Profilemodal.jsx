import React from "react";
import styles from "../cssmodule/Profilemodal.module.css";
import { Link, useParams } from "react-router-dom";


// profile Modal Component
const Profilemodal = ({ users, setIsModalOpen }) => {
  const { userId } = useParams();
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.profileSection}>
          {users.map((el) => {
            if (el.id == userId) {
              return (
                <>
                  <div key={el.id}>
                    <img
                      src={el.profilepicture}
                      alt={el.name}
                      className={styles.modalProfilePicture}
                    />
                  </div>
                  <div>
                    <p> {el.username}</p>
                    <p> {el.email}</p>
                  </div>
                </>
              );
            }
          })}
        </div>
   <div className={styles.user_list}>
          {users?.map(user => (
            <div key={user.id} className={styles.user_card}>
            <div>  <img src={user.profilepicture} alt={user.name} /></div>
          <div> <p>{user.username}</p></div>
            </div>
          ))}
        </div>
        <div className={styles.signOutButton}>
       <Link to="/"><button >signout</button></Link> 
   
        </div>
      </div>
   
    </div>
  );
};

export default Profilemodal;

