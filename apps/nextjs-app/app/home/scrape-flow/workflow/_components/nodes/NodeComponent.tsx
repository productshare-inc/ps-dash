import { NodeProps } from '@xyflow/react'
import React, { memo } from 'react'
import NodeCard from './NodeCard';
import NodeHeader from './NodeHeader';
import { AppNodeData } from '@repo/ts-types/scrape-flow/node';
import NodeInputs from './NodeInputs';
import NodeInput from './NodeInput';
import NodeOutputs from './NodeOutputs';
import NodeOutput from './NodeOutput';
import { TaskRegistry } from '../../../_lib/workflow/registry';

const NodeComponent = memo((props: NodeProps) => {
    const nodeData = props.data as AppNodeData;
    const task = TaskRegistry[nodeData.type];
  return (
    <NodeCard nodeId={props.id} isSelected={!!props.selected}>
        <NodeHeader taskType={nodeData.type} nodeId={props.id}/>
        <NodeInputs>
            {task.inputs.map((input)=>(
                <NodeInput key={input.name} input={input} nodeId={props.id}/>
            ))}
        </NodeInputs>
        <NodeOutputs>
            {task.outputs.map((output)=>(
                <NodeOutput key={output.name} output={output}/>
            ))}
        </NodeOutputs>
    </NodeCard>
  )
});

export default NodeComponent;
NodeComponent.displayName = 'NodeComponent';