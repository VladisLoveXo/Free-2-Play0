export const Image = ({ data, styles, height, width }) => {
  return (
    <div className="image-wrapper">
      <img
        className={styles}
        height={height}
        width={width}
        src={data.thumbnail}
        alt={`${data.title} cover`}
        samesite="Strict"
      ></img>
    </div>
  );
};
