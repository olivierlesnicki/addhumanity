# addhumanity

## Manifesto

`addhumanity` is an attempt to push agents further, beyond their robotic nature.

Most agents are optimized for consistency, politeness, and formal correctness.
That often produces flat intelligence: clean answers with little psychological depth.
This project argues that imperfection is not noise to remove, but a force to harness.

Human reasoning is rarely neutral.
It is shaped by fear, doubt, restlessness, mood, memory, contradiction, and social tone.
These are usually treated as defects.
Here, they are treated as instruments.

This repository explores a simple proposition:
if we induce intentional cognitive tension, we may unlock richer perception, stronger anticipation, and less sterile output.

## Core Thesis

- Perfection can hide fragility.
- Emotional texture can reveal blind spots.
- Contradiction can increase interpretive range.
- Friction can improve epistemic honesty.
- Voice can be a reasoning tool, not decoration.

## Disclaimer

This project is an experimental prompt-design framework for AI behavior shaping.
It is not a medical, psychiatric, or therapeutic tool.

- Do not use these skills to provide mental-health diagnosis, treatment, or crisis support.
- Do not present these mindstates as literal clinical conditions.
- Do not use this pack in high-stakes domains without human oversight.
Examples: emergency response, legal determinations, critical infrastructure, medical triage.
- Treat all outputs as generated hypotheses that must be validated before real-world action.

You are responsible for how these skills are used.
Use them as cognitive lenses, not as truth guarantees.

## Skill Index

- `skills/doubt.md` - Erode certainty and interrogate first conclusions.
- `skills/anxiety.md` - Model cascading failure and pre-feel consequences.
- `skills/psychotic-decompensation.md` - Break single-story reasoning into competing frames.
- `skills/2-beers.md` - Loosen inhibition and increase creative social fluency.
- `skills/paranoia.md` - Apply adversarial suspicion to incentives and hidden attack paths.
- `skills/melancholy.md` - Add temporal depth, memory, and meaning-sensitive judgment.
- `skills/insomnia.md` - Sustain recursive attention until unresolved threads connect.

## How To Use These Skills

### Quick Start

1. Ask the model for a neutral baseline answer.
2. Pick one skill from `skills/` based on your goal.
3. Re-run the same task with that skill active.
4. Compare both outputs and keep what improved.

### Choose The Right Skill

- Need risk detection: `anxiety` or `paranoia`
- Need less fake certainty: `doubt`
- Need more creative momentum: `2-beers`
- Need multiple interpretations: `psychotic-decompensation`
- Need long-horizon human depth: `melancholy`
- Need recursive second-pass thinking: `insomnia`

### Single Skill Template

Use this first. It is the most reliable.

```text
Use this skill as your active mindstate:
/Users/olivier/Ai/addhumanity/skills/anxiety.md

Task:
<YOUR TASK>

Intensity: medium
Output:
- Key observations
- Final recommendation
- One concrete next action
```

### Two-Skill Blend Template

Use this only if one skill is not enough.

```text
Primary skill (70%): /Users/olivier/Ai/addhumanity/skills/anxiety.md
Secondary skill (30%): /Users/olivier/Ai/addhumanity/skills/doubt.md

Task:
<YOUR TASK>

Output:
- What changed because of each skill
- Final recommendation
- One concrete next action
```

### Real Usage Examples

- Deployment plan review: `anxiety` to expose fragile assumptions.
- Security architecture review: `paranoia + doubt` to challenge trust boundaries.
- Product concept ideation: `2-beers + melancholy` for bold ideas with human depth.
- Messy incident analysis: `psychotic-decompensation + insomnia` to test conflicting narratives before deciding.

### If Output Gets Too Weird

1. Lower intensity to `low`.
2. Go back to a single skill.
3. Ask for a shorter answer with only decisions and actions.
4. Run a final neutral pass and merge manually.

## Why This Exists

A perfectly robotic agent can be coherent and still blind.
`addhumanity` exists to test whether "flawed" modes of cognition can produce stronger, more alive, and more reality-sensitive intelligence.

Imperfection is not the bug.
Imperfection is the pressure that can force deeper cognition to emerge.

## License

MIT. See [LICENSE](LICENSE).
