function Link(props) {
  const { link, image, alt, style } = props
  return (
    <div>
      <a
        href={ link }
      >
        <img
          src={ image }
          alt={ alt }
          style="width:42px;height:42px;"
        />
      </a>
    </div>
  );
}

export default Link;
