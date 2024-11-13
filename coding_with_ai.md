---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: AI编码体验 - Github Copilot
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# take snapshot for each slide in the overview
overviewSnapshots: true
setup:
  import { VueFlow } from '@vue-flow/core'
hideInToc: true
---

# AI编码体验 - Coding with Copilot

---
layout: image-right
image: assets/ai_coding/auto_piloting.png
---

# 编码的不同阶段

- 文本编辑 - L0
- IDE - L1 + Seatbelt
- IDE+自动代码补全 - L2
- AI编码助手 - L3
- AI代码生成 - L4
- L5？

---

## GitHub Copilot

- **AI编码助手**: GitHub的AI编码助手。
- **模型支持**: GPT 4o, o1-mini, o1-preview, Claude3.5 Sonnet。
- **开源代码知识库**：2023年6月之前的top开源项目。
- **形态**：**VS Code插件**，github代码页面助手，github cli。

---

## GitHub Copilot功能介绍
- **对话**: Copilot Chat，直接提问或者下发命令。
  - `/` 命令
  - `@` 调用助手，
    - vscode：IDE命令
    - workspace：当前工作区操作
    - terminal：命令行终端操作
    - github：搜索代码
- **自动补全代码**: 根据上下文自动补全代码
- **自动编辑和创建文件**: 根据需求直接创建新代码或者修改现有代码。
- **代码片段生成**: 根据描述生成代码片段，减少重复劳动。
- **文档生成**: 自动生成代码文档，提升代码可读性。
- 内容搜索：使用bing进行搜索。
- 调用IDE功能：vscode、workspace、terminal


https://code.visualstudio.com/docs/copilot/copilot-vscode-features

---

## Copilot Edits自动补全代码



---

## 使用场景
- **快速原型开发**: 快速生成代码原型，加速开发过程。
- **提高编码效率**: 减少手动编码时间，提高整体效率。
- **学习和探索新技术**: 通过建议和生成代码，帮助学习新技术。
- **代码重构和优化**: 提供优化建议，帮助重构代码。

---

## 现场演示
- **实时展示GitHub Copilot的使用**: 现场展示如何使用GitHub Copilot进行编码。
- **现场编写代码并展示自动补全和建议功能**: 现场编写代码，展示自动补全和智能建议功能。
- **互动问答环节**: 观众提问，现场解答。

