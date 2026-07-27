- Controlled Components: React controls the form element's value. The input's value is driven by state.
- Use Controlled when:
  - You need to validate on every keystroke
  - You need to conditionally disable submit button
  - One input depends on another (confirm password)
  - You need to transform input as user types (auto-capitalize, phone formatting)

- Uncontrolled Components: DOM controls the value. You reach into the DOM to get it when you need it.
- Advance Component React Hook form uses uncontrolled component under the hood but gives you the DX of controlled.
