import { FaHouseUser, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { ButtonLink } from "components/ButtonLink";

export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}) => {
  console.log("MAIN MENU: ", items);
  return (
    <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
      <div className="py-4 pl-5 flex text-pink-600">
        <FaHouseUser size={30} />
        <FaHeart size={30} />
      </div>
      <div className="flex-1 flex justify-end items-center">
        {(items || []).map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-700 cursor-pointer relative group"
          >
            <div>
              <Link href={item.destination} className="p-5 block">
                {item.label}
              </Link>
            </div>
            {!!item.subMenuItems.length && (
              <div className="hidden bg-slate-800 text-right absolute right-0 top-full -mt-1 group-hover:block">
                {item.subMenuItems.map((subMenuItem) => (
                  <Link
                    className="block whitespace-nowrap p-5 hover:bg-slate-700"
                    key={subMenuItem.id}
                    href={subMenuItem.destination}
                  >
                    {subMenuItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="ml-3 my-auto">
          <ButtonLink
            destination={callToActionDestination}
            label={callToActionLabel}
          />
        </div>
      </div>
    </div>
  );
};