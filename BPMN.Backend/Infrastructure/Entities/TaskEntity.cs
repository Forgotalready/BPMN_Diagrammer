using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BPMN.Backend.Infrastructure.Entities;

[Table("tasks")]
public class TaskEntity
{
        [Key]
        [ForeignKey("ElementId")]
        [Column("element_id")]
        public long ElementId { get; set; }

        public ElementEntity Element { get; set; } = null!;

        [Column("text_description")] public string? TextDescription { get; set; }

        [Required] [Column("task_type")] public string TaskType { get; set; } = null!;
}