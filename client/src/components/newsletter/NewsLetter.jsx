import "./NewsLetter.css";
import { Send, LinkedIn, Youtube, Github, Twitter } from "../Icons";

export default function NewsLetter() {
  return (
    <div className="newsletter-container">
      <div className="firstgridcontainer">
        <h2 className="newsletterhead">Subscribe to news & resources</h2>
        <div className="socialiconfoot">
          <LinkedIn size={20} className="icon" />
          <Youtube size={20} className="icon" />
          <Github size={20} className="icon" />
          <Twitter size={20} className="icon" />
        </div>
      </div>
      <div>
        <form className="forminput">
          <input
            placeholder="Your email"
            type="email"
            name="newsletter"
            id="newsletter"
            required
          />
          <button className="submitbtn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
