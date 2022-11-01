import "./profile.css";
import profileImg from "../assets/profile__img.svg";
import slackIcon from "../assets/slack.svg";
import githubIcon from "../assets/Icon.svg";
import zuriIcon from "../assets/Zuri.Internship_Logo.svg";
import ingressiveIcon from "../assets/I4G.svg";
import shareIcon from "../assets/Icon2.png"

const Profile = () => {
  return (
    <div>
      <img src={profileImg} id="profile_img" alt="profile" />
      <h1 id="profile_name">Annette Black</h1>

      <div className="share_icon">
        <img src={shareIcon} alt="Share" />
      </div>

      <div className="links">
        <a
          href="https://twitter.com/anaotaye"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Twitter Link
        </a>
        

        <a
          href="https://training.zuri.team/"
          target="_blank"
          id="btn__zuri"
          className="link"
          rel="noreferrer"
        >
          Zuri Team
        </a>
        

        <a
          href="http://books.zuri.team/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Zuri Books
        </a>
        

        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=anastasiaotaye"
          id="book__python"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Python Books
        </a>
        

        <a
          href="https://background.zuri.team/"
          id="pitch"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Background Check for Coders
        </a>
        

        <a
          href="https://books.zuri.team/design-rules"
          id="book_design"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Design Books
        </a>
      </div>

      <div className="socials">
        <a href="https://twitter.com/anaotaye" id="twitter">
          <img src={slackIcon} alt="slack link" target="_blank"
          rel="noreferrer"/>
        </a>
        <a href="https://twitter.com/anaotaye" id="slack">
          <img src={githubIcon} alt="github link" target="_blank"
          rel="noreferrer"/>
        </a>
      </div>

      <hr className="line" />

      <div className="footer">
        <img src={zuriIcon} alt="Zuri internship logo" />

        <p>HNG Internship 9 Frontend Task</p>

        <img src={ingressiveIcon} alt="Ingressive for good logo" />
      </div>
    </div>
  );
};

export default Profile;
