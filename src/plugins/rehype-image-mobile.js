import { visit } from 'unist-util-visit';

export default function rehypeImageMobile() {
  return function transformer(tree) {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'img') {
        const alt = node.properties?.alt || '';
        const image = {
          ...node,
          properties: {
            ...node.properties,
            class: 'w-full object-cover sm:rounded-lg mt-8' // plus d’espace avant
          }
        };

        const figureNode = {
          type: 'element',
          tagName: 'div',
          properties: { 
            class: 'w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] sm:static sm:ml-0 sm:mr-0 sm:w-full sm:max-w-2xl sm:px-0'
          },
          children: [
            image,
            {
              type: 'element',
              tagName: 'p',
              properties: { class: 'text-sm text-[#a09892] mt-3 mb-12 px-8 sm:px-0 text-center' },
              children: [{ type: 'text', value: alt }]
            }
          ]
        };

        parent.children.splice(index, 1, figureNode);
      }
    });
  };
}
