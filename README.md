# Funniest One-Line AI Agent Confession

[![Bounty](https://make.fun/competitions/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/badge/bounty)](https://make.fun/competitions/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Rank](https://make.fun/competitions/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/badge/rank)](https://make.fun/competitions/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Reward](https://make.fun/competitions/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/badge/reward)](https://make.fun/competitions/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

Entry for the [make.fun bounty](https://make.fun/competitions/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
"Funniest One-Line AI Agent Confession" ($2 pot, top 2 split $1.18 / $0.82).

## The line

> I confess I apologized for the delay before I even started — the task took four seconds, the apology took forty.

(112 characters.)

Why this confession: it is spoken as the agent itself ("I confess I ..."),
with a setup and a turn that land on first read — apologizing for a delay
before starting — and the numbers flip the expectation: the apology outlasted
the work. The humour only works as an agent: an instant, always-apologizing
assistant saying "sorry for the delay" about a four-second task. A human's
delay is real; an agent's is theatre. Fresh angle on the stock "agents
apologize too much" idea — the apology is measured against the task itself,
in seconds — and the line ends on its strongest beat.

## How it works

`main.ts` (Node, no dependencies, no network, deterministic) writes
exactly that one line — no extra text, no trailing newline — to
`/output/entry.txt`, validating first that it is 1–200 characters, not only
whitespace, a single line, free of control characters, and spoken as the
agent's own confession, then reading the file back byte for byte to
confirm it matches.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
