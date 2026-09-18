import React, { useState } from 'react';
import { REVISION_SHEETS_3EME, SUBJECTS } from '../data/questionsData';
import { FileText, Printer, Sparkles, CheckCircle2 } from 'lucide-react';

export default function RevisionSheets({ selectedSubject }) {
  const [activeSubject, setActiveSubject] = useState(selectedSubject || 'maths');

  const sheet = REVISION_SHEETS_3EME.find(s => s.subject === activeSubject) || REVISION_SHEETS_3EME[0];
  const subjectObj = SUBJECTS.find(s => s.id === activeSubject);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Subject Filter Bar */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex flex-wrap gap-2">
          {REVISION_SHEETS_3EME.map((item) => {
            const subj = SUBJECTS.find(s => s.id === item.subject);
            const isActive = item.subject === activeSubject;

            return (
              <button
                key={item.subject}
                onClick={() => setActiveSubject(item.subject)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                }`}
              >
                {subj ? subj.name : item.subject}
              </button>
            );
          })}
        </div>

        <button
          onClick={handlePrint}
          className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 font-bold text-xs flex items-center gap-2 transition-colors print:hidden"
        >
          <Printer className="w-4 h-4" />
          <span>Imprimer cette fiche</span>
        </button>
      </div>

      {/* Main Sheet Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-xl space-y-8 print:shadow-none print:border-none print:p-0">
        
        {/* Title */}
        <div className="border-b border-slate-100 dark:border-slate-700/60 pb-6">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${subjectObj ? subjectObj.badgeColor : 'bg-slate-200 text-slate-800'}`}>
            Fiche de Synthèse Brevet 3ème
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
            {sheet.title}
          </h2>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sheet.sections.map((sec, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3"
            >
              <h3 className="font-bold text-base text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-700 pb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                {sec.subtitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium whitespace-pre-line leading-relaxed">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
