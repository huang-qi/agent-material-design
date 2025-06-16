
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Cpu, Search, MessageSquare, Sparkles, Zap, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Homepage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const products = [
    {
      id: 1,
      title: "集成电路材料产业全景分析",
      description: "全面分析集成电路材料产业链，提供市场趋势、技术发展和竞争格局的深度洞察",
      icon: BarChart3,
      color: "from-cyan-500 to-blue-600",
      features: ["产业链分析", "市场趋势", "技术路线图", "竞争分析"],
      link: "/industry-analysis"
    },
    {
      id: 2,
      title: "集成电路材料与工艺设计",
      description: "基于AI的材料设计和工艺优化平台，加速新材料研发和工艺参数优化",
      icon: Cpu,
      color: "from-emerald-500 to-teal-600",
      features: ["材料设计", "工艺优化", "性能预测", "参数调优"],
      link: "/design-optimization"
    },
    {
      id: 3,
      title: "集成电路材料逆向分析",
      description: "通过先进的分析技术对现有材料进行逆向工程，解析材料结构和工艺参数",
      icon: Search,
      color: "from-violet-500 to-purple-600",
      features: ["成分分析", "结构解析", "工艺反推", "性能评估"],
      link: "/reverse-analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            {/* Logo with glow effect */}
            <div className="mb-8">
              <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                IC<span className="text-emerald-400">Mat</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              新一代集成电路材料智能设计平台 | 基于大语言模型驱动的材料研发与分析解决方案
            </p>

            {/* Main Dialog Entry */}
            <div className="mb-16">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageSquare className="mr-3 h-6 w-6" />
                    集成电路材料语言模型
                    <Sparkles className="ml-3 h-6 w-6 animate-pulse" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl bg-gray-900 border-gray-700 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      集成电路材料智能助手
                    </DialogTitle>
                  </DialogHeader>
                  <div className="py-6">
                    <div className="bg-gray-800 rounded-lg p-6 mb-4">
                      <p className="text-gray-300 mb-4">
                        欢迎使用ICMat智能助手！我可以帮助您：
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Zap className="h-4 w-4 text-cyan-400" />
                          <span className="text-sm">材料性能分析</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Database className="h-4 w-4 text-emerald-400" />
                          <span className="text-sm">工艺参数优化</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Search className="h-4 w-4 text-purple-400" />
                          <span className="text-sm">文献资料检索</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="h-4 w-4 text-blue-400" />
                          <span className="text-sm">趋势预测分析</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <Link to="/agent" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                          开始对话
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        查看示例
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex justify-center space-x-6">
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                产品演示
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                技术文档
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            核心产品矩阵
          </h2>
          <p className="text-xl text-gray-400">
            三大核心产品模块，覆盖集成电路材料研发全链条
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <CardHeader className="relative">
                <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-medium text-gray-300 text-sm">核心功能：</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={product.link}>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:text-white hover:border-gray-500 transition-all group-hover:shadow-lg"
                  >
                    进入模块
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 bg-gray-900/30 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              平台技术优势
            </h2>
            <p className="text-xl text-gray-400">
              基于前沿AI技术的集成电路材料研发平台
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "大语言模型", desc: "先进的材料领域专用模型", icon: "🤖", color: "from-cyan-400 to-blue-500" },
              { title: "全链条覆盖", desc: "从设计到分析完整流程", icon: "🔗", color: "from-emerald-400 to-teal-500" },
              { title: "精准预测", desc: "高精度材料性能预测", icon: "🎯", color: "from-purple-400 to-violet-500" },
              { title: "智能协作", desc: "多团队协同研发平台", icon: "👥", color: "from-orange-400 to-red-500" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-100 mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-sm py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            开启智能材料研发新时代
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            立即体验基于大语言模型的集成电路材料设计与分析平台
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/agent">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-10 py-4 text-lg shadow-2xl shadow-cyan-500/25">
                立即开始
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-gray-400 text-gray-300 hover:bg-white/10 px-10 py-4 text-lg">
              了解更多
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
