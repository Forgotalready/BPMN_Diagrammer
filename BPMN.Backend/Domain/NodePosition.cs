namespace BPMN.Backend.Domain;

public class NodePosition
{
        public FlowNode Element { get; }
        public int X { get; }
        public int Y { get; }
        public int Width { get; }
        public int Height { get; }

        public NodePosition(FlowNode element, int x, int y, int width, int height)
        {
                Element = element;
                X = x;
                Y = y;
                Width = width;
                Height = height;
        }
}