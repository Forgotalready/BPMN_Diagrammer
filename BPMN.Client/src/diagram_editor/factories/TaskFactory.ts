import {RegisterFactory} from "../ElementsFactoryRegistry.ts";
import {Task} from "../../domain/bpmn/Task.ts";

@RegisterFactory("Task")
export class TaskFactory {
        create(props: any) {
                return new Task(props.id, props.parent, props.textDescription, props.taskType);
        }
}