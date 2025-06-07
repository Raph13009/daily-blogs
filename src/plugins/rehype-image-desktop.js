import { visit } from 'unist-util-visit';

export default function rehypeImageDesktop() {
  return function transformer(tree) {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'img') {
        const alt = node.properties?.alt || '';
        const image = {
          ...node,
          properties: {
            ...node.properties,
            class: 'fullwidth'
          }
        };

        const figureNode = {
          type: 'element',
          tagName: 'figure',
          properties: { class: 'image-block' },
          children: [
            image,
            {
              type: 'element',
              tagName: 'figcaption',
              properties: { class: 'caption' },
              children: [{ type: 'text', value: alt }]
            }
          ]
        };

        parent.children.splice(index, 1, figureNode);
      }
    });
  };
} 