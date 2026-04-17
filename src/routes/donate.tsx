import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Utensils, Hash, Salad, Clock, MapPin, Camera, StickyNote, Send, CheckCircle2, Upload, AlertTriangle, Sparkles, Navigation, Flame, Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate Food — ResQMeal AI" },
      { name: "description", content: "List surplus food in seconds and get matched with nearby NGOs in need." },
    ],
  }),
  component: DonatePage,
});

function Field({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2 text-sm font-bold text-slate-700">
        <Icon className="h-4 w-4 text-primary" />
        {label}
      </Label>
      {children}
    </div>
  );
}

function DonatePage() {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  // Real-time AI fields
  const [quantity, setQuantity] = useState("50");
  const [foodType, setFoodType] = useState("");
  const [cookedTime, setCookedTime] = useState("");
  const [riskScore, setRiskScore] = useState(24);

  useEffect(() => {
    // Simulated AI Risk Score Calculation
    let score = 15;
    const q = parseInt(quantity || "0");
    if (q > 100) score += 30;
    else if (q > 50) score += 15;
    
    if (foodType === "nonveg") score += 25;
    if (foodType === "veg") score += 10;
    
    score += Math.floor(Math.random() * 5);
    setRiskScore(Math.min(score, 98));
  }, [quantity, foodType, cookedTime]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      toast.success("AI Pre-Allocation Complete!", {
        description: "Your listing was instantly claimed via priority match.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen pb-24 relative bg-slate-50/50 selection:bg-primary/20">
      {/* Premium Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none z-0" />

      <div className="px-6 lg:px-12 py-12 lg:py-16 relative z-10 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-10 text-center lg:text-left flex flex-col lg:flex-row gap-6 justify-between items-end">
            <div>
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-xs font-extrabold text-slate-800 uppercase tracking-widest mb-6">
                <Sparkles className="h-4 w-4 text-primary" /> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-600">AI-Powered Listing</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-slate-900">List surplus food</h1>
              <p className="text-slate-500 mt-4 max-w-xl text-lg font-medium leading-relaxed">
                Our predictive engine instantly analyzes your food's shelf life and matches it to highly-active NGOs before expiration.
              </p>
            </div>
          </div>

          {success && (
            <div className="mb-10 bg-white rounded-2xl p-6 flex items-start gap-5 border border-emerald-100 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] animate-fade-up">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-black text-xl text-slate-900 tracking-tight">Food Claimed Automatically! 🎉</div>
                <div className="text-slate-600 mt-1 font-medium text-balance leading-relaxed">
                  Your listing bypassed the standard queue via Priority Match. <strong className="text-slate-900">Hope Foundation</strong> accepted the inventory. Suggested fastest route pickup ETA: <strong className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">~12 min</strong>.
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-[1fr_minmax(380px,420px)] gap-8 lg:gap-12 items-start">
            
            {/* Main Form - Crisp Light Mode */}
            <form onSubmit={onSubmit} className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 w-full h-1.5 left-0 gradient-primary" />
              
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">
                <Field icon={Utensils} label="Food Name">
                  <Input required placeholder="e.g. Vegetable Biryani" className="rounded-xl h-14 bg-slate-50 border-slate-200 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary shadow-inner font-medium transition-all" />
                </Field>
                
                <Field icon={Salad} label="Food Type">
                  <Select onValueChange={setFoodType} required>
                    <SelectTrigger className="rounded-xl h-14 bg-slate-50 border-slate-200 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary shadow-inner font-medium transition-all text-slate-700">
                      <SelectValue placeholder="Select classification" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl shadow-xl border-slate-100">
                      <SelectItem value="veg" className="font-semibold cursor-pointer">🥗 Vegetarian</SelectItem>
                      <SelectItem value="nonveg" className="font-semibold cursor-pointer">🍗 Non-Vegetarian</SelectItem>
                      <SelectItem value="packaged" className="font-semibold cursor-pointer">📦 Packaged</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field icon={Hash} label="Quantity (Meals)">
                  <Input required type="number" min={1} value={quantity} onChange={(e) => setQuantity(e.target.value)} className="rounded-xl h-14 bg-slate-50 border-slate-200 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary shadow-inner font-medium transition-all text-lg" />
                </Field>
                
                <Field icon={Clock} label="Cooked Time">
                  <Input required type="time" onChange={(e) => setCookedTime(e.target.value)} className="rounded-xl h-14 bg-slate-50 border-slate-200 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary shadow-inner font-medium transition-all" />
                </Field>

                <Field icon={MapPin} label="Pickup Location">
                  <Input required placeholder="Bandra West, Mumbai" className="rounded-xl h-14 bg-slate-50 border-slate-200 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary shadow-inner font-medium transition-all" />
                </Field>
                
                <Field icon={Camera} label="Food Photo">
                  <label className="flex items-center justify-center gap-3 h-14 px-4 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-all group">
                    <Upload className="h-5 w-5 text-primary group-hover:-translate-y-1 transition-transform" />
                    <span className="text-sm font-bold text-primary">Upload Documentation</span>
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </Field>
              </div>

              <div className="pt-2">
                <Field icon={StickyNote} label="Special Handling Instructions">
                  <Textarea placeholder="Any handling notes, allergens, or packaging info..." className="rounded-xl min-h-32 bg-slate-50 border-slate-200 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary shadow-inner font-medium transition-all resize-none p-4" />
                </Field>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-100 gap-4">
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                  <Sparkles className="h-4 w-4" />
                  Auto-Tag: High Priority • Safe till 8 hrs
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="gradient-primary text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] h-14 w-full sm:w-auto px-10 rounded-2xl hover:scale-[1.03] transition-all duration-300 text-lg font-bold"
                >
                  {submitting ? "Analyzing Network..." : <>Publish to Network <Send className="ml-2 h-5 w-5" /></>}
                </Button>
              </div>
            </form>

            {/* AI Side Panel - Dark/Inverted Premium Dashboard Look */}
            <div className="space-y-6">
              
              {/* Pre-Match System Widget */}
              <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute -inset-10 bg-gradient-to-br from-primary/20 to-transparent blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Navigation className="h-5 w-5 text-emerald-400" />
                      <h3 className="font-bold text-lg">AI Pre-Match Engine</h3>
                    </div>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                  </div>
                  
                  <p className="text-[15px] text-slate-300 mb-6 leading-relaxed font-medium">
                    Before publishing, our algorithm has identified <strong className="font-black text-white text-lg">3 NGOs</strong> within a 2km radius highly likely to accept this exact composition.
                  </p>
                  
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[85%] animate-[pulse_2s_ease-in-out_infinite]"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    <span>Searching</span>
                    <span>85% Match Prob.</span>
                  </div>
                </div>
              </div>

              {/* Waste Risk Score Widget */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                  <Activity className="w-48 h-48 text-slate-900" />
                </div>
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className={`h-5 w-5 ${riskScore > 60 ? 'text-red-500' : 'text-slate-900'}`} />
                    <h3 className="font-extrabold text-lg text-slate-900">Waste Risk Score</h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${riskScore > 60 ? 'bg-red-50 text-red-600 border-red-200' : 'bg-emerald-50 text-emerald-600 border-emerald-200'}`}>
                    Live Metric
                  </div>
                </div>
                
                <div className="flex items-end gap-3 mb-4 relative z-10">
                  <span className={`text-[4rem] leading-none font-black tracking-tighter ${riskScore > 60 ? 'text-red-500' : 'text-slate-900'}`}>
                    {riskScore}<span className="text-3xl text-slate-400">%</span>
                  </span>
                </div>
                
                <div className="w-full bg-slate-100 rounded-full h-3 mb-6 overflow-hidden relative z-10 shadow-inner">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${riskScore > 60 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-slate-900'}`} 
                    style={{ width: `${riskScore}%` }}
                  ></div>
                </div>
                
                <p className="text-sm font-semibold text-slate-500 leading-relaxed relative z-10">
                  {riskScore > 60 
                    ? "High risk of expiration. We strongly advise splitting this quantity into smaller batches for faster pickup."
                    : "Low risk status. This quantity and categorization is highly sought after by local shelters right now."}
                </p>
              </div>

              {/* Smart Guidance Widget */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 relative overflow-hidden group">
                <div className="flex items-center gap-2 mb-6">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <h3 className="font-extrabold text-lg text-slate-900">Smart Guidance</h3>
                </div>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <MapPin className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900 mb-1">High Demand Cluster</div>
                      <div className="text-sm font-medium text-slate-500 leading-relaxed">
                        NGOs in Bandra West are highly active! Demand is outpacing supply by 1.8x.
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Clock className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900 mb-1">Optimal Posting Window</div>
                      <div className="text-sm font-medium text-slate-500 leading-relaxed">
                        Right now! <strong className="text-slate-800">6–8 PM</strong> is the peak rescue time on the network.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
