import type {FlowNode} from "./FlowNode.ts";


export class Flow {
        private _id: number;
        private _sourceElement: FlowNode;
        private _targetElement: FlowNode;
        private _conditionExp: string;
        private _isDefault: boolean;

        public get id() {
                return this._id;
        }

        public get sourceElement() {
                return this._sourceElement;
        }

        public get targetElement() {
                return this._targetElement;
        }

        public get conditionExp() {
                return this._conditionExp;
        }

        public get isDefault() {
                return this._isDefault;
        }

        constructor(id: number, sourceElement: FlowNode, targetElement: FlowNode, conditionExp: string, isDefault: boolean = true) {
                this._id = id;
                this._sourceElement = sourceElement;
                this._targetElement = targetElement;
                this._conditionExp = conditionExp;
                this._isDefault = isDefault;
        }
}
