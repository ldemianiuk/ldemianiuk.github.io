const instructionTable = ["NOP", "LXI", "STAX", "INX", "INR", "DCR", "MVI", "RLC", "NOP", "DAD", "LDAX", "DCX", "INR", "DCR", "MVI", "RRC",
    "NOP", "LXI", "STAX", "INX", "INR", "DCR", "MVI", "RAL", "NOP", "DAD", "LDAX", "DCX", "INR", "DCR", "MVI", "RAR",
    "NOP", "LXI", "SHLD", "INX", "INR", "DCR", "MVI", "DAA", "NOP", "DAD", "LHLD", "DCX", "INR", "DCR", "MVI", "CMA",
    "NOP", "LXI", "STA", "INX", "INR", "DCR", "MVI", "STC", "NOP", "DAD", "LDA", "DCX", "INR", "DCR", "MVI", "CMC",
    "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV",
    "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV",
    "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV",
    "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "HLT", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV",
    "ADD", "ADD", "ADD", "ADD", "ADD", "ADD", "ADD", "ADD", "ADC", "ADC", "ADC", "ADC", "ADC", "ADC", "ADC", "ADC",
    "SUB", "SUB", "SUB", "SUB", "SUB", "SUB", "SUB", "SUB", "SBB", "SBB", "SBB", "SBB", "SBB", "SBB", "SBB", "SBB",
    "ANA", "ANA", "ANA", "ANA", "ANA", "ANA", "ANA", "ANA", "XRA", "XRA", "XRA", "XRA", "XRA", "XRA", "XRA", "XRA",
    "ORA", "ORA", "ORA", "ORA", "ORA", "ORA", "ORA", "ORA", "CMP", "CMP", "CMP", "CMP", "CMP", "CMP", "CMP", "CMP",
    "RNZ", "POP", "JNZ", "JMP", "CNZ", "PUSH", "ADI", "RST", "RZ", "RET", "JZ", "JMP", "CZ", "CALL", "ACI", "RST",
    "RNC", "POP", "JNC", "OUT", "CNC", "PUSH", "SUI", "RST", "RC", "RET", "JC", "IN", "CC", "CALL", "SBI", "RST",
    "RPO", "POP", "JPO", "XTHL", "CPO", "PUSH", "ANI", "RST", "RPE", "PCHL", "JPE", "XCHG", "CPE", "CALL", "XRI", "RST",
    "RP", "POP", "JP", "DI", "CP", "PUSH", "ORI", "RST", "RM", "SPHL", "JM", "EI", "CM", "CALL", "CPI", "RST"];
const instructionSize = [1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1,
    1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1,
    1, 3, 3, 1, 1, 1, 2, 1, 1, 1, 3, 1, 1, 1, 2, 1,
    1, 3, 3, 1, 1, 1, 2, 1, 1, 1, 3, 1, 1, 1, 2, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 3, 3, 3, 1, 2, 1, 1, 1, 3, 3, 3, 3, 2, 1,
    1, 1, 3, 2, 3, 1, 2, 1, 1, 1, 3, 2, 3, 3, 2, 1,
    1, 1, 3, 1, 3, 1, 2, 1, 1, 1, 3, 1, 3, 3, 2, 1,
    1, 1, 3, 1, 3, 1, 2, 1, 1, 1, 3, 1, 3, 3, 2, 1];
const instructionsDisasm = ["NOP", "LXI B", "STAX B", "INX B", "INR B", "DCR B", "MVI B", "RLC", "NOP", "DAD B", "LDAX B", "DCX B", "INR C", "DCR C", "MVI C", "RRC",
    "NOP", "LXI D", "STAX D", "INX D", "INR D", "DCR D", "MVI D", "RAL", "NOP", "DAD D", "LDAX D", "DCX D", "INR E", "DCR E", "MVI E", "RAR",
    "NOP", "LXI H", "SHLD", "INX H", "INR H", "DCR H", "MVI H", "DAA", "NOP", "DAD H", "LHLD", "DCX H", "INR L", "DCR L", "MVI L", "CMA",
    "NOP", "LXI SP", "STA", "INX SP", "INR M", "DCR M", "MVI M", "STC", "NOP", "DAD SP", "LDA", "DCX SP", "INR A", "DCR A", "MVI A", "CMC",
    "MOV B, B", "MOV B, C", "MOV B, D", "MOV B, E", "MOV B, H", "MOV B, L", "MOV B, M", "MOV B, A", "MOV C, B", "MOV C, C", "MOV C, D", "MOV C, E", "MOV C, H", "MOV C, L", "MOV C, M", "MOV C, A",
    "MOV D, B", "MOV D, C", "MOV D, D", "MOV D, E", "MOV D, H", "MOV D, L", "MOV D, M", "MOV D, A", "MOV E, B", "MOV E, C", "MOV E, D", "MOV E, E", "MOV E, H", "MOV E, L", "MOV E, M", "MOV E, A",
    "MOV H, B", "MOV H, C", "MOV H, D", "MOV H, E", "MOV H, H", "MOV H, L", "MOV H, M", "MOV H, A", "MOV L, B", "MOV L, C", "MOV L, D", "MOV L, E", "MOV L, H", "MOV L, L", "MOV L, M", "MOV L, A",
    "MOV M, B", "MOV M, C", "MOV M, D", "MOV M, E", "MOV M, H", "MOV M, L", "HLT", "MOV M, A", "MOV A, B", "MOV A, C", "MOV A, D", "MOV A, E", "MOV A, H", "MOV A, L", "MOV A, M", "MOV A, A",
    "ADD B", "ADD C", "ADD D", "ADD E", "ADD H", "ADD L", "ADD M", "ADD A", "ADC B", "ADC C", "ADC D", "ADC E", "ADC H", "ADC L", "ADC M", "ADC A",
    "SUB B", "SUB C", "SUB D", "SUB E", "SUB H", "SUB L", "SUB M", "SUB A", "SBB B", "SBB C", "SBB D", "SBB E", "SBB H", "SBB L", "SBB M", "SBB A",
    "ANA B", "ANA C", "ANA D", "ANA E", "ANA H", "ANA L", "ANA M", "ANA A", "XRA B", "XRA C", "XRA D", "XRA E", "XRA H", "XRA L", "XRA M", "XRA A",
    "ORA B", "ORA C", "ORA D", "ORA E", "ORA H", "ORA L", "ORA M", "ORA A", "CMP B", "CMP C", "CMP D", "CMP E", "CMP H", "CMP L", "CMP M", "CMP A",
    "RNZ", "POP B", "JNZ", "JMP", "CNZ", "PUSH B", "ADI", "RST 0", "RZ", "RET", "JZ", "JMP", "CZ", "CALL", "ACI", "RST 1",
    "RNC", "POP D", "JNC", "OUT", "CNC", "PUSH D", "SUI", "RST 2", "RC", "RET", "JC", "IN", "CC", "CALL", "SBI", "RST 3",
    "RPO", "POP H", "JPO", "XTHL", "CPO", "PUSH H", "ANI", "RST 4", "RPE", "PCHL", "JPE", "XCHG", "CPE", "CALL", "XRI", "RST 5",
    "RP", "POP PSW", "JP", "DI", "CP", "PUSH PSW", "ORI", "RST 6", "RM", "SPHL", "JM", "EI", "CM", "CALL", "CPI", "RST 7"];
//import { instructionTable, instructionSize } from './instructions';
const regA = 7;
class Flags {
}
const B = 0, C = 1, D = 2, E = 3, H = 4, L = 5, M = 6, A = 7;
function SRC(opcode) {
    return opcode & 0b111;
}
function DST(opcode) {
    return (opcode >> 3) & 0b111;
}
class e8080 {
    constructor() {
        this.instructionHandlers = {
            "ADC": null,
            "ADD": null,
            "ADI": null,
            "ANA": null,
            "ANI": null,
            "CALL": (opcode, lo, hi) => {
                const addr = lo + (hi << 8);
                this.sp -= 2;
                this.memory[this.sp] = (this.pc & 0xff);
                this.memory[this.sp + 1] = (this.pc >> 8);
                this.pc = addr;
            },
            "CC": null,
            "CM": null,
            "CMA": null,
            "CMC": null,
            "CMP": null,
            "CNC": null,
            "CNZ": null,
            "CP": null,
            "CPE": null,
            "CPI": null,
            "CPO": null,
            "CZ": null,
            "DAA": null,
            "DAD": null,
            "DCR": null,
            "DCX": op => {
                if (op === 0x3B) {
                    this.sp--;
                }
                else {
                    const lo = DST(op);
                    const hi = lo - 1;
                    const result = (this.getReg(hi) << 8) + this.getReg(lo) - 1;
                    this.setReg(hi, result >> 8);
                    this.setReg(lo, result & 0xff);
                }
            },
            "DI": null,
            "EI": null,
            "HLT": op => {
                this.running = false;
                this.pc--;
            },
            "IN": null,
            "INR": op => {
                const result = this.getReg(DST(op)) + 1;
                this.setReg(DST(op), result);
                this.setFlags(result);
            },
            "INX": op => {
                if (op === 0x33) {
                    this.sp++;
                }
                else {
                    const hi = DST(op);
                    const lo = hi + 1;
                    const result = (this.getReg(hi) << 8) + this.getReg(lo) + 1;
                    this.setReg(hi, result >> 8);
                    this.setReg(lo, result & 0xff);
                }
            },
            "JC": null,
            "JM": null,
            "JMP": null,
            "JNC": null,
            "JNZ": (op, lo, hi) => {
                const addr = lo + (hi << 8);
                if (this.status.Z === 0) {
                    this.pc = addr;
                }
            },
            "JP": null,
            "JPE": null,
            "JPO": null,
            "JZ": null,
            "LDA": null,
            "LDAX": op => {
                let addr;
                // LDAX B
                if (op === 0x0A) {
                    addr = (this.registers[B] << 8) + this.registers[C];
                }
                // LDAX D
                else {
                    addr = (this.registers[D] << 8) + this.registers[E];
                }
                this.setReg(A, this.memory[addr]);
            },
            "LHLD": null,
            "LXI": null,
            "MOV": op => {
                const result = this.getReg(SRC(op));
                this.setReg(DST(op), result);
                this.setFlags(result);
            },
            "MVI": (op, d8) => {
                this.setReg(DST(op), d8);
            },
            "NOP": null,
            "ORA": op => {
                const result = this.getReg(regA) | this.getReg(SRC(op));
                this.setReg(regA, result);
                this.setFlags(result);
            },
            "ORI": null,
            "OUT": null,
            "PCHL": null,
            "POP": null,
            "PUSH": null,
            "RAL": null,
            "RAR": null,
            "RC": null,
            "RET": op => {
                this.pc = this.memory[this.sp] + (this.memory[this.sp + 1] << 8);
                this.sp += 2;
            },
            "RLC": null,
            "RM": null,
            "RNC": null,
            "RNZ": null,
            "RP": null,
            "RPE": null,
            "RPO": null,
            "RRC": null,
            "RST": null,
            "RZ": op => {
                if (this.status.Z !== 0)
                    this.instructionHandlers["RET"](op);
            },
            "SBB": null,
            "SBI": null,
            "SHLD": null,
            "SPHL": null,
            "STA": null,
            "STAX": null,
            "STC": null,
            "SUB": null,
            "SUI": null,
            "XCHG": null,
            "XRA": null,
            "XRI": null,
            "XTHL": null
        };
        this.status = new Flags();
        this.reset();
    }
    setFlags(result) {
        this.status.S = result & 0b10000000;
        this.status.Z = result === 0 ? 1 : 0;
        let parity = 1;
        for (let i = 0; i < 8; i++) {
            if ((result & (1 << i)) === 1) {
                parity++;
            }
        }
        this.status.P = parity & 1;
    }
    getBit(n, bit) {
        return (n & (1 << bit)) === 0 ? 0 : 1;
    }
    getReg(reg) {
        if (reg === M) {
            return this.memory[(this.registers[H] << 8) + this.registers[L]];
        }
        else {
            return this.registers[reg];
        }
    }
    setReg(reg, value) {
        if (reg === M) {
            this.memory[(this.registers[H] << 8) + this.registers[L]] = value;
        }
        else {
            this.registers[reg] = value;
        }
    }
    addr() {
        return this.memory[this.pc + 1] + (this.memory[this.pc + 2] << 8);
    }
    reset() {
        this.memory = new Array(0x10000).fill(0);
        this.registers = [0, 0, 0, 0, 0, 0, 0, 0];
        this.sp = 0xf000;
        this.pc = 0;
        this.status.S = this.status.Z = this.status.A = this.status.P = this.status.C = 0;
        this.running = true;
    }
    step() {
        if (!this.running) {
            return;
        }
        const opcode = this.memory[this.pc];
        const instr = instructionTable[opcode];
        const len = instructionSize[opcode];
        const args = this.memory.slice(this.pc + 1, this.pc + len);
        this.pc += len;
        if (this.instructionHandlers[instr]) {
            this.instructionHandlers[instr](opcode, ...args);
        }
        else {
            console.log("ERROR: " + instr);
        }
    }
    disasm(addr, num) {
        const opcode = this.memory[addr];
        let instr = instructionsDisasm[opcode];
        const len = instructionSize[opcode];
        if (num > 0) {
            return ['<li ' + (addr === this.pc ? 'class="current"' : '') + '><span><span class="address">' + ('0000' + addr.toString(16)).slice(-4) + ':</span> ' + this.disasm(addr) + '</span></li>', ...this.disasm(addr + len, num - 1)];
        }
        if (num === 0)
            return [];
        if (len === 1) {
            return instr;
        }
        if (instr.includes(' ')) {
            instr = instr + ',';
        }
        if (len == 2) {
            return instr + ' ' + this.memory[addr + 1].toString(16);
        }
        else {
            return instr + ' ' + (this.memory[addr + 1] + (this.memory[addr + 2] << 8)).toString(16);
        }
    }
    showFlags() {
        console.log("S:" + this.status.S + " Z:" + this.status.Z + " A:" + this.status.A + " P:" + this.status.P + " C:" + this.status.C);
    }
}
let emulator = new e8080();
const program = [
    0x06, 0x00,
    0x0E, 0x06,
    0x16, 0x01,
    0x1E, 0x00,
    0x26, 0x01,
    0x2E, 0x10,
    0xCD, 0x10, 0x00,
    0x76,
    0x78,
    0xB1,
    0xC8,
    0x1A,
    0x77,
    0x13,
    0x23,
    0x0B,
    0x78,
    0xB1,
    0xC2, 0x13, 0x00,
    0xC9 /* ret */
];
emulator.memory.splice(0, program.length, ...program);
emulator.memory.splice(0x100, 5, ...[..."memcpy"].map(s => s.charCodeAt(0)));
function stepui() {
    emulator.step();
    refreshui();
}
function refreshui() {
    document.getElementById('code').innerHTML = emulator.disasm(0, 20).map(instr => '' + instr + '').join('');
    document.getElementById('register-values').innerHTML = [0, 1, 2, 3, 4, 5, 6, 7].map(r => '<td>' + ('00' + emulator.getReg(r).toString(16)).slice(-2) + '</td>').join('');
    const stack = emulator.memory.slice(emulator.sp, Math.min(emulator.sp + 40, 0xf000));
    const stackwords = [];
    let addr = emulator.sp;
    while (stack.length > 1) {
        const lo = stack.shift();
        const hi = stack.shift();
        const val = lo + (hi << 8);
        stackwords.push('<li>' + ('0000' + addr.toString(16)).slice(-4) + ': ' + ('0000' + val.toString(16)).slice(-4) + '</li>');
        addr += 2;
    }
    document.getElementById('stack').innerHTML = stackwords.join('');
    const page = Number(document.getElementById('page').value);
    document.getElementById('memory').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp; 0123456789ABCDEF<br>' +
        Array.from(Array(16).keys()).map(i => ('0000' + (page * 0x100 + i * 16).toString(16).toUpperCase()).slice(-4) + ' ' + Array.from(Array(16).keys()).map(j => displayChar(emulator.memory[page * 0x100 + i * 16 + j])).join('')).join('<br>');
}
function displayChar(ch) {
    const str = String.fromCharCode(ch);
    if (str.match(/[A-Za-z0-9]/)) {
        return str;
    }
    else {
        return '.';
    }
}
window.onload = function (ev) {
    refreshui();
};
//# sourceMappingURL=main.js.map