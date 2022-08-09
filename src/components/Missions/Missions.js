import React, { useEffect } from 'react';
import '../../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/Missions/missions';
import Status from '../Status/Status';
import MissionButton from './MissionButton';
import './Missions.css';

function Missions() {
  const missions = useSelector((state) => state.mymissons);
  const { loading } = missions;
  const dispatch = useDispatch();
  useEffect(() => {
    if (loading) {
      dispatch(fetchMissions());
    }
  }, []);
  return (
    <div className="contain">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-color">
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
            {missions.missions.map((item) => (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={item.mission_id}
              >
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.mission_name}
                </td>
                <td colSpan="4">{item.description}</td>
                <td>
                  <Status reserved={item.reserved} />
                </td>
                <td>
                  <a href="/">
                    <MissionButton
                      title={item.reserved ? 'Cancel Mission' : 'Join Mission'}
                      reserved={item.reserved}
                      id={item.mission_id}
                    />
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
