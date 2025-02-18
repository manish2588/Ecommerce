

function Title({text1,text2}) {
  return (
    <div className="flex space-x-3 justify-center">
         <p className="text-gray-500 text-2xl lg:text-4xl font-serif">{text1}</p>
         <p className="text-gray-800 text-2xl lg:text-4xl font-serif">{text2}</p>
    </div>
  )
}

export default Title;