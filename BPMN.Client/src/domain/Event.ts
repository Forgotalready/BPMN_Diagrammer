import {FlowNode} from "./FlowNode";


export class Event extends FlowNode {
        private _eventType: string;

        public get eventType() {
                return this._eventType;
        }

        constructor(id: number, x: number, y: number, width: number, height: number, parent: FlowNode | null = null,
                    eventType: string
        ) {
                super(
                    id,
                    x, y,
                    width, height,
                    parent
                );

                this._eventType = eventType;
        }
}

export class EventTypes {
        public static readonly Start: string = "Start";
        public static readonly Intermediate: string = "Intermediate";
        public static readonly End: string = "End";
}
