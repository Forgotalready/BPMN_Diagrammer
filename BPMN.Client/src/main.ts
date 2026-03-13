import {BPMNElementsRegistry} from './domain/bpmn/BPMNElementsRegistry.ts';
import {CommandProcessor} from "./command_processor/CommandProcessor.ts";
import {AddNodeCommand} from "./command_processor/Command.ts";
import {EditorState} from "./domain/editor/EditorState.ts";
import {NodePosition} from "./domain/editor/NodePosition.ts";
import {ElementsFactoryRegistry} from "./diagram_editor/ElementsFactoryRegistry.ts";

import './style.css';
import './diagram_editor/factories/FactoriesEntryPoint.ts'
import {EventTypes} from "./domain/bpmn/Event.ts";
import {TaskTypes} from "./domain/bpmn/Task.ts";

const main = () => {
        const bpmnRegistry = new BPMNElementsRegistry();
        const editorState = new EditorState();
        const commandProcessor = new CommandProcessor();


        const startEvent = ElementsFactoryRegistry.create("Event", {
                id: 0, parent: null, eventType: EventTypes.Start
        });
        const startEventPosition = new NodePosition(
            200, 300, 200, 200, startEvent
        );
        commandProcessor.executeCommand(new AddNodeCommand(
            bpmnRegistry,
            editorState,
            startEvent,
            startEventPosition
        ));

        const sampleTask = ElementsFactoryRegistry.create("Task", {
                id: 1,
                parent: null,
                textDescription: "Задача 1",
                taskType: TaskTypes.Task
        });
        const sampleTaskPosition = new NodePosition(250, 300, 200, 200, sampleTask);
        commandProcessor.executeCommand(new AddNodeCommand(
            bpmnRegistry,
            editorState,
            sampleTask,
            sampleTaskPosition
        ));


        const endEvent = ElementsFactoryRegistry.create("Event", {
                id: 2, parent: null, eventType: EventTypes.End
        });
        const endEventPosition = new NodePosition(300, 300, 200, 200, endEvent);
        commandProcessor.executeCommand(new AddNodeCommand(
            bpmnRegistry,
            editorState,
            endEvent,
            endEventPosition
        ));

        document.querySelector<HTMLDivElement>("#app")!.innerHTML = bpmnRegistry.toJson() + " " + editorState.toJson();
}

main();
