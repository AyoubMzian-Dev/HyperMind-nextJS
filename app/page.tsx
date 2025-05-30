import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  GraduationCap,
  Play,
  Smartphone,
  Target,
  Zap,
  BookOpen,
  TrendingUp,
  Star,
  Clock,
  Shield,
  ArrowRight,
  X,
  AlertTriangle,
} from "lucide-react"

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold text-white">HyperMind</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-slate-300 hover:text-emerald-400 transition-colors">
              How it Works
            </a>
            <a href="#benefits" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Benefits
            </a>
            <a href="#guarantee" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Guarantee
            </a>
            <Button
              variant="outline"
              className="border-emerald-400 bg-slate-900/80 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"
            >
              Sign In
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Start Free Trial</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-400 border-emerald-400/30">
            For High School Students Only
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Easier & Faster
            </span>{" "}
            Learning
          </h1>
          <p className="text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Without sacrificing your free time or suffering with bad quality videos and resources
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
            I help high school students (ages 16-20) organize their study flow with AI, so 90% of planning and resource
            searching is automated - giving you more time for what matters
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg">
              <Smartphone className="mr-2 h-5 w-5" />
              Start 7-Day Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              See How It Works
            </Button>
          </div>

          {/* Guarantee Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-400/30 rounded-full px-6 py-3 mb-8">
            <Shield className="h-5 w-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">7-Day Free Trial + 30-Day Money Back Guarantee</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">90%</div>
              <div className="text-slate-400">Less Planning Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">2x</div>
              <div className="text-slate-400">Faster Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">5k+</div>
              <div className="text-slate-400">High School Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Tired of These Study Struggles?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              You&apos;re not alone. Most high school students face the same frustrating problems every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-red-900/20 border-red-500/30 hover:border-red-400/50 transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Poor Study Organization</CardTitle>
                <CardDescription className="text-slate-400">
                  Don&apos;t know how to organize tasks, study time, or prepare for exams effectively
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-red-900/20 border-red-500/30 hover:border-red-400/50 transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <X className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Bad Quality Resources</CardTitle>
                <CardDescription className="text-slate-400">
                  Wasting hours watching poor quality videos with unnecessary explanations you already understand
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-red-900/20 border-red-500/30 hover:border-red-400/50 transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Time Sacrifice</CardTitle>
                <CardDescription className="text-slate-400">
                  Sacrificing all your free time to study with no time left for other activities you enjoy
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-red-300 font-semibold">
              Result: Bad grades, wasted time, and missing out on better opportunities after high school
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Here&apos;s How HyperMind Solves This</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Four key advantages that transform your study experience completely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-emerald-900/20 border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group">
              <CardHeader>
                <div className="h-16 w-16 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                  <Zap className="h-8 w-8 text-emerald-400" />
                </div>
                <CardTitle className="text-white text-2xl mb-4">Easier</CardTitle>
                <CardDescription className="text-slate-300 text-lg leading-relaxed">
                  AI organizes your entire study schedule automatically. All your tasks, lessons, study time, review
                  sessions, and class times are planned for you - no more confusion or overwhelm.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-emerald-900/20 border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group">
              <CardHeader>
                <div className="h-16 w-16 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                  <TrendingUp className="h-8 w-8 text-emerald-400" />
                </div>
                <CardTitle className="text-white text-2xl mb-4">Faster</CardTitle>
                <CardDescription className="text-slate-300 text-lg leading-relaxed">
                  90% of planning and searching for good resources is done automatically. The study flow focuses on
                  making your learning time more effective and efficient.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-emerald-900/20 border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group">
              <CardHeader>
                <div className="h-16 w-16 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                  <Shield className="h-8 w-8 text-emerald-400" />
                </div>
                <CardTitle className="text-white text-2xl mb-4">Guaranteed</CardTitle>
                <CardDescription className="text-slate-300 text-lg leading-relaxed">
                  Try it risk-free with our 7-day free trial. If you&apos;re not satisfied, get your money back within the
                  first 30 days - no questions asked.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-emerald-900/20 border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group">
              <CardHeader>
                <div className="h-16 w-16 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                  <Star className="h-8 w-8 text-emerald-400" />
                </div>
                <CardTitle className="text-white text-2xl mb-4">Better Experience</CardTitle>
                <CardDescription className="text-slate-300 text-lg leading-relaxed">
                  Beautiful UI/UX design, high-quality content, and excellent customer support. You&apos;ll always feel
                  supported and never frustrated with the app.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-400/30">Mobile-First Experience</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Your Step-by-Step Learning Process</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Prepare for each lesson and class with our proven 3-step method
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-400/30">Step 1</Badge>
                <h3 className="text-3xl font-bold text-white mb-6">Watch/Read Concept Explanations</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>App divides each lesson into digestible concepts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-quality explanations as text or video</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Step-by-step examples with fun visual effects (practical lessons)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>AI chat available for instant help</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <BookOpen className="h-6 w-6 text-emerald-400" />
                    <span className="text-white font-semibold">Math - Quadratic Equations</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-lg p-4">
                      <div className="text-emerald-400 text-sm font-semibold mb-2">Concept 1/3: Standard Form</div>
                      <div className="text-slate-300 text-sm">ax² + bx + c = 0</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-slate-400 text-sm font-semibold mb-2">Concept 2/3: Factoring</div>
                      <div className="text-slate-400 text-sm">Coming next...</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="text-slate-500 text-sm font-semibold mb-2">Concept 3/3: Quadratic Formula</div>
                      <div className="text-slate-500 text-sm">Locked</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-6">
                      <Target className="h-6 w-6 text-blue-400" />
                      <span className="text-white font-semibold">Level 1 Exercises</span>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
                        <div className="text-blue-400 text-sm font-semibold mb-2">Quick Exercise</div>
                        <div className="text-slate-300 text-sm mb-3">Solve: x² - 5x + 6 = 0</div>
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                          Show Step-by-Step Solution
                        </Button>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="text-slate-400 text-sm">✓ Exercise completed with 95% accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-400/30">Step 2</Badge>
                <h3 className="text-3xl font-bold text-white mb-6">Complete Level 1 Exercises</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Quick exercises for each concept with step-by-step solutions (practical lessons)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Simple questions that reinforce the concept (non-practical lessons)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Immediate feedback and explanations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-400/30">Step 3</Badge>
                <h3 className="text-3xl font-bold text-white mb-6">Master Level 2 Exercises</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Harder exercises covering all lesson concepts (practical lessons)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comprehensive questions list (non-practical lessons)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>AI analysis with corrections and feedback</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Fun visual effects for step-by-step solutions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <Star className="h-6 w-6 text-purple-400" />
                    <span className="text-white font-semibold">Level 2 - Final Challenge</span>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4 mb-4">
                    <div className="text-purple-400 text-sm font-semibold mb-2">Advanced Problem</div>
                    <div className="text-slate-300 text-sm mb-3">
                      A ball is thrown upward with initial velocity 20 m/s. Find when it hits the ground.
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Badge className="bg-emerald-500/20 text-emerald-400">All Concepts Mastered</Badge>
                    <Badge className="bg-blue-500/20 text-blue-400">Ready for Exam</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Preparation */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Exam Preparation Made Simple</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              When exam time comes, you&apos;ll be fully prepared with our systematic approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white text-xl">Quick Lesson Reviews</CardTitle>
                <CardDescription className="text-slate-400 text-base">
                  Reread/watch summaries for each lesson on the exam. Get a quick refresher of all key concepts without
                  wasting time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white text-xl">Practice Exams</CardTitle>
                <CardDescription className="text-slate-400 text-base">
                  Take realistic practice exams with complete solutions. Build confidence and identify areas that need
                  more attention.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl p-12 border border-emerald-400/30">
            <Shield className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Risk-Free Guarantee</h2>
            <p className="text-xl text-slate-300 mb-8">
              Try HyperMind completely free for 7 days. If you&apos;re not satisfied within the first 30 days, get your money
              back - no questions asked.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">7 Days</div>
                <div className="text-slate-300">Completely Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">30 Days</div>
                <div className="text-slate-300">Money Back Guarantee</div>
              </div>
            </div>
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg">
              Start Your Free Trial Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-slate-400 mt-4">No credit card required for free trial</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your High School Experience?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of high school students who are already getting better grades with less stress and more free
            time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg">
              <Smartphone className="mr-2 h-5 w-5" />
              Download for Mobile
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-slate-400">
            <span className="text-emerald-400 font-semibold">Ages 16-20 only</span> • Mobile-first experience • Start
            studying smarter today
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/80 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-emerald-400" />
                <span className="text-xl font-bold text-white">HyperMind</span>
              </div>
              <p className="text-slate-400 text-sm">
                Helping high school students achieve better grades with less stress and more free time.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Study Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Free Trial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Money Back Guarantee
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>
              &copy; 2024 HyperMind. All rights reserved. Designed specifically for high school students ages 16-20.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
