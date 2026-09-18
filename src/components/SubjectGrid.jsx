import React from 'react';
import * as Icons from 'lucide-react';
import { SUBJECTS } from '../data/questionsData';

export default function SubjectGrid({ selectedSubject, onSelectSubject, selectedLevel }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            📚 Matières du Collège
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Sélectionnez une matière pour lancer une série d'exercices ou réviser le brevet ({selectedLevel === 'all' ? 'Tous niveaux' : `Niveau ${selectedLevel}`}).
          </p>
        </div>

        {selectedSubject && (
          <button
            onClick={() => onSelectSubject(null)}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            ✕ Réinitialiser le filtre matière
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SUBJECTS.map((subject) => {
          const IconComponent = Icons[subject.icon] || Icons.BookOpen;
          const isSelected = selectedSubject === subject.id;

          return (
            <div
              key={subject.id}
              onClick={() => onSelectSubject(isSelected ? null : subject.id)}
              className={`group relative p-5 rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                isSelected
                  ? 'bg-indigo-50/90 dark:bg-indigo-950/40 border-indigo-500 shadow-md ring-2 ring-indigo-500/30'
                  : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              {/* Top Row: Icon & Brevet Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {subject.focus3eme && (
                  <span className="text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border border-amber-300/50">
                    DNB 3ÈME
                  </span>
                )}
              </div>

              {/* Subject Title */}
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {subject.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                {subject.description}
              </p>

              {/* Footer info */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-xs font-semibold">
                <span className={subject.badgeColor + ' px-2.5 py-0.5 rounded-md'}>
                  {subject.totalQuestions} questions
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Démarrer →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
