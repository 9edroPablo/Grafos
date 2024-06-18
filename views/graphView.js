
function addVertex() {
    const vertex = document.getElementById('vertex').value;
    if (vertex) {
        fetch('/add-vertex', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ vertex })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            document.getElementById('vertex').value = '';
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Por favor ingrese el nombre de un vértice.');
    }
}

function addEdge() {
    const vertex1 = document.getElementById('vertex1').value;
    const vertex2 = document.getElementById('vertex2').value;
    if (vertex1 && vertex2) {
        fetch('/add-edge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ vertex1, vertex2 })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            document.getElementById('vertex1').value = '';
            document.getElementById('vertex2').value = '';
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Por favor ingrese ambos vértices.');
    }
}

function performDFS() {
    const startVertex = document.getElementById('startVertexDFS').value;
    if (startVertex) {
        fetch(`/dfs?startVertex=${startVertex}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('dfsResult').innerText = `DFS Result: ${data.result}`;
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Por favor ingrese el vértice inicial para DFS.');
    }
}

function findShortestPath() {
    const startVertex = document.getElementById('startVertex').value;
    const endVertex = document.getElementById('endVertex').value;
    if (startVertex && endVertex) {
        fetch(`/shortest-path?startVertex=${startVertex}&endVertex=${endVertex}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('shortestPathResult').innerText = `Shortest Path: ${data.result}`;
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Por favor ingrese ambos vértices para encontrar el camino más corto.');
    }
}
