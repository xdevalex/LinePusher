# LP-CB-05 - Notification Usage Status

## Summary

The user can query current notification usage and remaining quota via the LINE menu.

---

## Trigger

- The user selects the "Notification Info" menu action.

---

## Expected Behavior

- The system responds with:
  - The current plan name.
  - The number of notifications used in the current period.
  - The remaining number of notifications.
- The response indicates when the quota will reset.

---

## Invariants

- Usage status reflects only delivered notifications.
- Querying usage status does not consume notification quota.

---

## Non-Goals

- Displaying historical usage charts or trends.
- Exposing billing details or payment information.
