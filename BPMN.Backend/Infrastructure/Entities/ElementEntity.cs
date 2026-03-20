using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BPMN.Backend.Infrastructure.Entities;

[Table("elements")]
public class ElementEntity
{
        [Key] [Column("id")] public long Id { get; set; }

        [Column("parent_id")] public long? ParentId { get; set; }

        [ForeignKey("ParentId")] public ElementEntity? Parent { get; set; }

        [Required] [Column("element_type")] public string ElementType { get; set; }
}