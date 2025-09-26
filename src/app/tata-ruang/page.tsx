import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import MapClient from "./MapClient";

export default function Page() {
  return (
    <div className="fixed inset-0">
      <MapClient />
      <div className="fixed top-0 left-0 right-0 z-[1000]">
        <TopNav hasNewNews={false} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-[1000]">
        <BottomNav />
      </div>
    </div>
  );
}
