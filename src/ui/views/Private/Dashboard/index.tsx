import { authLoading } from "../../../../domain/usecases/auth-slice";
import { useAppSelector } from "../../../../store/hooks";

const Dashboard = () => {
  const loading = useAppSelector(authLoading);

  return (
    <section className="min-h-screen w-full flex justify-center items-center p-10">
      {loading ? (
        <div className="loader-content">
          <div className="spinner"></div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Dashboard;
