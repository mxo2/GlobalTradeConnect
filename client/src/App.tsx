import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CookieBanner from "@/components/cookie-banner";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Delegation from "@/pages/delegation";
import Training from "@/pages/training";
import Membership from "@/pages/membership";
import Contact from "@/pages/contact";
import Consultancy from "@/pages/consultancy";
import Gallery from "@/pages/gallery";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-conditions";
import CookiesPolicy from "@/pages/cookies-policy";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/delegation" component={Delegation} />
          <Route path="/training" component={Training} />
          <Route path="/consultancy" component={Consultancy} />
          <Route path="/membership" component={Membership} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/cookies-policy" component={CookiesPolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <CookieBanner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
