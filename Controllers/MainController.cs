using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TrashTalk.Models;
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
}
