import { useAuth } from "../../lib/context/auth";

const Dashboard = () => {
  const { user } = useAuth();

  return <div>Welcome, {user ? user.email : "Guest"}!</div>;
};

export default Dashboard;
