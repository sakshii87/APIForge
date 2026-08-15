import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import CollectionsGrid from "../components/dashboard/CollectionsGrid";
import StatsGrid from "../components/dashboard/StatsGrid";

import { useEffect, useState } from "react";

import { getProfile } from "../services/profileService";
import { getCollections } from "../services/collectionService";

export default function Dashboard() {

  const [user, setUser] = useState(null);

  const [collections, setCollections] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const profile =
          await getProfile();

        setUser(profile);

        const collectionData =
          await getCollections();

        setCollections(
          collectionData
        );

      } catch (error) {

        console.error(
          "Failed to load dashboard data",
          error
        );

      }
    };

    fetchData();

  }, []);

  return (
    <div className="dashboard-home">

      <WelcomeBanner user={user} />

      <StatsGrid
        collections={collections}
      />

      <CollectionsGrid />

    </div>
  );
}