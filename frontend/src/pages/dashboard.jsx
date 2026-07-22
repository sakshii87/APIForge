import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import WorkspaceStatus from "../components/dashboard/WorkspaceStatus";
import StatsGrid from "../components/dashboard/StatsGrid";
import APIRequestsChart from "../components/dashboard/responseChart";
import RecentRequests from "../components/dashboard/RecentRequests";
import CollectionsGrid from "../components/dashboard/CollectionsGrid";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";
import QuickActions from "../components/dashboard/quickActions";
import { useEffect, useState } from "react";
import { getProfile } from "../services/profileService";

export default function Dashboard() {
  const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await getProfile();
                setUser(profile);
            } catch (error) {
                console.error("Failed to load profile:", error);
            }
        };

        fetchProfile();
    }, []);
  return (
    <div className="dashboard-home">
      <WelcomeBanner user={user} />
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