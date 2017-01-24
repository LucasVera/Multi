using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Multi.Server.Models
{
    public class UserInfo
    {
        public string username { get; set; }
        public string email { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public bool isAdmin { get; set; }
        public string country { get; set; }
        public string city { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
        public string mobile { get; set; }

        public UserInfo()
        {
            username = string.Empty;
            email = string.Empty;
            firstName = string.Empty;
            lastName = string.Empty;
            isAdmin = false;
            country = string.Empty;
            city = string.Empty;
            address = string.Empty;
            phone = string.Empty;
            mobile = string.Empty;
        }

    }
}