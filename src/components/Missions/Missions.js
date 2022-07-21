import React from 'react';
import '../../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { reserve } from '../../redux/Missions/missions';
import Status from '../Status/Status';
import './Missions.css';

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
    <div className="contain">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table>
          <thead>
            <tr>
              <th scope="col">Missions</th>
              <th scope="col" colSpan="4">
                Description
              </th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((item) => (
              <tr key={item.mission_id}>
                <th scope="row">{item.mission_name}</th>
                <td colSpan="4">{item.description}</td>
                <td>
                  <Status reserved={item.reserved} />
                </td>
                <td>
                  <a href="/">
                    {item.reserved ? (
                      <button
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        type="button"
                        id={item.mission_id}
                        onClick={(e) => handleReservation(e)}
                      >
                        Cancel Mission
                      </button>
                    ) : (
                      <button
                        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        type="button"
                        id={item.mission_id}
                        reserved={item.reserved}
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
    </div>
  );
}
export default Missions;
