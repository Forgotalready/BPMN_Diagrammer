export abstract class FlowNode {
        protected _id: number;
        protected _x: number;
        protected _y: number;
        protected _width: number;
        protected _height: number;
        protected _parent: FlowNode | null;

        public get id() {
                return this._id;
        }

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

        public get parent() {
                return this._parent;
        }

        protected constructor(id: number, x: number, y: number, width: number, height: number, parent: FlowNode | null = null) {
                this._id = id;
                this._x = x;
                this._y = y;
                this._width = width;
                this._height = height;
                this._parent = parent;
        }
}