import React from 'react';
import { Cpu, Play } from 'lucide-react';

export default function ScratchBlockDiagram({ exoId = 1 }) {
  const isAlt = exoId % 2 === 0;

  return (
    <div className="bg-slate-950 p-2.5 rounded-xl border border-amber-400/50 font-mono text-[11px] sm:text-xs select-none space-y-1.5 my-1.5 shadow-lg">
      <div className="flex items-center justify-between text-amber-300 font-sans font-bold text-[10px] uppercase tracking-wider pb-1 border-b border-slate-800">
        <span className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-amber-400" />
          Blocs d'Algorithmique Scratch 3.0 (Épreuve Techno)
        </span>
        <span className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">Scratch DNB</span>
      </div>

      {/* Bloc Événement (Jaune) */}
      <div className="bg-amber-400 text-slate-950 px-3 py-1 rounded-t-xl rounded-br-xl font-black flex items-center gap-1.5 w-fit shadow-md">
        <span>quand</span>
        <span className="bg-emerald-600 text-white px-1 py-0.2 rounded-full text-[10px]">🚩</span>
        <span>est cliqué</span>
      </div>

      {/* Bloc Contrôle Répéter (Orange) */}
      <div className="bg-orange-600 text-white rounded-r-xl p-1.5 pl-3 border-l-4 border-orange-800 space-y-1 shadow-md">
        <div className="font-bold flex items-center gap-1">
          <span>répéter indéfiniment</span>
        </div>

        {/* Bloc Si ... Alors (Orange foncé) */}
        <div className="bg-orange-700 text-white rounded-r-lg p-1.5 pl-3 border-l-4 border-orange-900 space-y-1">
          <div className="font-bold flex items-center gap-1 flex-wrap">
            <span>si</span>
            <span className="bg-cyan-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold border border-cyan-300 shadow-inner">
              {isAlt ? 'capteur <présence infrarouge> = 1 ?' : 'touche [flèche haut] pressée ?'}
            </span>
            <span>alors</span>
          </div>

          {/* Action 1 (Bleu) */}
          <div className="bg-blue-600 text-white px-2.5 py-1 rounded-md font-bold flex items-center gap-1 w-fit shadow-sm">
            <span>{isAlt ? 'basculer le relais [MOTEUR M1] sur ON' : 'avancer de (10) pas'}</span>
          </div>

          {/* Action 2 (Violet) */}
          <div className="bg-purple-600 text-white px-2.5 py-1 rounded-md font-bold flex items-center gap-1 w-fit shadow-sm">
            <span>{isAlt ? 'mettre [Voyant DEL] à (1)' : 'dire [Portail Ouvert !] pendant (2) sec'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
