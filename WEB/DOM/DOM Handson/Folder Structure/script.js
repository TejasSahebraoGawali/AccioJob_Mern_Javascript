const fileSystem = {
    name: "root",
    type: "folder",
    children: [
        {
            name: "folder 1",
            type: "folder",
            children: [
                { name: "file 1.1", type: "file" },
                { name: "file 1.2", type: "file" },
            ]
        },
        {
            name: "folder 2",
            type: "folder",
            children: [
                { name: "file 2.1", type: "file" },
                {
                    name: "sub folder",
                    type: "folder",
                    children: [
                        { name: "sub file 1", type: "file" }
                    ]
                }
            ]
        }
    ]
};


const container = document.getElementById("file-tree");

function createNode(node) {
    const li = document.createElement("li");

    li.textContent = node.type === "folder" ? "📁 " + node.name : "📄 " + node.name;

    if (node.type === "folder") {
        const ul = document.createElement("ul");
        ul.style.display = "none";

        li.addEventListener("click", (e) => {
            e.stopPropagation();
            ul.style.display = ul.style.display === "none" ? "block" : "none";
        });

        node.children.forEach(child => {
            ul.appendChild(createNode(child));
        });

        li.appendChild(ul);
    }
    return li;
}

container.appendChild(createNode(fileSystem));
