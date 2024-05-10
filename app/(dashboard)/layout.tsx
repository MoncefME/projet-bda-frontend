import Footer from "@/components/activitiesTable/Footer";
import Navbar from "@/components/common/Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default DashboardLayout;
