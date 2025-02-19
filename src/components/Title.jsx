

function Title({text1,text2}) {
  return (
    <div className="flex space-x-3 justify-center items-center">
         <p className="text-gray-500 text-2xl lg:text-4xl font-serif">{text1}</p>
         <p className="text-gray-800 text-2xl lg:text-4xl font-serif">{text2}</p>
         <p className="h-[5px] w-10 lg:w-16 bg-gradient-to-r from-gray-500 to-gray-800 rounded-md"></p>

    </div>
  )
}

export default Title;