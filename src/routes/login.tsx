import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    google: any;
  }
}
import { Mail, Lock, Sparkles, Heart, Building2, Truck, ShieldCheck, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — ResQMeal AI" },
      { name: "description", content: "Sign in to the predictive food rescue network." },
    ],
  }),
  component: LoginPage,
});

const roles = [
  { key: "donor", label: "Donor", icon: Heart },
  { key: "ngo", label: "NGO", icon: Building2 },
  { key: "volunteer", label: "Volunteer", icon: Truck },
  { key: "admin", label: "Admin", icon: ShieldCheck },
];

function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("donor");
  const [isLoading, setIsLoading] = useState(false);
  const googleButtonRef = useRef<HTMLDivElement>(null);

  // Load Real Google Identity Services Script
  useEffect(() => {
    const scriptId = "google-gsi-client";
    
    const initGoogleAuth = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          // You MUST replace this with your actual Google Client ID from Google Cloud Console
          client_id: "YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com",
          callback: (response: any) => {
            // response.credential is the real JWT token from Google
            console.log("Real Google JWT Token:", response.credential);
            toast.success("Successfully logged in with Google!", {
               description: "JWT Token authenticated and received."
            });
            navigate({ to: "/" });
          }
        });

        if (googleButtonRef.current) {
          window.google.accounts.id.renderButton(googleButtonRef.current, {
            theme: "outline",
            size: "large",
            width: "100%",
            logo_alignment: "center",
          });
        }
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = initGoogleAuth;
      document.head.appendChild(script);
    } else {
      initGoogleAuth();
    }
  }, [navigate]);

  // Email Submit
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      toast.success(`Welcome back, ${role}!`, {
        description: "Authenticated via Email. Syncing Live Node..."
      });
      navigate({ to: "/" });
    }, 1000);
  };


  return (
    <div className="min-h-screen bg-background text-foreground flex overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen -z-10" />

      {/* Left Column - Image & Branding (Hidden on small screens) */}
      <div className="hidden lg:flex w-1/2 p-4 animate-fade-right">
         <div className="w-full h-full rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between p-12 shadow-2xl border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" 
              alt="Premium Abstract AI Glassmorphism" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow backdrop-blur-md">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="font-extrabold text-2xl tracking-tight text-white drop-shadow-md">ResQMeal <span className="text-primary font-normal text-lg">AI</span></div>
              </div>
              <Link to="/" className="text-white/70 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors">
                <Home className="h-4 w-4" /> Back to Home
              </Link>
            </div>

            <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white mb-6 shadow-sm">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                 </span>
                 Live Network: Active
               </div>
               <h1 className="text-5xl font-black text-white leading-[1.1] tracking-tighter mb-4 text-balance drop-shadow-xl">
                 Join the intelligence-driven food rescue movement.
               </h1>
               <p className="text-lg text-white/80 max-w-md font-medium leading-relaxed font-sans">
                 Our predictive models ensure every surplus meal is directed exactly where it's needed most, at the perfect time.
               </p>
            </div>
         </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col pt-8 pb-12 px-8 sm:px-16 lg:px-24 justify-center relative z-10 h-screen overflow-y-auto">
         <div className="w-full max-w-md mx-auto animate-fade-up">
            
            <div className="lg:hidden flex items-center gap-3 mb-10">
              <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="font-extrabold text-2xl tracking-tight">ResQMeal</div>
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight mb-2">Welcome back</h2>
            <p className="text-muted-foreground font-medium mb-8">Sign in to your dashboard to continue.</p>

            <div className="space-y-6">
               <div className="space-y-3">
                 <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">1. Select your Identity</Label>
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                   {roles.map((r) => {
                     const Icon = r.icon;
                     const active = role === r.key;
                     return (
                       <button
                         key={r.key}
                         type="button"
                         onClick={() => setRole(r.key)}
                         className={cn(
                           "flex flex-col items-center gap-2 p-3.5 rounded-2xl border transition-all duration-300",
                           active
                             ? "gradient-primary text-white border-transparent shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] scale-[1.02]"
                             : "border-border/60 hover:border-primary/40 hover:bg-muted/30 text-muted-foreground hover:text-foreground bg-background/50"
                         )}
                       >
                         <Icon className="h-5 w-5" />
                         <span className="text-xs font-bold">{r.label}</span>
                       </button>
                     );
                   })}
                 </div>
               </div>

               <div className="space-y-4 pt-2">
                 <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">2. Authenticate</Label>
                 
                 {/* REAL Google SSO Button Container */}
                 <div ref={googleButtonRef} className="w-full flex justify-center py-1">
                   {/* Google's script will automatically mount the real button here */}
                   <span className="text-sm font-medium text-slate-400">Loading Google Authentication...</span>
                 </div>

                 <div className="flex items-center gap-4 py-2 opacity-60">
                   <div className="h-px bg-border flex-1"></div>
                   <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Or Email</span>
                   <div className="h-px bg-border flex-1"></div>
                 </div>

                 {/* Email/Password Form */}
                 <form onSubmit={onSubmit} className="space-y-5">
                   <div className="space-y-2">
                     <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-primary" /> Email Address
                     </Label>
                     <Input required type="email" placeholder="you@domain.com" className="rounded-xl h-14 bg-background/50 border-border/80 focus-visible:ring-primary/50 px-4 font-medium" />
                   </div>
                   <div className="space-y-2">
                     <div className="flex items-center justify-between">
                       <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                         <Lock className="h-3.5 w-3.5 text-primary" /> Password
                       </Label>
                       <a href="#" className="text-primary text-xs font-bold hover:underline underline-offset-4">Forgot?</a>
                     </div>
                     <Input required type="password" placeholder="••••••••" className="rounded-xl h-14 bg-background/50 border-border/80 focus-visible:ring-primary/50 px-4 font-medium" />
                   </div>
                   
                   <Button
                     type="submit"
                     disabled={isLoading}
                     className="w-full h-14 rounded-2xl bg-foreground text-background shadow-lg hover:scale-[1.02] transition-all duration-300 text-[15px] font-bold mt-2"
                   >
                     {isLoading ? "Authenticating..." : <>Sign In with Email <ArrowRight className="ml-2 h-4 w-4" /></>}
                   </Button>
                 </form>
               </div>

               <div className="text-center text-sm text-muted-foreground pt-4 font-medium">
                 New to the network? <a href="#" className="text-foreground font-bold hover:text-primary transition-colors hover:underline underline-offset-4">Create an account</a>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
