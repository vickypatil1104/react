import User from "../components/User";
import UserClass from "../components/UserClass";

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <User name={"Vicky Patil (function)"} />
      <UserClass name={"Vicky Patil (class)"} />
    </div>
  );
};

export default About;
