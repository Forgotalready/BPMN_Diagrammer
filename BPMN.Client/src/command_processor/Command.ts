import type {BPMNElementsRegistry} from "../domain/bpmn/BPMNElementsRegistry.ts";
import type {FlowNode} from "../domain/bpmn/FlowNode.ts";
import type {EditorState} from "../domain/editor/EditorState.ts";
import type {NodePosition} from "../domain/editor/NodePosition.ts";

export interface Command {
        execute(): void;

        undo(): void;
}

export class AddNodeCommand implements Command {
        private readonly _registry: BPMNElementsRegistry;
        private readonly _editorState: EditorState;
        private readonly _flowNode: FlowNode;
        private readonly _nodePosition: NodePosition;

        constructor(registry: BPMNElementsRegistry, editorState: EditorState, flowNode: FlowNode, nodePosition: NodePosition) {
                this._registry = registry;
                this._editorState = editorState;
                this._flowNode = flowNode;
                this._nodePosition = nodePosition;
        }

        execute(): void {
                this._registry.addNode(this._flowNode);
                this._editorState.setNodePosition(this._nodePosition);
        }

        undo(): void {
                this._registry.removeNode(this._flowNode);
                this._editorState.removeNodePosition(this._flowNode.id);
        }
}

