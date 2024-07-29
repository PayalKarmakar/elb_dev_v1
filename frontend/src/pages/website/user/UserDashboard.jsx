import {
  DashboardGraphBox,
  DashboardOrderList,
  DashboardPostList,
} from "../../../components";

const UserDashboard = () => {
  return (
    <>
      <div className="row g-4">
        <DashboardGraphBox />
        <DashboardGraphBox />
      </div>
      <div className="row g-4">
        <DashboardPostList />
        <DashboardOrderList />
      </div>
    </>
  );
};

export default UserDashboard;
