import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Save, User, Camera } from "lucide-react";
import Image from "next/image";

const UserTab = async ({
  image,
  email,
  name,
}: {
  image: string;
  email: string;
  name: string;
}) => {
  return (
    <TabsContent value="profile" className="space-y-4 outline-none">
      <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden bg-card">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">Public Profile</CardTitle>
          <CardDescription>How others will see you in the app.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative h-20 w-20 group">
              <div className="relative h-20 w-20 rounded-full overflow-hidden hover:opacity-75  transition-opacity duration-300">
                {image ? (
                  <Image
                    src={image}
                    fill
                    alt="User Picture"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <User size={32} className="text-primary/60" />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-medium">Profile Picture</h4>
              <p className="text-[11px] text-muted-foreground leading-tight">
                Synced from {email?.split("@")[1] || "your provider"}.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-bold">
                Display Name
              </Label>
              <Input
                id="name"
                defaultValue={name}
                className="h-10 bg-muted/50 border-none shadow-inner focus-visible:ring-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-bold">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              disabled
              defaultValue={email}
              className="h-10 bg-muted/30 disabled:cursor-not-allowed border-none shadow-inner cursor-not-allowed opacity-70"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="text-xs font-bold">
              Bio
            </Label>
            <textarea
              id="bio"
              className="w-full min-h-24 p-3 rounded-md bg-muted/50 border-none shadow-inner text-sm focus-visible:ring-1 focus-visible:ring-ring outline-none resize-none transition-all"
              placeholder="Tell us a little about yourself..."
              defaultValue="Productivity enthusiast and Zorin OS lover."
            />
          </div>
        </CardContent>

        <CardFooter className=" border-t  flex justify-end gap-3">
          <Button size="sm" className="gap-2 px-8 shadow-md">
            <Save size={14} /> Save Profile
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default UserTab;
