window.addEventListener('load', () => {
    displayTree(DATA);
});

function displayTree(data, root = null, indent = 0, parentId) {
    if (!root) {
        root = data.root;
    }

    if (!(root in data)) return;

    node = data[root];

    addNodeToDOM(parentId, node);

    for (const child of node.children) {
        displayTree(data, child, indent + 1, root);
    }
}

function addNodeToDOM(parentId, node) {
    const newElement = document.createElement('div');
    newElement.id = node.path;
    newElement.innerText = `${node.path} - [${node.lines}]`;
    newElement.classList.add('node');

    if (node.type === 'DIR') {
        newElement.classList.add('collapsible');
    }

    newElement.addEventListener('click', e => handleCollapseItem(e, node));

    document.getElementById(parentId ?? 'root').appendChild(newElement);
}

function handleCollapseItem(e, node) {
    e.stopPropagation();
    e.preventDefault();

    if (node.type === 'FILE') return;

    const target = e.target;
    const collapsed = target.classList.contains('collapsed');
    target.classList.toggle('collapsed');

    for (const child of target.children) {
        collapsed ? child.classList.remove('hidden') : child.classList.add('hidden');
    }
}
