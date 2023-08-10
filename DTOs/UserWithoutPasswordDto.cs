using TrashTalk.Models;
namespace TrashTalk.DTOs;

public class UserWithoutPasswordDto
{
    public int UserId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }

    public UserWithoutPasswordDto(User user) 
    {
        UserId = user.UserId;
        FirstName = user.FirstName;
        LastName = user.LastName;
        Email = user. Email;
    } 
}