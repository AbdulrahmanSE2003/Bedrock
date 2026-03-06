import PageHeading from "@/app/_components/PageHeading";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { User, Bell, Columns3Cog } from "lucide-react";
import UserTab from "./_components/UserTab";
import { auth } from "@/auth";
import Preferences from "./_components/Preferences";
import NotificationsTab from "./_components/NotificationsTab";
const tabs = [
  { value: "profile", icon: <User size={16} /> },
  { value: "preferences", icon: <Columns3Cog size={16} /> },
  { value: "notifications", icon: <Bell size={16} /> },
];

const SettingsPage = async () => {
  const session = await auth();

  if (!session?.user) return null;
  const userImage = session?.user?.image;
  const userEmail = session?.user?.email;
  const userName = session?.user?.name;

  return (
    <div className={``}>
      <PageHeading title="Settings" />
      <div className="mx-auto flex flex-col gap-4 mt-5">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-3 gap-2 h-12 bg-muted mb-4">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="gap-2">
                {tab.icon}
                <span className="hidden sm:inline capitalize">{tab.value}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* 1. Profile Content */}
          <UserTab image={userImage} email={userEmail} name={userName} />

          {/* 2. Appearance Content */}
          <Preferences />

          {/* 3. Notifications Content */}
          <NotificationsTab />
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPage;
