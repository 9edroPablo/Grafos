class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
            this.adjList.get(vertex1).push(vertex2);
            this.adjList.get(vertex2).push(vertex1);
        }
    }

    dfs(startVertex) {
        const visited = new Set();
        const result = [];

        const dfsUtil = (vertex) => {
            visited.add(vertex);
            result.push(vertex);

            const neighbors = this.adjList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfsUtil(neighbor);
                }
            }
        };

        dfsUtil(startVertex);
        return result;
    }

    findShortestPath(startVertex, endVertex) {
        const visited = new Set();
        const queue = [[startVertex]];
        
        while (queue.length > 0) {
            const path = queue.shift();
            const vertex = path[path.length - 1];
            
            if (vertex === endVertex) {
                return path;
            }
            
            if (!visited.has(vertex)) {
                visited.add(vertex);
                
                const neighbors = this.adjList.get(vertex);
                for (const neighbor of neighbors) {
                    const newPath = [...path, neighbor];
                    queue.push(newPath);
                }
            }
        }
        
        return null; 
    }
}

module.exports = Graph;
