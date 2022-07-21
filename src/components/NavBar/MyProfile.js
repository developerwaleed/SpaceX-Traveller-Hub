import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

function MyProfile() {
  const missions = useSelector((state) => state.mymissons.missions);
  const rockets = useSelector((state) => state.rockets.rockets);
  const filteredArr = missions.filter((item) => item.reserved);
  const reservedRocket = rockets.filter((item) => item.reserved);
  return (
    <div className="table-div">
      {/* Table for Missions */}
      <table className="table-fixed data-div">
        <thead>
          <tr className="head">
            <th className="w-1/2 px-10 py-2 title">Rockets Reserved</th>
          </tr>
        </thead>
        <tbody>
          {reservedRocket.map((item) => (
            <tr key={item.id}>
              <td className="border px-10 py-2">{item.rocket_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table-fixed data-div">
        <thead>
          <tr className="head">
            <th className="w-1/2 px-10 py-2 title">Missions Joined</th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.map((item) => (
            <tr key={item.missions_id}>
              <td className="border px-10 py-2">{item.mission_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default MyProfile;
