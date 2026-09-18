import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CahierExerciseRunner from './components/CahierExerciseRunner';
import Footer from './components/Footer';
import { BookOpen, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('college_dark_mode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('college_dark_mode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Navbar Minimaliste */}
      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Conteneur Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Banner d'accueil */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 text-white p-8 sm:p-12 shadow-2xl border border-blue-500/30">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-bold text-blue-200">
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Exercices de Collège 3ème (Collection Officielle Brevet)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Exercices structurés pour vos <span className="bg-gradient-to-r from-blue-300 via-amber-200 to-purple-300 bg-clip-text text-transparent">Révisions Brevet</span> !
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Retrouvez 200 exercices complets et 2000 questions regroupées (1, 2, 3, 4, 5, 6, 7, 8, 9, 10) à rédiger sur votre cahier avec les <strong>corrections officielles</strong>.
            </p>
          </div>
        </div>

        {/* Vue des Exercices avec questions collées et Mode Plein Écran */}
        <div>
          <CahierExerciseRunner 
            selectedSubject={selectedSubject}
          />
        </div>

      </main>

      {/* Footer */}
      <Footer />

      {/* Credit fixe en bas à droite */}
      <div className="fixed bottom-3 right-3 z-50 pointer-events-auto">
        <div className="bg-slate-900/90 dark:bg-slate-800/90 text-amber-400 backdrop-blur-md text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-amber-500/30 flex items-center gap-1.5 hover:scale-105 transition-transform cursor-default">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>by titi</span>
        </div>
      </div>

    </div>
  );
}
