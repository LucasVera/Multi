using Multi.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Security;

namespace Multi.Server.Controllers
{
    public class AuthController : ApiController
    {
        // GET api/<controller>
        public IHttpActionResult Get()
        {
            try
            {
                var authTicket = getAuthTicketFromCookie();
                if (authTicket != null && authTicket.Name != "" && authTicket.UserData != "")
                {
                    // get user from DB using name and userData of ticket (which are username and token)
                    // var user = getUser()
                    // if (user != null) --> return Ok(user)
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError, new { customMsg = "Error del servidor.", error = ex.Message} );
            }

            return Content(HttpStatusCode.BadRequest, new { });
        }

        /*
        // GET api/<controller>/5
        public string Get()
        {
            return "value";
        }
        */

        // POST api/<controller>
        public IHttpActionResult Post([FromBody]AuthUser user)
        {
            try
            {
                switch (user.userAction)
                {
                    // ................................... LOGIN .................................................................................
                    case userActions.LOGIN:
                        if (true)
                        {
                            // authenticate user in DB...
                            FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(1, user.username, DateTime.Now, DateTime.Now.AddMonths(1), true, "app-secret-goes-here");
                            string encryptedTicket = FormsAuthentication.Encrypt(ticket);
                            HttpCookie cookie = new HttpCookie(FormsAuthentication.FormsCookieName, encryptedTicket);
                            HttpContext.Current.Response.Cookies.Add(cookie);
                            return Ok(user);
                        }
                        else
                        {
                            return Content(HttpStatusCode.BadRequest, new { customMsg = "No se pudo autenticar en el servidor. Compruebe sus datos e intente de nuevo." });
                        }
                        break;
                    // ...........................................................................................................................


                    // ................................... LOGOUT ................................................................................
                    case userActions.LOGOUT:
                        break;
                    // ...........................................................................................................................
                    default:
                        return Content(HttpStatusCode.BadRequest, new { customMsg = "No se reconoce la acción." });
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError, new { });
            }
            return Content(HttpStatusCode.NotImplemented, new { customMsg = "No implementado." });
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }



        public static FormsAuthenticationTicket getAuthTicketFromCookie()
        {
            FormsAuthenticationTicket ticket = null;
            HttpCookie cookie = HttpContext.Current.Request.Cookies[FormsAuthentication.FormsCookieName];
            if (cookie != null)
            {
                ticket = FormsAuthentication.Decrypt(cookie.Value);
            }
            return ticket;
        }


    }
}