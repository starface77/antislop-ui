# Pure UI ⚡

> **Zero Border. Zero Shadow. Pure Tactile Surface.**  
> An anti-slop React component library crafted for the AI era.

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-black.svg)](https://www.typescriptlang.org/)
[![Zero Runtime Overhead](https://img.shields.io/badge/Overhead-0kb-black.svg)]()

---

## 💎 Philosophy

99% of modern component libraries suffer from **Wireframe Bloat**:
* Harsh 1px borders wrapping every container (`border: 1px solid #e5e7eb`).
* Muddy, sluggish drop-shadows.
* No native primitives for AI streaming, reasoning foldouts, or tool executions.

**Pure UI** establishes visual hierarchy purely through:
1. **Layered Surface Contrast:** `App` → `Surface` → `Soft` → `Hover`.
2. **macOS Spring Physics:** Physical tactile feedback (`scale(0.96)`) on every click.
3. **AI-Native First:** First-class components for LLM chats, tool execution pills, model selectors, and diff inspectors.

---

## 📦 Quick Start

### Install via CLI (shadcn-style)

```bash
npx pure-ui add button dialog agent-bubble model-selector
```

Or install all core components:

```bash
npm install @pure-ui/core
```

---

## 🎨 Component Suite

### 1. Tactile Buttons & Inputs
```tsx
import { Button, IconButton } from '@pure-ui/core';

<Button variant="primary" size="md">Deploy Now</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost">Settings</Button>
```

### 2. Segmented Control (macOS Pill)
```tsx
import { SegmentedControl } from '@pure-ui/core';

<SegmentedControl
  options={[
    { value: 'code', label: 'Code' },
    { value: 'vibe', label: 'Vibe Mode', badge: 'Active' },
    { value: 'agents', label: 'Multi-Agent' },
  ]}
  value={mode}
  onChange={setMode}
/>
```

### 3. AI Agent Turn with Collapsible Reasoning
```tsx
import { AgentBubble, ToolPill } from '@pure-ui/core';

<AgentBubble
  role="assistant"
  name="Claude 3.7 Sonnet"
  reasoning="Audited design tokens. 0 borders, 0 box-shadows detected."
  reasoningDuration="0.28s"
  tools={<ToolPill name="verify_tokens" status="ok" />}
  content="Workspace refactored cleanly to Pure UI standard."
/>
```

### 4. Zero-Shadow Centered Dialog
```tsx
import { Dialog, Button } from '@pure-ui/core';

<Dialog
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Deploy to Edge"
  description="Your bundle is compiled with zero runtime overhead."
  footer={<Button variant="primary" onClick={deploy}>Confirm</Button>}
>
  <p>42 edge locations ready.</p>
</Dialog>
```

---

## 🛠 Design Tokens

Pure UI comes with built-in Light, Dark, and Midnight palettes:

```css
:root {
  --p-app: #f7f7f9;
  --p-surface: #ffffff;
  --p-soft: #efeff2;
  --p-t-900: #121215;
  --p-border: none;
  --p-shadow: none;
}

[data-theme='dark'] {
  --p-app: #0d0d10;
  --p-surface: #141418;
  --p-soft: #1d1d23;
  --p-t-900: #fafafc;
}

[data-theme='midnight'] {
  --p-app: #050507;
  --p-surface: #0b0b0f;
  --p-soft: #121217;
  --p-t-900: #ffffff;
}
```

---

## 📄 License

MIT © 2026 Pure UI Contributors.
