/* eslint-disable react/prop-types */
import "./bannerSolo.css";

export default function BannerSolo({ banner, bannerAlt }) {
  return (
    <div className="banner-content">
      <div className="content-bg">
        <img src={banner} alt={bannerAlt} />
      </div>
    </div>
  );
}
