function YoutubeItem(props) {
  console.log(props);
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.imageLink} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatarLink} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || "This is title"}</h3>
          <h4 className="youtube-author">{props.author || "Author Name"}</h4>
        </div>
      </div>
    </div>
  );
}
export default YoutubeItem;
