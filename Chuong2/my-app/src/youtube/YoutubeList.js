import { YoutubeData } from "../data";
import YoutubeItem from "./YoutubeItem";

function YoutubeList(props) {
  return (
    <>
      {props.children}
      <div className="youtube-container">
        {YoutubeData.map((item, index) => (
          <YoutubeItem
            key={item.id}
            imageLink={item.image}
            avatarLink={item.avatar || item.image}
            title={item.title}
            author={item.author}
            className={index === 1 ? "active" : ""}></YoutubeItem>
        ))}
      </div>
    </>
  );
}
export default YoutubeList;
