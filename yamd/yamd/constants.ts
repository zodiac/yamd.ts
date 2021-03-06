﻿let zeroPad = function (num: number, places: number = 32): string {
    var zero = places - num.toString(2).length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num.toString(2);
}

export let Reg = {
        'savedPC': 31,
        'stackPointer': 30,
        'framePointer': 29,
        'heapPointer': 28,
        'semiSpaceTop': 27,
        'input1': 1,
        'input2': 2,
        'result': 3,
        'scratch': 4,
        'savedParamPtr': 5,
        'allocated': 6,
        'copyChunkScratch': 7,
        'targetPC': 8,
        'scratchPtrForGC': 9
}

/** The PC value at which the CPU should halt execution. */
export let terminationPC = "11111110111000011101111010101101";

/** The address that is one word beyond the last valid memory address. */
export let maxAddr = "00000001000000000000000000000000";

/** The special address for producing output. When a word is stored to this address, the low-order 8 bits of
    * that word are written to standard output.
    */
export let printAddr = "11111111111111110000000000001100";

export interface State {
    PC: string;
    LO: string;
    HI: string;
    registers: string[];
    memory: { [n: number]:string };
}