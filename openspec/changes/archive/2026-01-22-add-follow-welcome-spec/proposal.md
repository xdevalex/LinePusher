# Change: Add spec for follow welcome message

## Why
The behavior when a user follows the LinePusher LINE account is currently described in a narrative document (`openspec/draft/LP-CB-01-follow-welcome.md`) but is not expressed as a machine-parseable OpenSpec requirement.
We need a formal requirement so that this core behavior can be validated, reasoned about, and evolved using the OpenSpec workflow.

## What Changes
- Add a new `linepusher` capability requirement for the follow welcome message behavior.
- Capture the trigger, expected behavior, and invariants as a structured requirement with at least one scenario.
- Specify the exact welcome message content, including greeting format, service explanation, and menu navigation instructions.
- Establish a baseline spec that future changes can extend or modify via the OpenSpec change process.

## Impact
- Affected specs: `linepusher`
- Affected code: Any component that handles LINE follow events and sends the initial welcome message.

