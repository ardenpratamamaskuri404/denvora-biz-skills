# Security Policy

`denvora-biz-skills` provides standardized prompts and operational instructions for AI agents. Because skills are instructions followed by large language models, maintaining security, prompt integrity, and user data privacy is our highest priority.

## Supported Versions

Only the current official release receives active security updates and prompt safety patches:

| Version | Supported | Notes |
|:---:|:---:|---|
| `v1.0.x` (Official Release) | ✅ Supported | Official production public release |
| `< v1.0.0` | ❌ Not Supported | Early development and pre-release drafts |

## What This Repository Promises

1. **Instructions Only:** Every skill contains pure Markdown instructions (`SKILL.md`) and reference templates (`references/`). There are zero executable binaries, hidden scripts, network calls, or telemetry hooks.
2. **Zero Unauthorized Actions:** Skills never instruct an AI agent to exfiltrate private credentials, upload local data, or execute destructive shell commands without explicit user confirmation.
3. **Prompt Injection Defense:** Client chats and untrusted inputs are treated strictly as data payloads and quarantined to prevent instruction override attacks.
4. **Mandatory Human Verification:** Every commercial estimate, tax assumption, or legal statement is framed as an uncertified draft requiring human sign-off.

## Safe Usage Guidelines

Before installing or running any skill package:
- Review the `SKILL.md` rules and `references/` question banks.
- Reject any skill that attempts to obscure actions, access directories outside its scope, or transmit unapproved requests to third-party endpoints.
- Store client secrets, database passwords, and API keys securely in your environment—never hardcode them into prompt text.

## Reporting a Vulnerability

If you discover a security flaw, prompt injection vulnerability, or data handling risk, please report it responsibly:

- **Primary Contact:** [Arden Pratama Maskuri](https://github.com/ardenpratamamaskuri404)
- **Email:** [ardenpratamam2008@gmail.com](mailto:ardenpratamam2008@gmail.com)
- **GitHub Security Advisory:** You may also submit a report via [GitHub Private Vulnerability Reporting](https://github.com/ardenpratamamaskuri404/denvora-biz-skills/security/advisories/new) (if enabled).

### What to Include in Your Report:
1. The affected skill folder (e.g., `skills/quote-builder`) or file.
2. A description of the vulnerability (e.g., prompt injection bypass, credential leakage risk).
3. Step-by-step reproduction instructions or a minimal test prompt.
4. Expected impact on users or agent workflows.

Please do not disclose vulnerability details publicly on open GitHub issues until a fix has been verified and released.

## Response SLA

- **Initial Acknowledgement:** Within **48 business hours** of receiving the report.
- **Triage & Status Assessment:** Within **5 business days**.
- **Fix & Advisory Release:** A patched release will typically be issued within **7 to 14 business days**, with attribution given to the reporter in our release notes (unless anonymity is requested).
