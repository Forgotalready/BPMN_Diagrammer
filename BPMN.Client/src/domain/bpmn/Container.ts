import type {FlowNode} from "./FlowNode.ts";


export interface Container {
        addChild(flowNode: FlowNode): void;

        getChildren(): FlowNode[];
}

