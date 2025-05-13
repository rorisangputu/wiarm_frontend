import AdminNavbar from "../components/Admin/AdminNavbar";

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <AdminNavbar />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
