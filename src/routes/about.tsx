import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Globe, Heart, ShieldCheck, ArrowRight, Activity, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ResQMeal AI" },
      { name: "description", content: "The predictive food rescue network." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen -z-10" />
      <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header */}
      <section className="px-6 lg:px-12 pt-20 lg:pt-28 lg:pb-16 animate-fade-in relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/80 text-xs font-bold text-foreground mb-8 shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            Our Mission
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-balance leading-[1.05] mb-8">
            Turning surplus <br /> into <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-600">saved lives.</span>
          </h1>
          <p className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Traditional food rescue relies on manual calls and slow logistics. We built an AI-powered predictive engine to intercept food waste before it happens.
          </p>
        </div>
      </section>

      {/* Hero Image / Bento Feature */}
      <section className="px-6 lg:px-12 mt-12 animate-fade-up relative z-10">
        <div className="max-w-7xl mx-auto relative">
          <div className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
              alt="Volunteers serving food to people in need"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center gap-4 text-white">
                <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="font-black text-3xl tracking-tight">1.2M+</div>
                  <div className="font-bold text-white/80 uppercase tracking-widest text-xs mt-1">Meals Redirected Globally</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology */}
      <section className="px-6 lg:px-12 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-elegant border border-slate-100 dark:border-slate-800 animate-fade-up">
                  <Activity className="h-8 w-8 text-orange-500 mb-4" />
                  <div className="font-bold text-lg mb-1">Demand Heatmaps</div>
                  <div className="text-sm text-muted-foreground font-medium">Predictive analysis of high-demand areas.</div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-elegant border border-slate-100 dark:border-slate-800 translate-y-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
                  <ShieldCheck className="h-8 w-8 text-emerald-500 mb-4" />
                  <div className="font-bold text-lg mb-1">Risk Scoring</div>
                  <div className="text-sm text-muted-foreground font-medium">Instant calculation of food expiry risks.</div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-elegant border border-slate-100 dark:border-slate-800 animate-fade-up" style={{ animationDelay: '200ms' }}>
                  <Zap className="h-8 w-8 text-primary mb-4" />
                  <div className="font-bold text-lg mb-1">Smart Routing</div>
                  <div className="text-sm text-muted-foreground font-medium">Fastest routes saving 12+ mins per delivery.</div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-elegant border border-slate-100 dark:border-slate-800 translate-y-8 animate-fade-up" style={{ animationDelay: '300ms' }}>
                  <Users className="h-8 w-8 text-blue-500 mb-4" />
                  <div className="font-bold text-lg mb-1">Network Matching</div>
                  <div className="text-sm text-muted-foreground font-medium">Auto-pairing donors with nearest NGOs.</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6">
                Powered by Intelligence. <br /> Driven by empathy.
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8">
                ResQMeal isn't just an app—it's an end-to-end OS for food rescue. We bridge the gap between luxury fine-dining surplus and under-supplied shelters using algorithms built for speed and precision.
              </p>
              <Button asChild size="lg" className="h-14 px-8 rounded-2xl gradient-primary text-white font-bold shadow-[0_10px_30px_-10px_rgba(16,185,129,0.4)] hover:scale-105 transition-all">
                <Link to="/donate">
                  See the Engine in Action <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="px-6 lg:px-12 pb-12 mt-12 relative z-10">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-slate-900 text-white p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full gradient-primary opacity-20 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <Heart className="h-12 w-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6 text-balance">
              Join the future of food rescue.
            </h2>
            <div className="flex justify-center gap-4 mt-10">
              <Button asChild size="lg" className="h-14 px-10 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 transition-all text-[15px] font-bold">
                <Link to="/login">Join the Network</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
