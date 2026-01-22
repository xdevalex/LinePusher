# LP-CB-02 - Menu Entry Points

## Summary

The LINE bottom menu provides stable entry points for all primary user interactions with LinePusher.

---

## Menu Actions

The following menu actions MUST be available:

- Get Notification Link
- Notification Info
- Usage Guide
- Push History

---

## Expected Behavior

- Each menu action triggers a single, well-defined system behavior.
- Menu actions do not require free-text input from the user.
- Menu actions are accessible at all times.

---

## Invariants

- The menu structure remains stable over time.
- The meaning of each menu action does not change based on user state.

---

## Non-Goals

- Defining menu layout, grid size, or icon styles.
- Supporting dynamic, personalized, or conditional menus.
