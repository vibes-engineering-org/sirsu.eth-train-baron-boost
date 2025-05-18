"use client";

import { useFrameSDK } from "~/hooks/useFrameSDK";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";



export default function MiniApp() {
  const { isSDKLoaded, isFramePinned, notificationDetails, pinFrame } = useFrameSDK();

  if (!isSDKLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="font-mono text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto py-8 px-4">
      <Card className="bg-black text-green-400 font-mono border-green-600 border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Railway Royale Waitlist</CardTitle>
          <CardDescription>
            Save the mini app to unlock notifications and join the waitlist!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          {isFramePinned ? (
            <p>You&apos;re one step closer to becoming a train baron!</p>
          ) : (
            <Button onClick={() => pinFrame()} className="bg-green-600 hover:bg-green-700">
              Save App
            </Button>
          )}
          {notificationDetails && <p>Notifications enabled! 🎉</p>}
        </CardContent>
        <CardFooter>
          <p className="text-xs">Transport Tycoon vibes.</p>
        </CardFooter>
      </Card>
    </div>
  );
}
