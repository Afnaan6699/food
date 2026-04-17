import { Link, Outlet, useLocation } from "@tanstack/react-router";
import {
  Home,
  LayoutDashboard,
  Map,
  Sparkles,
  LogOut,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/ngo", label: "Dashboard", icon: LayoutDashboard },
  { to: "/tracking", label: "Map", icon: Map },
  { to: "/analytics", label: "Insights", icon: Sparkles },
  { to: "/about", label: "Impact", icon: TrendingUp },
];

export function AppShell() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col w-full font-sans overflow-x-hidden">
      {/* Dark Top Navbar matching screenshot */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0F19]/95 backdrop-blur-xl px-6 py-3.5 flex flex-wrap items-center justify-between shadow-xl">
         
         <div className="flex items-center gap-8 lg:gap-16">
           <Link to="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-all">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="font-black text-xl tracking-tight text-white drop-shadow-sm">ResQMeal</div>
           </Link>

           <nav className="hidden lg:flex items-center gap-1.5">
              {nav.map(item => {
                 // For exact matches except home, which we manually adjust
                 const active = location.pathname === item.to || (location.pathname === '/' && item.to === '/');
                 const Icon = item.icon;
                 return (
                   <Link key={item.to} to={item.to} className={cn("flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-all", active ? "text-emerald-400 bg-emerald-500/10" : "text-white/60 hover:text-white hover:bg-white/5")}>
                      <Icon className="h-4 w-4" />
                      {item.label}
                   </Link>
                 )
              })}
           </nav>
         </div>

         <div className="flex items-center gap-5">
            <div className="flex items-center gap-4 border-r border-white/10 pr-5">
              <div className="text-right">
                <div className="text-sm font-bold text-white leading-tight">Mirza</div>
                <div className="text-[10px] font-black w-full flex justify-end uppercase tracking-widest text-emerald-400 mt-0.5">Donor</div>
              </div>
            </div>
            <button className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-emerald-400 transition-all text-white shadow-inner">
               <LogOut className="h-4 w-4" />
            </button>
         </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full bg-background relative z-0">
        <Outlet />
      </main>
    </div>
  );
}
