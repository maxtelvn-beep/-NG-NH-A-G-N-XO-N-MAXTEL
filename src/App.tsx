/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Zap, Server, Wrench, CheckCircle2, Phone, Mail, ChevronRight, Star, Clock, ArrowRight, Menu, X, Check, Box, CloudLightning, Layers, Award, Shield } from 'lucide-react';
import { NetworkBackground } from './components/NetworkBackground';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSpecFilter, setActiveSpecFilter] = useState('hdpe-lon');
  const [activeFeature, setActiveFeature] = useState(0);

    const specificationsData: Record<string, { param: string, value: string }[]> = {
    'hdpe-lon': [
      { param: "Đường kính trong (ID)", value: "Từ 100mm đến 200mm" },
      { param: "Đường kính ngoài (OD)", value: "Từ 130mm đến 260mm" },
      { param: "Chất liệu", value: "Nhựa HDPE (High-density polyethylene)" },
      { param: "Tiêu chuẩn hóa", value: "TCVN 7997:2009, ISO 9001:2015" },
      { param: "Màu sắc", value: "Cam, Đen (có đường kẻ sọc)" },
      { param: "Độ bền chịu nén", value: "≥ 5% độ biến dạng" },
      { param: "Ứng dụng", value: "Bảo vệ cáp ngầm điện lực, viễn thông trục chính" },
      { param: "Quy cách đóng gói", value: "Cuộn 50m, 100m" }
    ],
    'hdpe-vua': [
      { param: "Đường kính trong (ID)", value: "Từ 50mm đến 80mm" },
      { param: "Đường kính ngoài (OD)", value: "Từ 65mm đến 105mm" },
      { param: "Chất liệu", value: "Nhựa HDPE nguyên sinh" },
      { param: "Tiêu chuẩn hóa", value: "KSC 8455, TCVN 7997:2009" },
      { param: "Màu sắc", value: "Cam tiêu chuẩn" },
      { param: "Độ bền chịu nén", value: "Rất cao, chịu lực vỡ tốt" },
      { param: "Ứng dụng", value: "Luồn cáp viễn thông đô thị, chiếu sáng" },
      { param: "Quy cách", value: "Cuộn 100m, 200m, 300m" }
    ],
    'hdpe-nho': [
      { param: "Đường kính trong (ID)", value: "Từ 25mm đến 40mm" },
      { param: "Đường kính ngoài (OD)", value: "Từ 32mm đến 50mm" },
      { param: "Chất liệu", value: "Nhựa HDPE chống thấm nước" },
      { param: "Sức chịu kéo", value: "Tốt, linh hoạt đứt gãy" },
      { param: "Màu sắc", value: "Màu Da cam" },
      { param: "Ứng dụng", value: "Kết nối nhánh cáp mạng, camera, báo cháy" },
      { param: "Quy cách", value: "Cuộn 200m, 500m" }
    ],
    'phu-kien': [
      { param: "Loại phụ kiện", value: "Măng xông nối, đầu bịt, băng cảnh báo, dây mồi" },
      { param: "Chất liệu", value: "Nhựa PE / Cao su tổng hợp" },
      { param: "Thiết kế", value: "Bít kín hoàn toàn IP68" },
      { param: "Chức năng", value: "Ngăn chặn bùn đất, nước vào đường ống cáp" },
      { param: "Ứng dụng", value: "Đồng bộ thi công cùng ống gân xoắn" }
    ]
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

    const products = [
    // Lớn
    {
      id: 1,
      title: "Ống nhựa gân xoắn HDPE MAXTEL 200/260",
      category: "hdpe-lon",
      cap: "200mm",
      desc: "Ống gân xoắn đường kính cực lớn chuyên dùng cho tuyến cáp điện lực ngầm.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["200/260", "Điện lực"]
    },
    {
      id: 2,
      title: "Ống nhựa gân xoắn HDPE MAXTEL 175/230",
      category: "hdpe-lon",
      cap: "175mm",
      desc: "Ống HDPE trục chính dẫn nhiều loại cáp, chịu lực nén cực cao dưới lòng đường.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["175/230", "Chịu lực"]
    },
    {
      id: 3,
      title: "Ống nhựa gân xoắn HDPE MAXTEL 150/195",
      category: "hdpe-lon",
      cap: "150mm",
      desc: "Bảo vệ các hệ thống cáp hạ ngầm tiêu chuẩn cho các khu đô thị mới.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["150/195", "Khu đô thị"]
    },
    {
      id: 4,
      title: "Ống nhựa gân xoắn HDPE MAXTEL 125/160",
      category: "hdpe-lon",
      cap: "125mm",
      desc: "Ống HDPE đường kính 125/160mm cho cáp viễn thông và cáp điện chiếu sáng.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["125/160", "Chiếu sáng"]
    },
    {
      id: 5,
      title: "Ống nhựa gân xoắn HDPE MAXTEL 100/130",
      category: "hdpe-lon",
      cap: "100mm",
      desc: "Kích thước phổ biến nhất dùng cho dự án cáp ngầm, hè phố đô thị.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["100/130", "Phổ biến"]
    },

    // Vừa
    {
      id: 6,
      title: "Ống nhựa gân xoắn HDPE MAXTEL 80/105",
      category: "hdpe-vua",
      cap: "80mm",
      desc: "Ống luồn cáp quang và cáp thông tin, chịu ép nén múp gân đè lên.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["80/105", "Cáp quang"]
    },
    {
      id: 7,
      title: "Ống nhựa gân xoắn HDPE MAXTEL 65/85",
      category: "hdpe-vua",
      cap: "65mm",
      desc: "Dùng để rẽ nhánh hệ thống cáp nội khu, đường ống viễn thông toà nhà.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["65/85", "Nội khu"]
    },
    {
      id: 8,
      title: "Ống nhựa gân xoắn HDPE MAXTEL 50/65",
      category: "hdpe-vua",
      cap: "50mm",
      desc: "Sử dụng cho bảo vệ đường cáp ngoại vi nhỏ, dễ dàng uốn lượn khi thi công.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["50/65", "Linh hoạt"]
    },

    // Nhỏ
    {
      id: 9,
      title: "Ống nhựa gân xoắn HDPE MAXTEL 40/50",
      category: "hdpe-nho",
      cap: "40mm",
      desc: "Bảo vệ các hệ thống dây tín hiệu camera, thu phí, tín hiệu thông báo.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["40/50", "Camera"]
    },
    {
      id: 10,
      title: "Ống nhựa gân xoắn HDPE MAXTEL 30/40",
      category: "hdpe-nho",
      cap: "30mm",
      desc: "Luồn cáp điều khiển, cáp điện trở, chịu được môi trường axit và hoá chất.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["30/40", "Ngắn hạn"]
    },
    {
      id: 11,
      title: "Ống nhựa gân xoắn HDPE MAXTEL 25/32",
      category: "hdpe-nho",
      cap: "25mm",
      desc: "Kích thước tiết diện nhỏ nhất, bọc cáp quang thuê bao đến tận nhà khách hàng.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["25/32", "Thuê bao"]
    },

    // Phụ kiện
    {
      id: 12,
      title: "Măng xông nối ống nhựa xoắn HDPE",
      category: "phu-kien",
      cap: "Khớp nối",
      desc: "Phụ kiện kết nối các đoạn ống tạo thành đường thẳng dẫn liên tục.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["Măng xông", "Nối"]
    },
    {
      id: 13,
      title: "Nút bịt ống xoắn HDPE đầu nắp",
      category: "phu-kien",
      cap: "Bảo vệ",
      desc: "Tránh động vật gặm nhấm, nước mưa xâm nhập hệ thống ống đi ngầm.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["Nút bịt", "An toàn"]
    },
    {
      id: 14,
      title: "Băng cảnh báo tuyến cáp ngầm",
      category: "phu-kien",
      cap: "Băng PE",
      desc: "Dải băng PE dán nền, chôn lấp cảnh báo nguy hiểm tuyến cáp ngầm.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/03/Ong-nhua-gan-xoan-HDPE-MAXTEL.jpg",
      tags: ["Băng cảnh báo", "Cảnh báo"]
    }
  ];

  const filteredProducts = activeFilter === 'all' ? products : products.filter(p => p.category === activeFilter);
  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-white scroll-smooth pb-20 sm:pb-0 relative">
      <NetworkBackground />
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f172a]  shadow-[0_0_10px_rgba(37,166,223,0.2)] py-3 md:py-4' : 'bg-[#0f172a]  md:bg-[#0f172a]   py-4 md:py-6 border-b border-brand-500/30 md:border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="https://maxtel.vn/wp-content/uploads/2024/06/cropped-Logo-MAXTEL-3000.png" alt="MAXTEL Logo" className="h-8 md:h-10 w-auto object-contain" />
            </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <a href="#features" className="text-sm font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:text-brand-500">Đặc tính</a>
            <a href="#products" className="text-sm font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:text-brand-500">Sản phẩm</a>
            <a href="#specifications" className="text-sm font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:text-brand-500">Thông số</a>
            <a href="#contact-section" className="text-sm font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:text-brand-500">Báo giá</a>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={scrollToContact}
              className="bg-accent-600 hover:bg-accent-500 text-white shadow-[0_0_20px_rgba(195,28,36,0.6)] border border-accent-400/50 px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-[0_4px_14px_0_rgba(249,115,22,0.39)]"
            >
              Nhận Báo Giá Ngay
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            aria-label="Toggle menu"
            className="md:hidden p-3 text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-[#0f172a]  border-b border-brand-500/30 absolute w-full"
            >
              <div className="px-4 py-4 flex flex-col space-y-2">
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 text-base font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:bg-slate-800 rounded-lg transition-colors">Đặc tính</a>
                <a href="#products" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 text-base font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:bg-slate-800 rounded-lg transition-colors">Sản phẩm</a>
                <a href="#specifications" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 text-base font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:bg-slate-800 rounded-lg transition-colors">Thông số kỹ thuật</a>
                <button 
                  onClick={() => { setMobileMenuOpen(false); scrollToContact(); }}
                  className="w-full mt-4 bg-brand-600 text-white hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/20 px-4 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-5 h-5" /> Liên hệ tư vấn
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
          <div className="w-96 h-96 bg-brand-800/40 rounded-full blur-2xl md:blur-3xl opacity-30 md:opacity-50"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
          <div className="w-96 h-96 bg-accent-500/10 rounded-full blur-2xl md:blur-3xl opacity-30 md:opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left bg-[#020617]/60 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-[2rem] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-brand-900/40 border border-brand-100 text-brand-500 font-medium text-[10px] sm:text-sm mb-6">
                <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent-500 animate-glow-red"></span>
                Ống Nhựa Gân Xoắn Tiêu Chuẩn Cao Cấp
              </div>
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[1.75rem] xl:text-4xl 2xl:text-5xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight mb-4 lg:mb-6 uppercase">
                <span className="block mb-2 xl:mb-4 text-gradient hover:animate-glow-red transition-all duration-300 cursor-default">
                  ỐNG NHỰA GÂN XOẮN HDPE <br /> MAXTEL
                </span>
              </h1>
              <p className="text-base sm:text-lg text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
                Lựa chọn ống nhựa gân xoắn HDPE số 1 của các công trình viễn thông, mạng nội bộ và Data Center. Lõi cáp nguyên chất, đầu bấm đúc sẵn độ suy hao siêu thấp, tín hiệu truyền tải tốc độ cao và bền bỉ theo thời gian.
              </p>
              
              {/* Mobile Image (Placed under text) */}
              <div className="block lg:hidden mb-8 w-full max-w-[260px] sm:max-w-md mx-auto">
                <div className="rounded-3xl p-1.5 sm:p-2 bg-gradient-to-tr from-brand-100 to-white shadow-2xl relative">
                  <div className="absolute top-4 right-4 bg-[#0f172a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-accent-600 text-xs sm:text-sm shadow-sm z-20 flex items-center gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current pt-0.5" /> 4.9/5 Excellent Quality
                  </div>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-inner aspect-square sm:aspect-auto sm:h-[350px] relative flex md:flex-col items-center justify-center border border-brand-500/40">
                    <img 
                      src="https://maxtel.vn/wp-content/uploads/2026/05/ONG-NHUA-GAN-XOAN.png" 
                      fetchPriority="high" 
                      loading="eager" 
                      alt="Banner Ống Nhựa Gân Xoắn HDPE Maxtel" 
                      className="absolute inset-0 w-full h-full object-cover cursor-pointer transition-transform duration-700 hover:scale-105" 
                      onClick={() => setSelectedImage("https://maxtel.vn/wp-content/uploads/2026/05/ONG-NHUA-GAN-XOAN.png")}
                    />
                    <div className="absolute inset-0 bg-brand-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                      <span className="text-white font-medium text-sm border border-white/30 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm">Phóng to ảnh mẫu</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 px-4 sm:px-0">
                <button 
                  onClick={scrollToContact}
                  className="w-full sm:w-auto whitespace-nowrap bg-brand-600 hover:bg-blue-600 text-white px-2 py-4 sm:px-6 lg:px-8 lg:py-4 rounded-xl sm:rounded-full font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,166,223,0.4)] shadow-brand-500/20"
                >
                  Nhận Tư Vấn & Báo Giá <ArrowRight className="w-5 h-5 shrink-0" />
                </button>
                <a 
                  href="#products"
                  className="w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2 px-6 py-4 lg:px-8 lg:py-4 rounded-xl sm:rounded-full font-bold text-base sm:text-lg transition-all bg-brand-600 hover:bg-blue-600 text-white border border-brand-500/50 shadow-[0_0_20px_rgba(37,166,223,0.4)] shadow-brand-500/20"
                >
                  Xem Bảng Giá / SP
                </a>
              </div>
              
              <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 text-sm text-brand-50">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-brand-800/40 border-2 border-white flex items-center justify-center shadow-sm text-white font-bold text-xs" style={{backgroundImage: 'url(https://i.pravatar.cc/100?img='+(i+10)+')', backgroundSize: 'cover'}} />
                  ))}
                </div>
                <p>Hơn <strong>2,500+</strong> nhà thầu viễn thông tin dùng ống HDPE Maxtel</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-10 hidden lg:block"
            >
              <div className="rounded-3xl p-1.5 sm:p-2 bg-gradient-to-tr from-brand-100 to-white shadow-2xl relative">
                <div className="absolute top-4 right-4 bg-[#0f172a]  px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-accent-600 text-xs sm:text-sm shadow-sm z-20 flex items-center gap-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current pt-0.5" /> 4.9/5 Excellent Quality
                </div>
                {/* Product Image */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-inner aspect-[4/3] sm:aspect-auto sm:h-[450px] relative flex md:flex-col items-center justify-center border border-brand-500/40">
                  <img 
                    src="https://maxtel.vn/wp-content/uploads/2026/05/ONG-NHUA-GAN-XOAN.png" 
                    fetchPriority="high" 
                    loading="eager" 
                    alt="Banner Ống Nhựa Gân Xoắn HDPE Maxtel" 
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer transition-transform duration-700 hover:scale-105" 
                    onClick={() => setSelectedImage("https://maxtel.vn/wp-content/uploads/2026/05/ONG-NHUA-GAN-XOAN.png")}
                  />
                  
                  {/* Overlay for zoom hint */}
                  <div className="absolute inset-0 bg-brand-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                    <span className="text-white font-medium text-sm border border-white/30 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm">Phóng to ảnh mẫu ống nhựa gân xoắn HDPE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section id="products" className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase"><span className="animate-pulse">Danh Mục Các Dòng Ống Nhựa Gân Xoắn HDPE Maxtel</span></h2>
            <p className="inline-block mt-2 text-xl sm:text-2xl md:text-4xl leading-tight font-extrabold tracking-tight text-accent-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-full bg-[#0f172a]/90 backdrop-blur-md px-4 sm:px-6 py-3 rounded-2xl shadow-[0_0_20px_rgba(37,166,223,0.2)] border border-brand-500/30">
              Đầy đủ kích thước - Chuẩn xác dự án
            </p>
            <p className="mt-4 text-lg text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">Cung cấp đầy đủ chủng loại ống nhựa gân xoắn HDPE nội bộ, ngoài trời, singlemode và multimode với đầu nối tuỳ chọn theo dự án.</p>
          </div>

          <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 pb-2 sm:pb-0">
            {[
              { id: 'all', name: 'Tất Cả Sản Phẩm' },
              { id: 'hdpe-lon', name: 'Đường Kính Lớn (Phi 100-200)' },
              { id: 'hdpe-vua', name: 'Đường Kính Vừa (Phi 50-80)' },
              { id: 'hdpe-nho', name: 'Đường Kính Nhỏ (Phi 25-40)' },
              { id: 'phu-kien', name: 'Phụ Kiện Đi Kèm' },
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`flex-shrink-0 whitespace-nowrap px-5 py-3 sm:py-2.5 rounded-full text-sm font-semibold transition-all min-h-[44px] ${
                  activeFilter === filter.id 
                    ? 'bg-brand-600 text-white shadow-[0_0_10px_rgba(37,166,223,0.2)] shadow-brand-500/20 scale-105' 
                    : 'bg-[#0f172a] text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:bg-slate-800 border border-brand-500/30'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 pb-8">
            <AnimatePresence>
              {currentProducts.map((prod) => (
                <motion.div 
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(37,166,223,0.15)] border border-brand-500/30 flex flex-col group cursor-pointer"
                  onClick={scrollToContact}
                >
                  <div className="aspect-square relative overflow-hidden bg-white rounded-t-2xl p-4 flex items-center justify-center">
                    <img src={prod.img} loading="lazy" decoding="async" alt={prod.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-2" />
                    <div className="absolute bottom-3 left-3 flex gap-2">
                       <span className="bg-[#0f172a]/90 text-white text-xs font-bold px-2 py-1.5 rounded-lg border border-brand-500 shadow-sm">{prod.cap}</span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-5 flex-1 flex flex-col border-t border-brand-500/10">
                    <h3 className="text-xs sm:text-lg font-bold text-white mb-1.5 sm:mb-2 line-clamp-3 sm:line-clamp-2 group-hover:text-brand-500 transition-colors uppercase leading-snug">{prod.title}</h3>
                    <p className="hidden sm:block text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">{prod.desc}</p>
                    
                    <div className="flex items-center justify-center pt-3 sm:pt-4 gap-2 border-t border-brand-500/20 mt-auto">
                      <button className="w-full text-brand-400 bg-brand-900/40 border border-brand-500/30 group-hover:bg-brand-600 group-hover:text-white group-hover:border-transparent px-2 sm:px-3 py-2 sm:py-2.5 text-[10px] sm:text-sm font-bold rounded-lg transition-colors shadow-sm whitespace-nowrap">
                        TẢI BÁO GIÁ ĐẠI LÝ
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-4">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    currentPage === idx + 1
                      ? 'bg-brand-600 text-white shadow-[0_0_10px_rgba(37,166,223,0.3)]'
                      : 'bg-[#0f172a] text-slate-300 hover:bg-slate-800 border border-brand-500/30'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12 sm:mt-16 pt-8 border-t border-brand-500/30">
            <button onClick={scrollToContact} className="w-full sm:w-auto bg-accent-600 hover:bg-accent-500 text-white shadow-[0_0_20px_rgba(195,28,36,0.6)] border border-accent-400/50 font-bold px-8 py-3.5 rounded-xl sm:rounded-full inline-flex items-center justify-center gap-2 text-base transition-colors">
               Xem toàn bộ Catalogue Profile Maxtel <ChevronRight className="w-5 h-5"/>
            </button>
          </div>
        </div>
      </section>

      {/* Brands / Social Proof */}
      <section className="py-8 md:py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-brand-50 uppercase tracking-wider mb-6 md:mb-8">Maxtel vinh dự là nhà cung cấp vật tư thiết bị điện/viễn thông cho các công trình trọng điểm của:</p>
          
          <div className="relative flex overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex animate-marquee whitespace-nowrap min-w-max">
              {[
                { name: 'Viettel', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23EF4444%22%3EViettel%3C/text%3E%3C/svg%3E', theme: 'border-red-500/30 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]' },
                { name: 'VNPT', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%233B82F6%22%3EVNPT%3C/text%3E%3C/svg%3E', theme: 'border-blue-400/30 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]' },
                { name: 'FPT Telecom', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2224%22 font-weight=%22bold%22 fill=%22%23F97316%22%3EFPT Telecom%3C/text%3E%3C/svg%3E', theme: 'border-orange-500/30 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]' },
                { name: 'Mobifone', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%2322D3EE%22%3EMobifone%3C/text%3E%3C/svg%3E', theme: 'border-cyan-400/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]' },
                { name: 'CMC', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23818CF8%22%3ECMC%3C/text%3E%3C/svg%3E', theme: 'border-indigo-400/30 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(129,140,248,0.4)]' },
                { name: 'VinaPhone', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%233B82F6%22%3EVinaPhone%3C/text%3E%3C/svg%3E', theme: 'border-blue-500/30 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]' },
                { name: 'Samsung', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%232563EB%22%3ESAMSUNG%3C/text%3E%3C/svg%3E', theme: 'border-blue-600/30 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]' },
                { name: 'Vingroup', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23EAB308%22%3EVINGROUP%3C/text%3E%3C/svg%3E', theme: 'border-yellow-600/30 hover:border-yellow-600 hover:shadow-[0_0_15px_rgba(202,138,4,0.4)]' },
                // Duplicate items for infinite scroll
                { name: 'Viettel', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23EF4444%22%3EViettel%3C/text%3E%3C/svg%3E', theme: 'border-red-500/30 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]' },
                { name: 'VNPT', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%233B82F6%22%3EVNPT%3C/text%3E%3C/svg%3E', theme: 'border-blue-400/30 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]' },
                { name: 'FPT Telecom', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2224%22 font-weight=%22bold%22 fill=%22%23F97316%22%3EFPT Telecom%3C/text%3E%3C/svg%3E', theme: 'border-orange-500/30 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]' },
                { name: 'Mobifone', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%2322D3EE%22%3EMobifone%3C/text%3E%3C/svg%3E', theme: 'border-cyan-400/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]' },
                { name: 'CMC', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23818CF8%22%3ECMC%3C/text%3E%3C/svg%3E', theme: 'border-indigo-400/30 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(129,140,248,0.4)]' },
                { name: 'VinaPhone', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%233B82F6%22%3EVinaPhone%3C/text%3E%3C/svg%3E', theme: 'border-blue-500/30 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]' },
                { name: 'Samsung', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%232563EB%22%3ESAMSUNG%3C/text%3E%3C/svg%3E', theme: 'border-blue-600/30 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]' },
                { name: 'Vingroup', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23EAB308%22%3EVINGROUP%3C/text%3E%3C/svg%3E', theme: 'border-yellow-600/30 hover:border-yellow-600 hover:shadow-[0_0_15px_rgba(202,138,4,0.4)]' },
              ].map((partner, idx) => (
                <div key={idx} className={`mx-3 px-4 py-2 sm:px-6 sm:py-3 rounded-xl border transition-all duration-300 bg-white/95 hover:bg-white flex items-center justify-center w-[120px] sm:w-[180px] h-[60px] sm:h-[80px] cursor-default inline-flex ${partner.theme}`}>
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain transition-transform hover:scale-105 filter drop-shadow-sm p-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Outline */}
      <section id="features" className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 overflow-hidden">
            <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Cấu Trúc Ống Gân Xoắn Tối Ưu Nhất</h2>
            <p className="inline-block mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug sm:leading-tight font-extrabold tracking-tight text-accent-500 bg-[#0f172a]/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_0_20px_rgba(37,166,223,0.2)] border border-brand-500/30 text-center">
              VÌ SAO ỐNG NHỰA GÂN XOẮN HDPE MAXTEL LẠI ĐƯỢC CHỨNG NHẬN ISO?
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Sidebar / Tabs */}
            <div 
              className="hidden md:flex flex-col gap-2 sm:gap-3 md:w-64 lg:w-80 pb-4 md:pb-0 flex-shrink-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { 
                  icon: Shield, 
                  title: "Nhựa HDPE Nguyên Sinh", 
                  desc: "Sử dụng nhựa HDPE đúc nguyên khối chống ăn mòn hóa học, không rỉ sét, bảo vệ cáp ngầm với tuổi thọ sử dụng lên đến 50 năm." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "Cấu Trúc Gân Xoắn Linh Hoạt", 
                  desc: "Kiểu dáng gập lượn sóng cho phép cuộn cong, giảm tiết diện tiếp xúc để tản nhiệt, chống lún nền an toàn tuyệt đối cực cao." 
                },
                { 
                  icon: Zap, 
                  title: "Thao Tác Dễ Luồn Cáp", 
                  desc: "Giảm rủi ro ma sát khi kéo cáp tới 40% so với ống phẳng, đặc tính ít điểm đọng nước ngăn ngừa hỏa hoạn và đứt ngầm dây nội bộ." 
                }
              ].map((feat, idx, arr) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`px-5 py-3 md:py-4 md:px-6 rounded-xl text-sm transition-all text-left whitespace-nowrap md:whitespace-normal border flex flex-col gap-2 md:min-w-0 ${idx === arr.length - 1 ? 'md:mt-auto' : ''} ${
                    activeFeature === idx 
                      ? 'bg-brand-600/10 border-brand-500 shadow-[0_0_20px_rgba(37,166,223,0.15)] scale-[1.02]' 
                      : 'bg-[#0f172a] border-brand-500/20 hover:bg-slate-800 hover:border-brand-500/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${activeFeature === idx ? 'bg-brand-500/20' : 'bg-slate-800'}`}>
                      <feat.icon className={`w-5 h-5 flex-shrink-0 ${activeFeature === idx ? 'text-brand-400' : 'text-brand-500'}`} />
                    </div>
                    <span className={`font-bold text-base ${activeFeature === idx ? 'text-white' : 'text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]'}`}>{feat.title}</span>
                  </div>
                  <p className={`text-sm leading-relaxed hidden md:block mt-1 ${activeFeature === idx ? 'text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]' : 'text-slate-200'} `}>{feat.desc}</p>
                </button>
              ))}
            </div>

            {/* Feature Content Showcase */}
            <div className="md:flex-1 w-full relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80%] max-h-[80%] bg-brand-600/10 blur-[40px] md:blur-[80px] pointer-events-none rounded-full"></div>
              
               <div className="glass-panel relative rounded-2xl shadow-[0_0_30px_rgba(37,166,223,0.15)] overflow-hidden border border-brand-500/30 w-full aspect-[4/3] md:aspect-auto md:h-full z-10 bg-white group">
                 <AnimatePresence>
                   {[
                     {
                       title: "Nhựa HDPE Nguyên Sinh",
                       desc: "Nhựa HDPE nguyên sinh kháng hóa chất và kiềm. Độ bền bỉ vĩnh cửu theo thời gian.",
                       icon: Shield,
                       image: "https://maxtel.vn/wp-content/uploads/2026/05/ONG-NHUA-XOAN-HDPE.png"
                     },
                     {
                       title: "Cấu Trúc Gân Xoắn Linh Hoạt",
                        desc: "Thiết kế lượn sóng đa hướng, chống xẹp ống khi chịu tải trọng đất lớn hoặc bị xe cộ chèn ngang.",
                        icon: ShieldCheck,
                        image: "https://maxtel.vn/wp-content/uploads/2026/05/cau-truc-gan-xoan-linh-hoat.png"
                     },
                     {
                       title: "Thao Tác Dễ Luồn Cáp",
                       desc: "Dễ dàng kéo, xỏ, bảo trì cáp ngầm với hệ thống phụ kiện đa dạng tiêu chuẩn theo thông tư EVN.",
                       icon: Zap,
                       image: "https://maxtel.vn/wp-content/uploads/2026/05/thao-tac-de-luon-cap.png"
                     }
                   ].map((content, idx) => (
                     activeFeature === idx && (
                       <motion.div
                         key={idx}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 0.8, ease: "easeInOut" }}
                         className="cursor-pointer bg-white w-full h-full absolute inset-0 flex items-center justify-center"
                         onClick={() => setSelectedImage(content.image)}
                       >
                         {/* Image Background */}
                         <img src={content.image} loading="lazy" decoding="async" alt={content.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
                       </motion.div>
                     )
                   ))}
                 </AnimatePresence>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Backdrop */}
      <section id="certifications" className="py-12 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Uy tín & Đo Kiểm ISO</h2>
            <p className="mt-2 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl text-center">
              HỒ SƠ CHẤT LƯỢNG VÀ CHỨNG CHỈ DỰ ÁN
            </p>
            <p className="mt-4 text-lg text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
              Mọi sản phẩm ống HDPE Maxtel đều đạt kiểm định khắt khe của Vinacontrol, đầy đủ giấy tờ hợp quy, hợp chuẩn đo lường.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-2 sm:p-4 border border-brand-500/30 shadow-[0_0_30px_rgba(37,166,223,0.15)] max-w-5xl mx-auto relative group overflow-hidden">
             {/* Glow effect on hover */}
             <div className="absolute inset-0 bg-gradient-to-r from-brand-600/0 via-brand-500/10 to-brand-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full"></div>
             
             <div className="w-full bg-white rounded-xl sm:rounded-2xl border border-brand-500/20 overflow-hidden relative flex items-center justify-center group-hover:border-brand-500/40 transition-colors">
               <img src="https://maxtel.vn/wp-content/uploads/2026/05/giay-to111.jpg" loading="lazy" decoding="async" alt="ống HDPE Maxtel ISO Certification" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101 shadow-sm border border-slate-200" />
             </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Thông Số Kỹ Thuật ống nhựa gân xoắn HDPE</h2>
            <p className="inline-block mt-2 text-3xl leading-tight font-extrabold tracking-tight text-accent-500 bg-[#0f172a]/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-[0_0_20px_rgba(37,166,223,0.2)] border border-brand-500/30 sm:text-4xl">
              THÔNG SỐ KỸ THUẬT CHI TIẾT CÁC LOẠI
            </p>
            <p className="mt-4 text-lg text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">Bảng thông số kỹ thuật chuẩn EIA-310-D giúp kỹ sư dự toán mạng thiết kế dễ dàng.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Sidebar / Tabs */}
            <div 
              className="flex flex-row overflow-x-auto md:flex-col gap-2 sm:gap-3 md:w-56 lg:w-72 pb-4 md:pb-0 flex-shrink-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
               {[
                { id: 'hdpe-lon', name: 'Đường Kính Lớn', icon: Box },
                { id: 'hdpe-vua', name: 'Đường Kính Vừa', icon: Layers },
                { id: 'hdpe-nho', name: 'Đường Kính Nhỏ', icon: CloudLightning },
                { id: 'phu-kien', name: 'Phụ Kiện Nối', icon: Wrench },
              ].map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveSpecFilter(filter.id)}
                  className={`px-5 py-3.5 md:py-4 md:px-6 rounded-xl text-sm font-semibold transition-all text-left whitespace-nowrap md:whitespace-normal border flex items-center gap-3 relative min-h-[48px] ${
                    activeSpecFilter === filter.id 
                      ? 'bg-brand-600 text-white border-brand-400 shadow-[0_0_20px_rgba(37,166,223,0.3)] shadow-brand-500/20' 
                      : 'bg-[#0f172a] text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] border-brand-500/30 hover:bg-slate-800 hover:border-brand-500/60'
                  }`}
                >
                  <filter.icon className={`w-5 h-5 flex-shrink-0 ${activeSpecFilter === filter.id ? 'text-white' : 'text-brand-400'}`} />
                  <span className="flex-1">{filter.name}</span>
                  <ChevronRight className={`w-4 h-4 hidden md:block transition-transform duration-300 ${activeSpecFilter === filter.id ? 'opacity-100 transform translate-x-1' : 'opacity-0 -translate-x-2'}`} />
                </button>
              ))}
            </div>

            {/* Spec Table */}
            <div className="md:flex-1 w-full relative">
              {/* Optional background glow for table */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80%] max-h-[80%] bg-brand-600/10 blur-[40px] md:blur-[80px] pointer-events-none rounded-full"></div>
              
              <div className="glass-panel relative rounded-2xl shadow-[0_0_30px_rgba(37,166,223,0.15)] overflow-hidden border border-brand-500/30 w-full z-10 bg-[#0f172a] sm:bg-[#0f172a]/80 sm:backdrop-blur-md">
                 <div className="flex flex-col">
                   <div className="hidden md:grid md:grid-cols-5 bg-black/40 border-b border-brand-500/40">
                     <div className="py-4 px-6 text-sm font-bold text-white col-span-2 border-r border-brand-500/30">Hạng mục mô tả kỹ thuật</div>
                     <div className="py-4 px-6 text-sm font-bold text-brand-50 col-span-3">Nội dung kỹ thuật chi tiết</div>
                   </div>
                   <div className="max-h-[500px] overflow-y-auto">
                     <AnimatePresence mode="wait">
                       <motion.div
                          key={activeSpecFilter}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {specificationsData[activeSpecFilter].map((spec, index) => (
                            <div key={index} className="flex flex-col sm:grid sm:grid-cols-5 border-b last:border-b-0 border-brand-500/20 hover:bg-brand-900/20 transition-all duration-300 group">
                              <div className="pt-3 pb-1 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-brand-400 sm:text-brand-50 bg-brand-900/10 sm:bg-black/20 sm:border-r border-brand-500/20 col-span-2 sm:group-hover:text-brand-400 transition-colors flex items-center uppercase sm:normal-case">
                                {spec.param}
                              </div>
                              <div className="pb-3 pt-1 sm:py-4 px-4 sm:px-6 text-sm text-white sm:text-slate-100 col-span-3 leading-relaxed flex items-center font-medium sm:font-normal">
                                {spec.value}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Comparison Section */}
       <section id="comparison" className="py-12 md:py-24 relative overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 bg-brand-900/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-600/10 via-transparent to-transparent opacity-50"></div>
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
             <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Tiêu Chuẩn Dự Án</h2>
             <p className="mt-2 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl text-center">
               SO SÁNH ỐNG KÉM CHẤT LƯỢNG & ỐNG MAXTEL
             </p>
           </div>

           {/* Mobile Layout */}
           <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
             {[
                { 
                  feature: "Chất liệu nhựa bảo vệ", 
                  normal: "Nhựa tái chế cực giòn, dễ gãy vỡ, móp lún hoặc thoái hoá ở nhiệt độ ngoài trời.", 
                  maxtel: "Nhựa HDPE nguyên sinh, siêu dẻo dai, kháng hóa chất, độ bền lên đến 50 năm." 
                },
                { 
                  feature: "Khả năng chịu áp lực nén", 
                  normal: "Thành ống mỏng, khoảng gân nông nên dễ bị đứt gãy hoặc xẹp khi bị lu nền, xe cộ đi qua gây tắc cáp.", 
                  maxtel: "Gân lượn sóng chịu nén ưu việt 5%, chịu được tải trọng siêu lớn, bảo vệ lõi cáp ngầm không bị chèn ép đè lún." 
                },
                { 
                  feature: "Đặc tính thi công uốn cong", 
                  normal: "Khó bo cua qua các chướng ngại vật dưới lòng đất rễ cây, mỏm đá hoặc hố ga, dễ nứt kẹt.", 
                  maxtel: "Tính đàn hồi cao, dễ dàng uốn góc cong mềm mại tùy biến theo địa hình khắc nghiệt nhất." 
                },
                { 
                  feature: "Bề mặt tiếp xúc ống trong", 
                  normal: "Sần sùi, nhiều bavia nhựa nhọn làm xước và cứa đứt vỏ ngoài cáp tín hiệu khi kéo căng.", 
                  maxtel: "Bề mặt bên trong trơn nhẵn chuẩn mực, lực ma sát thấp giúp kéo cáp nhẹ nhàng, nhanh chóng." 
                },
                { 
                  feature: "Chứng từ pháp lý nghiệm thu", 
                  normal: "Các cơ sở gia công không đủ tiêu chuẩn đo lường TCVN, không có chứng chỉ xuất xưởng, chất lượng phập phù.", 
                  maxtel: "Có đầy đủ bản test theo TCVN 7997:2009, CO/CQ, bảng cam kết tiêu chuẩn chất lượng ISO 9001 chính hãng Maxtel." 
                }
              ].map((row, index) => (
              <div key={index} className="flex-shrink-0 w-[85vw] snap-center bg-[#0f172a] rounded-2xl border border-brand-500/20 overflow-hidden shadow-lg relative pb-1">
                <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-brand-500/50 to-accent-500/50 left-0"></div>
                <div className="bg-slate-800/80 p-3 border-b border-brand-500/30 text-center">
                  <h3 className="text-base font-bold text-white">{row.feature}</h3>
                </div>
                <div className="grid grid-cols-2 divide-x divide-brand-500/10">
                   <div className="p-4 flex flex-col items-center text-center gap-2 bg-slate-900/50">
                     <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Ống giá rẻ, gia công</span>
                     <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 opacity-60" />
                     <p className="text-slate-400 text-xs sm:text-sm">{row.normal}</p>
                   </div>
                   <div className="p-4 flex flex-col items-center text-center gap-2 bg-brand-900/20 relative">
                     <span className="text-[10px] sm:text-xs font-bold text-brand-400 uppercase tracking-wider">ỐNG MAXTEL (Chuẩn Dự Án)</span>
                     <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500 drop-shadow-[0_0_5px_rgba(195,28,36,0.8)]" />
                     <p className="text-white text-xs sm:text-sm font-medium">{row.maxtel}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block overflow-x-auto pb-4">
            <div className="min-w-[800px] w-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(37,166,223,0.15)] border border-brand-500/20">
              {/* Header */}
              <div className="grid grid-cols-12 bg-[#0f172a] border-b border-brand-500/30">
                <div className="col-span-4 p-5 sm:p-6 flex items-center">
                  <span className="text-lg font-bold text-slate-300">Đặc Điểm</span>
                </div>
                <div className="col-span-4 p-5 sm:p-6 flex items-center justify-center border-l bg-slate-900 border-brand-500/10">
                  <span className="text-lg font-medium text-slate-400">ống nhựa gân xoắn HDPE Giá Rẻ, Chất Tôn Kém</span>
                </div>
                <div className="col-span-4 p-5 sm:p-6 flex items-center justify-center border-l border-brand-500/30 bg-brand-900/40 relative">
                  <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-brand-500 to-accent-500 left-0"></div>
                  <span className="text-xl font-black text-brand-400 flex items-center gap-2 text-center">
                    <Award className="w-5 h-5 text-accent-500" /> ống nhựa gân xoắn HDPE MAXTEL VIP
                  </span>
                </div>
              </div>

              {/* Rows */}
              {[
                { 
                  feature: "Chất liệu nhựa bảo vệ", 
                  normal: "Nhựa tái chế cực giòn, dễ gãy vỡ, móp lún hoặc thoái hoá ở nhiệt độ ngoài trời.", 
                  maxtel: "Nhựa HDPE nguyên sinh, siêu dẻo dai, kháng hóa chất, độ bền lên đến 50 năm." 
                },
                { 
                  feature: "Khả năng chịu áp lực nén", 
                  normal: "Thành ống mỏng, khoảng gân nông nên dễ bị đứt gãy hoặc xẹp khi bị lu nền, xe cộ đi qua gây tắc cáp.", 
                  maxtel: "Gân lượn sóng chịu nén ưu việt 5%, chịu được tải trọng siêu lớn, bảo vệ lõi cáp ngầm không bị chèn ép đè lún." 
                },
                { 
                  feature: "Đặc tính thi công uốn cong", 
                  normal: "Khó bo cua qua các chướng ngại vật dưới lòng đất rễ cây, mỏm đá hoặc hố ga, dễ nứt kẹt.", 
                  maxtel: "Tính đàn hồi cao, dễ dàng uốn góc cong mềm mại tùy biến theo địa hình khắc nghiệt nhất." 
                },
                { 
                  feature: "Bề mặt tiếp xúc ống trong", 
                  normal: "Sần sùi, nhiều bavia nhựa nhọn làm xước và cứa đứt vỏ ngoài cáp tín hiệu khi kéo căng.", 
                  maxtel: "Bề mặt bên trong trơn nhẵn chuẩn mực, lực ma sát thấp giúp kéo cáp nhẹ nhàng, nhanh chóng." 
                },
                { 
                  feature: "Chứng từ pháp lý nghiệm thu", 
                  normal: "Các cơ sở gia công không đủ tiêu chuẩn đo lường TCVN, không có chứng chỉ xuất xưởng, chất lượng phập phù.", 
                  maxtel: "Có đầy đủ bản test theo TCVN 7997:2009, CO/CQ, bảng cam kết tiêu chuẩn chất lượng ISO 9001 chính hãng Maxtel." 
                }
              ].map((row, index) => (
                <div key={index} className={`grid grid-cols-12 border-b border-brand-500/10 last:border-b-0 hover:bg-slate-800/50 transition-colors ${index % 2 === 0 ? 'bg-[#020617]/50' : 'bg-[#0f172a]/50'}`}>
                  <div className="col-span-4 p-5 flex items-center">
                    <span className="text-base font-semibold text-white">{row.feature}</span>
                  </div>
                  <div className="col-span-4 p-5 flex items-center justify-center border-l bg-slate-900 border-brand-500/10">
                    <p className="text-slate-400 text-sm text-center flex flex-col items-center gap-2">
                       <X className="w-5 h-5 text-red-500 opacity-60" />
                       {row.normal}
                    </p>
                  </div>
                  <div className="col-span-4 p-5 flex items-center justify-center border-l border-brand-500/30 bg-brand-900/20">
                     <p className="text-white text-sm text-center flex flex-col items-center gap-2 font-medium">
                       <CheckCircle2 className="w-5 h-5 text-accent-500 drop-shadow-[0_0_5px_rgba(195,28,36,0.8)]" />
                       {row.maxtel}
                     </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Use Cases */}
      <section className="py-12 md:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a] opacity-30 bg-cover bg-center sm:mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Sự Hài Lòng Từ Thực Tế Phòng IT</h2>
            <p className="text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] text-lg">Hàng triệu doanh nghiệp đã nâng cấp hạ tầng viễn thông bằng ống HDPE Maxtel.</p>
          </div>
          
          <div className="flex animate-marquee hover:[animation-play-state:paused] gap-6 sm:gap-8 w-max">
            {[
              { 
                name: "Anh Hoàng Quân", 
                role: "IT Manager - VietBank", 
                img: "https://maxtel.vn/wp-content/uploads/2024/06/ong-nhua-xoan-hdpe-maxtel-e1720235948332.png",
                text: "Là ngân hàng nên chúng tôi đặc biệt yêu cầu khắt khe thiết bị phòng phòng Data Center. Ống HDPE Maxtel đáp ứng hoàn toàn mọi tiêu chuẩn khắt khe về độ suy hao tiếp xúc, truyền dẫn tín hiệu tốc độ cao cực kỳ ổn định." 
              },
              { 
                name: "Kỹ sư Huỳnh Sang", 
                role: "Chỉ Huy Phục Vụ Dự Án BĐS", 
                img: "https://maxtel.vn/wp-content/uploads/2024/06/ong-nhua-xoan-hdpe-maxtel-Singlemode-SCAPC-LCAPC-1.jpg",
                text: "Tôi thi công hàng ngàn mét ống nhựa gân xoắn HDPE và phụ kiện măng xông phân nhánh vào mạng lõi các tòa nhà The Pride. Mọi thứ từ bao bì đóng gói chống sốc cho đến chất lượng gia công đường ống của hãng Maxtel rất được chăm chút kỹ càng." 
              },
              { 
                name: "Chị Thu Hoa", 
                role: "Đại Lý Thiết Bị Viễn Thông", 
                img: "https://maxtel.vn/wp-content/uploads/2024/06/ong-nhua-xoan-hdpe-maxtel-Singlemode-SCUPC-SCAPC-5.jpg",
                text: "Cửa hàng tôi bây giờ chỉ phân phối ống nhựa gân xoắn HDPE hãng Maxtel vì cam kết bảo hành suy hao trọn đời, cung cấp đầy đủ giấy tờ CO, CQ cho dự án. Khách sỉ toàn mua số lượng lớn cực kỳ tin tưởng." 
              },
              { 
                name: "Anh Trần Cường", 
                role: "Chủ Đầu Tư - Khu Đô Thị", 
                img: "https://maxtel.vn/wp-content/uploads/2024/06/ong-nhua-xoan-hdpe-maxtel-e1720235948332.png",
                text: "Qua quá trình khảo sát nhiều đơn vị cung cấp ống HDPE, chúng tôi quyết định chọn Maxtel cho toàn bộ dự án 50 hecta này vì thông số kỹ thuật chịu nén rất tốt và đội ngũ hỗ trợ nhiệt tình, tiến độ giao hàng chuẩn xác." 
              },
              { 
                name: "Kỹ sư Lê Tài", 
                role: "Giám Sát Hạ Tầng Mạng", 
                img: "https://maxtel.vn/wp-content/uploads/2024/06/ong-nhua-xoan-hdpe-maxtel-Singlemode-SCAPC-LCAPC-1.jpg",
                text: "Ống nhựa Maxtel uốn cong rất linh hoạt, đặc biệt phần cuộn kéo dây cáp thi công tiết kiệm được đáng kể thời gian và nhân lực. Bề mặt nhẵn bóng bên trong nên khi kéo cáp giảm thiểu tối đa rủi ro đứt xước." 
              },
              { 
                name: "Anh Phát Đạt", 
                role: "Nhà Thầu Cơ Điện (M&E)", 
                img: "https://maxtel.vn/wp-content/uploads/2024/06/ong-nhua-xoan-hdpe-maxtel-Singlemode-SCUPC-SCAPC-5.jpg",
                text: "Đã và đang đồng hành cùng Maxtel nhiều năm, tôi hoàn toàn yên tâm về chất lượng ống cũng như phụ kiện đi kèm. Sự đồng bộ từ hãng giúp quá trình nghiệm thu dự án với chủ đầu tư diễn ra vô cùng suôn sẻ." 
              }
            ].map(t => [t, t]).flat().map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[85vw] sm:w-[400px] bg-[#0f172a]/80 backdrop-blur-sm p-8 rounded-3xl border border-brand-500/20 flex flex-col shadow-[0_0_20px_rgba(37,166,223,0.1)] hover:border-brand-500/40 transition-colors">
                <div className="flex text-yellow-400 mb-6 gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-200 text-base leading-relaxed mb-8 flex-1 italic relative">
                  <span className="text-4xl absolute -top-4 -left-2 text-brand-500/30 font-serif">"</span>
                  {t.text}
                  <span className="text-4xl absolute -bottom-6 right-0 text-brand-500/30 font-serif">"</span>
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700/50">
                  <img src={t.img} loading="lazy" decoding="async" alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-500 object-cover" />
                  <div>
                    <div className="font-bold text-lg text-white">{t.name}</div>
                    <div className="text-sm text-brand-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 sm:mt-20 py-4 overflow-hidden border-y border-brand-500/20">
            <div className="flex animate-marquee hover:[animation-play-state:paused] gap-4 w-max">
              {[
                "https://maxtel.vn/wp-content/uploads/2026/05/anh1.png",
                "https://maxtel.vn/wp-content/uploads/2026/05/anh2.png",
                "https://maxtel.vn/wp-content/uploads/2026/05/anh3.png",
                "https://maxtel.vn/wp-content/uploads/2026/05/anh4.png",
                "https://maxtel.vn/wp-content/uploads/2026/05/anh1.png",
                "https://maxtel.vn/wp-content/uploads/2026/05/anh2.png",
                "https://maxtel.vn/wp-content/uploads/2026/05/anh3.png",
                "https://maxtel.vn/wp-content/uploads/2026/05/anh4.png"
              ].map((img, i) => (
                 <div 
                   key={i} 
                   className="flex-shrink-0 w-[60vw] sm:w-[40vw] md:w-[300px] h-32 sm:h-48 rounded-xl overflow-hidden relative group cursor-pointer border border-brand-500/20 p-2 bg-white"
                   onClick={() => setSelectedImage(img)}
                 >
                   <img src={img} loading="lazy" decoding="async" alt="Hình ảnh ống nhựa gân xoắn HDPE chụp tại kho thật" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-brand-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="text-white font-medium text-sm border border-white/30 px-3 py-1 rounded-full bg-black/40 shadow-sm">Xem chi tiết Cáp</span>
                   </div>
                 </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Lead Generation Form) */}
      <section id="contact-section" className="py-12 md:py-24 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#0f172a]  rounded-3xl shadow-[0_0_20px_rgba(37,166,223,0.4)] overflow-hidden flex flex-col md:flex-row relative">
            <div className="hidden md:flex md:w-5/12 bg-slate-800/80 backdrop-blur-md p-8 sm:p-10 text-white flex-col justify-between border-r border-slate-700/50">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">BÁO GIÁ ĐẠI LÝ LÊN TỚI 40%!</h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6">Xin hãy để lại thông tin để chúng tôi liên hệ tư vấn dòng ống nhựa gân xoắn HDPE phù hợp và gởi bảng báo giá VIP cho doanh nghiệp.</p>
                <div className="flex items-center space-x-3 mb-4 text-xs sm:text-sm font-medium border-b border-slate-700/50 pb-3 sm:pb-4">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 flex-shrink-0" /> <span>Hỗ trợ cấp giấy tờ dự án trọn vẹn CO, CQ</span>
                </div>
                <div className="flex items-center space-x-3 mb-4 text-xs sm:text-sm font-medium border-b border-slate-700/50 pb-3 sm:pb-4">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 flex-shrink-0" /> <span>Giao hàng trực tiếp trên phạm vi Toàn Quốc</span>
                </div>
                <div className="flex items-center space-x-3 text-xs sm:text-sm font-medium border-b border-slate-700/50 pb-3 sm:pb-4 min-h-[14px]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 flex-shrink-0" /> <span>Chiết khấu cao nhất cho Đại lý, M&E</span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-700/50 p-2.5 sm:p-3 rounded-full border border-brand-500/30">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-400 [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] uppercase tracking-wider font-semibold">CSKH & BÁO GIÁ</p>
                    <p className="font-bold text-base sm:text-lg">0979.354.796</p>
                    <p className="font-bold text-base sm:text-lg">0973.497.685</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-7/12 p-6 sm:p-10">
              <h3 className="text-2xl font-bold text-white drop-shadow-md mb-6">Đăng Ký Khảo Sát Dự Án / Báo Giá</h3>
              {showModal ? (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Thông tin đã ghi nhận thành công!</h4>
                  <p className="text-brand-50">Chuyên viên dự án của Maxtel sẽ gọi lại tư vấn cấu hình tuyến ống và gửi báo giá trong 5 phút nữa.</p>
                  <button onClick={() => setShowModal(false)} className="mt-6 text-brand-500 font-semibold underline">Gửi yêu cầu hoặc nhu cầu thiết kế tuyến cáp ngầm bổ sung</button>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(true); }}>
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-brand-50 mb-1">Tên Anh/Chị *</label>
                    <input id="fullName" type="text" required className="w-full px-4 py-3 rounded-lg border border-brand-500/30 focus:ring-2 focus:ring-brand-500 outline-none transition bg-black/20 text-white placeholder:text-slate-500" placeholder="Ví dụ: Hoàng Văn Quân" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-50 mb-1">Số Zalo/Điện thoại để liên hệ *</label>
                    <input id="phone" type="tel" required className="w-full px-4 py-3 rounded-lg border border-brand-500/30 focus:ring-2 focus:ring-brand-500 outline-none transition bg-black/20 text-white placeholder:text-slate-500" placeholder="09xxxxxxxx" />
                  </div>
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-brand-50 mb-1">Yêu cầu cụ thể loại ống và số lượng</label>
                    <textarea id="details" rows={3} className="w-full px-4 py-3 rounded-lg border border-brand-500/30 focus:ring-2 focus:ring-brand-500 outline-none transition bg-black/20 text-white placeholder:text-slate-500 resize-none" placeholder="Nhập yêu cầu: Ví dụ: Ống nhựa gân xoắn HDPE MAXTEL 100/130 500m,..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-accent-600 hover:bg-accent-500 text-white shadow-[0_0_20px_rgba(195,28,36,0.6)] border border-accent-400/50 font-bold py-4 rounded-lg text-lg transition-transform transform hover:scale-[1.02] shadow-[0_0_15px_rgba(37,166,223,0.3)] shadow-accent-500/30 flex items-center justify-center gap-2 mt-4">
                    TẢI BẢNG BÁO GIÁ ZALO NGAY
                  </button>
                  <p className="text-xs text-center text-brand-50 mt-4 flex items-center justify-center gap-1"><Clock className="w-3 h-3"/> Cam kết bảo mật thông tin nội bộ của Đối tác</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] py-12 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img src="https://maxtel.vn/wp-content/uploads/2024/06/cropped-Logo-MAXTEL-3000.png" loading="lazy" decoding="async" alt="MAXTEL ống nhựa gân xoắn HDPE Logo" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex flex-col gap-2 mt-4 mb-4 text-brand-50">
              <p className="font-bold text-white">CÔNG TY CỔ PHẦN MAXTEL VIỆT NAM</p>
              <p>Mã Số Thuế: 2500681449</p>
            </div>
            <p className="mb-4 text-slate-300 leading-relaxed">Nhà sản xuất hàng đầu Việt Nam về thiết bị vỏ viễn thông: ống nhựa gân xoắn HDPE/Ống Nhựa Gân Xoắn HDPE, Hộp ODF bảo vệ các thiết bị trong Data Center, công trình Mạng viễn thông chuyên biệt.</p>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Phòng Kinh Doanh & Dự Án</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3"><div className="mt-1 bg-slate-800 p-1 rounded-md"><Phone className="w-4 h-4 text-brand-400"/></div> <span className="font-semibold text-white">0979.354.796 <br/> 0973.497.685</span></li>
              <li className="flex items-start gap-3"><div className="mt-1 bg-slate-800 p-1 rounded-md"><Mail className="w-4 h-4 text-brand-400"/></div> maxtel.vn@gmail.com</li>
              <li className="flex items-start gap-3 text-brand-50 leading-relaxed mt-4 pt-4 border-t border-brand-500/20">
                 <div className="mt-1 flex-shrink-0 text-brand-400 font-bold">&#8627;</div>
                 Trụ sở chính: Số 2, Ngõ 53 Phạm Tuấn Tài, Cầu Giấy, Hà Nội
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Cam kết dịch vụ & Chính Sách</h4>
            <ul className="space-y-4 md:space-y-3">
              <li><a href="#" className="inline-block py-1 hover:text-brand-400 text-slate-300 transition-colors">Bảo hành lỗi suy hao trọn đời</a></li>
              <li><a href="#" className="inline-block py-1 hover:text-brand-400 text-slate-300 transition-colors">Lộ trình và Cước phí Vận Chuyển</a></li>
              <li><a href="#" className="inline-block py-1 hover:text-brand-400 text-slate-300 transition-colors">Thiết kế ống nhựa gân xoắn HDPE theo quy mô tùy biến</a></li>
              <li><a href="#" className="inline-block py-1 hover:text-brand-400 text-slate-300 transition-colors">Đăng ký làm Đại lý toàn quốc</a></li>
            </ul>
          </div>
          <div className="md:col-span-1 rounded-xl overflow-hidden h-40 md:h-full min-h-[160px] border border-brand-500/20 shadow-md">
            <iframe 
              src="https://maps.google.com/maps?q=C%C3%94NG+TY+C%E1%BB%94+PH%E1%BA%A6N+MAXTEL+VI%E1%BB%86T+NAM&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nhà Máy ống HDPE Maxtel"
              className="w-full h-full object-cover filter brightness-90 contrast-125"
            ></iframe>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-brand-500/30 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} ống HDPE Maxtel. All rights reserved.</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white transition-colors">Điều khoản thi công</a>
             <a href="#" className="hover:text-white transition-colors">Xác thực chứng từ QC</a>
          </div>
        </div>
      </footer>

      {/* Floating Zalo Button with Contacts Popover */}
      <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 z-[60] flex flex-col items-end group">
        
        {/* Contact List Popover */}
        <div className="bg-white rounded-2xl shadow-xl border border-brand-500/20 mb-4 w-[320px] sm:w-[380px] p-4 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 origin-bottom-right">
          <div className="text-sm font-semibold text-slate-800 mb-3 pb-2 border-b border-slate-100">
            Chat Zalo hoặc gọi Hotline - Hỗ trợ 24/7
          </div>
          <div className="flex flex-col gap-2">
             {[
                { name: "Ms. Dung", phone: "0982 960 685" },
                { name: "Mr. Sơn", phone: "0973 497 685" },
                { name: "Ms. Hồng", phone: "096 191 9559" },
                { name: "Mr. Đức Sơn", phone: "096 165 3553" },
                { name: "Ms. Lan", phone: "098 939 5445" }
             ].map((contact, i) => (
                <a 
                  key={i}
                  href={`https://zalo.me/${contact.phone.replace(/\s+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0068FF] flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    Z
                  </div>
                  <div className="flex-1">
                    <span className="text-[#0068FF] font-semibold text-sm">Zalo {contact.name}</span>
                    <span className="text-accent-600 font-bold text-sm ml-1">- {contact.phone}</span>
                  </div>
                </a>
             ))}
          </div>
        </div>

        {/* Zalo Button Trigger */}
        <div 
          className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0068FF] rounded-full shadow-[0_0_20px_rgba(0,104,255,0.4)] hover:scale-110 hover:shadow-[0_0_25px_rgba(0,104,255,0.6)] cursor-pointer transition-all duration-300 flex items-center justify-center border-2 border-white relative animate-bounce hover:animate-none"
          aria-label="Liên hệ trực tiếp qua hộp chat Zalo"
        >
          <span className="font-extrabold text-white text-sm sm:text-lg mb-[1px] tracking-tight" style={{ fontFamily: 'sans-serif' }}>Zalo</span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-red-500 border-2 border-white"></span>
          </span>
        </div>
      </div>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0f172a] border-t border-brand-500/40 z-50 sm:hidden flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <a href="tel:0973497685" className="flex-1 bg-[#1a8cc0] hover:bg-[#25a6df] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-colors text-sm">
          <Phone className="w-4 h-4"/> GỌI NGAY
        </a>
        <button onClick={scrollToContact} className="flex-1 bg-[#e0323a] hover:bg-[#c31c24] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-colors text-sm">
          NHẬN BÁO GIÁ
        </button>
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Zoomed Product Display" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
