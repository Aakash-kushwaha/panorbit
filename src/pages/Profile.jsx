import React from "react";
import styles from "../cssmodule/profile.module.css";

// Profile section of user Dashboard
const Profile = ({ users }) => {
  return (
    <div>
      {users?.map((user,i)=>{
        return  <div key={i} className={styles.container}>
          <div className={styles.profileContainer}>
            <div className={styles.profile_section}>
              <img src={user.profilepicture} alt={user.name} />
              <p>{user.name}</p>
              <div className={styles.profile_details}>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
              </div>
            </div>
            <div className={styles.company}>
              <h2>company</h2>
              <p>Street: {user.company?.name}</p>
              <p>catchPhrase: {user.company?.catchPhrase}</p>
              <p>bs: {user.company?.bs}</p>
            </div>
          </div>
          <div className={styles.addressContainer}>
            <div>Address : </div>
            <div className={styles.address}>
            <p>Street : {user.address?.street}</p>
            <p>Suite : {user.address?.suite}</p>
            <p>City : {user.address?.city}</p>
            <p>Zipcode : {user.address?.zipcode}</p>
            <iframe className={styles.iframMap} src='https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed'></iframe>
            </div>
          </div>
        </div>
      })}
    </div>
  );
};

export default Profile;
