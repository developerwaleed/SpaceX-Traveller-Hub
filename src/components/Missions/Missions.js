import React, { useEffect } from 'react';
import '../../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, reserve } from '../../redux/Missions/missions';
// import Button from './Button';
import Status from '../Status/Status';

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  const missions = useSelector((state) => state.mymissons.missions);
  const handleReservation = (e) => {
    e.preventDefault();
    const { id } = e.target;
    const text = e.target.innerText;
    let reserveStatus;
    if (text === 'Join') {
      reserveStatus = false;
    } else if (text === 'Leave') reserveStatus = true;
    // dispatch(reserve(id, reserved: !reseved));
    dispatch(reserve({ id, reserved: !reserveStatus }));
  };
  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Missions
              </th>
              <th scope="col" colSpan="4" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
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
                <td className="py-4 px-6">
                  <Status reserved={item.reserved} />
                </td>
                <td className="py-4 px-6">
                  <a
                    href="/"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    {item.reserved ? (
                      <button
                        type="button"
                        id={item.mission_id}
                        className="bg-red-500 hover:bg-red-200 text-white font-semibold hover:text-white py-2 px-10 border  hover:border-transparent rounded text-xs"
                        onClick={(e) => handleReservation(e)}
                      >
                        Leave
                      </button>
                    ) : (
                      <button
                        type="button"
                        id={item.mission_id}
                        reserved={item.reserved}
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-12 border border-blue-500 hover:border-transparent rounded text-xs"
                        onClick={(e) => handleReservation(e)}
                      >
                        Join
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
