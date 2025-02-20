// dice-box.d.ts

declare module '@3d-dice/dice-box' {
  interface DiceBoxConfig {
    readonly target: string | HTMLElement;  // Allow both selector and direct element
    readonly assetPath: string;
    readonly theme?: string;
    readonly scale?: number;
    readonly throwForce?: number;
    readonly sound?: boolean;
    readonly enableShadows?: boolean;
  }

  interface DiceResult {
    value: number;
    type: string;
  }

  interface DiceBoxInstance {
    init: () => Promise<void>;
    roll: (notation: string) => void;
    onRollComplete?: (results: DiceResult[]) => void;
    destroy: () => void;
  }

  declare class DiceBox implements DiceBoxInstance {
    constructor(config: DiceBoxConfig);
    init: () => Promise<void>;
    roll: (notation: string) => void;
    destroy: () => void;
    onRollComplete?: (results: DiceResult[]) => void;
  }

  export default DiceBox;
  export type { DiceBoxConfig, DiceResult, DiceBoxInstance };
}
