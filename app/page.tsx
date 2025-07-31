import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Target, BookOpen, Brain, Zap, Search, CheckCircle, FileText, Calendar, PenTool, Clock } from "lucide-react";
import Image from "next/image";

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
              <h1 className="text-xl font-semibold">Crack Mantra</h1>
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
      <section className="py-20 gradient-bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6" variant="outline">
            <CheckCircle className="mr-2 h-4 w-4" />
            CrackMantra - AI Study Companion
          </Badge>
          <h1 className="text-5xl md:text-6xl mb-8 text-foreground font-bold">
            Your AI Study Companion for 
            <span className="text-primary block">Government Exams</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Get personalized study plans, daily quizzes, current affairs notes, and custom short notes - 
            all the tools you need to crack your government exam.
          </p>
          <div className="flex justify-center mb-12">
            <Button size="lg" className="px-8 text-lg h-14 button-enhanced" asChild>
              <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Get Started Now
              </a>
            </Button>
          </div>
          
          {/* MVP Features Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="enhanced-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 border">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4 icon-glow" />
              <h3 className="text-lg font-semibold mb-2">Study Plan Generator</h3>
              <p className="text-sm text-muted-foreground">Personalized study schedules</p>
            </div>
            <div className="enhanced-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 border">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4 icon-glow" />
              <h3 className="text-lg font-semibold mb-2">Daily Quizzes</h3>
              <p className="text-sm text-muted-foreground">Free quizzes on Telegram</p>
            </div>
            <div className="enhanced-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 border">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4 icon-glow" />
              <h3 className="text-lg font-semibold mb-2">Current Affairs</h3>
              <p className="text-sm text-muted-foreground">Latest exam-focused notes</p>
            </div>
            <div className="enhanced-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 border">
              <PenTool className="h-12 w-12 text-primary mx-auto mb-4 icon-glow" />
              <h3 className="text-lg font-semibold mb-2">Short Notes Maker</h3>
              <p className="text-sm text-muted-foreground">Create custom study notes</p>
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
          <Button size="lg" className="px-8 button-enhanced" asChild>
            <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Our Community
            </a>
          </Button>
        </div>
      </section>

      {/* Study Plan Generator Feature */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Available Now
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-6">
                Study Plan Generator
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a structured, personalized study plan tailored to your exam and timeline. No more confusion about what to study when.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Custom timeline based on your exam date</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Subject-wise breakdown and scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Daily and weekly study goals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Revision schedules and mock test timing</span>
                </div>
              </div>
              <Button size="lg" className="px-8 button-enhanced" asChild>
                <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Your Study Plan
                </a>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8">
              <div className="w-full h-80 bg-card rounded-xl flex items-center justify-center border overflow-hidden">
                <Image 
                  src="/study-plan.png" 
                  alt="Study Plan Generator Interface" 
                  width={400} 
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Daily Quizzes Feature */}
      <section className="py-20 gradient-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-8 order-2 lg:order-1">
              <div className="w-full h-80 bg-card rounded-xl flex items-center justify-center border overflow-hidden">
                <Image 
                  src="/daily-quiz.png" 
                  alt="Daily Quiz Interface on Telegram" 
                  width={400} 
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4" variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                Available Now
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-6">
                Free Daily Quizzes on Telegram
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Test your knowledge daily with our carefully curated quizzes. Delivered directly to your Telegram, covering all major government exam topics.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Daily fresh questions covering all subjects</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Instant answers with detailed explanations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Track your performance and weak areas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Exam-pattern based question format</span>
                </div>
              </div>
              <Button size="lg" className="px-8 button-enhanced" asChild>
                <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Daily Quizzes
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Current Affairs Notes Feature */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Available Now
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-6">
                Latest Current Affairs Notes
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Stay updated with the latest current affairs through our comprehensive, exam-focused notes. Updated regularly to keep you ahead of the competition.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Daily current affairs updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Exam-specific formatting and focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Important facts and figures highlighted</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Monthly compilation for easy revision</span>
                </div>
              </div>
              <Button size="lg" className="px-8 button-enhanced" asChild>
                <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Current Affairs
                </a>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8">
              <div className="w-full h-80 bg-card rounded-xl flex items-center justify-center border overflow-hidden">
                <Image 
                  src="/current-affairs.png" 
                  alt="Current Affairs Notes Interface" 
                  width={400} 
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Notes Maker Feature */}
      <section className="py-20 gradient-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-8 order-2 lg:order-1">
              <div className="w-full h-80 bg-card rounded-xl flex items-center justify-center border overflow-hidden">
                <Image 
                  src="/short-notes.png" 
                  alt="Short Notes Maker Interface" 
                  width={400} 
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4" variant="outline">
                <PenTool className="mr-2 h-4 w-4" />
                Available Now
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-6">
                Short Notes Maker
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Create personalized, concise notes from any topic or chapter. Perfect for quick revision and last-minute preparation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>AI-powered note summarization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Customizable length and focus areas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Key points and formulas highlighted</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Export in PDF format for easy sharing</span>
                </div>
              </div>
              <Button size="lg" className="px-8 button-enhanced" asChild>
                <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Create Notes
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Access all our study tools through our Telegram community
          </p>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">Join Telegram</h3>
              <p className="text-muted-foreground mb-6">
                Join our active community and get instant access to all study tools
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">Choose Your Exam</h3>
              <p className="text-muted-foreground mb-6">
                Select from 15+ government exams and get personalized resources
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">Start Studying</h3>
              <p className="text-muted-foreground mb-6">
                Use study plans, daily quizzes, current affairs, and notes to excel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 gradient-bg-accent">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6" variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            Coming Soon
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Advanced AI Features
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            We&apos;re building powerful AI features to take your preparation to the next level
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="coming-soon-card rounded-xl p-8">
              <Brain className="h-16 w-16 text-primary/50 mx-auto mb-6 icon-glow" />
              <h3 className="text-2xl mb-4">AI Study Planning</h3>
              <p className="text-muted-foreground">
                Advanced AI that learns from your progress and adapts your study plan in real-time
              </p>
            </div>
            <div className="coming-soon-card rounded-xl p-8">
              <Search className="h-16 w-16 text-primary/50 mx-auto mb-6 icon-glow" />
              <h3 className="text-2xl mb-4">Lecture Curation</h3>
              <p className="text-muted-foreground">
                AI-powered discovery of the best free lectures tailored to your specific topics
              </p>
            </div>
            <div className="coming-soon-card rounded-xl p-8">
              <Zap className="h-16 w-16 text-primary/50 mx-auto mb-6 icon-glow" />
              <h3 className="text-2xl mb-4">Smart Progress Tracking</h3>
              <p className="text-muted-foreground">
                Intelligent tracking system that identifies weak areas and optimizes study sequence
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
                <h3 className="text-xl font-semibold">Crack Mantra</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Complete study solution with personalized plans, daily quizzes, current affairs, and notes for government exam aspirants.
              </p>
              <Button className="w-full" asChild>
                <a href="https://t.me/+P0coDi0wDFthMTI9" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Join Community
                </a>
              </Button>
            </div>
            <div>
              <h4 className="mb-4">Available Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Study Plan Generator</a></li>
                <li><a href="#" className="hover:text-foreground">Daily Quizzes</a></li>
                <li><a href="#" className="hover:text-foreground">Current Affairs Notes</a></li>
                <li><a href="#" className="hover:text-foreground">Short Notes Maker</a></li>
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