import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';


const Banner = () => {
    return (
        <div >
          <AwesomeSlider
    animation="foldOutAnimation"
    cssModule={[CoreStyles, AnimationStyles]}
  >
    <div data-src="https://i.ibb.co/mTzjwx8/wallpaperflare-com-wallpaper.jpg" />
    <div data-src="https://i.ibb.co/x6FZPf5/wallpaperflare-com-wallpaper-2.jpg" />
    <div data-src="https://i.ibb.co/NNT9X3T/wallpaperflare-com-wallpaper-3.jpg" />
    <div data-src="https://i.ibb.co/BjRNt58/wallpaperflare-com-wallpaper-1.jpg" />
  </AwesomeSlider>
{/* https://i.ibb.co/x6FZPf5/wallpaperflare-com-wallpaper-2.jpg
https://i.ibb.co/mTzjwx8/wallpaperflare-com-wallpaper.jpg
https://i.ibb.co/NNT9X3T/wallpaperflare-com-wallpaper-3.jpg
https://i.ibb.co/BjRNt58/wallpaperflare-com-wallpaper-1.jpg */}

        </div>
    );
};

export default Banner;