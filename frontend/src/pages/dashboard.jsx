import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import WorkspaceStatus from "../components/dashboard/WorkspaceStatus";
import StatsGrid from "../components/dashboard/StatsGrid";
import APIRequestsChart from "../components/dashboard/responseChart";
import RecentRequests from "../components/dashboard/RecentRequests";
import CollectionsGrid from "../components/dashboard/CollectionsGrid";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";
import QuickActions from "../components/dashboard/quickActions";

export default function Dashboard() {
  return (
    <div className="dashboard-home">
      <WelcomeBanner />
      <WorkspaceStatus />
      <StatsGrid />

      <section className="dashboard-main-grid">
        <div className="dashboard-primary-column">
          <APIRequestsChart />
          <RecentRequests />
          <CollectionsGrid />
        </div>

        <div className="dashboard-secondary-column">
          <ActivityTimeline />
          <QuickActions />
        </div>
      </section>
    </div>
  );
}