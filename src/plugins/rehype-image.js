function visit(node, fn) {
  fn(node);
  if (node.children) {
    node.children.forEach(child => visit(child, fn));
  }
}

export default function rehypeImage() {
  return function transformer(tree) {
    visit(tree, node => {
      if (node.type === 'element' && node.tagName === 'img') {
        node.properties = node.properties || {};
        node.properties.class = `
          mx-auto 
          rounded-xl 
          my-6 
          w-full 
          max-w-2xl 
          sm:max-w-[500px] 
          max-[640px]:max-w-[75vw] 
          max-[640px]:mx-[-1rem] 
          max-[640px]:rounded-none
        `;
      }
    });
  };
}
