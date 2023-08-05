#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TrashTalk.DTOs;
public class LoginUser
{
    [EmailAddress]
    public string Email { get; set; }
    [Required]
    public string Password { get; set; }
}