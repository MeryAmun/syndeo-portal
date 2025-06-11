/* eslint-disable react/prop-types */
 type CustomInputProps = {
inputName:string
inputType:string
value:string | number
required:boolean
placeholder:string
id:string
handleChange:() => void
style:string | null
}
const CustomInput = ({inputName,inputType,value, required,placeholder,id,handleChange,style}:CustomInputProps) => {
  return (
    <div className={style? style : "w-[100%] border border-[#686fff] my-2 rounded-md px-2 bg-transparent"}>
        <input 
        autoComplete="off"
        id={id}
        type={inputType} 
        required={required}
        value={value}
        name={inputName}
        placeholder={placeholder}
        onChange={handleChange}
        className="w-[100%] py-2 bg-transparent outline-none border-none text-[#686fff] placeholder:text-[#686fff]"
        />
    </div>
  )
}

export default CustomInput