import React from 'react';
import { Heart, MessageCircle, TrendingUp, Shield, Brain, Users } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-8 h-8 text-pink-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          搭讪场景 Agent
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          AI驱动的社交智能助手，帮助你建立自信，提升社交技巧
        </p>
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
          开始体验
        </button>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="个性化搭讪策略"
            description="基于场景和个人特点，生成专属搭讪建议和话术模板"
          />
          <FeatureCard
            icon={MessageCircle}
            title="失败经历重构"
            description="AI分析失败案例，提供优化建议和补救方案"
          />
          <FeatureCard
            icon={TrendingUp}
            title="进度追踪"
            description="记录每日社交练习，可视化展示进步轨迹"
          />
          <FeatureCard
            icon={Shield}
            title="心理安全"
            description="通过科学方法减少社交焦虑，建立自信"
          />
          <FeatureCard
            icon={Users}
            title="场景模拟"
            description="在虚拟环境中练习各种社交场景"
          />
          <FeatureCard
            icon={Heart}
            title="1v1 指导"
            description="专业社交教练提供个性化指导"
          />
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">使用方式</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-8">
              {[
                { step: 1, title: '描述场景', desc: '输入目标类型、场景设定和个人优势' },
                { step: 2, title: '获取建议', desc: '接收AI生成的个性化搭讪策略和话术' },
                { step: 3, title: '实践练习', desc: '在现实场景中尝试推荐的方法' },
                { step: 4, title: '记录反馈', desc: '记录实践结果，获取改进建议' }
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">版权所有 © 2025 张益新</p>
          <p>联系方式：zyxcambridge@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;