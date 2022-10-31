const Profile = () => {
    return (
        <div>
            <img id="profile_img" alt="profile"/>
            <h1>Annette Black</h1>

            <div className="links">
                <a href="https://twitter.com/anaotaye" target="_blank" className="link" rel="noreferrer">Twitter Link</a><br/>

                <a href="https://training.zuri.team/" target="_blank" id="btn__zuri" className="link" rel="noreferrer">Zuri Team</a><br/>

                <a href="http://books.zuri.team/" className="link" target="_blank" rel="noreferrer">Zuri Books</a><br/>

                <a href="https://books.zuri.team/python-for-beginners?ref_id=anastasiaotaye" id="book__python" className="link" target="_blank" rel="noreferrer">Python Books</a><br/>

                <a href="https://background.zuri.team/" id="pitch" className="link" target="_blank" rel="noreferrer">Background Check for Coders</a><br/>

                <a href="https://books.zuri.team/design-rules" id="book_design" className="link" target="_blank" rel="noreferrer">Design Books</a>
            </div>

            <div className="socials">
                <a href="https://twitter.com/anaotaye"  id="twitter">Twitter</a>
                <a href="https://twitter.com/anaotaye" id="slack">Slack</a>
            </div>

            <div className="footer">

            </div>
        </div>
    )
}

export default Profile;