import Container from "../Elements/Container/Container";

function GallerySlider() {
  return (
    <Container>
      <h2 className="title_halleryslider">Beautiful nature</h2>
      <ul className="list_galleryslider">
        <li className="item_galleryslider">
          <img src="" alt="" className="img_nature" />
        </li>
        <li className="item_galleryslider">
          <img src="" alt="" className="img_nature" />
        </li>
        <li className="item_galleryslider">
          <img src="" alt="" className="img_nature" />
        </li>
        <li className="item_galleryslider">
          <img src="" alt="" className="img_nature" />
        </li>
        <li className="item_galleryslider">
          <img src="" alt="" className="img_nature" />
        </li>
      </ul>
    </Container>
  );
}

export default GallerySlider;
