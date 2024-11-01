import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
    look: 'handDrawn',
    layout: 'elk',
    elk: {
        nodePlacementStrategy: 'SIMPLE',
    },
    mindmap: {
        padding: 20,
        maxNodeWidth: 150
    }
  }
})