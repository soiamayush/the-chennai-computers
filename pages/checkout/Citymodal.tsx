import React from "react";
import CloseIcon from "@mui/icons-material/Close";

interface CityModalProps {
  showModal: boolean;
  closeModal: () => void;
  cities: string[];
  selectCity: (city: string) => void;
}

const CityModal: React.FC<CityModalProps> = ({
  showModal,
  closeModal,
  cities,
  selectCity,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
        showModal ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-5 rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between gap-3">
          <h2 className="text-lg font-semibold mb-4">Select a City</h2>
          <div className="w-fit" onClick={closeModal}>
            <CloseIcon />
          </div>
        </div>

        <ul className="max-h-60 overflow-y-auto">
          {cities && cities.length > 0 ? (
            cities.map((city, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => selectCity(city)}
              >
                {city}
              </li>
            ))
          ) : (
            <li className="p-2">No cities available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CityModal;
