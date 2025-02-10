<template>
    <div class="min-h-screen bg-gradient-to-b from-primary to-neutral px-6 py-12 text-white">
      <div class="max-w-6xl mx-auto">
        <!-- Other Sections Here -->
  
        <!-- Organizational Chart -->
        <section class="mb-12">
          <h2 class="text-3xl font-semibold text-center mb-6">Our Organizational Structure</h2>
          <div class="bg-white p-6 rounded-lg shadow-lg text-black">
            <VueFlow :nodes="nodes" :edges="edges" fit-view class="h-[500px] bg-gray-100 rounded-lg" />
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import { VueFlow } from "@vue-flow/core";
  
  export default {
    name: "About",
    components: { VueFlow },
    data() {
      return {
        nodes: [
          { id: "1", label: "CEO", position: { x: 250, y: 50 }, class: "bg-accent text-white p-4 rounded-lg shadow-md" },
          { id: "2", label: "CTO", position: { x: 100, y: 200 }, class: "bg-secondary text-white p-4 rounded-lg shadow-md" },
          { id: "3", label: "COO", position: { x: 400, y: 200 }, class: "bg-secondary text-white p-4 rounded-lg shadow-md" },
          { id: "4", label: "Tech Lead", position: { x: 50, y: 350 }, class: "bg-primary text-white p-4 rounded-lg shadow-md" },
          { id: "5", label: "Operations Lead", position: { x: 450, y: 350 }, class: "bg-primary text-white p-4 rounded-lg shadow-md" }
        ],
        edges: [
          { id: "e1-2", source: "1", target: "2" },
          { id: "e1-3", source: "1", target: "3" },
          { id: "e2-4", source: "2", target: "4" },
          { id: "e3-5", source: "3", target: "5" }
        ]
      };
    }
  };
  </script>
  
  <style>
  .vue-flow__node {
    border-radius: 8px;
    padding: 10px;
    font-weight: bold;
    text-align: center;
  }
  </style>
  