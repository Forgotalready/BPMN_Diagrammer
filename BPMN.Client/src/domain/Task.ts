import {FlowNode} from "./FlowNode";
import {FlowNodeContainer} from "./FlowNodeContainer.ts";


export class Task extends FlowNodeContainer{
        private _textDescription: string;
        private _taskType: string;

        public get textDescription() {
                return this._textDescription;
        }

        public get taskType() {
                return this._taskType;
        }

        constructor(id: number, x: number, y: number, width: number, height: number, parent: FlowNode | null = null,
                    textDescription: string, taskType: string
        ) {
                super(
                    id,
                    x, y,
                    width, height,
                    parent
                );

                this._textDescription = textDescription;
                this._taskType = taskType;
        }
}

export class TaskTypes {
        public static readonly Task: string = "Task";
        public static readonly Service: string = "Service";
        public static readonly User: string = "User";
}
