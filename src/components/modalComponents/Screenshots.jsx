import { useEffect, useState } from "react";
import { EyeIcon } from "../../svgs/EyeIcon";

export const Screenshots = ({ imgData }) => {
  const [imgURLs, setImageURLs] = useState();
  const [mainImg, setMainImg] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imgArr = [];
    imgData.forEach((img) => {
      let str = img.image;
      str = str.substring(0, str.length - 4);
      if (str.substring(str.length - 6, str.length) === "-small") {
        return;
      } else {
        imgArr.push(str);
      }
    });
    setImageURLs(imgArr);
    setMainImg(imgArr[0]);
    setLoading(false);
  }, []);

  const handleClick = (e) => {
    const selectedImg = e.target.dataset.src;
    const thumbnails = document.getElementsByClassName("small-screenshots");

    for (let img of thumbnails) {
      if (img.classList.contains("viewing")) {
        img.classList.remove("viewing");
        e.target.classList.add("viewing");
      }
    }

    if (selectedImg !== mainImg) {
      setMainImg(selectedImg);
    }
  };

  return (
    <>
      {!loading && (
        <div className="screenshot-viewer">
          <div className="large-screenshot-container">
            <img className="large-screenshot" src={`${mainImg}.jpg`} />
          </div>
          <div className="thumbnail-container">
            {imgURLs.map((url, index) => {
              return (
                <div key={index} className="small-screenshot-wrapper">
                  <img
                    data-src={url}
                    className={
                      url === mainImg
                        ? "small-screenshots viewing"
                        : "small-screenshots"
                    }
                    src={`${url}-small.jpg`}
                    onClick={handleClick}
                  />
                  <EyeIcon
                    styles={
                      url === mainImg
                        ? "viewing-icon currently-viewing"
                        : "viewing-icon"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
