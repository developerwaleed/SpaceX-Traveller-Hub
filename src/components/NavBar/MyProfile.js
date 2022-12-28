import React from 'react';
import { useSelector } from 'react-redux';
import Welcome from './Welcome';
// import MissionButton from '../Missions/MissionButton';
import './MyProfile.css';

function MyProfile() {
  const missions = useSelector((state) => state.mymissons.missions);
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedMissions = missions.filter((item) => item.reserved);
  const reservedRocket = rockets.filter((item) => item.reserved);
  return (
    <>
      {reservedRocket.length <= 0 && reservedMissions.length <= 0 ? (
        <Welcome
          title="No Missions/Rockets Booked 😒 "
          title2="Lets Book one?"
          btn1="Book Rocket"
          btn2="Join Mission"
        />
      ) : (
        <div className="table-div">
          {/* Table for Rockets */}
          {!(reservedRocket.length <= 0) ? (
            <table className="table-fixed data-div">
              <thead>
                <tr className="head">
                  <th className="w-1/2 px-10 py-2 title">Rockets Reserved 🚀</th>
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
          ) : (
            <table className="table-fixed data-div">
              <tr className="head">
                <th className="w-1/2 px-10 py-2 title">No Rocket Booked 🚀</th>
              </tr>
            </table>
          )}
          {/* Table for Rockets */}
          {!(reservedMissions.length <= 0) ? (
            <table className="table-fixed data-div">
              <thead>
                <tr className="head">
                  <th className="w-1/2 px-10 py-2 title">Missions Joined 🛰️</th>
                </tr>
              </thead>
              <tbody>
                {reservedMissions.map((item) => (
                  <tr key={item.missions_id}>
                    <td className="border px-10 py-2">{item.mission_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="table-fixed data-div">
              <tr className="head">
                <th className="w-1/2 px-10 py-2 title">No Missions Joined 🛰️</th>
              </tr>
            </table>
          )}
        </div>
      )}
    </>
  );
}
export default MyProfile;
