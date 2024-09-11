import insta from "../images/desktop/icon-instagram.svg"
import face from "../images/desktop/icon-facebook.svg"
import pin from "../images/desktop/icon-pinterest.svg"
import twi from "../images/desktop/icon-twitter.svg"

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-green-200 py-20">
        <div>
            <h1 className="text-3xl font-extrabold text-green-700">sunnyside</h1>
        </div>
        <div className="flex flex-row gap-16 items-center mt-10 text-green-700">
            <h1 className="hover:text-white">About</h1>
            <h1 className="hover:text-white">Services</h1>
            <h1 className="hover:text-white">Projects</h1>
        </div>
        <div className="flex flex-row gap-5 mt-20">
            <img src={face} alt="" />
            <img src={insta} alt="" />
            <img src={twi} alt="" />
            <img src={pin} alt="" />
        </div>
    </div>
  )
}

export default Footer