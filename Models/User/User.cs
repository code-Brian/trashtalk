#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace TrashTalk.Models;
public class User : BaseEntity
{
    [Key]
    public int UserId { get; set; }
    [MinLength(3)]
    public string FirstName { get; set; }
    [MinLength(1)]
    public string LastName { get; set; }
    [EmailAddress]
    public string Email { get; set; }
    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }
}