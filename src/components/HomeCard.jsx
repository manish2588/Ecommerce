


function HomeCard({img,heading,description}) {
  return (
    <div className="flex flex-col space-y-1 items-center ">
    <img src={img} className="w-14 h-14 mb-4"/>
    <h1 className="text-gray-800 text-lg font-medium">{heading}</h1>
    <p className="text-gray-500">{description}</p>
    </div>
  )
}

export default HomeCard