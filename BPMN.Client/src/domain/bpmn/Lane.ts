import {FlowNode} from "./FlowNode.ts";
import {FlowNodeContainer} from "./FlowNodeContainer.ts";


export class Lane extends FlowNodeContainer {
        private _name: string;

        public get name() {
                return this._name;
        }

        constructor(id: number, parent: FlowNode | null = null, name: string) {
                super(
                    id, parent
                );

                this._name = name;
        }
}

