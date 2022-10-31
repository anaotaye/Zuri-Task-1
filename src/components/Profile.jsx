import profileImg from "../assets/profile__img.svg";
import slackIcon from "../assets/slack.svg";
import githubIcon from "../assets/Icon.svg";
import zuriIcon from "../assets/Zuri.Internship_Logo.svg";
import ingressiveIcon from "../assets/I4G.svg";

const Profile = () => {
  return (
    <div>
      <img src={profileImg} id="profile_img" alt="profile" />
      <h1>Annette Black</h1>

      <div className="links">
        <a
          href="https://twitter.com/anaotaye"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Twitter Link
        </a>
        <br />

        <a
          href="https://training.zuri.team/"
          target="_blank"
          id="btn__zuri"
          className="link"
          rel="noreferrer"
        >
          Zuri Team
        </a>
        <br />

        <a
          href="http://books.zuri.team/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Zuri Books
        </a>
        <br />

        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=anastasiaotaye"
          id="book__python"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Python Books
        </a>
        <br />

        <a
          href="https://background.zuri.team/"
          id="pitch"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Background Check for Coders
        </a>
        <br />

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
          <img src={slackIcon} alt="slack link" />
        </a>
        <a href="https://twitter.com/anaotaye" id="slack">
          <img src={githubIcon} alt="github link" />
        </a>
      </div>

      <div className="footer">
        <img src={zuriIcon} alt="Zuri internship logo" />

        <p>HNG Internship 9 Frontend Task</p>

        <img src={ingressiveIcon} alt="Ingressive for good logo" />
      </div>
    </div>
  );
};

export default Profile;
