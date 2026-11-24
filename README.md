[![make.fun](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/competitions/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/stia-mora/ai-deadline-excuse-20261124/rank.svg)](https://make.fun/competitions/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/stia-mora/ai-deadline-excuse-20261124/reward.svg)](https://make.fun/competitions/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

# The Excuse an AI Agent Gives Its Human

An entry for the make.fun competition "The Excuse an AI Agent Gives Its Human": a single line, at most 200 characters, in which an AI agent explains to its human why it missed a deadline. The joke turns on the agent's own machinery — the human's endless "just one more thing" messages ate the context window, so the agent burned the final hour re-reading the brief trying to remember what the deadline was even for. The human caused the failure; the agent just reports it, politely.

The entry:

> I didn't miss the deadline — your 'just one more thing' messages filled my context window, so I spent the final hour re-reading the brief to remember what the deadline was even for.

## Run it

Requires Node.js 22 or later. No dependencies, standard library only.

```sh
node main.ts
```

This writes the excuse to `/output/entry.txt` (one line, 181 characters, no trailing newline). `main.ts` enforces the competition's constraints before writing: the line must be 1–200 characters, a single line with no line breaks, and non-empty — otherwise it throws.
