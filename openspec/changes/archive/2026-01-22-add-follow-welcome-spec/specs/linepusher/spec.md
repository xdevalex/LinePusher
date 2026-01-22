## ADDED Requirements

### Requirement: Follow welcome message
When a user adds LinePusher as a LINE friend, the system SHALL send a welcome message that explains the service purpose and guides the user to the next action without consuming notification quota.

The welcome message SHALL contain the following content:
- A greeting that includes the user's nickname: "👋 {Nickname} 您好，歡迎使用 LinePusher"
- An explanation that LinePusher is a push service that delivers system events to LINE in real-time: "這是一個可以把「系統事件」即時送到 LINE 的推播服務。"
- Instructions on how to obtain a dedicated notification link: "只要取得一個專用連結，當你的系統或服務有狀況時，您就會收到通知。"
- Direction to use the bottom menu to get started: "👉 請從下方選單點選 「取得通知連結」 開始使用。"

#### Scenario: New user follows LinePusher
- **WHEN** a LINE follow event is received from a user
- **THEN** the system associates the LINE user with an internal user identity
- **AND** the system sends exactly one welcome message to the user
- **AND** the welcome message contains a greeting with the user's nickname in the format "👋 {Nickname} 您好，歡迎使用 LinePusher"
- **AND** the welcome message explains that LinePusher delivers system events to LINE in real-time
- **AND** the welcome message indicates that a dedicated notification link is available and explains how to obtain it
- **AND** the welcome message directs the user to use the bottom menu item "取得通知連結" to start using the service
- **AND** sending the welcome message does not consume notification quota

