interface MenuToggleProps {
  onClick?: any;
}

const MenuToggle: React.FC<MenuToggleProps> = (props) => {
  const { onClick } = props;
  return (
    <button
      className="group flex lg:hidden flex-col w-8 h-8 p-1 justify-center"
      onClick={onClick}
    >
      <span
        className="transition-all duration-200 ease-in-out bg-dark dark:bg-white group-hover:bg-secondary flex my-[3px] h-[3px] rounded-xl w-10/12 group-hover:w-full"></span>
      <span
        className="transition-all duration-200 ease-in-out bg-dark dark:bg-white group-hover:bg-secondary flex my-[3px] h-[3px] rounded-xl w-full "></span>
      <span
        className="transition-all duration-200 ease-in-out bg-dark dark:bg-white group-hover:bg-secondary flex my-[3px] h-[3px] rounded-xl w-8/12 group-hover:w-full"></span>
    </button>
  )
}

export default MenuToggle;