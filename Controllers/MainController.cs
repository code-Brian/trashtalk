using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrashTalk.Models;
using TrashTalk.Data;
using TrashTalk.DTOs;

namespace TrashTalk.Controllers;
[ApiController]
[Route("api")]
public class MainController : ControllerBase
{
    private DBContext _context;
    private readonly ILogger<MainController> _logger;

    public MainController(ILogger<MainController> logger, DBContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("test")]
    public async Task<ActionResult<User>> Test()
    {
        User testUser = new User();
        testUser.FirstName = "Johnny";
        testUser.LastName = "Appleseed";
        testUser.Email = "jappleseed@gmail.com";
        testUser.Password = "lolnoway";
        await Task.Delay(1);
        return testUser;
    }

    [HttpPost("login")]
    public async Task<ActionResult<LoginUser>> Login([FromBody]LoginUser loginUser)
    {
        // Dictionary<string, List<string>> errors = new Dictionary<string, List<string>>
        // {
        //     {"Email", new List<string> {"Invalid email/password."}},
        //     {"Password", new List<string>()}
        // };
        LoginUser testLoginUser = new LoginUser();
        await Task.Delay(10);
        testLoginUser.Email = loginUser.Email;
        testLoginUser.Password = loginUser.Password;
        Console.WriteLine(testLoginUser.Email);
        Console.WriteLine(testLoginUser.Password);
        return testLoginUser;
    }

    [HttpPost("register")]
    public async Task<ActionResult<User>> Register([FromBody] User newUser)
    {
        Dictionary<string, List<string>> errors = new Dictionary<string, List<string>>
        {
            {"Email", new List<string> {"Email already registered"}},
            {"Password", new List<string>()}
        };
        if(ModelState.IsValid)
        {
            _context.Add(newUser);
            await _context.SaveChangesAsync();
            // Console.WriteLine(newUser.FirstName);
            return newUser;
        }
        return BadRequest(ModelState);
    }

    [HttpGet("user{userId}")]
    public async Task<ActionResult<UserWithoutPasswordDto>> GetUserById(int userId)
    {
        // User? requestedUser = await _context.Users.FindAsync(id);
        var searchUser = await _context.Users
        .Where(u => u.UserId == userId)
        .FirstOrDefaultAsync();

        if(searchUser == null)
        {
            return null;
        }

        UserWithoutPasswordDto user = new UserWithoutPasswordDto(searchUser);
        return user;
    }
}
