import React from 'react';
import '../../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { reserve } from '../../redux/Missions/missions';
import Status from '../Status/Status';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mymissons.missions);
  const handleReservation = (e) => {
    e.preventDefault();
    const { id } = e.target;
    const text = e.target.innerText;
    let reserveStatus;
    if (text === 'Join Mission') {
      reserveStatus = false;
    } else if (text === 'Cancel Mission') reserveStatus = true;
    dispatch(reserve({ id, reserved: !reserveStatus }));
  };
  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 text-center">
                Missions
              </th>
              <th scope="col" colSpan="4" className="py-3 px-6 text-center">
                Description
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Status
              </th>
              <th scope="col" className="py-3 px-7 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {missions.map((item) => (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={item.mission_id}
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.mission_name}
                </th>
                <td colSpan="4" className="py-4 px-6">
                  {item.description}
                </td>
                <td className="py-4 px-5">
                  <Status reserved={item.reserved} />
                </td>
                <td className="py-4 px-10">
                  <a
                    href="/"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    {item.reserved ? (
                      <button
                        type="button"
                        id={item.mission_id}
                        className="bg-transparent hover:bg-red-500  text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500  hover:border-transparent rounded text-xs"
                        onClick={(e) => handleReservation(e)}
                      >
                        Cancel Mission
                      </button>
                    ) : (
                      <button
                        type="button"
                        id={item.mission_id}
                        reserved={item.reserved}
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded text-xs"
                        onClick={(e) => handleReservation(e)}
                      >
                        Join Mission
                      </button>
                    )}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Missions;
