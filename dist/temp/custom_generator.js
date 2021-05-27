Blockly.defineBlocksWithJsonArray([{
  "type": "load_immediate",
  "message0": "%1 load immediate %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "REGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "VALUETOSET",
	  "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "Load Immediate",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
  "type": "branch_if",
  "message0": "branch if %1 %2 %3 to: %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FIRSTREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
	{
      "type": "field_dropdown",
      "name": "CONDITIONAL",
      "options": [
        [
          "=",
          "="
        ],
        [
          ">=",
          ">="
        ],
        [
          "<",
          "<"
        ],
        [
          "≠",
          "≠"
        ]
      ]
    },
	{
      "type": "field_dropdown",
      "name": "SECONDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "LABELNAME",
	  "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Branch if",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
  "type": "store",
  "message0": "store %1 from %2 to %3 with offset of: %4",
  "args0": [
	{
	  "type": "field_dropdown",
	  "name": "TYPEOFSTORE",
	  "options": [
		[
			"byte",
			"byte"
		],
		[
			"half",
			"half"
		],
		[
			"word",
			"word"
		],		
	  ]
	},
    {
      "type": "field_dropdown",
      "name": "FIRSTREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
	{
      "type": "field_dropdown",
      "name": "SECONDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "OFFSET",
	  "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Store",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
  "type": "load",
  "message0": "load %1 from %2 to %3 with offset of: %4",
  "args0": [
	{
	  "type": "field_dropdown",
	  "name": "TYPEOFSTORE",
	  "options": [
		[
			"byte",
			"byte"
		],
		[
			"half",
			"half"
		],
		[
			"word",
			"word"
		],		
	  ]
	},
    {
      "type": "field_dropdown",
      "name": "FIRSTREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
	{
      "type": "field_dropdown",
      "name": "SECONDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "OFFSET",
	  "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "Load",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
  "type": "load_unsigned",
  "message0": "load unsigned %1 from %2 to %3 with offset of: %4",
  "args0": [
	{
	  "type": "field_dropdown",
	  "name": "TYPEOFSTORE",
	  "options": [
		[
			"byte",
			"byte"
		],
		[
			"half",
			"half"
		]	
	  ]
	},
    {
      "type": "field_dropdown",
      "name": "FIRSTREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
	{
      "type": "field_dropdown",
      "name": "SECONDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "OFFSET",
	  "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "Load unsigned",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
  "type": "addition_immediate",
  "message0": "addition immediate %1 ← %2 + %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FIRSTREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
	{
      "type": "field_dropdown",
      "name": "SECONDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "VALUETOSET",
	  "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  //"inputsInline": true,
  "colour": 0,
  "tooltip": "Addition Immediate",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
  "type": "addition",
  "message0": "addition %1 ← %2 + %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FIRSTREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
	{
      "type": "field_dropdown",
      "name": "SECONDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "THIRDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  //"inputsInline": true,
  "colour": 0,
  "tooltip": "Addition",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
  "type": "subtraction",
  "message0": "subtraction %1 ← %2 - %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FIRSTREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
	{
      "type": "field_dropdown",
      "name": "SECONDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "THIRDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  //"inputsInline": true,
  "colour": 0,
  "tooltip": "Subtraction",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
  "type": "multiplication",
  "message0": "multiplication %1 ← %2 * %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FIRSTREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
	{
      "type": "field_dropdown",
      "name": "SECONDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "THIRDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  //"inputsInline": true,
  "colour": 0,
  "tooltip": "Multiplication",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
  "type": "division",
  "message0": "division %1 ← %2 / %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FIRSTREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
	{
      "type": "field_dropdown",
      "name": "SECONDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "THIRDREGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  //"inputsInline": true,
  "colour": 0,
  "tooltip": "Division",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
  "type": "load_address",
  "message0": "%1 load address %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "REGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "VALUETOSET",
	  "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "Load Address",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
	"type": "choiceofregisters",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAMEOFREGISTER",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "move",
  "message0": "move %2 to %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "REGISTERNAME",
      "options": [
        [
          "ra",
          "ra"
        ],
        [
          "sp",
          "sp"
        ],
        [
          "gp",
          "gp"
        ],
        [
          "tp",
          "tp"
        ],
        [
          "t0",
          "t0"
        ],
        [
          "t1",
          "t1"
        ],
        [
          "t2",
          "t2"
        ],
		[
          "s0",
          "s0"
        ],
		[
          "s1",
          "s1"
        ],
		[
          "a0",
          "a0"
        ],
		[
          "a1",
          "a1"
        ],
		[
          "a2",
          "a2"
        ],
		[
          "a3",
          "a3"
        ],
		[
          "a4",
          "a4"
        ],
		[
          "a5",
          "a5"
        ],
		[
          "a6",
          "a6"
        ],
		[
          "a7",
          "a7"
        ],
		[
          "s2",
          "s2"
        ],
		[
          "s3",
          "s3"
        ],
		[
          "s4",
          "s4"
        ],
		[
          "s5",
          "s5"
        ],
		[
          "s6",
          "s6"
        ],
		[
          "s7",
          "s7"
        ],
		[
          "s8",
          "s8"
        ],
		[
          "s9",
          "s9"
        ],
		[
          "s10",
          "s10"
        ],
		[
          "s11",
          "s11"
        ],
		[
          "t3",
          "t3"
        ],
		[
          "t4",
          "t4"
        ],
		[
          "t5",
          "t5"
        ],
		[
          "t6",
          "t6"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "VALUETOSET",
	  "check": "choiceofregisters"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "Move",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
	"type": "textblock",
	"message0": ".text %1 %2",
	"args0": [
		{
			"type": "input_dummy"
		},
		{
			"type": "input_statement",
			"name": "MEMBERS"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": 60,
	"tooltip": "Define text segment",
	"helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
	"type": "datablock",
	"message0": ".data %1 %2",
		"args0": [
		{
			"type": "input_dummy"
		},
		{
			"type": "input_statement",
			"name": "MEMBERS"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": 60,
	"tooltip": "Define data segment",
	"helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
  "type": "hex",
  "message0": "0x %1",
  "args0": [
    {
      "type": "field_input",
      "name": "HEX",
      "text": ""
    }
  ],
  "output": "String",
  "colour": 160,
  "tooltip": "Enter a hex input",
  "helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
	"type": "ecall",
	"message0": "ecall",
	"previousStatement": null,
	"nextStatement": null,
	"colour": 90,
	"tooltip": "Issue a system call",
	"helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
	"type": "ret",
	"message0": "ret",
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Return from a subroutine",
	"helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
	"type": "loopWithReturn",
	"message0": "label name: %1 %2 %3 and return",
	"args0": [
		{
			"type": "input_value",
			"name": "NAMEOFLOOP",
			"check": "String"
		},
		{
			"type": "input_dummy"
		},
		{
			"type": "input_statement",
			"name": "MEMBERS"
		}
	],
	"previousStatement": null,
    "nextStatement": null,
	"colour": 30
},
{
	"type": "loopWithoutReturn",
	"message0": "label name: %1 %2 %3",
	"args0": [
		{
			"type": "input_value",
			"name": "NAMEOFLOOP",
			"check": "String"
		},
		{
			"type": "input_dummy"
		},
		{
			"type": "input_statement",
			"name": "MEMBERS"
		}
	],
	"previousStatement": null,
    "nextStatement": null,
	"colour": 30
},
{
	"type": "new_variable",
	"message0": "variable: %1 of type: %2 is %3",
	"args0": [
		{
			"type": "input_value",
			"name": "NAMEOFVAR",
			"check": "String"
		},
		{
			"type": "field_dropdown",
			"name": "TYPENAME",
			"options": [
				[
					"word",
					"word"
				],
				[
					"dword",
					"dword"
				],
				[
					"string",
					"string"
				],
				[
					"byte",
					"byte"
				],
				[
					"double",
					"double"
				],
				[
					"float",
					"float"
				],
				[
					"space",
					"space"
				],
				[
					"asciz",
					"asciz"
				]
			]
		},
		{
			"type": "input_value",
			"name": "VALUETOSET",
			"check": "String"
		}
	],
	"inputsInline": true,
	"previousStatement": null,
    "nextStatement": null,
	"colour": 60,
	"tooltip": "Set new variable",
	"helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
	"type": "jump_and_link",
	"message0": "jump and link to %1",
	"args0": [
		{
			"type": "input_value",
			"name": "LABELNAME",
			"check": "String"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Jump and link",
	"helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
},
{
	"type": "jump",
	"message0": "jump to %1",
	"args0": [
		{
			"type": "input_value",
			"name": "LABELNAME",
			"check": "String"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Jump",
	"helpUrl": "https://www.chibialiens.com/riscv/RiscVCheatsheet.pdf"
}]);

var codelabToolbox = `
<xml id="toolbox" style="display: none">

<category name="Loops" colour="30">
<block type="branch_if"/>
<block type="loopWithReturn"/>
<block type="loopWithoutReturn"/>
</category>

<category name="Jumps" colour="230">
<block type="jump_and_link"/>
<block type="jump"/>
<block type="ret"/>
</category>

<category name="Loads" colour="260">
<block type="load_immediate"/>
<block type="load_address"/>
<block type="load"/>
<block type="load_unsigned"/>
</category>

<category name="Stores" colour="120">
<block type="store"/>
</category>

<category name="Moves" colour="290">
<block type="move"/>
<block type="choiceofregisters"/>
</category>

<category name="Math" colour="0">
<block type="addition_immediate"/>
<block type="addition"/>
<block type="subtraction"/>
<block type="division"/>
<block type="multiplication"/>
<block type="math_number"><field name="NUM">0</field></block>
</category>

<category name="Segments" colour="60">
<block type="textblock"/>
<block type="datablock"/>
<block type="new_variable"/>
</category>

<category name="Constants" colour="160">
<block type="text"><field name="TEXT"/></block>
<block type="hex"><field name="HEX"/></block>
</category>

<category name="Other" colour="90">
<block type="ecall"/>

</category>

<category name="Save code">
<button text="Save code as .asm" callbackKey="asmButton"></button>
<button text="Save code as .txt" callbackKey="txtButton"></button>
<button text="Copy code to clipboard" callbackKey="cpyButton"></button>
<button text="Save blocks to .xml" callbackKey="xmlButton"></button>
<button text="Import blocks from .xml" callbackKey="importXmlButton"></button>
<button text="Load sample program" callbackKey="loadSampleProgram"></button>
</category>
</xml>
`

const codelabGenerator = new Blockly.Generator('RISC V');
codelabGenerator.PRECEDENCE = 0;

Blockly.RISCV = codelabGenerator;

codelabGenerator['text'] = function(block) {
  var textValue = block.getFieldValue('TEXT');
  var code = textValue;
  return [code, codelabGenerator.PRECEDENCE];
};

codelabGenerator['hex'] = function(block) {
  var textValue = block.getFieldValue('HEX');
  var code = "0x" + textValue;
  return [code, codelabGenerator.PRECEDENCE];
};

codelabGenerator['math_number'] = function(block) {
  const code = Number(block.getFieldValue('NUM'));
  return [code, codelabGenerator.PRECEDENCE];
};

codelabGenerator['load_immediate'] = function(block) {
	const register = block.getFieldValue('REGISTERNAME');
	const value = codelabGenerator.valueToCode(block, 'VALUETOSET',
      codelabGenerator.PRECEDENCE);
	const code = 'li ' + register + ', ' + value;
	return code;
};

codelabGenerator['load_unsigned'] = function(block) {
	const firstRegister = block.getFieldValue('FIRSTREGISTERNAME');
	const secondRegister = block.getFieldValue('SECONDREGISTERNAME');
	const typeOfStore = block.getFieldValue('TYPEOFSTORE');
	const value = codelabGenerator.valueToCode(block, 'OFFSET', 
		codelabGenerator.PRECEDENCE);
	var command = ''; 
	switch (typeOfStore) {
		case 'byte':
			command = 'lbu ';
			break;
		case 'half':
			command = 'lhu ';
			break;
	}
	return command + secondRegister + ', ' + value + '(' + firstRegister + ')';
};

codelabGenerator['load'] = function(block) {
		const firstRegister = block.getFieldValue('FIRSTREGISTERNAME');
	const secondRegister = block.getFieldValue('SECONDREGISTERNAME');
	const typeOfStore = block.getFieldValue('TYPEOFSTORE');
	const value = codelabGenerator.valueToCode(block, 'OFFSET', 
		codelabGenerator.PRECEDENCE);
	var command = ''; 
	switch (typeOfStore) {
		case 'byte':
			command = 'lb ';
			break;
		case 'half':
			command = 'lh ';
			break;
		case 'word':
			command = 'lw ';
			break;
	}
	return command + secondRegister + ', ' + value + '(' + firstRegister + ')';
};

codelabGenerator['store'] = function(block) {
	const firstRegister = block.getFieldValue('FIRSTREGISTERNAME');
	const secondRegister = block.getFieldValue('SECONDREGISTERNAME');
	const typeOfStore = block.getFieldValue('TYPEOFSTORE');
	const value = codelabGenerator.valueToCode(block, 'OFFSET', 
		codelabGenerator.PRECEDENCE);
	var command = ''; 
	switch (typeOfStore) {
		case 'byte':
			command = 'sb ';
			break;
		case 'half':
			command = 'sh ';
			break;
		case 'word':
			command = 'sw ';
			break;
	}
	return command + firstRegister + ', ' + value + '(' + secondRegister + ')';
};

codelabGenerator['branch_if'] = function(block) {
	const firstRegister = block.getFieldValue('FIRSTREGISTERNAME');
	const secondRegister = block.getFieldValue('SECONDREGISTERNAME');
	const conditional = block.getFieldValue('CONDITIONAL');
	const value = codelabGenerator.valueToCode(block, 'LABELNAME', 
		codelabGenerator.PRECEDENCE);
	var command = ''; 
	switch (conditional) {
		case '=':
			command = 'beq ';
			break;
		case '>=':
			command = 'bge ';
			break;
		case '<':
			command = 'blt ';
			break;
		case '≠':
			command = 'bne ';
			break;
	}
	return command + firstRegister + ', ' + secondRegister + ', ' + value;
};

codelabGenerator['addition_immediate'] = function(block) {
	const firstRegister = block.getFieldValue('FIRSTREGISTERNAME');
	const secondRegister = block.getFieldValue('SECONDREGISTERNAME');
	const value = codelabGenerator.valueToCode(block, 'VALUETOSET',
		codelabGenerator.PRECEDENCE);
	const code = 'addi ' + firstRegister + ', ' + secondRegister + ', ' + value;
	return code;
};

codelabGenerator['addition'] = function(block) {
	const firstRegister = block.getFieldValue('FIRSTREGISTERNAME');
	const secondRegister = block.getFieldValue('SECONDREGISTERNAME');
	const thirdRegister = block.getFieldValue('THIRDREGISTERNAME');
	const code = 'add ' + firstRegister + ', ' + secondRegister + ', ' + thirdRegister;
	return code;
};

codelabGenerator['subtraction'] = function(block) {
	const firstRegister = block.getFieldValue('FIRSTREGISTERNAME');
	const secondRegister = block.getFieldValue('SECONDREGISTERNAME');
	const thirdRegister = block.getFieldValue('THIRDREGISTERNAME');
	const code = 'sub ' + firstRegister + ', ' + secondRegister + ', ' + thirdRegister;
	return code;
};

codelabGenerator['division'] = function(block) {
	const firstRegister = block.getFieldValue('FIRSTREGISTERNAME');
	const secondRegister = block.getFieldValue('SECONDREGISTERNAME');
	const thirdRegister = block.getFieldValue('THIRDREGISTERNAME');
	const code = 'div ' + firstRegister + ', ' + secondRegister + ', ' + thirdRegister;
	return code;
};

codelabGenerator['multiplication'] = function(block) {
	const firstRegister = block.getFieldValue('FIRSTREGISTERNAME');
	const secondRegister = block.getFieldValue('SECONDREGISTERNAME');
	const thirdRegister = block.getFieldValue('THIRDREGISTERNAME');
	const code = 'mul ' + firstRegister + ', ' + secondRegister + ', ' + thirdRegister;
	return code;
};

codelabGenerator['load_address'] = function(block) {
	const register = block.getFieldValue('REGISTERNAME');
	const value = codelabGenerator.valueToCode(block, 'VALUETOSET',
      codelabGenerator.PRECEDENCE);
	const code = 'la ' + register + ', ' + value;
	return code;
};

codelabGenerator['choiceofregisters'] = function(block) {
	const code = block.getFieldValue('NAMEOFREGISTER');
	return [code, codelabGenerator.PRECEDENCE];
};

const myFirstButtonPressed = function(button) {
  const workspace = button.getTargetWorkspace();
  
}

codelabGenerator['move'] = function(block) {
	const register = block.getFieldValue('REGISTERNAME');
	const value = codelabGenerator.valueToCode(block, 'VALUETOSET',
      codelabGenerator.PRECEDENCE);
	const code = 'mv ' + register + ', ' + value;
	return code;
};

codelabGenerator['textblock'] = function(block) {
	const statement_members = codelabGenerator.statementToCode(block, 'MEMBERS');
	return '.text' + '\n' + statement_members;
};

codelabGenerator['datablock'] = function(block) {
	const statement_members = codelabGenerator.statementToCode(block, 'MEMBERS');
	return '.data' + '\n' + statement_members;
};

codelabGenerator['ecall'] = function(block) {
	return 'ecall';
};

codelabGenerator['ret'] = function(block) {
	return 'ret';
};

codelabGenerator['new_variable'] = function(block) {
	const variableValue = codelabGenerator.valueToCode(block,'VALUETOSET', codelabGenerator.PRECEDENCE);
	const variableType = block.getFieldValue('TYPENAME');
	const variableName = codelabGenerator.valueToCode(block,'NAMEOFVAR', codelabGenerator.PRECEDENCE);
	if(variableType == 'string' || variableType == 'asciz') {
		return variableName + ': .' + variableType + " \"" + variableValue + "\"";
	}
	else 
		return variableName + ': .' + variableType + " " + variableValue;
};

codelabGenerator['loopWithReturn'] = function(block) {
	const loopName = codelabGenerator.valueToCode(block,'NAMEOFLOOP', codelabGenerator.PRECEDENCE);
	const statement_members = codelabGenerator.statementToCode(block, 'MEMBERS');
	const code = loopName + ':\n' + statement_members + '\n  jr x1';
	return code;
	//return [code, codelabGenerator.PRECEDENCE]; nzn kodel nereikia
};

codelabGenerator['loopWithoutReturn'] = function(block) {
	const loopName = codelabGenerator.valueToCode(block,'NAMEOFLOOP', codelabGenerator.PRECEDENCE);
	const statement_members = codelabGenerator.statementToCode(block, 'MEMBERS');
	const code = loopName + ':\n' + statement_members;
	return code;
	//return [code, codelabGenerator.PRECEDENCE]; nzn kodel nereikia
};

codelabGenerator['jump_and_link'] = function(block) {
	const labelName = codelabGenerator.valueToCode(block, 'LABELNAME',
      codelabGenerator.PRECEDENCE);
	return "jal " + labelName;
}

codelabGenerator['jump'] = function(block) {
	const labelName = codelabGenerator.valueToCode(block, 'LABELNAME',
      codelabGenerator.PRECEDENCE);
	return "j " + labelName;
}

codelabGenerator.scrub_ = function(block, code, opt_thisOnly) {
  const nextBlock =
      block.nextConnection && block.nextConnection.targetBlock();
  let nextCode = '';
  if (nextBlock) {
      nextCode =
          opt_thisOnly ? '' : '\n' + codelabGenerator.blockToCode(nextBlock);
  }
  return code +  nextCode;
};
