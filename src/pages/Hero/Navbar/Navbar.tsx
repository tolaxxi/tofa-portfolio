import { TbMenu3 } from 'react-icons/tb';
import { socials } from './constant';

const Navbar = () => {
  return (
    <header className="w-full flex font-medium justify-between items-center py-6 px-5 md:px-20   text-lg">
      {/* menu */}
      <span className="flex  items-center gap-2  ">
        <p>Menu</p>
        <TbMenu3 />
      </span>

      <h2 className=" text-2xl specialText">David</h2>
      {/* social */}
      {/* <span className="  items-center gap-5 hidden md:flex">
        {socials.map(({ Icon, id }) => {
          return (
            <button key={id}>
              <Icon />
            </button>
          );
        })}
      </span> */}
    </header>
  );
};
export default Navbar;
