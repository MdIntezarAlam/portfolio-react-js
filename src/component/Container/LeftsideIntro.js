import { homeImageData } from "../../utils/Contant";
import { Badge, Card } from "react-bootstrap";
const text =
  "Frontend developer using modern technology such as React. I follow the best folder structure so that code will be more re-usable,scalable and flexibile. I mainly focus on code quality and performance. Redux or redux toolkit, localstorage and cookies . Html,Css,Bootstrap, JavaScript, React Js, Git, GitHub,Node Js, Express Js & MongoDB";

const LeftsideIntro = () => {
  return (
      <Card.Body>
        <Card.Title className="fs-1 bold">Hii I Am</Card.Title>
        <Card.Title className="text_heading_1">Md Intezar Alam</Card.Title>
        <Card.Text className="text_style">{text}</Card.Text>
        <Badge bg="success" className="w-25 p-3 mb-4 mt-4">
          Hire Me
        </Badge>
        <Card.Body className="left_social_media_container">
          {homeImageData?.map((data) => (
            <a href={data.img_link}>
              <img
                src={data.h_img1}
                alt="img_icon"
                class="rounded-pill"
                width={40}
                height={40}
                className="rounded-2 "
              />
            </a>
          ))}
        </Card.Body>
      </Card.Body>
  );
};

export default LeftsideIntro;
