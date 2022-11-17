import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Want to be the first to know what's new and how you can save?</h1>
        <span className="mailDesc">Subscribe now and receive 500 GCC stubs points, when you register as a new member!</span>
        <div className="mailInputContainer">
            <input type="email" name="email" id="email" placeholder="Your e-mail"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList