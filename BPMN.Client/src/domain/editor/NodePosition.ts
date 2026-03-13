import type {FlowNode} from "../bpmn/FlowNode.ts";

export class NodePosition {
        private readonly _x: number;
        private readonly _y: number;
        private readonly _width: number;
        private readonly _height: number;

        private readonly _bpmnModelElement: FlowNode;

        public get x() {
                return this._x;
        }

        public get y() {
                return this._y;
        }

        public get width() {
                return this._width;
        }

        public get height() {
                return this._height;
        }

        public get bpmnModelElement() {
                return this._bpmnModelElement;
        }

        constructor(x: number, y: number, width: number, height: number, bpmnModelElement: FlowNode) {
                this._x = x;
                this._y = y;
                this._width = width;
                this._height = height;
                this._bpmnModelElement = bpmnModelElement;
        }
}