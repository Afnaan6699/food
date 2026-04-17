import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Search,
  Sparkles,
  Route as RouteIcon,
  BellRing,
  TrendingUp,
  Utensils,
  Building2,
  Truck,
  Twitter,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Play,
  ShieldCheck,
  Activity,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ResQMeal — Saving Food, Serving Lives" },
      {
        name: "description",
        content:
          "AI-powered platform connecting restaurants, households and events with NGOs to rescue surplus food and feed communities.",
      },
      { property: "og:title", content: "ResQMeal" },
      { property: "og:description", content: "Saving Food, Serving Lives" },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Meals Saved", value: "128,540", icon: Utensils, accent: "from-primary to-emerald-400" },
  { label: "Food Rescued (kg)", value: "42,180", icon: Heart, accent: "from-orange-500 to-orange-400" },
  { label: "NGOs Connected", value: "1,260", icon: Building2, accent: "from-blue-500 to-cyan-400" },
  { label: "Deliveries Done", value: "9,874", icon: Truck, accent: "from-purple-500 to-pink-400" },
];

const features = [
  {
    icon: Sparkles,
    title: "AI Predictive Matching",
    desc: "Smart algorithms predict demand spikes and match surplus food with the most relevant NGOs in milliseconds.",
  },
  {
    icon: RouteIcon,
    title: "Smart Route Optimization",
    desc: "Dynamic delivery routes powered by real-time traffic, saving an average of 12 minutes per pickup.",
  },
  {
    icon: Activity,
    title: "Waste Risk Scoring",
    desc: "Every listing is instantly analyzed for expiry risks with automated guidance on the best posting times.",
  },
  {
    icon: TrendingUp,
    title: "Impact Intelligence",
    desc: "Visualize meals saved, CO₂ reduced, and understand exactly why food sometimes goes unclaimed.",
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground overflow-hidden relative">
      
      {/* Floating Top Navbar Panel */}
      <header className="absolute top-6 right-6 lg:top-8 lg:right-12 z-50 pointer-events-none">
          <div className="pointer-events-auto bg-slate-900/95 backdrop-blur-2xl border border-slate-700/50 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] rounded-2xl p-2 flex items-center gap-5 pr-5 transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.3)]">
             <div className="bg-emerald-500/10 rounded-xl px-4 py-2.5 flex items-center gap-2.5 border border-emerald-500/20 shadow-inner">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Secure Network</span>
             </div>
             <Link to="/login" className="flex items-center gap-2 text-[13px] font-bold text-white hover:text-emerald-400 transition-colors">
               Sign In to Portal <ArrowRight className="h-4 w-4" />
             </Link>
          </div>
      </header>

      {/* Ultra Premium Hero Section */}
      <section className="relative px-6 lg:px-12 pt-24 lg:pt-36 pb-24 lg:pb-32 overflow-hidden border-b border-border/50">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-full pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-[20%] right-[5%] w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-xs font-bold text-foreground mb-8 shadow-sm backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              ResQMeal Engine v2.0 Live
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.08] tracking-tighter text-balance">
              Predictive AI meets <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-primary to-emerald-600 drop-shadow-sm">
                Food Rescue.
              </span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
              We don’t just redistribute food. We <strong className="text-foreground">predict where food will be needed before it’s wasted</strong> using real-time demand modeling and intelligent routing.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gradient-primary text-white hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-[1.02] transition-all duration-300 h-14 px-8 rounded-2xl text-[15px] font-bold border border-white/20">
                <Link to="/donate">
                  Start Donating Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass bg-background/50 backdrop-blur-xl border-border/80 h-14 px-8 rounded-2xl hover:bg-background/80 hover:scale-[1.02] transition-smooth text-[15px] font-bold text-foreground shadow-sm">
                <Link to="/ngo">
                  <Play className="mr-2 h-5 w-5 fill-foreground" /> View Live Dispatch
                </Link>
              </Button>
            </div>
            
            <div className="mt-14 flex items-center gap-6 pt-8 border-t border-border/50">
               <div className="flex -space-x-3">
                 <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop" alt="Trusted Partner" className="w-11 h-11 rounded-full border-[3px] border-background object-cover shadow-sm" />
                 <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Trusted Partner" className="w-11 h-11 rounded-full border-[3px] border-background object-cover shadow-sm" />
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Trusted Partner" className="w-11 h-11 rounded-full border-[3px] border-background object-cover shadow-sm" />
                 <div className="w-11 h-11 rounded-full border-[3px] border-background bg-muted flex items-center justify-center text-[10px] font-black tracking-tighter text-muted-foreground shadow-sm">+2k</div>
               </div>
               <div>
                  <div className="flex items-center gap-1 text-orange-400 mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-orange-400" />)}
                  </div>
                  <div className="text-sm font-semibold text-foreground/80">Trusted by 2,000+ top restaurants</div>
               </div>
            </div>
          </div>
          
          <div className="relative animate-float lg:h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0 perspective-1000">
             {/* Bento UI floating grid in Hero */}
             <div className="relative w-full max-w-md lg:max-w-none h-full min-h-[500px]">
                
                {/* Main Image - Gourmet Food (Replaced raw food with sophisticated prepared meal) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[85%] lg:w-[320px] h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 z-10 transition-transform hover:scale-[1.03] duration-700 ease-out xl:rotate-2">
                   <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=1000&fit=crop" className="w-full h-full object-cover" alt="Beautifully plated gourmet food rescue" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                   
                   <div className="absolute top-5 right-5 glass bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-white tracking-widest uppercase">Live Match</span>
                   </div>

                   <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                      <div className="flex flex-wrap gap-2 mb-3">
                         <span className="bg-primary/90 text-white px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-sm">Hot Meals</span>
                         <span className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest border border-white/20">45 Mins Left</span>
                      </div>
                      <div className="font-extrabold text-[22px] leading-tight mb-1 drop-shadow-md">120 Fine-Dining Meals Saved</div>
                      <div className="text-sm font-medium text-white/80">Saffron Luxury Banquets</div>
                   </div>
                </div>

                {/* Floating UI Widget 1 (Top Left) */}
                <div className="absolute top-[5%] -left-[5%] lg:-left-[15%] glass bg-background/80 backdrop-blur-xl border border-border/80 rounded-2xl p-5 shadow-elegant z-20 w-64 animate-fade-up xl:-rotate-3" style={{ animationDelay: '200ms' }}>
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-inner shrink-0">
                         <ShieldCheck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                         <div className="font-bold text-sm text-foreground">Verified AI Match</div>
                         <div className="text-xs font-medium text-muted-foreground mt-0.5">Hope Foundation</div>
                      </div>
                   </div>
                   <div className="w-full bg-muted rounded-full h-2 overflow-hidden mb-2">
                     <div className="bg-primary w-full h-full"></div>
                   </div>
                   <div className="text-[10px] text-right font-black text-primary uppercase tracking-wider">100% Match Confidence</div>
                </div>

                {/* Floating UI Widget 2 (Bottom Right) */}
                <div className="absolute bottom-[5%] -right-[5%] lg:-right-[10%] glass bg-background/80 backdrop-blur-xl border border-border/80 rounded-2xl p-5 shadow-[0_20px_40px_-15px_rgba(251,146,60,0.2)] z-20 w-72 animate-fade-up xl:rotate-2" style={{ animationDelay: '400ms' }}>
                   <div className="flex items-center justify-between mb-3">
                     <div className="flex items-center gap-2 text-orange-500">
                        <Activity className="w-4 h-4" />
                        <span className="font-black text-[11px] uppercase tracking-widest">Demand Spike</span>
                     </div>
                     <span className="text-[10px] font-bold text-orange-500/80 bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/20">Bandra West</span>
                   </div>
                   <div className="flex items-end gap-3 mt-4 mb-4">
                     <div className="text-4xl font-black leading-none tracking-tighter text-foreground">8.2k</div>
                     <div className="text-xs font-bold text-muted-foreground pb-1 uppercase tracking-widest">Meals Needed</div>
                   </div>
                   <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=100&fit=crop" className="w-full h-12 rounded-lg object-cover opacity-60 grayscale-[30%] mix-blend-luminosity" alt="Map heatmap abstract" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Glass Panels */}
      <section className="px-6 lg:px-12 py-16 relative z-10 bg-muted/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-background rounded-3xl p-8 shadow-sm border border-border/40 hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300 animate-fade-up group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${s.accent} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="h-6 w-6 text-white drop-shadow-sm" />
                </div>
                <div className="text-4xl font-black tracking-tighter text-foreground mb-1">{s.value}</div>
                <div className="text-sm font-semibold text-muted-foreground">{s.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 lg:px-12 py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-[11px] font-black text-primary uppercase tracking-widest mb-4 bg-primary/10 px-3 py-1.5 rounded-full">
              <Sparkles className="h-3.5 w-3.5" /> Intelligence First
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
              Built for impact, designed like magic.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Everything you need to rescue food efficiently, beautifully, and at scale without any manual guesswork.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group bg-background rounded-[2rem] p-8 shadow-sm border border-border/50 hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 animate-fade-up relative overflow-hidden"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="h-14 w-14 rounded-2xl gradient-dark flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-[19px] mb-3 text-foreground">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Extreme Premium CTA */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-foreground text-background p-12 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-50 mix-blend-overlay">
             <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&auto=format&fit=crop" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full gradient-primary opacity-40 blur-[100px]" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-white mb-6 text-balance leading-[1.1]">
                Ready to make hunger history?
              </h2>
              <p className="text-lg text-white/70 max-w-lg font-medium leading-relaxed">
                Join thousands of donors and NGOs building the world's most intelligent food rescue network today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Button asChild size="lg" className="gradient-primary h-16 w-full sm:w-auto px-10 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-105 transition-all duration-300 text-lg font-bold border border-white/20">
                <Link to="/login">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 w-full sm:w-auto px-10 rounded-2xl bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white transition-all text-lg font-bold backdrop-blur-md">
                <Link to="/analytics">View Impact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-12 pb-12 border-t border-border/50 pt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-xl tracking-tight text-foreground">ResQMeal</div>
              <div className="text-sm font-medium text-muted-foreground">Predictive Food Rescue.</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-11 w-11 rounded-full glass bg-background border-border/80 flex items-center justify-center hover:-translate-y-1 hover:text-primary transition-all duration-300 shadow-sm"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
