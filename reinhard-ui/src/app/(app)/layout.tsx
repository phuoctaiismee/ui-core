import BubbleCursor from "@/components/common/cursor/bubble-cursor";
import CanvasCursor from "@/components/common/cursor/canvas-cursor";
import FollowCursor from "@/components/common/cursor/follow-cursor";
import RainbowCursor from "@/components/common/cursor/rainbow-cursor";
import { SiteFooter } from "@/components/common/footer";
import SiteHeader from "@/components/common/header";
import ScrollProgressBar from "@/components/common/progress/scroll-progress-bar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="border-grid flex flex-1 flex-col">
      {/* <CanvasCursor/> */}
      <RainbowCursor />
      {/* <FollowCursor/> */}
      {/* <BubbleCursor/> */}
      {/* <ScrollProgressBar type="bar" /> */}
      <SiteHeader />
      <main className="container-wrapper flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
}
