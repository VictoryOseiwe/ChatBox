import Button from "../../components/Button";
import "./Home.css";
import BoyImg from "../../assets/boywithphone.jpg";
import Student from "../../assets/students.jpg";
import { Plus } from "../../components/Icons";

export default function Home() {
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
            <Button text="Join Now" />
            <Button text="Learn More" className="learnmorebtn" />
          </div>
        </div>
        <div className="awardcontainer">
          <div className="awardcontainergrid">
            <div className="boyimg">
              {/* <div className="boyimg">
                <img src={BoyImg} alt="Boy Image holding a phone chatting" />
              </div> */}

              <h3 className="boychattext">Chat</h3>
              <Plus size={25} className="addchaticon" />
            </div>
            <div className="secondgrid">
              <div className="secondgridfirstchild">
                <h3>
                  Try To Enjoy All The <br />
                  Conveniences In ChatBox
                </h3>
                <Button className="chatbtn" text="Join Now" />
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
      </div>
    </>
  );
}
