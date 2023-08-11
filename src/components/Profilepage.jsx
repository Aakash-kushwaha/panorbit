import React, { useEffect, useState } from "react";
import styles from "../cssmodule/profilepage.module.css";
import Profile from "../pages/Profile";
import Post from "../pages/Post";
import Gallery from "../pages/Gallery";
import Todo from "../pages/Todo";
import getProfile from "../utils/getprofile";
import Profilemodal from "./Profilemodal";
import { useParams } from "react-router-dom";

// User Dashboard
function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState("profile");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    getProfile()
      .then((profile) => setUsers(profile))
      .then((error) => {
        console.log(error);
      });
  }, []);

  // func to return the right component
  const renderContent = () => {
    switch (selectedTab) {
      case "profile":
        return (
          <Profile users={users.filter((el) => el.id == userId)}></Profile>
        );
      case "posts":
        return <Post></Post>;
      case "gallery":
        return <Gallery></Gallery>;
      case "todo":
        return <Todo></Todo>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={styles.profile_container}>
        {/* side navbar */}
        <div className={styles.sidebar}>
          <ul>
            <li>
              <a href="#profile" onClick={() => setSelectedTab("profile")}>
                Profile
              </a>
            </li>
            <li>
              <a href="#posts" onClick={() => setSelectedTab("posts")}>
                Posts
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={() => setSelectedTab("gallery")}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#todo" onClick={() => setSelectedTab("todo")}>
                ToDo
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.topNavContainer}>
          {/* Top Navbar */}
          <div className={styles.topNav}>
            <div>
              <p>{selectedTab}</p>
            </div>
            <div className={styles.profileInfo}>
              {users.map((el) => {
                if (el.id == userId) {
                  return (
                    <>
                      <div
                        key={el.id}
                        className={styles.profilePicture}
                        onClick={() => setIsModalOpen(true)}
                      >
                        <img src={el.profilepicture} alt={el.name} />
                      </div>
                      <div
                        className={styles.userName}
                        onClick={() => setIsModalOpen(true)}
                      >
                        <p>{el.name}</p>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>
          <div
            className={styles.renderComponents}
            onClick={() => {
              setIsModalOpen(false);
              setIsChatBoxOpen(false);
            }}
          >
            {" "}
            {renderContent()}
          </div>
        </div>
        <div>
          {isModalOpen && ( // Render modal if isModalOpen is true
            <Profilemodal
              users={users}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            ></Profilemodal>
          )}
        </div>
      </div>
      {/* chat box */}
      <div
        className={`${styles.chatBoxContainer} ${
          isChatBoxOpen ? styles.open : ""
        }`}
      >
        <div className={styles.chatBoxContent}>
          <div
            className={styles.chatBoxButton}
            onClick={() => setIsChatBoxOpen(!isChatBoxOpen)}
          >
            {isChatBoxOpen ? "Close Chat" : "Open Chat"}
          </div>
          <div className={styles.chatContent}>
            <div className={styles.user_list}>
              {users?.map((user) => (
                <div key={user.id} className={styles.user_card}>
                  <div>
                    {" "}
                    <img src={user.profilepicture} alt={user.name} />
                  </div>
                  <div>
                    {" "}
                    <p>{user.username}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
