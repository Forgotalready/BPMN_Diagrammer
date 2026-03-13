export abstract class FlowNode {
        protected _id: number;
        protected _parent: FlowNode | null;

        public get id() {
                return this._id;
        }


        public get parent() {
                return this._parent;
        }

        protected constructor(id: number, parent: FlowNode | null = null) {
                this._id = id;
                this._parent = parent;
        }
}