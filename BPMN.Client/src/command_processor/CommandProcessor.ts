import type {Command} from "./Command.ts";

export class CommandProcessor {
        private _commandHistory: Command[] = [];

        executeCommand = (command: Command) => {
                command.execute();
                this._commandHistory.push(command);
        }

        undo = () => {
                this._commandHistory.pop()?.undo();
        }
}