import Road from '../models/Road.mjs';
import Location from '../models/Location.mjs';

const trafficWeights = {
  clear: 1,
  moderate: 5,
  heavy: 10
};

const dijkstra = (graph, startNode, endNode) => {
  const distances = {};
  const visited = {};
  const previous = {};
  const queue = [];

  for (const node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
    queue.push(node);
  }
  distances[startNode] = 0;

  while (queue.length) {
    const currentNode = queue.reduce((minNode, node) =>
      distances[node] < distances[minNode] ? node : minNode
    );

    if (currentNode === endNode) {
      const path = [];
      let node = endNode;
      while (node) {
        path.unshift(node);
        node = previous[node];
      }
      return { path, totalDistance: distances[endNode] };
    }

    queue.splice(queue.indexOf(currentNode), 1);
    visited[currentNode] = true;

    for (const neighbor in graph[currentNode]) {
      if (!visited[neighbor]) {
        const newDist = distances[currentNode] + graph[currentNode][neighbor];
        if (newDist < distances[neighbor]) {
          distances[neighbor] = newDist;
          previous[neighbor] = currentNode;
        }
      }
    }
  }
};

const buildGraph = async () => {
  const roads = await Road.find();
  const graph = {};
  roads.forEach(road => {
    if (!graph[road.start_location_id]) {
      graph[road.start_location_id] = {};
    }
    graph[road.start_location_id][road.end_location_id] =
      road.distance * trafficWeights[road.traffic_condition];
  });
  return graph;
};

const getShortestPath = async (startLocationId, endLocationId) => {
  const graph = await buildGraph();
  return dijkstra(graph, startLocationId, endLocationId);
};

export default getShortestPath;
