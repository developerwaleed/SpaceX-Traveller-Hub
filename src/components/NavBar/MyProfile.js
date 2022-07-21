import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const missions = useSelector((state) => state.mymissons.missions);
  const filteredArr = missions.filter((item) => item.reserved);
  return (
    <>
      {/* Table for Missions */}
      <table className="table-fixed flex flex-col justify-center items-center">
        <thead>
          <tr>
            <th className="w-1/2 px-10 py-2">My Missions</th>
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
    </>
  );
}

export default MyProfile;
