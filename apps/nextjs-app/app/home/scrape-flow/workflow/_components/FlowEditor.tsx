"use client";

import React from "react";
import { Workflow } from "@prisma/client";
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { CreateFlowNode } from "../../_lib/workflow/tasks";
import { TaskType } from "@repo/ts-types/scrape-flow/node";
import NodeComponent from "./nodes/NodeComponent";

const nodeTypes = {
    Node: NodeComponent
}

const snapGrid: [number,number] = [50,50];
const fitViewOptions = {padding: 2}

const FlowEditor = ({ workflow }: { workflow: Workflow }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    CreateFlowNode(TaskType.LAUNCH_BROWSER)
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  return (
    <main className="h-full w-full">
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} 
      nodeTypes={nodeTypes} snapToGrid snapGrid={snapGrid} fitView fitViewOptions={fitViewOptions}>
        <Controls position ="top-right" style={{color: "black"}} fitViewOptions={fitViewOptions}/>
        <Background variant={BackgroundVariant.Dots} gap={12}size={1}/>
      </ReactFlow>
    </main>
  );
};

export default FlowEditor;
