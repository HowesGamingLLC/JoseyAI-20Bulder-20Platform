import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, GitBranch, Bot, Palette, Users, Shield, Sparkles, Play, Github, ChevronRight } from "lucide-react";

export default function Index() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-white">CodeFlow Builder</span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link to="/docs" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Documentation
                </Link>
                <Link to="/pricing" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Pricing
                </Link>
                <Link to="/examples" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Examples
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/auth/login">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Josey AI (DeepSeek R1)
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Build Apps with
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Magic</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            The complete AI-powered development platform. Visual builder, intelligent coding agent, 
            and seamless GitHub integration - all in one revolutionary workspace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-lg px-8 py-4 h-auto"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Building Now
              </Button>
            </Link>
            <Link to="/demo">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
              >
                Watch Demo
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, CodeFlow Builder provides all the tools for modern development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Josey AI Agent",
                description: "On-screen aware AI that understands your code, generates features, and debugs automatically",
                features: ["Task planning", "Auto-completion", "Bug detection", "Code review"]
              },
              {
                icon: Palette,
                title: "Visual Builder",
                description: "Drag-and-drop interface with real-time code generation and live preview",
                features: ["Component library", "Style editor", "Live sync", "Responsive design"]
              },
              {
                icon: GitBranch,
                title: "GitHub Integration",
                description: "Seamless CI/CD with automatic PRs, deployments, and version control",
                features: ["Auto commits", "PR creation", "Deploy preview", "Rollback support"]
              },
              {
                icon: Zap,
                title: "Instant Deployment",
                description: "Deploy to production in seconds with automatic optimization and CDN",
                features: ["Global CDN", "Auto scaling", "SSL included", "Custom domains"]
              },
              {
                icon: Shield,
                title: "Admin Dashboard",
                description: "Complete platform management with user control and analytics",
                features: ["User management", "Project analytics", "Billing integration", "Activity logs"]
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Real-time collaboration with shared workspaces and permissions",
                features: ["Live editing", "Role management", "Comment system", "Version history"]
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setIsHovered(feature.title)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Development?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are building faster with AI-powered tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-lg px-8 py-4 h-auto"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="https://github.com/codeflow-builder" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 py-12 px-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-white">CodeFlow Builder</span>
              </div>
              <p className="text-gray-400 text-sm">
                The future of AI-powered development
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/status" className="hover:text-white transition-colors">Status</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            © 2024 CodeFlow Builder. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
