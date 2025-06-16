
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Cpu, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const products = [
    {
      id: 1,
      title: "集成电路材料产业全景分析",
      description: "全面分析集成电路材料产业链，提供市场趋势、技术发展和竞争格局的深度洞察",
      icon: BarChart3,
      color: "bg-blue-500",
      features: ["产业链分析", "市场趋势", "技术路线图", "竞争分析"],
      link: "/industry-analysis"
    },
    {
      id: 2,
      title: "集成电路材料与工艺设计",
      description: "基于AI的材料设计和工艺优化平台，加速新材料研发和工艺参数优化",
      icon: Cpu,
      color: "bg-green-500",
      features: ["材料设计", "工艺优化", "性能预测", "参数调优"],
      link: "/design-optimization"
    },
    {
      id: 3,
      title: "集成电路材料逆向分析",
      description: "通过先进的分析技术对现有材料进行逆向工程，解析材料结构和工艺参数",
      icon: Search,
      color: "bg-purple-500",
      features: ["成分分析", "结构解析", "工艺反推", "性能评估"],
      link: "/reverse-analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              IC<span className="text-blue-600">Mat</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              集成电路材料智能设计平台 - 基于AI驱动的材料研发与分析解决方案
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                开始探索
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                了解更多
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 opacity-10">
          <div className="w-96 h-96 rounded-full bg-blue-600"></div>
        </div>
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 opacity-10">
          <div className="w-64 h-64 rounded-full bg-purple-600"></div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">核心产品</h2>
          <p className="text-lg text-gray-600">
            三大核心产品模块，覆盖集成电路材料研发全链条
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <CardHeader className="relative">
                <div className={`w-16 h-16 ${product.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-medium text-gray-900 text-sm">核心功能：</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={product.link}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                  >
                    进入模块
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">平台优势</h2>
            <p className="text-lg text-gray-600">
              AI驱动的集成电路材料研发平台
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "AI驱动", desc: "先进的机器学习算法", icon: "🤖" },
              { title: "全链条覆盖", desc: "从设计到分析完整流程", icon: "🔗" },
              { title: "精准预测", desc: "高精度材料性能预测", icon: "🎯" },
              { title: "高效协作", desc: "多团队协同研发平台", icon: "👥" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            开启智能材料研发之旅
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            立即体验AI驱动的集成电路材料设计与分析平台
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              免费试用
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              联系我们
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
