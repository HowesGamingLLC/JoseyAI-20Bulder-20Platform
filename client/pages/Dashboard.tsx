import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Code, 
  Plus, 
  Search, 
  MoreHorizontal, 
  Calendar, 
  GitBranch, 
  Users, 
  Zap,
  Bot,
  Settings,
  LogOut,
  FileCode,
  Globe,
  Clock
} from "lucide-react";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const recentProjects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Modern React/Next.js storefront with AI recommendations",
      status: "deployed",
      lastModified: "2 hours ago",
      url: "https://mystore.appstop.pro",
      collaborators: 3
    },
    {
      id: 2,
      name: "Portfolio Website",
      description: "Personal portfolio with interactive animations",
      status: "building",
      lastModified: "1 day ago",
      url: "https://portfolio-draft.appstop.pro",
      collaborators: 1
    },
    {
      id: 3,
      name: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      status: "draft",
      lastModified: "3 days ago",
      url: null,
      collaborators: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "deployed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "building": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "draft": return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-white">CodeFlow Builder</span>
              </Link>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Button variant="ghost" className="text-white bg-white/10">
                  Dashboard
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  Projects
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  Templates
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back!</h1>
          <p className="text-gray-300">Build something amazing with AI-powered development</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">New Project</h3>
              <p className="text-gray-400 text-sm">Start building with AI assistance</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Josey AI</h3>
              <p className="text-gray-400 text-sm">Chat with your AI assistant</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FileCode className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Templates</h3>
              <p className="text-gray-400 text-sm">Browse starter templates</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <GitBranch className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">Connect repositories</p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 sm:mb-0">Recent Projects</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400 w-64"
                />
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {recentProjects.map((project) => (
              <Card key={project.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <CardTitle className="text-white text-xl">{project.name}</CardTitle>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-300 text-base mb-4">
                        {project.description}
                      </CardDescription>
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {project.lastModified}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {project.collaborators} collaborators
                        </div>
                        {project.url && (
                          <div className="flex items-center">
                            <Globe className="w-4 h-4 mr-1" />
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                              Live preview
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Projects</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <FileCode className="w-5 h-5 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Deployments</p>
                  <p className="text-2xl font-bold text-white">47</p>
                </div>
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">AI Generations</p>
                  <p className="text-2xl font-bold text-white">234</p>
                </div>
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
