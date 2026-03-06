import type {FlowNode} from "./FlowNode";


export interface Container {
        addChild(flowNode: FlowNode): void;

        getChildren(): FlowNode[];
}

