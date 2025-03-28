/* eslint-disable react/prop-types */
import "./bannerSolo.css";

export default function BannerSolo({ bannerDesktop, bannerMobile, bannerAlt }) {
  return (
    <div className="banner-content">
      <div className="content-bg">
        {/* <img src={bannerDesktop} alt={bannerAlt} /> */}
        <picture>
          <source srcset={bannerDesktop} media="(min-width: 768px)" />
          <source srcset={bannerMobile} media="(min-width: 325px)" />
          <img src={bannerDesktop} alt={bannerAlt} />
        </picture>
      </div>
    </div>
  );
}
