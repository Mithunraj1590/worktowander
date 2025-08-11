import DashboardSidebar from '@/widgets/DashboardSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
      {/* Sidebar - Fixed */}
      <div className="w-64 flex-shrink-0">
        <DashboardSidebar />
      </div>
      
      {/* Main Content - Scrollable */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar - Fixed */}
        <div className="bg-black/30 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            {/* Page Title */}
            <div className="space-x-3">
              <h1 className="text-xl font-bold text-white">Welcome back, Admin!</h1>

            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                🔔
              </button>
              <button className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                ⚙️
              </button>
            </div>
          </div>
        </div>

        {/* Page Content - Scrollable */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="px-5 mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
