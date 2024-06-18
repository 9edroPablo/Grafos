const express = require('express');
const router = express.Router();
const Graph = require('../Models/graph');

const graph = new Graph();

router.post('/add-vertex', (req, res) => {
    const { vertex } = req.body;
    graph.addVertex(vertex);
    res.json({ message: `Vértice ${vertex} agregado.` });
});

router.post('/add-edge', (req, res) => {
    const { vertex1, vertex2 } = req.body;
    graph.addEdge(vertex1, vertex2);
    res.json({ message: `Arista agregada entre ${vertex1} y ${vertex2}.` });
});

router.get('/dfs', (req, res) => {
    const { startVertex } = req.query;
    const result = graph.dfs(startVertex);
    res.json({ result });
});

router.get('/shortest-path', (req, res) => {
    const { startVertex, endVertex } = req.query;
    const result = graph.findShortestPath(startVertex, endVertex);
    res.json({ result });
});

module.exports = router;
