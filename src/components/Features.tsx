
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, FileCheck, Globe, Shield, Zap, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Automated Data Collection",
      description: "Connect your existing systems to automatically gather emissions data across all scopes.",
      color: "text-emerald-600"
    },
    {
      icon: FileCheck,
      title: "Compliance Ready Reports",
      description: "Generate reports that meet GRI, CDP, TCFD, and other international standards.",
      color: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Support for emission factors and methodologies from around the world.",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with SOC 2 compliance and end-to-end encryption.",
      color: "text-teal-600"
    },
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Track your progress with live dashboards and actionable sustainability insights.",
      color: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Goal Tracking",
      description: "Set and monitor your net-zero targets with science-based goal alignment.",
      color: "text-cyan-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Carbon Reporting
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform handles every aspect of carbon reporting, 
            from data collection to final report generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 hover:scale-105">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
