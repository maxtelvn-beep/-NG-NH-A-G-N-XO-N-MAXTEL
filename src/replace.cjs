const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const targetFilters = `<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {[
              { id: 'hdpe-lon', name: 'Đường Kính Lớn (Phi 100-200)' },
              { id: 'hdpe-vua', name: 'Đường Kính Vừa (Phi 50-80)' },
              { id: 'hdpe-nho', name: 'Đường Kính Nhỏ (Phi 25-40)' },
              { id: 'phu-kien', name: 'Phụ Kiện Đi Kèm' },
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={\`px-5 py-3 sm:py-2.5 rounded-full text-sm font-semibold transition-all min-h-[44px] \${
                  activeFilter === filter.id 
                    ? 'bg-brand-600 text-white shadow-[0_0_10px_rgba(37,166,223,0.2)] shadow-brand-500/20 scale-105' 
                    : 'bg-[#0f172a] text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:bg-slate-800 border border-brand-500/30'
                }\`}
              >
                {filter.name}
              </button>
            ))}
          </div>`;

const replaceFilters = `<div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 pb-2 sm:pb-0">
            {[
              { id: 'hdpe-lon', name: 'Đường Kính Lớn (Phi 100-200)' },
              { id: 'hdpe-vua', name: 'Đường Kính Vừa (Phi 50-80)' },
              { id: 'hdpe-nho', name: 'Đường Kính Nhỏ (Phi 25-40)' },
              { id: 'phu-kien', name: 'Phụ Kiện Đi Kèm' },
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={\`flex-shrink-0 whitespace-nowrap px-5 py-3 sm:py-2.5 rounded-full text-sm font-semibold transition-all min-h-[44px] \${
                  activeFilter === filter.id 
                    ? 'bg-brand-600 text-white shadow-[0_0_10px_rgba(37,166,223,0.2)] shadow-brand-500/20 scale-105' 
                    : 'bg-[#0f172a] text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:bg-slate-800 border border-brand-500/30'
                }\`}
              >
                {filter.name}
              </button>
            ))}
          </div>`;

content = content.replace(targetFilters, replaceFilters);

const targetGrid = `<motion.div layout className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 pb-8">
            <AnimatePresence>
              {filteredProducts.map((prod) => (
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
                  <div className="aspect-square relative overflow-hidden bg-white rounded-t-2xl flex items-center justify-center">
                    <img src={prod.img} loading="lazy" decoding="async" alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-3 left-3 flex gap-2">
                       <span className="bg-[#0f172a]/90 text-white text-xs font-bold px-2 py-1.5 rounded-lg border border-brand-500 shadow-sm">{prod.cap}</span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-5 flex-1 flex flex-col border-t border-brand-500/10 justify-between">
                    <div>
                      <h3 className="text-[11px] sm:text-lg font-bold text-white mb-1 sm:mb-2 line-clamp-3 sm:line-clamp-2 group-hover:text-brand-500 transition-colors uppercase leading-snug">{prod.title}</h3>
                      <div className="hidden sm:block">
                        <p className="text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">{prod.desc}</p>
                      </div>
                    </div>
                    
                    {/* Tags removed as requested */}

                    <div className="flex items-center justify-center pt-2 gap-2 border-t border-brand-500/20 mt-auto">
                      <button className="w-full text-brand-400 bg-brand-900/40 border border-brand-500/30 group-hover:bg-brand-600 group-hover:text-white group-hover:border-transparent px-2 sm:px-3 py-2 text-[10px] sm:text-sm font-bold rounded-lg transition-colors shadow-sm whitespace-nowrap">
                        TẢI BÁO GIÁ ĐẠI LÝ
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>`;

const replaceGrid = `<motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 pb-8">
            <AnimatePresence>
              {filteredProducts.map((prod) => (
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
          </motion.div>`;
          
content = content.replace(targetGrid, replaceGrid);
fs.writeFileSync('src/App.tsx', content);
