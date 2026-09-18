import React from 'react';
import { Trophy, Award, Target, Flame, CheckCircle2, RotateCcw } from 'lucide-react';

export default function StatsDashboard({ scoreStats, onResetStats }) {
  const BADGES = [
    {
      id: 'b1',
      name: 'Premier Pas',
      description: 'Terminer au moins 1 quiz',
      icon: '🌱',
      unlocked: scoreStats.totalQuizzes >= 1
    },
    {
      id: 'b2',
      name: 'Apprenti Brevet',
      description: 'Obtenir 50 points de révision',
      icon: '⭐',
      unlocked: scoreStats.totalPoints >= 50
    },
    {
      id: 'b3',
      name: 'Expert du Collège',
      description: 'Avoir un taux de réussite > 75%',
      icon: '🏅',
      unlocked: scoreStats.totalQuestions > 0 && (scoreStats.correctAnswers / scoreStats.totalQuestions) >= 0.75
    },
    {
      id: 'b4',
      name: 'Major du Brevet',
      description: 'Obtenir 150 points et accomplir 5 séries',
      icon: '👑',
      unlocked: scoreStats.totalPoints >= 150 && scoreStats.totalQuizzes >= 5
    }
  ];

  const accuracy = scoreStats.totalQuestions > 0 
    ? Math.round((scoreStats.correctAnswers / scoreStats.totalQuestions) * 100) 
    : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs uppercase font-bold tracking-widest bg-white/20 px-3 py-1 rounded-full inline-block">
            Tableau de Bord & Progression
          </span>
          <h2 className="text-3xl font-extrabold">
            Ton Bilan de Révisions
          </h2>
          <p className="text-indigo-100 text-sm max-w-md">
            Chaque exercice complété t'approche un peu plus de la mention Très Bien au Brevet !
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center font-bold text-2xl shadow-lg">
            🏆
          </div>
          <div>
            <span className="block text-3xl font-black">{scoreStats.totalPoints}</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-indigo-200">Points Brevet</span>
          </div>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
          <Target className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
          <span className="block text-2xl font-extrabold text-slate-900 dark:text-white">
            {scoreStats.totalQuizzes}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Séries & Quiz accomplis
          </span>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
          <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
          <span className="block text-2xl font-extrabold text-slate-900 dark:text-white">
            {scoreStats.correctAnswers} / {scoreStats.totalQuestions}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Questions réussies
          </span>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
          <Flame className="w-8 h-8 text-amber-500 mx-auto mb-2" />
          <span className="block text-2xl font-extrabold text-slate-900 dark:text-white">
            {accuracy}%
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Taux de réussite global
          </span>
        </div>
      </div>

      {/* Badges Section */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-6 h-6 text-amber-500" />
          <span>Badges & Trophées d'Apprentissage</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BADGES.map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-2xl border flex items-center space-x-4 transition-all ${
                badge.unlocked
                  ? 'bg-amber-50/80 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800'
                  : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-2xl flex-shrink-0">
                {badge.icon}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {badge.name}
                  </h4>
                  {badge.unlocked ? (
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                      Débloqué ✔
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                      Verrouillé 🔒
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reset button */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end">
          <button
            onClick={onResetStats}
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800/60 flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser mes statistiques</span>
          </button>
        </div>

      </div>
    </div>
  );
}
