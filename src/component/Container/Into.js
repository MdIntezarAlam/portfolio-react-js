import LeftsideIntro from "./LeftsideIntro";
import RightSideIntro from "./RightSideIntro";
import Technology from "./Technology";

const Intro = () => {
  return (
    <div className="container-fluid pt-4">
      <div className="row ">
        <div className="col-md-6">
          <LeftsideIntro />
        </div>
        <div className="col-md-6">
          <RightSideIntro />
        </div>
      </div>
      {/* <div className="row pt-5">
        <Technology />
      </div> */}
    </div>
  );
};

export default Intro;
