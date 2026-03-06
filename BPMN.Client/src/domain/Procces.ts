import {FlowNode} from "./FlowNode";
import {FlowNodeContainer} from "./FlowNodeContainer.ts";


export class Procces extends FlowNodeContainer{
        private _name: string;

        public get name() {
                return this._name;
        }

        constructor(id: number, x: number, y: number, width: number, height: number, parent: FlowNode | null = null, name: string) {
                super(
                    id,
                    x, y,
                    width, height,
                    parent
                );

                this._name = name;
        }
}

