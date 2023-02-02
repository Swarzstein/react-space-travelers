import React from 'react';
import MyMission from './MyMission';
import MyRockets from './MyRockets';

const MyProfile = () => (
  <div className="myprofile">
    <div className="myprofile_group">
      <div className="myprofile_mission">
        <MyMission />
      </div>
      <div className="myprofile_rockets">
        <MyRockets />
      </div>
    </div>
  </div>
);

export default MyProfile;
