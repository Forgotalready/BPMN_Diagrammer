import type {NodePosition} from "./NodePosition.ts";

export class EditorState {
        private _elementsPositions = new Map<number, NodePosition>();

        setNodePosition = (nodePosition: NodePosition): void => {
                this._elementsPositions.set(nodePosition.bpmnModelElement.id, nodePosition);
        };

        removeNodePosition = (id: number): void  => {
                this._elementsPositions.delete(id);
        }

        toJson = (): string => {
                return JSON.stringify(this);
        };

        toJSON() {
                return {
                        positions: Array.from(this._elementsPositions.entries()),

                        metadata: {
                                count: this._elementsPositions.size,
                        }
                };
        }
}