import PageHeading from "@/app/_components/PageHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { User, Lock, Bell, ShieldAlert, Columns3Cog } from "lucide-react";
import UserTab from "./_components/UserTab";
import { auth } from "@/auth";
import Preferences from "./_components/Preferences";
const tabs = [
  { value: "profile", icon: <User size={16} /> },
  { value: "preferences", icon: <Columns3Cog size={16} /> },
  { value: "notifications", icon: <Bell size={16} /> },
  { value: "security", icon: <Lock size={16} /> },
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
          <TabsList className="grid grid-cols-4 gap-2 h-12 bg-muted mb-4">
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
          <TabsContent value="notifications" className="outline-none">
            <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm">
              <CardHeader>
                <CardTitle>Communication</CardTitle>
                <CardDescription>
                  Manage your email and sound preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label className="flex flex-col items-start gap-1">
                    <span>Task Reminders</span>
                    <span className="font-normal text-muted-foreground text-[10px]">
                      Get notified when tasks are due.
                    </span>
                  </Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="flex flex-col items-start gap-1">
                    <span>Sound Effects</span>
                    <span className="font-normal text-muted-foreground text-[10px]">
                      Play sound on task drag and drop.
                    </span>
                  </Label>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 4. Security Content */}
          <TabsContent value="security" className="outline-none">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <ShieldAlert size={18} /> Danger Zone
                </CardTitle>
                <CardDescription>
                  Irreversible actions for your account.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" size="sm">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPage;
