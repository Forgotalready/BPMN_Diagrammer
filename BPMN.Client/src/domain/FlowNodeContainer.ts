import {FlowNode} from "./FlowNode.ts";
import type {Container} from "./Container.ts";

export abstract class FlowNodeContainer extends FlowNode implements Container {
        private _children: FlowNode[] = [];

        addChild(flowNode: FlowNode): void {
                this._children.push(flowNode);
        }

        getChildren(): FlowNode[] {
                return this._children;
        }
}