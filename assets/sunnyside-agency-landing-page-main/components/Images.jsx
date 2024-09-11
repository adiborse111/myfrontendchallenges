import cone from "../images/desktop/image-gallery-cone.jpg"
import milk from "../images/desktop/image-gallery-milkbottles.jpg"
import orange from "../images/desktop/image-gallery-orange.jpg"
import sugar from "../images/desktop/image-gallery-sugarcubes.jpg"

const Images = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full">
        <div className="flex flex-row lg:w-1/2">
            <img src={milk} alt="" className="w-1/2" />
            <img src={orange} alt="" className="w-1/2" />
        </div>
        <div className="flex flex-row lg:w-1/2">
            <img src={cone} alt="" className="w-1/2" />
            <img src={sugar} alt="" className="w-1/2" />
        </div>
    </div>
  )
}

export default Images