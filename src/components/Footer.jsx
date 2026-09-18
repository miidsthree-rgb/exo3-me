import React from 'react';
import { Heart, Sparkles, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              🎓
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-base">
                Collège Mastery
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                La plateforme complète d'exercices 3ème & révisions Brevet du collège.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <span>🧮 Mathématiques</span>
            <span>•</span>
            <span>📖 Français</span>
            <span>•</span>
            <span>🌍 Histoire-Géo & EMC</span>
            <span>•</span>
            <span>🔬 SVT</span>
            <span>•</span>
            <span>⚡ Physique-Chimie</span>
            <span>•</span>
            <span>🇬🇧 Anglais</span>
            <span>•</span>
            <span>🇪🇸 Espagnol</span>
            <span>•</span>
            <span>💻 Technologie</span>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-2">
          <p>© 2026 Collège Mastery. Conçu pour la réussite au Diplôme National du Brevet (DNB) et toutes les classes du Collège (6e, 5e, 4e, 3e).</p>
          <span className="font-medium text-amber-500 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
            by titi ✨
          </span>
        </div>
      </div>
    </footer>
  );
}
