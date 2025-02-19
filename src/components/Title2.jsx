

function Title2({text1,text2}) {
    return (
      <div className="flex space-x-1 justify-center items-center lg:space-x-3 ">
           <p className="text-gray-500 text-base lg:text-3xl font-serif">{text1}</p>
           <p className="text-gray-800 text-base lg:text-3xl font-serif">{text2}</p>
           <p className="h-[5px] w-6 lg:w-16 bg-gradient-to-r from-gray-500 to-gray-800 rounded-md"></p>
      </div>
    )
  }
  
  export default Title2;