# Milestone Progress Beads

---


# Milestone Progress Bar

[![npm version][npm-image]][npm-url]
[![npm downloads][npm-downloads-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]

A **React** component for visualizing milestone or status-based progress as a **color-coded gradient bar**. Ideal for showing how many tasks are **completed**, **in-progress**, **incomplete**, or any other category you define. Written in **TypeScript** and fully tested with **Jest** + **React Testing Library**.

---

## ✨ Features
- **Color-coded gradient** that segments based on the proportion of each status.
- **Optional counts** displayed at segment midpoints.
- **Highly customizable** with props for height, colors, and layout.
- **TypeScript** definitions included.
- Works seamlessly with **styled-components** or your own CSS approach.

---

## 🚀 Installation

```bash
npm install my-milestone-progress-bar
```

Or with yarn:

```bash
yarn add my-milestone-progress-bar
```

---

## 🧩 Usage

Here’s a quick example of how to import and use the **MilestoneProgressBar** in your React app:

```tsx
import React from 'react';
import { MilestoneProgressBar } from 'my-milestone-progress-bar';

const ExampleComponent = () => {
  const statuses = [
    { count: 5, color: '#4CAF50', label: 'Completed' },
    { count: 3, color: '#FFC107', label: 'In Progress' },
    { count: 2, color: '#F44336', label: 'Incomplete' },
  ];

  return (
    <div style={{ width: '300px' }}>
      <h2>Project Status</h2>
      <MilestoneProgressBar 
        statuses={statuses}
        height="6px"
        showCounts={true}
      />
    </div>
  );
};

export default ExampleComponent;
```

---

## ⚙️ Props

| Prop             | Type                          | Default    | Description                                                                                      |
|------------------|-------------------------------|------------|--------------------------------------------------------------------------------------------------|
| **`statuses`**   | `IMilestoneStatus[]`         | `[]`       | Array of milestone status objects. Each contains `count` (number) and `color` (string) fields.   |
| **`height`**     | `string`                     | `"4px"`    | Height of the gradient bar.                                                                      |
| **`showCounts`** | `boolean`                    | `true`     | Whether to display the numeric counts above each segment.                                        |
| **`style`**      | `React.CSSProperties`        | `undefined`| Optional styles applied to the parent container.                                                 |
| **`className`**  | `string`                     | `undefined`| Optional class name for styling overrides.                                                       |

The **`IMilestoneStatus`** interface is defined as:

```ts
interface IMilestoneStatus {
  count: number;
  color: string;
  label?: string; // optional text label
}
```

---

## 🧪 Testing

This package is tested with **Jest** + **React Testing Library**. To run tests locally:

```bash
npm test
```

---

## 🛠 Development

1. **Clone** this repository.  
2. Run `npm install`.  
3. Run `npm run build` to compile the TypeScript into `dist/`.  
4. Run `npm test` to ensure all tests pass.

---

## 📄 License

[MIT](LICENSE)

Feel free to use, modify, and distribute this package as per the license terms.

---

[npm-image]: https://img.shields.io/npm/v/my-milestone-progress-bar.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/my-milestone-progress-bar

[npm-downloads-image]: https://img.shields.io/npm/dm/my-milestone-progress-bar.svg?style=flat-square

[build-image]: https://img.shields.io/github/actions/workflow/status/yourusername/my-milestone-progress-bar/ci.yml?style=flat-square
[build-url]: https://github.com/yourusername/my-milestone-progress-bar/actions

[coverage-image]: https://img.shields.io/coveralls/github/yourusername/my-milestone-progress-bar?style=flat-square
[coverage-url]: https://coveralls.io/github/yourusername/my-milestone-progress-bar

[license-image]: https://img.shields.io/badge/License-MIT-green.svg?style=flat-square
[license-url]: https://github.com/yourusername/my-milestone-progress-bar/blob/master/LICENSE

---

### **How to Customize Badges**

1. **Replace `my-milestone-progress-bar`** with your **actual package name**.
2. **Update** the GitHub username (`yourusername`) and repository name so the build and coverage badges point to your repo.
3. If you use a different license, change the **license** badge/link accordingly (e.g., `Apache-2.0`, `GPL-3.0`, etc.).

With this **fancy** README, you’ll have a **professional** and **inviting** landing page for your npm package.
