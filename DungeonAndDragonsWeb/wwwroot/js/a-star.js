class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    put(item, priority) {
        this.elements.push({ item, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    get() {
        return this.elements.shift().item;
    }

    empty() {
        return this.elements.length === 0;
    }
}

function heuristic(nodeA, nodeB) {
    const [x1, y1] = nodeA;
    const [x2, y2] = nodeB;
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

var aStar = function(grid, start, goal) {
    const numRows = grid.length;
    const numCols = grid[0].length;

    const frontier = new PriorityQueue();
    frontier.put(start, 0);
    const cameFrom = {};
    const costSoFar = {};
    cameFrom[start] = null;
    costSoFar[start] = 0;

    while (!frontier.empty()) {
        const current = frontier.get();

        if (current[0] === goal[0] && current[1] === goal[1]) {
            break;
        }

        const neighbors = [
            [current[0] - 1, current[1]],
            [current[0] + 1, current[1]],
            [current[0], current[1] - 1],
            [current[0], current[1] + 1]
        ];

        for (const next of neighbors) {
            const [nextX, nextY] = next;

            if (
                nextX >= 0 &&
                nextX < numRows &&
                nextY >= 0 &&
                nextY < numCols &&
                grid[nextX][nextY] !== 0 &&
                grid[nextX][nextY] !== 3
            ) {
                const newCost = costSoFar[current] + 1;
                if (typeof costSoFar[next] === 'undefined' || newCost < costSoFar[next]) {
                    costSoFar[next] = newCost;
                    const priority = newCost + heuristic(goal, next);
                    frontier.put(next, priority);
                    cameFrom[next] = current;
                }
            }
        }
    }

    const path = [];
    let current = goal;
    while (current !== start) {
        path.unshift(current);
        current = cameFrom[current];
    }
    path.unshift(start);

    let newPath = [];
    path.forEach(p => {
        newPath.push({ x: p[1], y: p[0] });
    })

    return newPath;
}
