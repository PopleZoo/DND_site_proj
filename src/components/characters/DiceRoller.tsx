import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from '../../components/ui/Button';
import { Dice4, Dice6, Dice1, Dice2, Dice3, Dice5 } from "lucide-react";
import useSound from 'use-sound';

interface DiceResult {
  sides: number;
  value: number;
  timestamp: number;
}

interface DiceRollerProps {
  onClose: () => void;
}

const diceTypes = [
  { sides: 4, icon: Dice4 },
  { sides: 6, icon: Dice6 },
  { sides: 8, icon: Dice2 },
  { sides: 10, icon: Dice3 },
  { sides: 12, icon: Dice5 },
  { sides: 20, icon: Dice1 },
];

export default function DiceRoller({ onClose }: DiceRollerProps) {
  const [result, setResult] = useState<DiceResult | null>(null);
  const [history, setHistory] = useState<DiceResult[]>([]);
  const [rolling, setRolling] = useState(false); // Track animation status

  const [playRollSound] = useSound('/sounds/dice-roll.mp3');

  const rollDice = (sides: number) => {
    playRollSound();
    const newResult = { 
      sides,
      value: Math.floor(Math.random() * sides) + 1,
      timestamp: Date.now()
    };
    setResult(newResult);
    setHistory(prev => [newResult, ...prev].slice(0, 10));
  };

  const rollAll = () => {
    diceTypes.forEach(dice => rollDice(dice.sides));
  };

  const clearHistory = () => {
    setHistory([]);
    setResult(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-primary text-white p-6 rounded-2xl shadow-xl relative w-96 max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-white-500 hover:text-white-700">
          X
        </button>

        <h2 className="text-xl font-semibold mb-4">Dice Roller</h2>

        <div className="flex justify-center gap-2 flex-wrap mb-6">
          {diceTypes.map(({ sides, icon: Icon }) => (
            <Button 
              key={sides} 
              onClick={() => rollDice(sides)} 
              variant="primary" 
              className="flex flex-col items-center p-3 hover:scale-105 transition-transform"
            >
              <Icon size={24} />
              <span className="text-sm">d{sides}</span>
            </Button>
          ))}
        </div>

        <div className="flex gap-2 mb-6 bg-primary/10">
          <Button onClick={rollAll} className="flex-1">
            Roll All
          </Button>
          <Button onClick={clearHistory} variant="secondary" className="flex-1">
            Clear History
          </Button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div
              key={result.timestamp}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="mb-6 p-4 bg-primary rounded-lg"
            >
              <div className="text-2xl font-bold text-center">
                You rolled: d{result.sides} → {result.value}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {history.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-semibold bg-primary  mb-2">Roll History</h3>
            {history.map((roll, index) => (
              <div key={roll.timestamp} className="flex justify-between items-center p-2 bg-primary rounded">
                <span>d{roll.sides}</span>
                <span className="font-medium">{roll.value}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
