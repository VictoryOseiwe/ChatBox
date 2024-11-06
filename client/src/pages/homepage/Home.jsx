import Button from "../../components/Button";
import "./Home.css";
import { Plus, Security, Device, Message } from "../../components/Icons";
import Card from "../../components/card/Card";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function toAuthPage() {
    navigate("/register");
  }
  return (
    <>
      <div className="homecontainer">
        <div className="herocontainer">
          <h1 id="herotext">
            Your Gateway to <span className="gradienttext">Seamless</span>{" "}
            Online <br /> Conversations and Meetings
          </h1>
          <p id="herotextdescription">
            A unified hub for all your messages, ensuring you never <br />
            miss a bit when it comes to your communication
          </p>
          <div className="herobtn">
            <Button onClick={toAuthPage} text="Join Now" />
            <Button
              onClick={toAuthPage}
              text="Learn More"
              className="learnmorebtn"
            />
          </div>
        </div>
        <div className="awardcontainer">
          <div className="awardcontainergrid">
            <div className="boyimg">
              <h3 onClick={toAuthPage} className="boychattext">
                Chat
              </h3>
              <Plus onClick={toAuthPage} size={25} className="addchaticon" />
            </div>
            <div className="secondgrid">
              <div className="secondgridfirstchild">
                <h3>
                  Try To Enjoy All The <br />
                  Conveniences In ChatBox
                </h3>
                <Button
                  onClick={toAuthPage}
                  className="chatbtn"
                  text="Join Now"
                />
              </div>
              <div className="studentimg">
                <h3 className="connectwf">
                  Connect With Friends <br />
                  Easily And Efficiently
                </h3>
              </div>
            </div>
            <div></div>
          </div>
          <h3 className="empowertext">
            Empowering Your Communication <br />
            <span className="empowertextgradient">Connect Globally </span>, And
            Collaborate <br />
            Effectively With ChatBox
          </h3>
        </div>
        <div className="sectionthree">
          <h3>
            Providing A <span className="gradienttext">Comprehensive</span>{" "}
            Suite <br /> Of Services Tailored To Your Needs
          </h3>
          <p id="herotextdescription">
            At ChatBox, our commitment lies in transforming the landscape <br />{" "}
            of how you handle and enhance your communication
          </p>
          <div className="cardgridcontainer" id="card">
            <Card
              logo={Security}
              title="Security and Privacy"
              text="Our platform employs robust encryption and security measures to ensure your messages are safe"
            />
            <Card
              logo={Device}
              title="Multi-Device Accessibility"
              text="ChatBox is accessible accross multiple devices, giving you the flexibility to chat on your preferred device."
            />
            <Card
              logo={Message}
              title="A Simple Messaging System"
              text="Uncover hidden trends, elevate engagements and unleash the power of data driven decisions"
            />
          </div>
        </div>
        <div>
          <h3>Find Answers To Your Questions</h3>
        </div>
      </div>
    </>
  );
}
