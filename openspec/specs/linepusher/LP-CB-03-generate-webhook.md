# LP-CB-03 - Generate or Retrieve Notification Link

## Summary

When a user requests a notification link,  
the system provides a dedicated notification endpoint associated with that user.

---

## Trigger

- The user selects the "Get Notification Link" menu action.

---

## Expected Behavior

- If the user does not yet have a notification link:
  - The system creates a new notification link.
- If the user already has a notification link:
  - The system returns the existing link.
- The link is presented to the user in a copyable form.

---

## Invariants

- A user has at most one active notification link.
- Repeated requests do not create additional links.
- Providing the link does not consume notification quota.

---

## Non-Goals

- Defining the link format, token generation, or security mechanism.
- Supporting multiple active links per user.
