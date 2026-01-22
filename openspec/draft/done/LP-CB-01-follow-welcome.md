# LP-CB-01 - Follow & Welcome Message

## Summary

When a user adds LinePusher as a LINE friend,  
the system sends a welcome message that explains the service purpose and guides the user to the next action.

---

## Trigger

- A LINE follow event is received from a user.

---

## Expected Behavior

- The system associates the LINE user with an internal user identity.
- The system sends exactly one welcome message to the user.
- The welcome message:
  - Explains that LinePusher delivers important events to LINE.
  - Indicates that a dedicated notification link is available.
  - Directs the user to use the bottom menu to start using the service.

---

## Invariants

- The welcome message is sent at most once per user.
- Sending the welcome message does not consume notification quota.

---

## Non-Goals

- Defining the exact wording or formatting of the welcome message.
- Defining menu layout, iconography, or visual presentation.
