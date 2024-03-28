// const social = [
//   {
//     url: "https://www.facebook.com/",
//     icon: "bi-facebook",
//   },
//   {
//     url: "https://www.twitter.com/",
//     icon: "bi-twitter",
//   },
//   {
//     url: "https://www.instagram.com/",
//     icon: "bi-instagram",
//   },
// ];

const SocialLinks = () => {
  return (
    <div className="position-relative">
      <a href="#" className="mx-2">
        <span className="bi-facebook"></span>
      </a>
      <a href="#" className="mx-2">
        <span className="bi-twitter"></span>
      </a>
      <a href="#" className="mx-2">
        <span className="bi-instagram"></span>
      </a>
    </div>
  );
};

export default SocialLinks;
