# Security Policy

Skills are instructions that an AI follows, so a malicious or careless skill can cause harm (for example, instructing the AI to leak data or run commands).

## What this repo promises

- Skills contain **instructions only**: no scripts, no executables, no network calls, no hidden instructions.
- Skills never ask the AI to send user data anywhere or to run commands without the user's approval.
- Every change is reviewed before merging.

## Before installing any skill (from anyone)

Read the `SKILL.md` and `references/` files. Be wary of instructions that ask the AI to hide actions, ignore the user, access unrelated files, or contact external servers.

## Reporting a problem

Open a private security advisory on GitHub (if enabled) or contact the maintainer privately. Include which skill and file, and what the risk is. Please don't post exploit details publicly before it is fixed.

## Response

State here the response time you can realistically keep (for example, "within 7 days"). Update this line before launch.
