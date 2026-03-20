using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BPMN.Backend.Infrastructure.Entities;

[Table("diagram_elements")]
public class DiagramElementEntity
{
        [Key]
        [ForeignKey("Element")]
        [Column("element_id")]
        public long ElementId { get; set; }

        public ElementEntity Element { get; set; } = null!;

        [Column("x")] public int X { get; set; }
        [Column("y")] public int Y { get; set; }
        [Column("width")] public int Width { get; set; }
        [Column("height")] public int Height { get; set; }
}