import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Bot, MessageCircle, Target, BookOpen, Brain, Zap, Search, Sparkles, CheckCircle } from "lucide-react";

export default function App() {
  const examOptions = [
    "SSC CGL", "SSC CHSL", "IBPS PO", "IBPS Clerk", "SBI PO", "SBI Clerk", 
    "UPSC Prelims", "UPSC Mains", "RRB NTPC", "RRB Group D", "State PSC"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <h1 className="text-xl">Crack Mantra</h1>
            </div>
            <Button asChild>
              <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Telegram
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6" variant="secondary">
            <Sparkles className="mr-2 h-4 w-4" />
            Coming Soon - AI Study Planner
          </Badge>
          <h1 className="text-5xl md:text-6xl mb-8 text-foreground">
            Your AI Study Companion for 
            <span className="text-primary block">Government Exams</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Get a personalized study plan and curated free lectures tailored to your exam, 
            timeline, and learning style. Stop wasting time searching for resources.
          </p>
          <div className="flex justify-center mb-12">
            <Button size="lg" className="px-8 text-lg h-14" asChild>
              <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Join Telegram Community
              </a>
            </Button>
          </div>
          <div className="w-full max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border rounded-2xl p-8">
            <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-xl flex items-center justify-center">
              <Bot className="h-24 w-24 text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Supported Exams */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Covering All Major Government Exams
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our AI understands the unique requirements of each exam type
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
            {examOptions.map((exam, index) => (
              <Badge key={index} variant="secondary" className="px-6 py-3 text-base">
                {exam}
              </Badge>
            ))}
          </div>
          <Button size="lg" className="px-8" asChild>
            <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Our Community
            </a>
          </Button>
        </div>
      </section>

      {/* AI Study Planning Feature */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                <Brain className="mr-2 h-4 w-4" />
                AI Planning
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-6">
                Personalized Study Plans in Seconds
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our AI analyzes your exam, timeline, and learning preferences to create a custom study schedule that adapts to your pace.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Custom timeline based on your exam date</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Focus areas identified from your weak points</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Daily study goals that fit your schedule</span>
                </div>
              </div>
              <Button size="lg" className="px-8" asChild>
                <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join Community
                </a>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8">
              <div className="w-full h-80 bg-card rounded-xl flex items-center justify-center border">
                <Brain className="h-32 w-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Lecture Aggregation Feature */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-8 order-2 lg:order-1">
              <div className="w-full h-80 bg-card rounded-xl flex items-center justify-center border">
                <Search className="h-32 w-32 text-primary/30" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4" variant="outline">
                <Search className="mr-2 h-4 w-4" />
                Content Discovery
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-6">
                Best Free Lectures, Curated by AI
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Stop scrolling through endless YouTube videos. Our AI finds and organizes the highest-quality free lectures for your specific topics.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Quality-verified content from top educators</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Organized by topics and difficulty level</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Updated with latest exam patterns</span>
                </div>
              </div>
              <Button size="lg" className="px-8" asChild>
                <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join Community
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Progress Tracking Feature */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                <Zap className="mr-2 h-4 w-4" />
                Adaptive Learning
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-6">
                AI That Learns From Your Progress
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                As you study, our AI tracks your progress and automatically adjusts your plan. Struggling with a topic? Get more resources. Mastered something? Move ahead faster.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Real-time plan adjustments based on performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Smart recommendations for weak areas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Optimized study sequence for better retention</span>
                </div>
              </div>
              <Button size="lg" className="px-8" asChild>
                <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join Community
                </a>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8">
              <div className="w-full h-80 bg-card rounded-xl flex items-center justify-center border">
                <Zap className="h-32 w-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            From exam selection to personalized study plan - all powered by AI
          </p>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">Choose Your Exam</h3>
              <p className="text-muted-foreground mb-6">
                Select from 15+ government exams including SSC, Banking, UPSC, and State PSC
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Brain className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">Describe Your Goals</h3>
              <p className="text-muted-foreground mb-6">
                Tell our AI about your timeline, weak areas, and learning preferences
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">Get Your Plan</h3>
              <p className="text-muted-foreground mb-6">
                Receive a personalized study schedule with curated free lectures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Connect with fellow aspirants, get daily tips, and stay motivated throughout your preparation journey
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="px-8" asChild>
              <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Telegram Group
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bot className="h-6 w-6 text-primary" />
                <h3>Crack Mantra</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                AI-powered study planning and free lecture aggregation for government exam aspirants.
              </p>
              <Button className="w-full" asChild>
                <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Join Community
                </a>
              </Button>
            </div>
            <div>
              <h4 className="mb-4">AI Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Study Planning</a></li>
                <li><a href="#" className="hover:text-foreground">Lecture Curation</a></li>
                <li><a href="#" className="hover:text-foreground">Progress Tracking</a></li>
                <li><a href="#" className="hover:text-foreground">Smart Recommendations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Exam Categories</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">SSC Exams</a></li>
                <li><a href="#" className="hover:text-foreground">Banking</a></li>
                <li><a href="#" className="hover:text-foreground">UPSC</a></li>
                <li><a href="#" className="hover:text-foreground">State PSC</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>📧 contact@crackmantra.com</li>
                <li>📱 Telegram Community</li>
                <li>🤖 AI Assistant</li>
              </ul>
              <Button variant="outline" className="w-full mt-4" asChild>
                <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Join Community
                </a>
              </Button>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2025 Crack Mantra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}