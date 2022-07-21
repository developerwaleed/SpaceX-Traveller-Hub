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
      <div>
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
                        type="button"
                        className="bg-transparent hover:bg-red-500  text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500  hover:border-transparent rounded text-xs"
                        id={item.mission_id}
                        onClick={(e) => handleReservation(e)}
                      >
                        Cancel Mission
                      </button>
                    ) : (
                      <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded text-xs"
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
