var graph = {
    nodes: [{
            name: "cena",
            age: "23"
        },
        {
            name: "john",
            age: "45"
        },
        {
            name: "reta",
            age: "13"
        },
        {
            name: "ersa",
            age: "23"
        },
        {
            name: "sara",
            age: "41"
        },
        {
            name: "teri",
            age: "2"
        },
        {
            name: "ghul",
            age: "14"
        },
    ]
};

var canvas = d3.select("#network"),
    width = canvas.attr("width"),
    r = 5,
    height = canvas.attr("height"),
    ctx = canvas.node().getContext("2d");
simulation = d3.forceSimulation()
    .force("x", d3.forceX(width / 2))
    .force("y", d3.forceY(height / 2))
    .force("collide", d3.forceCollide(r + 1))
    .force("charge", d3.forceManyBody()
        .strength(-100))
    .on("tick", update);

simulation.nodes(graph.nodes);

function update() {
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    graph.nodes.forEach(drawNode);
    ctx.fill();
}

/*
graph.nodes.forEach(function(d){
  d.x = Math.random() *width;
  d.y = Math.random() *height;
}) */

function drawNode(d) {
    ctx.moveTo(d.x, d.y);
    ctx.arc(d.x, d.y, r, 0, 2 * Math.PI);
}
