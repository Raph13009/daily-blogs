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
        node.properties.style = 'max-width:400px; margin:2rem auto; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.08); display:block;';
        node.properties.class = 'mx-auto rounded-2xl';
      }
    });
  };
}
