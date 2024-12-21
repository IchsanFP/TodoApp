export default function ToggleDarkMode({ isChecked, onClick }){
  return(
    <div className='flex justify-center mt-3 mb-3'>
        <label className="ui-switch">
            <input type="checkbox" checked={isChecked} onClick={onClick} />
            <div className="slider">
            <div className="circle"></div>
            </div>
        </label>
    </div>
  )
}