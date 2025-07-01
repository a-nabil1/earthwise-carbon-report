
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-emerald-200">
            <Leaf className="h-5 w-5 text-emerald-600" />
            <span className="text-emerald-800 font-medium">Carbon Reporting Platform</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Simplify Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
            Carbon Reporting
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Generate comprehensive sustainability reports that meet compliance standards. 
          Track, measure, and report your carbon emissions with confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg rounded-full">
            <BarChart3 className="mr-2 h-5 w-5" />
            View Demo
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-3xl font-bold text-emerald-600 mb-2">99%</div>
            <div className="text-gray-700">Accuracy Rate</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-700">Compliance Standards</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-700">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
