namespace BPMN.Backend.Domain;

public sealed class TaskNode : FlowNode
{
        public string TextDescription { get; }
        public string TaskType { get; }

        public TaskNode(long id, FlowNode? parent, string textDescription, string taskType)
                        : base(id, parent)
        {
                TextDescription = textDescription;
                TaskType = taskType;
        }
}

public static class TaskTypes
{
        public const string Task = "Task";
        public const string Service = "Service";
        public const string User = "User";
}