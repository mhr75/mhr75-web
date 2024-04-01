import linkedinIcon from "@/assets/linkedin.png";
import twitterIcon from "@/assets/twitter.png";
import facebookIcon from "@/assets/facebook.png";
import instagramIcon from "@/assets/instagram.png";



const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/mahmudul-haque-ba96b0148/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/im_mahmudul"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitterIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/immhr75/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebookIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/immhr75/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={instagramIcon} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
