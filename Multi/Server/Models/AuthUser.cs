using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Multi.Server.Models
{
    public class AuthUser
    {
        public string username { get; set; }
        public string password { get; set; }
        public userActions userAction { get; set; }
    }
}

public enum userActions
{
    NONE = 0,
    LOGIN = 1,
    LOGOUT = 2
}