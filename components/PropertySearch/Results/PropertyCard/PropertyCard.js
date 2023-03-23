import Link from "next/link";
import Image from "next/image";
import numeral from "numeral";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBathtub,
  faBed,
  faDog,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

export const PropertyCard = ({
  title,
  destination,
  image,
  bedrooms,
  bathrooms,
  price,
  hasParking,
  petFriendly,
}) => {
  return (
    <Link
      href={destination}
      className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200"
    >
      <div className="flex w-full md:h-48">
        <Image
          src={image}
          className="object-cover"
          height="200"
          width="300"
          alt=""
        />
      </div>
      <div className="mt-3 text-lg font-bold">{title}</div>
      <div className="text-lg">${numeral(price).format("0,0")}</div>
      <div className="flex justify-between text-sm mt-3">
        <div>
          <FontAwesomeIcon icon={faBathtub} />
          <span className="pl-2"></span>
          {bathrooms} Bathrooms
        </div>
        <div>
          <FontAwesomeIcon icon={faBed} />
          <span className="pl-2"></span>
          {bedrooms} Bedrooms
        </div>
      </div>
      {(!!hasParking || !!petFriendly) && (
        <div className="flex justify-between text-sm mt-3">
          <div>
            {!!hasParking && (
              <>
                <FontAwesomeIcon icon={faCar} />
                <span className="pl-2">{hasParking} Has Parking</span>
              </>
            )}
          </div>
          <div>
            {!!petFriendly && (
              <>
                <FontAwesomeIcon icon={faDog} />
                <span className="pl-2">{petFriendly} Pet Friendly</span>
              </>
            )}
          </div>
        </div>
      )}
    </Link>
  );
};
